import styles from "./Filter.module.css";
import PropTypes from "prop-types";

const Filter = ({ children, ...props }) => {
  return (
    <p className={styles.btn} {...props}>
      {children}
    </p>
  );
};
Filter.propTypes = {
  children: PropTypes.string.isRequired,
  props: PropTypes.string,
};

export default Filter;
