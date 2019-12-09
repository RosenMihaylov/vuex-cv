const state = {
    language: 'en',
    top: [
        {
            id: 1,
            lang: 'en',
            title: 'Rosen Mihaylov`s CV'
        },
        {
            id: 2,
            lang: 'bg',
            title: 'Автобиография на Росен Михайлов'
        }
    ],
    personalData: [
        {
            id: 3,
            lang: 'en',
            title: 'Personal Data',
            name: {
                title: 'Name:',
                text: "Rosen Mihaylov"
            },
            age: {
                title: 'Age:',
                text: "38"
            },
            adress: {
                title: 'Adress:',
                text: 'Varna 9002'
            }
        },
        {
            id: 4,
            lang: 'bg',
            title: 'Лични Данни',
            name: {
                title: 'Име:',
                text: "Росен Михайлов"
            },
            age: {
                title: 'Възраст:',
                text: "38"
            },
            adress: {
                title: 'Адрес:',
                text: 'Варна 9002'
            }
        }
    ],
    contactData: [
        {
            id: 5,
            lang: 'en',
            title: "Contact Data",
            phone: {
                title: 'Phone:',
                text: "+359877299089"
            },
            email: {
                title: 'E-mail:',
                text: 'rosen_mihaylov@abv.bg'
            }
        },
        {
            id: 6,
            lang: 'bg',
            title: "За контакт",
            phone: {
                title: 'Телефон:',
                text: "+359877299089"
            },
            email: {
                title: 'E-mail:',
                text: 'rosen_mihaylov@abv.bg'
            }
        }
    ],
    workExpirience: [
        {
            id: 7,
            lang: 'en',
            title: 'Work Expirience',
            jobs: [
                {
                    title: 'Chief Entertainer',
                    years: '2014 - 2018',
                    company: "'SL Entertainment' LTD",
                    section: "Hotel 'Moonlight'",
                    city: "Saint Vlas",
                    mainResponsibilitiesTitle: 'Main Responsibilities:',
                    mainResponsibilities: [
                        'Supervising of the entertainment teams in Sunny Beach',
                        'Creating the Entertainment program',
                        'Hosting comedy talk show',
                    ]
                },
                {
                    title: 'Junior expert',
                    years: '2005 - 2009 & 2012 - 2014',
                    company: "Municipality of Targovishte",
                    section: "Department 'Local tax collection'",
                    city: "Targovishte",
                    mainResponsibilitiesTitle: 'Main Responsibilities:',
                    mainResponsibilities: [
                        'Control over registering transfers of personal property',
                        'Correspondence with government officials',
                        'Customer service',
                    ]
                },
                {
                    title: 'Freight forwarder',
                    years: '2009 - 2012',
                    company: "'Bioproduct international' LTD",
                    section: "Section 'International cargo and delivery'",
                    city: "Targovishte",
                    mainResponsibilitiesTitle: 'Main Responsibilities:',
                    mainResponsibilities: [
                        'Corresponding with english speaking partners',
                        'Preparing the necessary paperwork for cargo delivery under international convention TIR',
                        'Junior accountent',
                    ]
                }
            ]
        },
        {
            id: 8,
            lang: 'bg',
            title: 'Работен опит',
            jobs: [
                {
                    title: 'Главен аниматор',
                    years: '2014 - 2018',
                    company: "'Ес Ел Ентъртейнмънт' ЕООД",
                    section: "Хотел 'Moonlight'",
                    city: "Свети Влас",
                    mainResponsibilitiesTitle: 'Осномви задължениия;',
                    mainResponsibilities: [
                        'Супервайзор за аниматорските екипи в района на Слънчев Бряг',
                        'Съставяне и организиране на анимационната програма',
                        'Водене на комедийни шоу програми',
                    ]
                },
                {
                    title: 'Младши експерт',
                    years: '2005 - 2009 & 2012 - 2014',
                    company: "Община Търговище",
                    section: "Отдел 'Местни данъци и такси'",
                    city: "Търговище",
                    mainResponsibilitiesTitle: 'Осномви задължениия;',
                    mainResponsibilities: [
                        'Приемане на декларации за регистрация на новопридобито имущество',
                        'Кореспонденция с други държавни институции',
                        'Консултиране на граждани отностно местните данъци и такси',
                    ]
                },
                {
                    title: 'Спедитор',
                    years: '2009 - 2012',
                    company: "'Биопродукт Интернешънъл' ЕООД",
                    section: "Отдел 'Международен превоз на стоки'",
                    city: "Търговище",
                    mainResponsibilitiesTitle: 'Осномви задължениия;',
                    mainResponsibilities: [
                        'Кореспонденция и преговори с англо-говорящи партньори',
                        'Оформяне на митнически документи за товари под режим TIR',
                        'Младши счетоводител',
                    ]
                }
            ]
        }
    ],
    education: [
        {
            id: 9,
            lang: 'en',
            title: 'Education',
            mainCoursesTitle: 'Main Courses:',
            educationData: [
                {
                    speciality: 'Advertisement & PR',
                    degree: 'Master',
                    years: '2004-2005',
                    university: "'University of Economics'-Varna",
                    city: 'Varna',
                    mainCourses: [
                        'Culrural relations',
                        'Business English',
                        'Analising the market and customer needs'
                    ]
                },
                {
                    speciality: 'Public Finances',
                    degree: 'Bachelor',
                    years: '1999-2004',
                    university: "'University of Economics'-Varna",
                    city: 'Varna',
                    mainCourses: [
                        'Financial analysis',
                        'Customs regime TIR & ATA',
                        'Acoounting'
                    ]
                },
                {
                    speciality: 'High school degree',
                    degree: 'High school degree',
                    years: '1988-1999',
                    university: "I SOU 'Sveti Sedmochislenici'",
                    city: 'Targovishte',
                    mainCourses: [
                        'Пathematics',
                        'English',
                        'Russian'
                    ]
                }
            ]
        },
        {
            id: 10,
            lang: 'bg',
            title: 'Образование',
            mainCoursesTitle: 'Основни предмети:',
            educationData: [
                {
                    speciality: 'Реклама и PR',
                    degree: 'Магистър',
                    years: '2004-2005',
                    university: "'Икономически университет' - Варна",
                    city: 'Варна',
                    mainCourses: [
                        'Отношения с чужди култури',
                        'Бизнес Английски',
                        'Анализ на пазара и нуждите на клиентите'
                    ]
                },
                {
                    speciality: 'Публични Финанси',
                    degree: 'Бакалавър',
                    years: '1999-2004',
                    university: "Икономически университет - Варна",
                    city: 'Варна',
                    mainCourses: [
                        'Финансов анализ',
                        'Митнически режими TIR и ATA',
                        'Счетоводство'
                    ]
                },
                {
                    speciality: 'Средно образование',
                    degree: 'Средно образование',
                    years: '1988-1999',
                    university: "I СОУ 'Свети Седмочисленици'",
                    city: 'Търговище',
                    mainCourses: [
                        'Математика',
                        'Английски',
                        'Руски'
                    ]
                }
            ]
        }
    ],
    portfolio: [
        {
            id: 11,
            lang: 'en',
            title: 'Completed Projects',
            description: 'Used programming languages:',
            projects: [
                {
                    usedProgramms: [
                        'VUE,',
                        'HTML5,',
                        'SCSS,',
                        'JS ES6'
                    ],
                    link: ['https://cv-builder-by-rosen-mihaylov.netlify.com/',
                        'https://lotr-simulator-by-rosen-mihaylov.netlify.com/'
                    ]
                },
                {
                    usedProgramms: [
                        'CSS,',
                        'Gradient Colors'
                    ],
                    link: [
                        'https://css-butterfly-2.netlify.com/'
                    ]
                },
                {
                    usedProgramms: [
                        'HTML,',
                        'CSS,',
                        'JS,',
                        'JQuery,',
                        'Media Query'
                    ],
                    link: [
                        'https://sl-entertainment.netlify.com/'
                    ]
                }
            ]
        },
        {
            id: 12,
            lang: 'bg',
            title: 'Завършени проекти',
            description: 'Използвани Програмни езици:',
            projects: [
                {
                    usedProgramms: [
                        'VUE,',
                        'HTML5,',
                        'SCSS,',
                        'JS ES6'
                    ],
                    link: [
                        'https://cv-builder-by-rosen-mihaylov.netlify.com/',
                        'https://lotr-simulator-by-rosen-mihaylov.netlify.com/'
                    ]
                },
                {
                    usedProgramms: [
                        'CSS,',
                        'Gradient Colors'
                    ],
                    link: ['hhttps://css-butterfly-2.netlify.com/']
                },
                {
                    usedProgramms: [
                        'HTML,',
                        'CSS,',
                        'JS,',
                        'JQuery,',
                        'Media Query'
                    ],
                    link: ['https://sl-entertainment.netlify.com/']
                }
            ]
        }
    ],
    progammingSkills: [
        {
            id: 13,
            lang: 'en',
            title: "Programming skills",
            skills: [
                'VUE',
                'VUEX',
                'JS ES6',
                'JQuery',
                'HTML5',
                'SCSS',
                'Responsive design',
                'Photoshop',
                'MS Office'
            ]
        },
        {
            id: 14,
            lang: 'bg',
            title: "Програмни умения",
            skills: [
                'VUE',
                'VUEX',
                'JS ES6',
                'JQuery',
                'HTML5',
                'SCSS',
                'Responsive design',
                'Photoshop',
                'MS Office'
            ]
        }
    ],
    languageSkills: [
        {
            id: 15,
            lang: 'en',
            title: 'Langage Skills',
            languages: [
                'Bulgarian - Native',
                'English - C1',
                'Russian - B1'
            ]
        },
        {
            id: 16,
            lang: 'en',
            title: 'Езикови умения',
            languages: [
                'Български - Роден',
                'Английски - C1',
                'Руски - B1'
            ]
        }
    ],
    completedCourses: [
        {
            id: 17,
            lang: 'en',
            title: 'Completed Courses',
            courses: [
                {
                    course: 'Front-End Fundamentals',
                    school: "'Advance academy' - Varna"
                },
                {
                    course: 'English - C1',
                    school: "'Language school Sky' - Targovishte"
                }
            ]
        },
        {
            id: 17,
            lang: 'bg',
            title: 'Завършение Курсове',
            courses: [
                {
                    course: 'Front-End Fundamentals',
                    school: "'Advance academy' - Варна"
                },
                {
                    course: 'English - C1',
                    school: "'Eзиково учирлище Sky' - Търговище"
                }
            ]
        }
    ],
    view: [
        {
            id: 18,
            lang: 'en',
            buttonSimple: 'Simple view',
            buttonFull: 'Full View'
        },
        {
            id: 19,
            lang: 'bg',
            buttonSimple: 'Опростена автобиография',
            buttonFull: 'Цялостна автобиография'
        }
    ]
};

