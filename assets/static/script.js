
//Função de SCROLL 
// const element = document.querySelector('#cards-news');
// element.addEventListener('wheel', (event) => {
//     event.preventDefault();

//     element.scrollBy({
//         left: event.deltaY < 0 ? -30 : 30,
//     });
// });

// Scroll - HERO
ScrollReveal().reveal('#cta', {
    origin: 'left',
    duration: 2000,
    distance: '20%'
});

ScrollReveal().reveal('#banner-tela', {
    origin: 'right',
    duration: 3000,
    distance: '20%'
});

// Scroll - CAR
ScrollReveal().reveal('#car #card', {
    origin: 'left',
    duration: 4000,
    distance: '20%'
});

//Scroll - SOLUCAO 


ScrollReveal().reveal('#solucao-conteudo h2', {
    origin: 'left',
    duration: 1500,
    distance: '1%'
});

 ScrollReveal().reveal('#solucao-conteudo .solucao__content', {
     origin: 'right',
     duration: 2000,
    distance: '3%'
});

ScrollReveal().reveal('#solucao-conteudo .solucao__buttons', {
    origin: 'right',
     duration: 2500, 
     distance: '4%'
 });


 // Scroll - COMO 
 ScrollReveal().reveal('#como-conteudo', {
     origin: 'left',
     duration: 1300, 
     distance: '8%'
 });

 ScrollReveal().reveal('#como-imagem', {
     origin: 'left',
     duration: 1900,
     distance: '15%'
 });

 // Scroll - VERVIDEO
 ScrollReveal().reveal('#ver-video', {
     origin: 'left',
     duration: 1300, 
     distance: '8%'
 });

 // Scroll - Download 
// ScrollReveal().reveal('#download', {
//     origin: 'right', 
//     duration: 1600, 
//     distance: '12%'     
// });

// Scroll NAVEGUE
 ScrollReveal().reveal('#navegue', {
     opacity: 0.25,
     duration: 2200
 });

 ScrollReveal().reveal('#cadastre', {
     opacity: 0.35,
     duration: 2800
 });

 ScrollReveal().reveal('#nossos-planos .heading', {
     origin: 'left',
     duration: 2200,
     distance: '12%'
 });

 ScrollReveal().reveal('#nossos-planos .nossos__option', {
     origin: 'right',
     duration: 2800,
     distance: '12%'
 }); 

 ScrollReveal().reveal('#contato', {
     origin: 'left',
     duration: 2200, 
     distance: '10%'
 }); 


// Function to display mobile Bar 
$(document).ready(function() { 
    $('#mobile-btn').on('click', function(){
        $('#mobile-menu').toggleClass('active');
        $('#mobile-btn').find('i').toggleClass('fa-xmark');
    });

    $('#nav_list .list-li').on('click',function() {
        $('.list-li').removeClass('active');
        $(this).addClass('active');
    })      
    
});


// Função para esconder um formulário 
// Quando a tela for pequena para (mobile)

$(document).ready(function() {
    $(window).resize(function() {
        if ($(window).width() <= 600) 
        {
            $('#download__mail').addClass("noneActive");
            $('#download__mail_2').removeClass("noneActive");
        }
        else {
            $('#download__mail').removeClass("noneActive");
            $('#download__mail_2').addClass("noneActive");
        }
    })
})


//Function to alter font-size from hero heading when size-screen were minus than 890 
$(document).ready(function(){
    $(window).resize(function() {
        if ($(window).width() <= 890)
        {
            $('#hero-heading').css({
               "font-size":"48px",
               "line-height":"42px"
            });
        }
        else {
            $('#hero-heading').css({
               "font-size":"62px",
               "line-height":"64px"
            })
        }
    })
})


