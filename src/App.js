
import './App.css';
import Button from './Components/Button';

function App() {
  const testing = () => {
    console.log("hago click")
  };
  return (
    <div className="App">
     <Button onClick={testing} variant='primary'>
      Primary 
     </Button>
    </div>
  );
}

export default App;
