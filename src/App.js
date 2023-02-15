import './App.css';
import { Greeting } from './Greeting';

const App = () => {
  return (
    <>
      <Greeting name="Anna" favoriteNumber={22} favoriteColors={["green", "blue", "red"]} />
      <Greeting name="Tamara" favoriteNumber={8} />
      <Greeting name="Tom" favoriteNumber={29} />
      <Greeting name="Andy" favoriteNumber={32} />
    </>
  );
};

export default App;
