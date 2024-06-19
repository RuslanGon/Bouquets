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





