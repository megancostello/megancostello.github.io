export default function Navbar(page){
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

}