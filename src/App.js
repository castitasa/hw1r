import {useState} from "react";
import Button from "./button";

function App() {
  const [num,setNum] = useState(0);


  
  return (
    <div>
       <h1>{num}</h1> 
     <Button  num = {num} setNum={setNum}/>

    </div>
  );
}



export default App;