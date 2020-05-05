//Slider

//слайд, который будет показыться первым. Параметр текущего слайда
let slideIndex = 1,
    // каждый слайдер
    slides = document.querySelectorAll('.slider-item'),
    // стрелочка предыдущего слайда
    prev = document.querySelector('.prev'),
    // стрелочка следующего слайда
    next = document.querySelector('.next'),
    // обертка точек
    dotWrap = document.querySelector('.slider-dots'),
    //каждая точка
    dots = document.querySelectorAll('.dot');

showSlides(slideIndex);

//показать слайд
function showSlides(n) {

    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }

    //скрыть все слайды
    slides.forEach((item) => item.style.display = 'none');
    dots.forEach((item) => item.classList.remove('dot-active'));

    //изначально показывать первый слайд и первую точку
    slides[slideIndex - 1].style.display = 'block';
    dots[slideIndex - 1].classList.add('dot-active');
}

//показывать следующий слайд
function plusSlide(n) {
    showSlides(slideIndex += n);
}
// показывать слайд соответствующий значению точки
function currentSlide(n) {
    showSlides(slideIndex = n);
}

//клик по левой стрелочке
prev.addEventListener('click', function() {
    plusSlide(-1);
});
//клик по правой стрелочке
next.addEventListener('click', function() {
    plusSlide(1);
});

//клик по точкам
dotWrap.addEventListener('click', function(event) {
    for (let i = 0; i < dots.length + 1; i++) {
        let target = event.target;

        if (target.classList.contains('dot') && target == dots[i - 1]) {
            currentSlide(i);
        }
    }
});