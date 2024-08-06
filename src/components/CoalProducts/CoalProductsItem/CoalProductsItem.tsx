import styles from "./styles.module.sass";
import coal1 from "../../../assets/coal/3kgcoal.jpg";
import coal2 from "../../../assets/coal/10kgcoal.jpg";
import { Button } from "../../Button/Button.tsx";
import Slider from "react-slick";

export const CoalProductsItem = () => {
  const settings = {
    infinite: true,
    arrows: true,
    dots: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const sliderItems = [
    { img: coal1, alt: "Упаковка 3 кг", label: "Упаковка 3 кг" },
    { img: coal2, alt: "Упаковка 10 кг", label: "Упаковка 10 кг" },
  ];

  return (
    <section className={styles.item}>
      <header className={styles.item__title}>
        <h3>УГОЛЬ ДРЕВЕСНЫЙ «ИМПЕРСКИЙ»</h3>
      </header>
      <div className={styles.item__content}>
        <div className={styles.content__image}>
          <Slider {...settings}>
            {sliderItems.map((item, index) => (
              <div key={index} className={styles.slider__item}>
                <img src={item.img} alt={item.alt} />
                <p>{item.label}</p>
              </div>
            ))}
          </Slider>
        </div>
        <div className={styles.content__text}>
          <div className={styles.text__title}>
            <h4>УГОЛЬ ДРЕВЕСНЫЙ «ИМПЕРСКИЙ»</h4>
          </div>
          <div className={styles.text}>
            <p>
              УГОЛЬ ДРЕВЕСНЫЙ «ИМПЕРСКИЙ»
              <br />
              марка «А»
              <br />
              (высший сорт)
              <br />
              ТУ BY 590877494.001-2016
              <br />
              Высококачественный продукт из экологически чистого сырья северных
              территорий Беловежской пущи.
            </p>
            <p>
              Древесный уголь предназначен для быстрого и качественного
              приготовления разнообразных блюд в мангалах и грилях.
            </p>
            <p>
              Преимущество: Древесный уголь не дает пламени, обладает высокой
              теплоотдачей, не выделяет канцерогенных веществ.
            </p>
            <p>
              Любые идеи для любого случая: от семейной трапезы до пикника с
              друзьями, любые блюда на вкус: грили из мяса, рыбы, птицы,
              изысканные вегетарианские блюда и овощи.
            </p>
            <p>
              Вы приготовите за считанные минуты с высоким гастрономическим
              эффектом.
            </p>
          </div>
          <Button>Заказать</Button>
        </div>
      </div>
    </section>
  );
};
