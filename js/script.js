$(document).ready(function() {
	
	$(".photo").click(function(){	// Событие клика на маленькое изображение
		var img = $(this);	// Получаем изображение, на которое кликнули
		var src = img.attr('src'); // Достаем из этого изображения путь до картинки
		$("body").append("<div class='popup'>"+ //Добавляем в тело документа разметку всплывающего окна
						"<div class='popup_bg'></div>"+ 
                        "<h1 class='popup_name'></h1>" + // Блок, который будет служить фоном затемненным
						"<img src='"+src+"' class='popup_img' />"+ // Само увеличенное фото
						"</div>");
		$(".popup").fadeIn(1); // Медленно выводим изображение
		$(".popup_bg").click(function(){	// Событие клика на затемненный фон	   
			$(".popup").fadeOut(1);	// Медленно убираем всплывающее окн	
    setTimeout(function() {	// Выставляем таймер
			  $(".popup").remove(); // Удаляем разметку всплывающего окна
			}, 1);
		});
	});
	
});

window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.nav-items'),
    menuItem = document.querySelectorAll('.items__nav-item'),
    hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('nav-items_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('nav-items_active');
        })
    })
})

$(document).ready(function() {
    $("body").css("display", "none"); /** body (здесь и далее) означает, что эффект применяется ко всей странице. Можно изменить на идентификаторы любых элементов (#content, .comments и т.д.) */

    $("body").fadeIn(500); /** время появления в миллисекундах */
    $("a.fade").click(function(event){ /** a.fade означает, что данное решение будет работать только при нажатии на ссылки с классом (class) "fade" (можно изменить на свой) */
    event.preventDefault();
    linkLocation = this.href;
    $("body").fadeOut(500, redirectPage); /** время изчезания в миллисекундах */
    });

    function redirectPage() {
    window.location = linkLocation;
    }
});
