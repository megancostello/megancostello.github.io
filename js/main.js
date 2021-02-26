
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
        addInteractions(data);
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
    console.log('news is ', news);
    return `
    <section id="news" >
        <b><h1 class = "title">News</h1></b>
        <div class="search">
            <input type="search" name='news' placeholder="Search News...">
        </div>
        <div class = "row">
                <div class = "col-8">
                    <p>
                        <div class = "news-titles">
                            ${renderNewsTitles(news.slice(0,5))}
                        </div>
                    </p>
                </div>
                <div class = "col-4">
                    <p>
                        <div class = "news-dates">
                            ${renderNewsDates(news.slice(0,5))}
                        </div>
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
        <div class="filter">
            <label>
                <input type="radio" name="filter" value="All" checked> All
            </label>
            <label>
                <input type="radio" name="filter" value="CS"> CS
            </label>
            <label>
                <input type="radio" name="filter" value="Python"> Python
            </label>
            <label>
                <input type="radio" name="filter" value="SQL"> SQL
            </label>
            <label>
                <input type="radio" name="filter" value="Econ"> Econ
            </label>
        </div>
        <p>
            <div class = "project-list">
                ${renderProjectItems(projects)}
            </div>
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

function addInteractions(data){
    document.querySelector('.search input[name="news"]').addEventListener('input', (event)=>{
        const search = document.querySelector('.search input[name="news"]').value;
        console.log('search is ',search);
        const result = data.news.filter(n => n.title.toLowerCase().includes(String(search).toLowerCase()));
        console.log('result is ', result);
        document.querySelector('.news-titles').innerHTML = renderNewsTitles(result);
        document.querySelector('.news-dates').innerHTML  = renderNewsDates(result);
    });

    let buttons = document.querySelectorAll('.filter input[name="filter"]');

    buttons.forEach(cond=>cond.addEventListener('change', function(event){
        let projs = null;
        if (cond.value == 'All') {
            projs = data.projects
        }
        else {
            projs = data.projects.filter(p => p.tags.includes(cond.value));
        }
        console.log('projs are ', projs);
        document.querySelector('.project-list').innerHTML = renderProjectItems(projs);
    }));
};