const getters = {
    allTops: (state) => {
        if (state.language === 'en') { return state.top[0] }
        else if (state.language === 'bg') { return state.top[1] }
    },
    allPersonalData: (state) => {
        if (state.language === 'en') { return state.personalData[0] }
        else if (state.language === 'bg') { return state.personalData[1] }
    },
    allContactData: (state) => {
        if (state.language === 'en') { return state.contactData[0] }
        else if (state.language === 'bg') { return state.contactData[1] }
    },
    allWorkExpirience: (state) => {
        if (state.language === 'en') { return state.workExpirience[0] }
        else if (state.language === 'bg') { return state.workExpirience[1] }
    },
    allEducations: (state) => {
        if (state.language === 'en') { return state.education[0] }
        else if (state.language === 'bg') { return state.education[1] }
    },
    allPortfolios: (state) => {
        if (state.language === 'en') { return state.portfolio[0] }
        else if (state.language === 'bg') { return state.portfolio[1] }
    },
    allProgrammingSkills: (state) => {
        if (state.language === 'en') { return state.progammingSkills[0] }
        else if (state.language === 'bg') { return state.progammingSkills[1] }
    },
    allLanguages: (state) => {
        if (state.language === 'en') { return state.languageSkills[0] }
        else if (state.language === 'bg') { return state.languageSkills[1] }
    },
    allCompletedCourses: (state) => {
        if (state.language === 'en') { return state.completedCourses[0] }
        else if (state.language === 'bg') { return state.completedCourses[1] }
    },
    allViews: (state) => {
        if (state.language === 'en') { return state.view[0] }
        else if (state.language === 'bg') { return state.view[1] }
    }
};

const actions = {
    async changeLanguage({ commit }, e) {
        // Get selected language
        const lang = e.target.options[e.target.options.selectedIndex].innerText;
        commit('setLanguage', lang);

    }
};

const mutations = {
    setLanguage: (state, language) => (state.language = language)
};

export default {
    state,
    getters,
    actions,
    mutations
}