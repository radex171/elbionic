
function clickButton(prop){

        const nameButton = prop;
        const findArticle = document.querySelector(`.${nameButton}`);
        const findAllArticle = document.querySelectorAll('article');
        console.log(findArticle);
        console.log(findAllArticle);

        for(let article of findAllArticle){

            article.classList.remove('active');
        }

        findArticle.classList.add('active');
        
        setTimeout(300)
};

