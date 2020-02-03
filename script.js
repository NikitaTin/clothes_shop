var app = new Vue({
    el: '#app',
    data: {
        set: 1,
        language: [
            {
                nav_link: ['language', 'shop', 'contacts'],
                introduction:{
                    title: 'new collections',
                    text: 'Now based in Mexico City, the line uses natural fiber fabrics to create modern minimalistic silouettes inspired by muted landscapes and soft textures',
                    button: 'view'
                },
                image_title: 'gallery',
            },
            {
                nav_link: ['язык', 'магазин', 'контакты'],
                introduction:{
                    title: 'новая коллекция',
                    text: 'Находящаяся сейчас в Мехико, линия использует ткани из натуральных волокон для создания современных минималистических силуэтов, вдохновленных приглушенными пейзажами и мягкими текстурами.',
                    button: 'смотреть'
                },
                image_title: 'галерея',
            },
        ],
        menu_open: false,
        language_open: false,
        nav_link: ['#', 'https://www.asos.com/ru/men/', 'https://www.asos.com/ru/men/'],
    },
    methods: {
        menu_button_click: function (){
            if (this.menu_open){
                if (this.language_open){
                    this.language_open = false;
                }else{
                    this.menu_open = false;
                }
            }else{
                this.menu_open = true;
            }
        }
    },
  })