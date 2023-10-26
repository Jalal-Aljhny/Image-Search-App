import { useContext } from "react";
import styles from "./ImagesContainer.module.css";
import { SearchContext } from "../services/context/SearchContext";

const ImagesContainer = () => {
  const { images, loading, error, clicked } = useContext(SearchContext);
  return (
    <section className={styles.container}>
      {clicked.current && loading && !images.length ? (
        <p className={styles.loading}>loading ...</p>
      ) : (
        <></>
      )}
      {clicked.current && images.length && !loading ? (
        images.map((image) => (
          <img
            src={image.urls.small}
            alt={image.alt_description}
            key={image.id}
            className={styles.image}
          />
        ))
      ) : (
        <></>
      )}
      {clicked.current && !images.length && !loading ? (
        <p className={styles.no_image}> no images ... try another title</p>
      ) : (
        <></>
      )}
      {clicked.current && error && !loading ? (
        <p className={styles.error}>{error}</p>
      ) : (
        <></>
      )}
    </section>
  );
};

export default ImagesContainer;
