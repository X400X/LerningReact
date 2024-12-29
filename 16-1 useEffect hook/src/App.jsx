import { useState , useEffect } from "react";


function App() {
 
  const [count, setCount] = useState(0);
  const [color , setColor] = useState("Green");

  //Do this code each refresh 
  useEffect(() => {
    document.title = `Count ${count} Color:${color}`
  },[count, color]);
  // no 2nd array variable - every time
  // empty array - only when mounting (1 at beginging)
  // variable in the array - on mount and when this/es variable/s changes
  function handleCountAdd(){
    setCount(c => c +1);
  }
  function handleCountSub(){
    setCount(c => c -1);
  }
  function handleColorChange(){
    color == "Green" ? setColor("Red") : setColor("Green");
  }
  
  return (
    <>
      <p style={{color:color}}>
        Count :{count}  Color:{color}
      </p>
      <button onClick={handleCountAdd}>add</button>
      <button onClick={handleCountSub}>sub</button><br />
      <button onClick={handleColorChange}>color</button>
    </>
  );
}

export default App