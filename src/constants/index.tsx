import { IShowItem, IWork } from '../types'
import show_img1 from '../assets/show_images/show_img1-min.webp'
import show_img2 from '../assets/show_images/show_img2-min.webp'
import show_img3 from '../assets/show_images/show_img3-min.webp'
import show_img4 from '../assets/show_images/show_img4-min.webp'
import show_img5 from '../assets/show_images/show_img5-min.webp'
import show_img6 from '../assets/show_images/show_img6-min.webp'

import YouTubeIcon from '@mui/icons-material/YouTube'
import InstagramIcon from '@mui/icons-material/Instagram'

export const works: IWork[] = [
    {
        id: 1,
        title: 'Главный музыкальный уикенд Viva Braslav Open Air',
        date: '29 июля 2003',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi assumenda consequatur eius, eum harum impedit ipsam iste iusto maxime minima minus natus recusandae soluta veritatis, voluptatem? Beatae natus nobis unde?',
        media: [
            { type: 'img', src: show_img1 },
            { type: 'img', src: show_img1 },
            { type: 'img', src: show_img1 },
        ],
    },
]

export const socialLinks = [
    {
        img: <YouTubeIcon />,
        link: 'https://vk.com/poleg2015',
    },
    {
        img: <InstagramIcon />,
        link: 'https://www.linkedin.com/in/%D0%BE%D0%BB%D0%B5%D0%B3-%D0%BF%D1%83%D0%BB%D0%BA%D0%BE-a33156288/',
    },
]

export const navLinks = [
    {
        name: 'Шоу',
        link: '/shou',
    },
    {
        name: 'Уголь',
        link: '/coal',
    },
    {
        name: 'Проекты',
        link: '/projects',
    },
    {
        name: 'Наши работы',
        link: '/ourWorks',
    },
    {
        name: 'Контакты',
        link: '/contacts',
    },
]

export const showItems: IShowItem[] = [
    {
        id: 1,
        imgSrc: show_img1,
        title: 'Спецэффекты',
        subtitle: 'Более 1000 работ',
        text: 'Шоу со спецэффектами способно сделать зрелищным любой праздник, будь то юбилей, свадьба, корпоративная вечеринка, презентация продукта, открытие магазина, городское мероприятие или международный фестиваль.',
    },
    {
        id: 2,
        imgSrc: show_img2,
        title: 'На корпоратив',
        subtitle: 'Более 100 мероприятий',
        text: 'Когда приближаются праздники или какое-то торжественное событие в стране, компании, фирмы, трудовые коллективы начинают планировать, как отметить этот день.',
    },
    {
        id: 3,
        imgSrc: show_img3,
        title: 'На городской праздник',
        subtitle: 'Более 1000 мероприятий',
        text: 'Частное унитарное предприятие «Империя огня» имеет большой опыт в организации шоу на городские праздники такие как 8 марта, 23 февраля, 1 мая и т.п.',
    },
    {
        id: 4,
        imgSrc: show_img4,
        title: 'На день города',
        subtitle: 'Более 1000 мероприятий',
        text: 'Частное унитарное предприятие «Империя огня», помимо организации фейерверков и салютов, осуществляет перевозки опасных грузов любой категории, имея в наличии спецтехнику для транспортировки ADR грузов.',
    },
    {
        id: 5,
        imgSrc: show_img5,
        title: 'Для свадьбы',
        subtitle: 'Более 100 мероприятий',
        text: 'Свадьба поистине один из самых значимых торжеств в жизни каждого человека. Если день рождения у нас принято праздновать каждый год, и то – со временем и возрастом – этот праздник теряет свою актуальность для некоторых, то свадьба предполагается быть раз в жизни, по крайней мере в белорусской традиции. Мы предлагаем с нашей стороны заказать свадебный фейерверк, который сделает вашу свадьбу особенной и незабываемой как для Вас так и для ваших гостей. ',
    },
    {
        id: 6,
        imgSrc: show_img6,
        title: 'На новый год',
        subtitle: 'Более 100 мероприятий',
        text: 'Если вы хотите погрузиться в сказку вместе со своими друзьями знакомыми, сотрудниками, купить фейерверк на Новый год можно здесь или по телефонам на Kalvin.by. Наши специалисты приедут на предполагаемое место проведения салюта, согласуют сценарий и просчитают стоимость фаер шоу. Мы гарантируем, после дивных фейерверков вы уже не будете тем, кем были прежде!',
    },
]

export const gallery = import.meta.glob('/src/assets/fireworks/*', {
    eager: true,
    query: '?url',
    import: 'default',
})
