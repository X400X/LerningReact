import { useState } from "react";

function App() {
  const [count, setCount] = useState();
  
  function increment(){
    // these updates are batched together and processed at the same time on the current state
    setCount(count +1);
    setCount(count +1);
    setCount(count +1);
    setCount(count +1);
    // count will = 1 after the batch update
    
    // forces an update
    setCount(c => c +1);
    setCount(c => c +1);
    setCount(c => c +1);
    // count will equal 3 as an update is performed for each function execution =>
    // typically a new variable name is used in this case the first letter of the original variable

    // function update shuld be used where poddable to harden your code.

  }

  const [car, setCar] = useState({year: 2024, make: "Ford", model: "Raptor"});

  function handleYearChange(event){
    setCar(c => ({...c, year: event.target.value}));
  }
  function handleMakeChange(event){
    setCar(c => ({...c, make: event.target.value}));
  }
  function handleModelChange(event){
    setCar(c => ({...c, model: event.target.value}));
  }
 

  const [foods, setFoods] = useState(["Apple","Orange","Bannana"]);

  function handleAddFood(){
    const newFood = document.getElementById("foodInput").value;
    document.getElementById("foodInput").value = "";
    setFoods(f => [...f, newFood]);
  }
  function handleRemoveFood(index){
    // an underscore for a element name means we are ignoring the element and reanming the index variable to i
    // foods.filter((element,index) => condition) 
    setFoods(foods.filter((_, i) => i !== index ))
  }



  const [cars, setCars] = useState([]);
  const [carYear, setCarYear] = useState(new Date().getFullYear());
  const [carMake ,setCarMake] = useState("");
  const [carModel , setCarModel]= useState("");

  function handleAddCar(){
    const newCar = {year: carYear,make: carMake,model: carModel}
    setCars(c =>[...c, newCar]);
    setCarYear(new Date().getFullYear());
    setCarMake("");
    setCarModel("");

  }
  function handleRemoveCar(index){
    setCars(cars.filter((_,i)=> i !== index ));

  }
  function handleYearChange(event){
    setCarYear(event.target.value);
  }
  function handleMakeChange(event){
    setCarMake(event.target.value);
  }
  function handleModelChange(event){
    setCarModel(event.target.value);
  }



  return (
    <>
      <div>
        <p>
          Your favorite  car is : {car.year} {car.make} {car.model}
        </p>
        <input type="number" name={car.year} value={car.year} onChange={handleYearChange}/><br/>
        <input type="string" name={car.make} value={car.make} onChange={handleMakeChange}/><br/>
        <input type="string" name={car.model} value={car.model} onChange={handleModelChange}/><br/>
      </div>

      <br/>
      <br/>
      
      <div>
        <h2>List of fod</h2>
        <ul>
          {foods.map((food, index)=> 
            <li key={index} onClick={() => handleRemoveFood(index)}>
              {food} 
            </li>)}
        </ul>
        <input type="text" id="foodInput" placeholder="Enter food name"/>
        <button onClick={handleAddFood}>Add Food</button>
     </div>
      

      
    <br/>
    <br/>

    <div>
       <h2>List of car objects</h2>
       <ul>
          {cars.map((car,index) => <li key={index} onClick={() => handleRemoveCar(index)}> {car.year} {car.make} {car.model}</li>)}
       </ul>
       <input type="number" value={carYear} onChange={handleYearChange}/><br />
       <input type="text" value={carMake} onChange={handleMakeChange} placeholder="Enter a make"/><br />
       <input type="text" value={carModel} onChange={handleModelChange}placeholder="Enter a model"/><br />
       <div>
        <p>Car to add  </p>
        <p>year:{carYear}</p>
        <p>make:{carMake}</p>
        <p> model:{carModel}</p>
        <button onClick={handleAddCar}>Add car</button>
       </div>
     </div>
    </>
  )
}

export default App