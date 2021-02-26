
export default function Projects(projects){
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
                ${projectItems(projects)}
            </div>
        </p>
    </section>`;

}

export function projectItems(projects){
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
}

export function renderTags(p){
    let taglist = []
    for(let x=0;x<p.tags.length;x++){
        taglist.push(`<div class = ${p.tagclasses[x]}>${p.tags[x]}</div>`)
    }
    return taglist.join('')
}

export function handleProjectFilter(data){
	let buttons = document.querySelectorAll('.filter input[name="filter"]');

    buttons.forEach(cond=>cond.addEventListener('change', function(event){
        let projs = null;
        if (cond.value == 'All') {
            projs = data.projects
        }
        else {
            projs = data.projects.filter(p => p.tags.includes(cond.value));
        }
        document.querySelector('.project-list').innerHTML = projectItems(projs);
    }));  
}