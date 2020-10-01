$(document).ready(function(){
    $('.carousel-gallery').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      arrows: false,
      touchThreshold: 2,
      adaptiveHeight: true,
    });
  });
  
function clickButton(e){
        
  const nameButton = e;
  const findArticle = document.querySelector(`.${nameButton}`);
  const findAllArticle = document.querySelectorAll('article');
  
  for(let article of findAllArticle){

      article.classList.remove('active');
  }

  findArticle.classList.add('active');
};