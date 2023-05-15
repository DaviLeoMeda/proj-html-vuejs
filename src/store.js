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
                NewPrice: '$100'
            },
            {
                imgCard: '../../public/img/WebDesigCSS_272x161.jpg',
                title: 'Web Design for Beginners: Real World Coding in HTML & CSS',
                starE: '../../public/img/staremptyl.svg',
                starF: '../../public/img/starfull.svg',
                OldPrice: '$129.99',
                NewPrice: '$65'
            },
            {
                imgCard: '../../public/img/GitHub_272x161.jpg',
                title: 'GitHub Ultimate: Master Git and GitHub - Beginners to Expert',
                starE: '../../public/img/staremptyl.svg',
                starF: '../../public/img/starfull.svg',
                OldPrice: '$99.99',
                NewPrice: '$50'
            }, {
                imgCard: '../../public/img/Tablet_272x161.jpg',
                title: 'The Complete iOS 10 & Swift 3 Developer Course',
                starE: '../../public/img/staremptyl.svg',
                starF: '../../public/img/starfull.svg',
                OldPrice: '$199.99',
                NewPrice: '$100'
            }, {
                imgCard: '../../public/img/Android_272x161.jpg',
                title: 'The Complete iOS 10 & Swift 3 Developer Course - Build 20 Apps',
                starE: '../../public/img/staremptyl.svg',
                starF: '../../public/img/starfull.svg',
                OldPrice: '$99.99',
                NewPrice: '$50'
            },
            {
                imgCard: '../../public/img/Xamarin_272x161.jpg',
                title: 'Xamarin Forms: Build Native Cross-platform Apps with C#',
                starE: '../../public/img/staremptyl.svg',
                starF: '../../public/img/starfull.svg',
                OldPrice: '$189.99',
                NewPrice: '$95'
            }
        ]
    }
)