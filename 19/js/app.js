// === Append arrow icon header menu
// --- level 1
const header_menu_level_one = document.querySelectorAll('.header-main__menu-list > ul > li');
header_menu_level_one.forEach(item=>{
    if(item.querySelector('ul') !== null){
        item.querySelector('a').insertAdjacentHTML('beforeend','<i class="fas fa-chevron-down"></i>');
    }
});
// --- level 2
const header_menu_level_two = document.querySelectorAll('.header-main__menu-list > ul > li ul li');
header_menu_level_two.forEach(item=>{
    if(item.querySelector('ul') !== null){
        item.querySelector('a').insertAdjacentHTML('beforeend','<i class="fas fa-chevron-left"></i>');
    }
});


// === Responsive Menu
const responsive_menu_list = document.querySelectorAll('.responsive-menu__list ul li');
responsive_menu_list.forEach(item=>{
    if(item.querySelector('ul') !== null){
        item.querySelector('a').insertAdjacentHTML('afterend','<i class="fas fa-chevron-down"></i>');
        const arrow = item.querySelector('.fa-chevron-down');
        arrow.addEventListener('click',(e)=>{
            const target_el = e.target;
            const ul_el = target_el.parentElement.querySelector('ul');
            ul_el.classList.toggle('show');
            target_el.classList.toggle('rotate');
        });
    }
});

// === Services
const services_item = document.querySelectorAll('.services__item');
services_item.forEach((service,idx) => {
    service.addEventListener('mouseover',()=>{
        // --- add selected class
        if(!service.classList.contains('services__item--selected')){
            service.classList.add('services__item--selected');
        }

        // --- remove selected class from siblings
        services_item.forEach((el,index)=>{
            if(index !== idx){
                if(el.classList.contains('services__item--selected')){
                    el.classList.remove('services__item--selected'); 
                }
            }
        })
    })
});