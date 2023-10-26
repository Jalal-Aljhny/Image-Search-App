import { useContext } from "react";
import styles from "./Form.module.css";
import { SearchContext } from "../services/context/SearchContext";

const Form = () => {
  const { searchInput, handleSearch } = useContext(SearchContext);

  return (
    <div className={styles.container}>
      <h1 className={styles.name}>Image Search</h1>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Try something to search ..."
          className={styles.input}
          ref={searchInput}
        />
      </form>
    </div>
  );
};

export default Form;
