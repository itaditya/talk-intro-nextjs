import styles from './products_grid.module.css';

function ProductsGrid(props) {
  const { products } = props;

  return (
    <div className={styles.grid}>
      {products.map((product) => {
        const { id, name, imageUrl, price } = product;

        return (
          <article key={id} className={styles.card}>
            <img className={styles.img} src={imageUrl} alt="" width="640" height="480" />
            <div className={styles.details}>
              <h4 className={styles.title}>{name}</h4>
              <strong>${price}</strong>
            </div>
          </article>
        );
      })}
    </div>
  );
}

export { ProductsGrid };
