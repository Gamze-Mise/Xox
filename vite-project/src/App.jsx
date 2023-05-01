import { useState, useEffect } from 'react'
import './App.css'
import kazananKontrol from "../component/kazanan"
import Cell from "../component/cell"

function App() {
  const [player,setPlayer]=useState("X");
  const [winner,setWinner]=useState(null);
  const [cells,setCells]=useState([null, null, null, null, null, null, null, null, null]);
  const handleClick=(index)=>{
    if(!( winner || cells[index])){
      const newCell=[...cells];
      newCell[index]= player;
      setCells(newCell);
      if(kazananKontrol(newCell)){
        setWinner(player);
      }else{
        setPlayer(player=="X"?"O":"X");
      }
    }   
  }
  useEffect(() => {
  },[winner]);
  
 const handleRestart=()=>{
  setCells(Array(9).fill(null));
  setPlayer("X");
  setWinner(null);
  setFinish(false)
 }
  return (
    <div className='Xox'>
    <h1>XOX</h1>
    <h3> Sıradaki Oyuncu = {player}</h3>
    <div>
      <table className='TableXox'>
        <tr>
        <Cell 
          value={cells[0]} 
          onClick={
            ()=>{
              handleClick(0)
            }
          }
          />
              <Cell 
          value={cells[1]} 
          onClick={
            ()=>{
              handleClick(1)
            }
          }
          />
              <Cell 
          value={cells[2]} 
          onClick={
            ()=>{
              handleClick(2)
            }
          }
          />
        </tr>
        <tr>
          <Cell 
          value={cells[3]} 
          onClick={
            ()=>{
              handleClick(3)
            }
          }
          />
           <Cell 
          value={cells[4]} 
          onClick={
            ()=>{
              handleClick(4)
            } 
          }
          />
           <Cell 
          value={cells[5]} 
          onClick={
            ()=>{
              handleClick(5)
            } 
          }
          />
          
        </tr>
        <tr>
          <Cell 
          value={cells[6]} 
          onClick={
            ()=>{
              handleClick(6)
            } 
          }
          />
           <Cell 
          value={cells[7]} 
          onClick={
            ()=>{
              handleClick(7)
            } 
          }
          />
           <Cell 
          value={cells[8]} 
          onClick={
            ()=>{
              handleClick(8)
            } 
          }
          />
          
        </tr>
      </table>
    </div>
    <h2> {(winner)?"Kazanan Oyuncu "+ winner:""}</h2>
    <button onClick={handleRestart}>Restart</button>
    </div>
  );
}

export default App
