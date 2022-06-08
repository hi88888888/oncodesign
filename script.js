/* Индекс слайда по умолчанию */
let slideIndex = 1;
showSlides(slideIndex);

/* Функция увеличивает индекс на 1, показывает следующй слайд*/
function plusSlide() {
    showSlides(slideIndex += 1);
}

/* Функция уменьшяет индекс на 1, показывает предыдущий слайд*/
function minusSlide() {
    showSlides(slideIndex -= 1);
}

/* Устанавливает текущий слайд */
function currentSlide(n) {
    showSlides(slideIndex = n);
}

/* Основная функция сладера */
function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("item");
    let dots = document.getElementsByClassName("slider-dots_item");
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

// модальное окно меню
// Получить модальный
let modal = document.getElementById("myModal");
// Получить кнопку, которая открывает модальный
let btn = document.getElementById("myBtn");
// Получить элемент <span>, который закрывает модальный
let span = document.getElementsByClassName("close")[0];
// Когда пользователь нажимает на кнопку, откройте модальный
btn.onclick = function() {
    modal.style.display = "block";
}
// Когда пользователь нажимает на <span> (x), закройте модальное окно
span.onclick = function() {
    modal.style.display = "none";
}
// Когда пользователь щелкает в любом месте за пределами модального, закройте его
window.onclick = function(e) {
    if (e.target == modal) {
        modal.style.display = "none";
    }
}

// Вызов модального окна календаря
let modall = document.getElementById("calendar-id__modal1");
let btnn = document.getElementById("calendar-id__btn1");
let spann = document.getElementsByClassName("close-calendar")[0];
btnn.onclick = function() {modall.style.display = "block";}
spann.onclick = function() {modall.style.display = "none";}
window.onclick = function(e) {
    if (e.target == modall) {
        modall.style.display = "none";
    }
}

// Вызов модального окна побочные эффекты
let modalll = document.getElementById("calendar-id__modal2");
let btnnn = document.getElementById("calendar-id__btn2");
let spannn = document.getElementsByClassName("close-calendar__pobochka")[0];
btnnn.onclick = function() {modalll.style.display = "block";}
spannn.onclick = function() {modalll.style.display = "none";}
window.onclick = function(e) {
    if (e.target == modalll) {
        modalll.style.display = "none";
    }
}

// Вызов модального окна помощник
let modallll = document.getElementById("calendar-id__modal3");
let btnnnn = document.getElementById("calendar-id__btn3");
let spannnn = document.getElementsByClassName("close-calendar__pomoschnik")[0];
btnnnn.onclick = function() {modallll.style.display = "block";}
spannnn.onclick = function() {modallll.style.display = "none";}
window.onclick = function(e) {
    if (e.target == modallll) {
        modallll.style.display = "none";
    }
}

// Вызов модального окна карта препаратов
let modallll1 = document.getElementById("calendar-id__modal4");
let btnnnn1 = document.getElementById("calendar-id__btn4");
let spannnn1 = document.getElementsByClassName("close-calendar__kartaPreparatov")[0];
btnnnn1.onclick = function() {modallll1.style.display = "block";}
spannnn1.onclick = function() {modallll1.style.display = "none";}
window.onclick = function(e) {
    if (e.target == modallll1) {
        modallll1.style.display = "none";
    }
}

// скрипт календаря
function calendar(id, year, month) {
    var Dlast = new Date(year, month + 1, 0).getDate(),
        D = new Date(year, month, Dlast),
        DNlast = new Date(D.getFullYear(), D.getMonth(), Dlast).getDay(),
        DNfirst = new Date(D.getFullYear(), D.getMonth(), 1).getDay(),
        calendar = '<tr>',
        month = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
    if (DNfirst != 0) {
        for (var i = 1; i < DNfirst; i++) calendar += '<td>';
    } else {
        for (var i = 0; i < 6; i++) calendar += '<td>';
    }
    for (var i = 1; i <= Dlast; i++) {
        if (i == new Date().getDate() && D.getFullYear() == new Date().getFullYear() && D.getMonth() == new Date().getMonth()) {
            calendar += '<td class="today">' + i;
        } else {
            calendar += '<td>' + i;
        }
        if (new Date(D.getFullYear(), D.getMonth(), i).getDay() == 0) {
            calendar += '<tr>';
        }
    }
    for (var i = DNlast; i < 7; i++) calendar += '<td> ';
    document.querySelector('#' + id + ' tbody').innerHTML = calendar;
    document.querySelector('#' + id + ' thead td:nth-child(2)').innerHTML = month[D.getMonth()] + ' ' + D.getFullYear();
    document.querySelector('#' + id + ' thead td:nth-child(2)').dataset.month = D.getMonth();
    document.querySelector('#' + id + ' thead td:nth-child(2)').dataset.year = D.getFullYear();
    if (document.querySelectorAll('#' + id + ' tbody tr').length < 6) {
        // чтобы при перелистывании месяцев не "подпрыгивала" вся страница, добавляется ряд пустых клеток. Итог: всегда 6 строк для цифр
        document.querySelector('#' + id + ' tbody').innerHTML += '<tr><td> <td> <td> <td> <td> <td> <td> ';
    }
}
calendar("calendar", new Date().getFullYear(), new Date().getMonth());
// переключатель минус месяц
document.querySelector('#calendar thead tr:nth-child(1) td:nth-child(1)').onclick = function() {
    calendar("calendar", document.querySelector('#calendar thead td:nth-child(2)').dataset.year, parseFloat(document.querySelector('#calendar thead td:nth-child(2)').dataset.month) - 1);
}
// переключатель плюс месяц
document.querySelector('#calendar thead tr:nth-child(1) td:nth-child(3)').onclick = function() {
    calendar("calendar", document.querySelector('#calendar thead td:nth-child(2)').dataset.year, parseFloat(document.querySelector('#calendar thead td:nth-child(2)').dataset.month) + 1);
}










