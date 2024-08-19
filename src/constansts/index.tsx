import { IShowItem, IWork } from "../types";
import firework1_1 from "../assets/fireworks/firework1/firework1-1.jpg";
import firework1_2 from "../assets/fireworks/firework1/firework1-2.jpg";
import firework1_3 from "../assets/fireworks/firework1/firework1-3.jpg";
import viber from "../assets/viber-icon.svg";
import youtube from "../assets/youtube-icon.svg";
import instagram from "../assets/instagram-icon.svg";
import show_img1 from "../assets/show_images/show_img1.jpg";

export const works: IWork[] = [
  {
    id: 1,
    title: "Главный музыкальный уикенд Viva Braslav Open Air",
    date: "29 июля 2003",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi assumenda consequatur eius, eum harum impedit ipsam iste iusto maxime minima minus natus recusandae soluta veritatis, voluptatem? Beatae natus nobis unde?",
    media: [
      { type: "img", src: firework1_1 },
      { type: "img", src: firework1_2 },
      { type: "img", src: firework1_3 },
    ],
  },
  {
    id: 2,
    title: "Чемпионат Мира 2016 по фейерверкам в Зеленоградске",
    date: "29.08.2003",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi assumenda consequatur eius, eum harum impedit ipsam iste iusto maxime minima minus natus recusandae soluta veritatis, voluptatem? Beatae natus nobis unde?",
    media: [
      { type: "img", src: firework1_1 },
      { type: "img", src: firework1_2 },
      { type: "img", src: firework1_3 },
    ],
  },
  {
    id: 3,
    title: "Стелла3",
    date: "29.08.2003",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi assumenda consequatur eius, eum harum impedit ipsam iste iusto maxime minima minus natus recusandae soluta veritatis, voluptatem? Beatae natus nobis unde?",
    media: [
      { type: "img", src: firework1_1 },
      { type: "img", src: firework1_2 },
      { type: "img", src: firework1_3 },
    ],
  },
  {
    id: 4,
    title: "Стелла4",
    date: "29.08.2003",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi assumenda consequatur eius, eum harum impedit ipsam iste iusto maxime minima minus natus recusandae soluta veritatis, voluptatem? Beatae natus nobis unde?",
    media: [
      { type: "img", src: firework1_1 },
      { type: "img", src: firework1_2 },
      { type: "img", src: firework1_3 },
    ],
  },
  {
    id: 5,
    title: "Стелла5",
    date: "29.08.2003",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi assumenda consequatur eius, eum harum impedit ipsam iste iusto maxime minima minus natus recusandae soluta veritatis, voluptatem? Beatae natus nobis unde?",
    media: [
      { type: "img", src: firework1_1 },
      { type: "img", src: firework1_2 },
      { type: "img", src: firework1_3 },
    ],
  },
];

export const socialLinks = [
  {
    img: viber,
    link: "https://vk.com/poleg2015",
  },
  {
    img: youtube,
    link: "https://www.linkedin.com/in/%D0%BE%D0%BB%D0%B5%D0%B3-%D0%BF%D1%83%D0%BB%D0%BA%D0%BE-a33156288/",
  },
  {
    img: instagram,
    link: "https://github.com/ScyBry",
  },
];

export const navLinks = [
  {
    name: "Шоу",
    link: "/shou",
  },
  {
    name: "Проекты",
    link: "/projects",
  },
  {
    name: "Уголь",
    link: "/coal",
  },
  {
    name: "Контакты",
    link: "/contacts",
  },
];

export const showItems: IShowItem[] = [
  {
    id: 1,
    imgSrc: show_img1,
    title: "Спецэффекты",
    subtitle: "Более 1000 работ",
    text: "Шоу со спецэффектами способно сделать зрелищным любой праздник, будь то юбилей, свадьба, корпоративная вечеринка, презентация продукта, открытие магазина, городское мероприятие или международный фестиваль.",
  },
  {
    id: 2,
    imgSrc: show_img1,
    title: "Спецэффекты",
    subtitle: "Более 1000 работ",
    text: "Шоу со спецэффектами способно сделать зрелищным любой праздник, будь то юбилей, свадьба, корпоративная вечеринка, презентация продукта, открытие магазина, городское мероприятие или международный фестиваль.",
  },
];
