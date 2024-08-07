import { IWork } from "../types";
import firework1_1 from "../assets/fireworks/firework1/firework1-1.jpg";
import firework1_2 from "../assets/fireworks/firework1/firework1-2.jpg";
import firework1_3 from "../assets/fireworks/firework1/firework1-3.jpg";
import viber from "../assets/viber-icon.svg";
import youtube from "../assets/youtube-icon.svg";
import instagram from "../assets/instagram-icon.svg";

export const works: IWork[] = [
  {
    id: 1,
    title: "Стелла1",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi assumenda consequatur eius, eum harum impedit ipsam iste iusto maxime minima minus natus recusandae soluta veritatis, voluptatem? Beatae natus nobis unde?",
    media: [
      { type: "img", src: firework1_1 },
      { type: "img", src: firework1_2 },
      { type: "img", src: firework1_3 },
    ],
  },
  {
    id: 2,
    title: "Стелла2",
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
    name: "Фейерверки",
    link: "/fireworks",
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
