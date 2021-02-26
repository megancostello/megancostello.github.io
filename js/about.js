export default function About(about){
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
}