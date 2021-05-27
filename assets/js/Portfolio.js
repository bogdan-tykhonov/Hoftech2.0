 class Portfolio{
    static cases = [
        {
            id: 1,
            color: '#FECE2F',
            title: 'FitSpas',
            description: 'Сайт по продаже программы для лечения спины',
            link: 'https://spyna.fitspas.com.ua/',

        },
        {
            id: 2,
            color: '#17a2b8',
            title: 'Vue mini apps',
            description: 'Одностраничное приложения с мини программами',
            link: 'https://bogdan-tykhonov.github.io/vue-mini-apps/',

        },
        
        {
            id: 3,
            color: '#FFBC00',
            title: 'Оздоровча гімнастика',
            description: 'Сайт по продаже программы оздоровительной гимнастики ',
            link: 'https://9.fitspas.com.ua/',

        },
        {
            id: 4,
            color: '#f74c49;',
            title: 'Etrans',
            description: 'Сайт логистической компании',
            link: 'https://www.e-trans.com.ua/',

        },
        {
            id: 5,
            color: '#FFA500',
            title: 'Komorra',
            description: 'Сайт для продажи спортивного контент плана',
            link: 'http://ma.komorra.com.ua/',

        },
        {
            id: 6,
            color: '#9c2434',
            title: 'Cd School',
            description: 'Сайт школы дизайн интерьера',
            link: 'https://cd-school.com.ua/',

        },
    ];

    static init(){
        this.cases.forEach( work => {
            const projectCard = `<div class="project-card">
            <div class="project front" >
                <img src="images/slide-3.jpg" alt="">
               <div class="slide-text">
                <h1 style="color: ${work.color};">
                    ${work.title}
                </h1>
                <p>
                    ${work.description}
                </p>
               </div>
            </div>
            <a href="${work.link}" target="_blank">
            <div class="project back" >
              <img src="images/slide-back.png" alt="">
                 <button>
                     подробнее
                 </button>

             </div>
            </a>
         </div>`;

        const slider = document.querySelector('.slider');
        slider.innerHTML = slider.innerHTML + projectCard;
        });

        
    }
};

Portfolio.init();