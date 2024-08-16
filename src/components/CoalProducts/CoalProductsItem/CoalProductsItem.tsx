import styles from "./styles.module.sass";
import coal1 from "../../../assets/coal/3kgcoal.jpg";
import coal2 from "../../../assets/coal/10kgcoal.jpg";
import { Button } from "../../Button/Button.tsx";

export const CoalProductsItem = () => {
  return (
    <section className={styles.coalProducts}>
      <header className={styles.coalProducts__header}>
        <h3>УГОЛЬ ДРЕВЕСНЫЙ «ИМПЕРСКИЙ»</h3>
      </header>

      <article className={styles.coalProduct}>
        <div className={styles.coalProduct__image}>
          <img src={coal1} alt="Упаковка 3 кг" />
        </div>
        <div className={styles.coalProduct__details}>
          <h4 className={styles.coalProduct__title}>
            УГОЛЬ ДРЕВЕСНЫЙ «ИМПЕРСКИЙ»
          </h4>
          <div className={styles.coalProduct__description}>
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
      </article>

      <article className={`${styles.coalProduct} `}>
        <div className={styles.coalProduct__details}>
          <h4 className={styles.coalProduct__title}>
            УГОЛЬ ДРЕВЕСНЫЙ «ИМПЕРСКИЙ»
          </h4>
          <div className={styles.coalProduct__description}>
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
        <div className={styles.coalProduct__image}>
          <img src={coal2} alt="Упаковка 10 кг" />
        </div>
      </article>
    </section>
  );
};
