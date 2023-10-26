// import styles from "./App.module.css";

import Buttons from "./components/Buttons";
import Filters from "./components/Filters";
import Form from "./components/Form";
import ImagesContainer from "./components/ImagesContainer";

const App = () => {
  return (
    <div>
      <Form />
      <Filters />
      <ImagesContainer />
      <Buttons />
    </div>
  );
};

export default App;
