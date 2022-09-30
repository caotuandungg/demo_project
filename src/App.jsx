// import './App.css';
// import Button from './components/Button';
import Counter from './components/Counter';
// import { Counterclass } from './components/Counter';



function App() {
  return (
    <div className="App">
      {/* <Button />
      <button className='button'>App </button>
      <button className='button2'>but2</button> */}
      <Counter ten="tôi là Thư" mau="red"/>
      <Counter ten="tôi là Lan" mau="yellow"/>
      <Counter ten="tôi là Dũng" mau="blue"/>
    </div>
    
  );
}

export default App;