//Function to alter a CSS proprieties in #como-conteudo inside section#como 
$(document).ready(function() {
    $(window).resize(function() {
        if ($(window).width() <= 1278)
        {
            $('#como-conteudo').width('100%');
            $('#como-conteudo').css({
                'display':'flex',
                'justify-content':'center',
                'align-items':'center',
            });

            $('#como')
        }
        else 
        {
            $('#como-conteudo').width('50%');
        }

        if ($(window).width() <= 600) 
        {

            $('#form_envio').css({
                'width':'100%'
            });

            $('#cont-conteudo').css({
                'background-image': 'none',
                'display': 'flex',
                'padding': '0',
                'justify-content': 'center',
                'align-items':'center'
            });

            $('#cont-conteudo div.linha div.false-img .img-true').addClass("active");

            $('#cont-conteudo div.linha div.false-img .img-true').css({
                'width':'94px',
                'height': '94px',
            });

            $('#cont-conteudo div.linha').css({
                'width': '85%'
            });

            $('#cont-conteudo div.linha div.linha-conteudo > h4').css({
                'font-size':'1.6rem',
                'width': '85%'
            });

            $('#cont-conteudo div.linha div.linha-conteudo > p').css({
                'font-size':'1.2rem',
                'width':'85%'
            });

            $('#cont-conteudo div.linha').css({
                'padding': '0'
            });
        }
        else {
            $('#form_envio').css({
                'width':""
            });

            $('#cont-conteudo div.linha div.false-img .img-true').removeClass("active");
            $('#cont-conteudo').css({
                'background-image': "",
                'display': "",
                'padding': "",
                'justify-content': "",
                'align-items':""
            });
            $('#cont-conteudo div.linha').css({
                'padding': ""
            });

            $('#cont-conteudo div.linha').css({
                'width': ""
            });

            $('#cont-conteudo div.linha div.linha-conteudo > h4').css({
                'font-size':"",
                'width': ""
            });

            $('#cont-conteudo div.linha div.linha-conteudo > p').css({
                'font-size':"",
                'width':""
            });
        }
    });
});


//Function to alter a CSS proprieties in <header> #navbar to remove background-img 
$(document).ready(function() {
    $(window).resize(function() {
        if ($(window).width() <= 1170)
        {
            $('body').css('background-image', 'none');
        }
        else 
        {
            $('body').css('background-image', "url('/assets/imgs/hero_bg.png')");
        }

        if ($(window).width() <= 900)
        {
            $('#video-player').css({
                "width": "100%"
            })

            $('#video-content').css({
                "width": "100%"
            })
        } else {
            $('#video-player').css({
                "width": ""
            })

            $('#video-content').css({
                "width": ""
            })
        }
    });
});


//Checkbox color

  $('document').ready(function() {
    $('#cb2-7').change(function() {
        if ($(this).is(':checked')) {
            $('#trabalho').css('color', 'black');
            $('#contrata').css('color', '#ff3494')
        } else { 
            $('#contrata').css('color', 'black');
            $('#trabalho').css('color', '#ff3494');
        };
    })
  });


//Carousel Navegue Section #when clicked over img
const state = {};
const carouselList = document.querySelector('.carousel__list');
const carouselItems = document.querySelectorAll('.carousel__item');
const elems = Array.from(carouselItems);

const leftButton = document.getElementById('slider-left');
const rightButton = document.getElementById('slider-right');

//Função move para ESQUERDA
function moveLeft() {
    const current = elems.find((elem) => elem.dataset.pos == 0);
    const prev = elems.find((elem) => elem.dataset.pos == -1);

    if(prev) {
        update(prev);
    }
}

//Função mvoe para DIREITA
function moveRight() {
    const current = elems.find((elem) => elem.dataset.pos == 0);
    const next = elems.find((elem) => elem.dataset.pos == 1);
    if(next) {
        update(next);
    }
}

//Listeners 
leftButton.addEventListener('click', moveLeft);
rightButton.addEventListener('click', moveRight);

carouselList.addEventListener('click', function (event) {
  var newActive = event.target;
  var isItem = newActive.closest('.carousel__item');

  if (!isItem || newActive.classList.contains('carousel__item_active')) {
    return;
  };
  
  update(newActive);
});




const update = function(newActive) {
  const newActivePos = newActive.dataset.pos;

  const current = elems.find((elem) => elem.dataset.pos == 0);
  const prev = elems.find((elem) => elem.dataset.pos == -1);
  const next = elems.find((elem) => elem.dataset.pos == 1);
  const first = elems.find((elem) => elem.dataset.pos == -2);
  const last = elems.find((elem) => elem.dataset.pos == 2);
  
  current.classList.remove('carousel__item_active');
  
  [current, prev, next, first, last].forEach(item => {
    var itemPos = item.dataset.pos;

    item.dataset.pos = getPos(itemPos, newActivePos)
  });
};

const getPos = function (current, active) {
  const diff = current - active;

  if (Math.abs(current - active) > 2) {
    return -current
  }

  return diff;
}



