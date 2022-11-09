import './App.css';
import Card from './components/Card';

function App() {
  return (
    <div className="App">
      <Card fname="Christoph" lname="Derigo" age="18" role="kek" />
      <Card fname="Kristijan" lname="Mlado" age="19" role="Nuss" />
      <Card fname="Atakan" lname="Celik" age="19" role="Haram" />
      <Card fname="Fabian" lname="Türtschi" age="19" role="Boss" />
      <Card fname="Sebastian" lname="Gärtner" age="18" role="Gärtner" />
    </div>
  );
}

export default App;
