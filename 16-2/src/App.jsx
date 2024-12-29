import { useState , useEffect } from "react";


function App() {
 
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

 

  useEffect( () =>{
     window.addEventListener("resize",handleResize);
      console.log('Event listener added');
    
      // use the return to clean up when unmounting
    return () =>{
      window.removeEventListener("resize",handleResize);
      console.log('Event listener removed');
     }

  },[]);

  useEffect(()=>{
    document.title = `Size: ${width} x ${height} `;
  });

  function handleResize(){
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  }
  
  return (
    <>
     <p>Window Width: {width}px   Window Height: {height}px</p>
    </>
  );
}

export default App