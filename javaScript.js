// Modal window

document.addEventListener('DOMContentLoaded', () => {
    let instance = null;

    document.querySelectorAll('.flower-item').forEach(item => {
        item.addEventListener('click', () => {
            const content = `
                <div class="modal-content">
                    <img src="${item.querySelector('img:not(.heart)').src}" alt="">
                    <p class="flower-text">${item.querySelector('.flower-text').innerHTML}</p>
                    <span class="flower-span">${item.querySelector('.flower-span').innerHTML}</span>
                </div>
            `;
            instance = basicLightbox.create(content);
            instance.show();
        });
    });

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && instance !== null && instance.visible()) {
            instance.close();
        }
    });
});

// Swiper

new Swiper('.swiper', {
    
    direction: 'horizontal', 
    loop: true,
  
    slidesPerView: 4, 
    spaceBetween: 10, 
  
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
  });

//   hidden-div show-modal"

const backdrop = document.querySelector(".backdrop");
const btnReq = document.querySelector('.js-btnReq');
const closeBtn = document.querySelector('.link-close');

function showModal() {
    backdrop.classList.add('show-modal');
    document.addEventListener('keydown', onCloseModalEsc);
    document.body.style.overflow = "hidden";
}

function hideModal() {
    backdrop.classList.remove('show-modal');
    document.removeEventListener('keydown', onCloseModalEsc);
    document.body.style.overflow = "";
}

function onCloseModalEsc(e) {
    if (e.code === 'Escape') {
        hideModal();
    }
}

btnReq.addEventListener('click', showModal);
closeBtn.addEventListener('click', hideModal);

// ==================================================

// document.querySelector('.flower-btn').addEventListener('click', function() {
//     const listItems = document.querySelectorAll('.flower-list .flower-item');
//     let listContent = '<ul class="flower-list flo-list">';

//     listItems.forEach(item => {
//         listContent += `<li class="flower-item modal-flo">${item.innerHTML}</li>`;
//     });

//     listContent += '</ul>';

//     const instance = basicLightbox.create(`
//         <div class="modal">
//             ${listContent}
//         </div>
//     `, {
//         onShow: (instance) => {

//             const onEscapeKeydown = (event) => {
//                 if (event.key === 'Escape') {
//                     instance.close();
//                 }
//             };

//             document.addEventListener('keydown', onEscapeKeydown);

//             const modalElement = instance.element().querySelector('.modal');
//             const onModalClick = (event) => {
//                 if (!event.target.closest('.flower-item')) {
//                     instance.close();
//                 }
//             };

//             modalElement.addEventListener('click', onModalClick);

//             instance.element().addEventListener('basicLightbox:close', () => {
//                 document.removeEventListener('keydown', onEscapeKeydown);
//                 modalElement.removeEventListener('click', onModalClick);
//             });
//         }
//     });

//     instance.show();
// });


// ===

document.querySelector('.flower-btn').addEventListener('click', function() {
    const listItems = document.querySelectorAll('.flower-list .flower-item img:not(.heart)');
    let listContent = '';

    listItems.forEach(item => {
        listContent += `<img  src="${item.src}" alt="${item.alt}">`;
    });

    const instance = basicLightbox.create(`
        <div class="modal">
            ${listContent}
        </div>
    `, {
        onShow: (instance) => {

            const onEscapeKeydown = (event) => {
                if (event.key === 'Escape') {
                    instance.close();
                }
            };

            document.addEventListener('keydown', onEscapeKeydown);

            const modalElement = instance.element().querySelector('.modal');
            const onModalClick = (event) => {
                if (!event.target.closest('img')) {
                    instance.close();
                }
            };

            modalElement.addEventListener('click', onModalClick);


            instance.element().addEventListener('basicLightbox:close', () => {
                document.removeEventListener('keydown', onEscapeKeydown);
                modalElement.removeEventListener('click', onModalClick);
            });
        }
    });

    instance.show();
});

// ==========


document.addEventListener('DOMContentLoaded', function() {
    const priseButtons = document.querySelectorAll('.prise-link');
    const closeButtons = document.querySelectorAll('.order-close');
    const orderLists = document.querySelectorAll('.order');

    // Обработчик для кнопок prise-link
    priseButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            const orderList = this.nextElementSibling;

            // Закрываем все списки order, кроме текущего
            closeAllOrderLists(orderList);

            // Показать/скрыть текущий список order
            toggleOrderList(orderList);

            // Остановить всплытие события, чтобы не вызывалось событие для закрытия при клике на document
            e.stopPropagation();
        });
    });

    // Обработчик для кнопок order-close
    closeButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            const orderList = this.closest('.order');
            if (orderList) {
                orderList.style.display = 'none';
            }
            e.stopPropagation();
        });
    });

    // Закрытие списков при клике вне них
    document.addEventListener('click', function(e) {
        orderLists.forEach(list => {
            // Проверяем, был ли клик вне списка или на саму кнопку открытия
            if (!list.contains(e.target) && !e.target.classList.contains('prise-link')) {
                list.style.display = 'none';
            }
        });
    });

    // Закрытие списка при нажатии Esc
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            orderLists.forEach(list => {
                list.style.display = 'none';
            });
        }
    });

    // Функция для закрытия всех списков order, кроме заданного
    function closeAllOrderLists(exceptList) {
        orderLists.forEach(list => {
            if (list !== exceptList) {
                list.style.display = 'none';
            }
        });
    }

    // Функция для переключения видимости списка order
    function toggleOrderList(orderList) {
        if (orderList.style.display === 'none' || orderList.style.display === '') {
            orderList.style.display = 'block';
        } else {
            orderList.style.display = 'none';
        }
    }
});

// ===========
// Находим все изображения в слайдере
const images = document.querySelectorAll('.swiper-slide img');

// Находим модальное окно и его контент
const modal = document.getElementById('imageModal');
const modalImg = document.getElementById('modalImage');

// Функция для открытия модального окна с изображением
function openModal(imageSrc) {
    modal.style.display = 'block';
    modalImg.src = imageSrc;
}

// Функция для закрытия модального окна
function closeModal() {
    modal.style.display = 'none';
}

// Обработчики кликов по изображениям
images.forEach(image => {
    image.addEventListener('click', function() {
        openModal(image.src);
    });
});

// Обработчик клика по фону модального окна для его закрытия
modal.addEventListener('click', function(event) {
    if (event.target === modal) {
        closeModal();
    }
});

// Обработчик нажатия на клавишу Esc для закрытия модального окна
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeModal();
    }
});