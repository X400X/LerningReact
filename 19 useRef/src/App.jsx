import { useState , useEffect , useRef} from "react";



function App() {
 
  let [number,setNumber] = useState(0);

  // useRef dose not cause the app to re render

  const ref = useRef(0);
  const inputRef1 = useRef("");
  const inputRef2 = useRef("");
  const inputRef3 = useRef("");

  useEffect(() =>{
    console.log("Component Rendered");
  });
  
  function handleClick1(){
     // setNumber(n => n +1);
     ref.current = ref.current +1 ;
     console.log(ref.current);
     inputRef1.current.focus();
     inputRef1.current.style.backgroundColor = "yellow";
     inputRef2.current.style.backgroundColor = "white";
     inputRef3.current.style.backgroundColor = "white";
  }
  function handleClick2(){
    // setNumber(n => n +1);
    ref.current = ref.current +1 ;
    console.log(ref.current);
    inputRef2.current.focus();
    inputRef1.current.style.backgroundColor = "white";
     inputRef2.current.style.backgroundColor = "yellow";
     inputRef3.current.style.backgroundColor = "white";
 }
 function handleClick3(){
  // setNumber(n => n +1);
  ref.current = ref.current +1 ;
  console.log(ref.current);
  inputRef3.current.focus();
  inputRef1.current.style.backgroundColor = "white";
     inputRef2.current.style.backgroundColor = "white";
     inputRef3.current.style.backgroundColor = "yellow";
}
  
  return (
    <>
     <input ref={inputRef1} />
     <button onClick={handleClick1}>click Me 1</button><br />
     <input ref={inputRef2} />
     <button onClick={handleClick2}>click Me 2</button><br />
     <input ref={inputRef3} />
     <button onClick={handleClick3}>click Me 3</button><br />
    </>
  );
}

export default App