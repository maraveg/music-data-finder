
import './App.css';
import Button from './Components/Button';

function App() {
  const testing = () => {
    console.log("hago click")
  };
  return (
    <div className="App">
     <Button text="Primario" onClick={testing} variant='primary'/>
    </div>
  );
}

export default App;
