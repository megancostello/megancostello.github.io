import MainPage from './js/mainpage.js';
import { handleNewsFilter } from './js/news.js';
import ProjectPage from './js/projectpage.js';
import {handleProjectFilter} from './js/projects.js';

fetch('./data.json')
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
            ProjectPage(data.projects[0]);
        }
        else if (urlParams.get('project')=='sql-proj'){
            ProjectPage(data.projects[1]);
        }
    }
    else {
        MainPage(data);
        handleNewsFilter(data);
        handleProjectFilter(data);
    }
    

});