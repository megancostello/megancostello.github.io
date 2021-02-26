
export default function News(news){
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
                            ${newsTitles(news.slice(0,5))}
                        </div>
                    </p>
                </div>
                <div class = "col-4">
                    <p>
                        <div class = "news-dates">
                            ${newsDates(news.slice(0,5))}
                        </div>
                    </p>
                </div>
        </div>
    </section>
    `;
}

export function newsTitles(news){
	return news.map(d=>`
        ${d.title}
        <br>
    `).join('');
}

export function newsDates(news){
	return news.map(d=>`
        ${d.date}
        <br>
    `).join('');
}

export function handleNewsFilter(data){
	document.querySelector('.search input[name="news"]').addEventListener('input', (event)=>{
        const search = document.querySelector('.search input[name="news"]').value;
        const result = data.news.filter(n => n.title.toLowerCase().includes(String(search).toLowerCase()));
        document.querySelector('.news-titles').innerHTML = newsTitles(result);
        document.querySelector('.news-dates').innerHTML  = newsDates(result);
    });  
}