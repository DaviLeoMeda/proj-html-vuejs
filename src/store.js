import { reactive } from 'vue';


export const store = reactive(
    {
        arrayNav: [
            {
                name: 'Business',
                imgLink: '<i class="fa-solid fa-chart-line"></i>'
            },
            {
                name: 'Design',
                imgLink: '<i class="fa-solid fa-palette"></i>'
            },
            {
                name: 'Development',
                imgLink: '<i class="fa-regular fa-gear"></i>'
            },
            {
                name: 'Lifestyle',
                imgLink: '<i class="fa-regular fa-face-smile-beam"></i>'
            },
            {
                name: 'Office Productivity',
                // imgLink: '<font-awesome-icon :icon="['far', 'wallet']" />'
            }
        ],
        arrayMainCards: [
            {
                imgCard: '../../public/img/pc272x161.jpg',
                title: 'The Complete iOS 10 & Swift 3 Developer Course',
                starE: '../../public/img/staremptyl.svg',
                starF: '../../public/img/starfull.svg',
                OldPrice: '$199.99',
                NewPrice: '$100',
                vote: '3'
            },
            {
                imgCard: '../../public/img/WebDesigCSS_272x161.jpg',
                title: 'Web Design for Beginners: Real World Coding in HTML & CSS',
                starE: '../../public/img/staremptyl.svg',
                starF: '../../public/img/starfull.svg',
                OldPrice: '$129.99',
                NewPrice: '$65',
                vote: '4'
            },
            {
                imgCard: '../../public/img/GitHub_272x161.jpg',
                title: 'GitHub Ultimate: Master Git and GitHub - Beginners to Expert',
                starE: '../../public/img/staremptyl.svg',
                starF: '../../public/img/starfull.svg',
                OldPrice: '$99.99',
                NewPrice: '$50',
                vote: '5'
            }, {
                imgCard: '../../public/img/Tablet_272x161.jpg',
                title: 'The Complete iOS 10 & Swift 3 Developer Course',
                starE: '../../public/img/staremptyl.svg',
                starF: '../../public/img/starfull.svg',
                OldPrice: '$199.99',
                NewPrice: '$100',
                vote: '1'
            }, {
                imgCard: '../../public/img/Android_272x161.jpg',
                title: 'The Complete iOS 10 & Swift 3 Developer Course - Build 20 Apps',
                starE: '../../public/img/staremptyl.svg',
                starF: '../../public/img/starfull.svg',
                OldPrice: '$99.99',
                NewPrice: '$50',
                vote: '5'
            },
            {
                imgCard: '../../public/img/Xamarin_272x161.jpg',
                title: 'Xamarin Forms: Build Native Cross-platform Apps with C#',
                starE: '../../public/img/staremptyl.svg',
                starF: '../../public/img/starfull.svg',
                OldPrice: '$189.99',
                NewPrice: '$95',
                vote: '3'
            }
        ],
        arrayCompCards: [
            {
                imgCard: '../../public/img/pc272x161.jpg',
                title: 'The Complete iOS 10 & Swift 3 Developer Course',
                starE: '../../public/img/staremptyl.svg',
                starF: '../../public/img/starfull.svg',
                OldPrice: '$199.99',
                NewPrice: '$100',
                vote: '4'
            },
            {
                imgCard: '../../public/img/WebDesigCSS_272x161.jpg',
                title: 'Web Design for Beginners: Real World Coding in HTML & CSS',
                starE: '../../public/img/staremptyl.svg',
                starF: '../../public/img/starfull.svg',
                OldPrice: '$129.99',
                NewPrice: '$65',
                vote: '5'
            },
            {
                imgCard: '../../public/img/GitHub_272x161.jpg',
                title: 'GitHub Ultimate: Master Git and GitHub - Beginners to Expert',
                starE: '../../public/img/staremptyl.svg',
                starF: '../../public/img/starfull.svg',
                OldPrice: '$99.99',
                NewPrice: '$50',
                vote: '2'
            },
            {
                imgCard: '../../public/img/Tablet_272x161.jpg',
                title: 'The Complete iOS 10 & Swift 3 Developer Course',
                starE: '../../public/img/staremptyl.svg',
                starF: '../../public/img/starfull.svg',
                OldPrice: '$199.99',
                NewPrice: '$100',
                vote: '5'
            },
            {
                imgCard: '../../public/img/Android_272x161.jpg',
                title: 'The Complete iOS 10 & Swift 3 Developer Course - Build 20 Apps',
                starE: '../../public/img/staremptyl.svg',
                starF: '../../public/img/starfull.svg',
                OldPrice: '$99.99',
                NewPrice: '$50',
                vote: '3'
            },
            {
                imgCard: '../../public/img/Xamarin_272x161.jpg',
                title: 'Xamarin Forms: Build Native Cross-platform Apps with C#',
                starE: '../../public/img/staremptyl.svg',
                starF: '../../public/img/starfull.svg',
                OldPrice: '$189.99',
                NewPrice: '$95',
                vote: '5'
            },
            {
                imgCard: '../../public/img/CSS_272x161.jpg',
                title: 'CSS - The Complete Guide 2020 (incl. Flexbox, Grid & Sass)',
                starE: '../../public/img/staremptyl.svg',
                starF: '../../public/img/starfull.svg',
                OldPrice: '$199.99',
                NewPrice: '$100',
                vote: '1'
            },
            {
                imgCard: '../../public/img/pencil_272x161.jpg',
                title: 'The Colored Pencil Drawing Course',
                starE: '../../public/img/staremptyl.svg',
                starF: '../../public/img/starfull.svg',
                OldPrice: '$34.99',
                NewPrice: '$18',
                vote: '2'
            },
            {
                imgCard: '../../public/img/ninja_272x161.jpg',
                title: 'Google Searching Ninja!',
                starE: '../../public/img/staremptyl.svg',
                starF: '../../public/img/starfull.svg',
                OldPrice: '$89.99',
                NewPrice: '$45',
                vote: '5'
            },
            {
                imgCard: '../../public/img/signature_4-544x322.jpg',
                title: 'Become an Arabic Calligraphy Artist from Scratch',
                starE: '../../public/img/staremptyl.svg',
                starF: '../../public/img/starfull.svg',
                NewPrice: '$199',
                vote: '5'
            },
            {
                imgCard: '../../public/img/wine_272x161.jpg',
                title: 'Get Wine-Smart!',
                starE: '../../public/img/staremptyl.svg',
                starF: '../../public/img/starfull.svg',
                OldPrice: '$49.99',
                NewPrice: '$25',
                vote: '4'
            },
            {
                imgCard: '../../public/img/frog_272x161.jpg',
                title: 'Digital Painting Light and Color: Amateur to Master',
                starE: '../../public/img/staremptyl.svg',
                starF: '../../public/img/starfull.svg',
                OldPrice: '$139.99',
                NewPrice: '$70',
                vote: '5'
            }

        ],
        arrayLastCards: [
            {
                imgCard: '../../public/img/frog_272x161.jpg',
                title: 'Digital Painting Light and Color: Amateur to Master',
                starE: '../../public/img/staremptyl.svg',
                starF: '../../public/img/starfull.svg',
                OldPrice: '$139.99',
                NewPrice: '$70',
                vote: '2'
            },
            {
                imgCard: '../../public/img/pencil_272x161.jpg',
                title: 'The Colored Pencil Drawing Course',
                starE: '../../public/img/staremptyl.svg',
                starF: '../../public/img/starfull.svg',
                OldPrice: '$34.99',
                NewPrice: '$18',
                vote: '4'
            },
            {
                imgCard: '../../public/img/GitHub_272x161.jpg',
                title: 'GitHub Ultimate: Master Git and GitHub - Beginners to Expert',
                starE: '../../public/img/staremptyl.svg',
                starF: '../../public/img/starfull.svg',
                OldPrice: '$99.99',
                NewPrice: '$50',
                vote: '5'
            },
            {
                imgCard: '../../public/img/WebDesigCSS_272x161.jpg',
                title: 'Web Design for Beginners: Real World Coding in HTML & CSS',
                starE: '../../public/img/staremptyl.svg',
                starF: '../../public/img/starfull.svg',
                OldPrice: '$129.99',
                NewPrice: '$65',
                vote: '3'
            },
            {
                imgCard: '../../public/img/Xamarin_272x161.jpg',
                title: 'Xamarin Forms: Build Native Cross-platform Apps with C#',
                starE: '../../public/img/staremptyl.svg',
                starF: '../../public/img/starfull.svg',
                OldPrice: '$189.99',
                NewPrice: '$95',
                vote: '4'
            },
            {
                imgCard: '../../public/img/wine_272x161.jpg',
                title: 'Get Wine-Smart!',
                starE: '../../public/img/staremptyl.svg',
                starF: '../../public/img/starfull.svg',
                OldPrice: '$49.99',
                NewPrice: '$25',
                vote: '2'
            }
        ],
        arrayAccess: [
            {
                imgCard: '../../public/img/image_box_1-221x231.png',
                title: 'Become an Istructor',
                text: 'Teach what you love. Masterstudy gives you the tools to create a course.',
                textAnchor: 'start teaching',
                vote: '5'
            },
            {
                imgCard: '../../public/img/image_box_2-234x231.png',
                title: 'Access for Business',
                text: 'Get unlimited access to 2,500 of top courses for your team.',
                textAnchor: 'doing business',
                vote: '4'
            }
        ]
    }
)