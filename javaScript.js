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
    },
  
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
  });