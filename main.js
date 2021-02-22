
fetch('data.json')
.then(response => {
  return response.json();
})
.then(data => {
  console.log(data);
	// render HTML here
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    if (urlParams.has('project')) {
        if (urlParams.get('project')=='qc-proj'){
            renderProjectPage(data.projects[0]);
        }
        else if (urlParams.get('project')=='sql-proj'){
            renderProjectPage(data.projects[1]);
        }
    }
    else {
        renderMainPage(data);
    }
    

});


function renderMainPage(data){
    document.querySelector('.container').innerHTML = 
        `${renderNavbar('main', Object.keys(data))}
        ${renderAbout(data.about)}
        ${renderNews(data.news)}
        ${renderProjects(data.projects)}`;
};

function renderNavbar(page){
    if (page == 'main') {return `
    <nav>
        <ul class="flex-container">
            <li class = "flex-item"><a href="#about">About</a> </li>
            <li class = "flex-item"><a href="#news">News</a> </li>
            <li class = "flex-item"><a href="#projects">Projects</a> </li>
        </ul>
    </nav>
    `;}
    else if (page == 'project') {return `
        <nav>
            <ul class="flex-container">
                <li class = "flex-item"><a href="index.html"><i class="fas fa-home"></i>Back to Main</a></li>
            </ul>
        </nav>
        `; 
    }
    else{

    }
        
};

function renderAbout(about){
    return `
    <div class = "row">
            <div class = "col-6">
                <section id="about" >
                    <b><h1 class = "title">${about.name}</h1></b>
                    <img class = "image" src=${about.photo} alt="profile picture" height="250">
                    <p><b>${about.title}</b>
                    <br>${about.college}
                    <br>${about.classyear}
                    <br> <i class="fas fa-envelope-square"></i>${about.email}
                    <br> <a href=${about.githublink} target="_blank"><i class="fab fa-github"></i> GitHub</a> | <a href=${about.linkedinlink} target="_blank"><i class="fab fa-linkedin"></i> LinkedIn</a></p>
            </div>
            <div class = "col-6">
                <br>
                <p>${about.summary}</p>
            </section>
            </div>
        </div>
    `;
};

function renderNews(news){
    return `
    <section id="news" >
        <b><h1 class = "title">News</h1></b>
        <div class = "row">
            <div class = "col-8">
                <p>
                    ${renderNewsTitles(news)}
                </p>
            </div>
            <div class = "col-4">
                <p>
                    ${renderNewsDates(news)}
                </p>
            </div>
        </div>
    </section>
    `;
};

function renderNewsTitles(news){
    return news.map(d=>`
        ${d.title}
        <br>
    `).join('');
};

function renderNewsDates(news){
    return news.map(d=>`
        ${d.date}
        <br>
    `).join('');
};

function renderProjects(projects){
    return `
    <section id="projects" >
        <b><h1 class = "title">Projects</h1></b>
        <p>
            ${renderProjectItems(projects)}
        </p>
    </section>`;
};

function renderProjectItems(projects){
    return projects.map(d=>`
            <a href="?project=${d.id}"><b>${d.title}</b></a>
            <br><br>
            <div class = "tag-flex-container tags">
                ${renderTags(d)}
            </div>
            <br>${d.shortdescription}
            <br><br>
            <img src=${d.frontimage} width="300">
            <br><br>
	`).join('');
};

function renderTags(p){
    taglist = []
    for(x=0;x<p.tags.length;x++){
        taglist.push(`<div class = ${p.tagclasses[x]}>${p.tags[x]}</div>`)
    }
    return taglist.join('')
};

function renderProjectPage(project){
    document.querySelector('.container').innerHTML = 
    `${renderNavbar('project')}
    ${renderProjectDetails(project)}
    `;
};

function renderProjectDetails(p){
    return `<body>
        <h1><b>${p.title}</b></h1>
        <div class = "row">
            <div class = "col-9">
                <br><br>
                <img src=${p.images[0]} width="600">
                <br>
                <img src=${p.images[1]} height="200">
                <img src=${p.images[2]} height="200">
                <img src=${p.images[3]} height="200">
            </div>
            <div class = "col-3">
                <p>
                    ${p.description}
                </p>
                <br>
            </div>
        </div>
    </body>`;
};




