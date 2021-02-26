import Navbar from './navbar.js';

export default function ProjectPage(project){
    document.querySelector('.container').innerHTML = 
    `${Navbar('project')}
    ${ProjectDetails(project)}
    `;
}

export function ProjectDetails(p){
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
}