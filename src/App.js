import './App.css';
import { Greeting } from './Greeting';

const App = () => {
  const styles = {
    container: {
      padding: 20,
      backgroundColor: new Date().getSeconds() % 2 == 0 ? "lightblue" : "pink",
      textTransform: 'uppercase'
    }
  }

  return (
    <div style={styles.container}>
      <Greeting name="Anna" favoriteNumber={22} favoriteColors={["green", "blue", "red"]} />
      <Greeting name="Tamara" favoriteNumber={8} />
      <Greeting name="Tom" favoriteNumber={29} />
      <Greeting name="Andy" favoriteNumber={32} favoriteColors={["teal", "yellow", "brown"]} />
    </div>
  );
}

export default App;
