const Button = ({num,setNum}) => {
   
    return (
        <div>
            <button onClick = {() => {
        if (num<15)  setNum (num+1)
      }}>+</button>

<button onClick = {() => {
        if (num>0) setNum(num-1)
      }}>-</button>

<button onClick = {() => {
        setNum(0)
      }}>reset</button>


<button onClick = {() => {
        setNum(15)
      }}>max</button>


<button onClick = {() => {
      if(num<10) setNum(num+5)
      else setNum(15)
      }}>+5</button>

<button onClick = {() => {
      if(num>5)  setNum(num-5)
      else setNum(0)
      }}>-5</button>
        </div>
    );
}

export default Button;