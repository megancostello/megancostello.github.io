import Navbar from './navbar.js';
import About from './about.js';
import News, {newsTitles, newsDates, handleNewsFilter} from './news.js';
import Projects, {projectItems, renderTags, handleProjectFilter} from './projects.js';

export default function MainPage(data){

    document.querySelector('.container').innerHTML = `
        ${Navbar('main', Object.keys(data))}
        ${About(data.about)}
        ${News(data.news)}
        ${Projects(data.projects)}
    `
    
    handleNewsFilter(data);
    handleProjectFilter(data);
}