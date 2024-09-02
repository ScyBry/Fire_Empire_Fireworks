import styles from "./styles.module.sass";
import { FC } from "react";

import { CoalProductCard } from "./CoalProductCard/CoalProductCard.tsx";
import coal1 from "../../assets/coal/3kgcoal.jpg";
import coal2 from "../../assets/coal/10kgcoal.jpg";

interface CoalProductsProps {
  handleModal: () => void;
}

const productDescription1 = `
    УГОЛЬ ДРЕВЕСНЫЙ «ИМПЕРСКИЙ»
    марка «А»
    (высший сорт)
    ТУ BY 590877494.001-2016
    Высококачественный продукт из экологически чистого сырья северных территорий Беловежской пущи.
    
    Древесный уголь предназначен для быстрого и качественного приготовления разнообразных блюд в мангалах и грилях.
    
    Преимущество: Древесный уголь не дает пламени, обладает высокой теплоотдачей, не выделяет канцерогенных веществ.
    
    Любые идеи для любого случая: от семейной трапезы до пикника с друзьями, любые блюда на вкус: грили из мяса, рыбы, птицы, изысканные вегетарианские блюда и овощи.
    
    Вы приготовите за считанные минуты с высоким гастрономическим эффектом.
  `;

const productDescription2 = `
    УГОЛЬ ДРЕВЕСНЫЙ «ИМПЕРСКИЙ»
    марка «А»
    (высший сорт)
    ТУ BY 590877494.001-2016
    Высококачественный продукт из экологически чистого сырья северных территорий Беловежской пущи.
    
    Древесный уголь предназначен для быстрого и качественного приготовления разнообразных блюд в мангалах и грилях.
    
    Преимущество: Древесный уголь не дает пламени, обладает высокой теплоотдачей, не выделяет канцерогенных веществ.
    
    Любые идеи для любого случая: от семейной трапезы до пикника с друзьями, любые блюда на вкус: грили из мяса, рыбы, птицы, изысканные вегетарианские блюда и овощи.
    
    Вы приготовите за считанные минуты с высоким гастрономическим эффектом.
  `;

export const CoalProducts: FC<CoalProductsProps> = ({ handleModal }) => {
  return (
    <section className={styles.coalProducts}>
      <div className="container">
        <div className={styles.coalProducts__wrapper}>
          <div className={styles.coalProducts__header}>
            <h2>УГОЛЬ ДРЕВЕСНЫЙ «ИМПЕРСКИЙ»</h2>
          </div>

          <CoalProductCard
            imgSrc={coal1}
            imgAlt="Упаковка 3 кг"
            title="УГОЛЬ ДРЕВЕСНЫЙ «ИМПЕРСКИЙ»"
            description={productDescription1}
            handleModal={handleModal}
          />

          <CoalProductCard
            imgSrc={coal2}
            imgAlt="Упаковка 10 кг"
            title="УГОЛЬ ДРЕВЕСНЫЙ «ИМПЕРСКИЙ»"
            description={productDescription2}
            reverse={true}
            handleModal={handleModal}
          />
        </div>
      </div>
    </section>
  );
};
