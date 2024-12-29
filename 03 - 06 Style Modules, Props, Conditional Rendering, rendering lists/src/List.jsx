function List(props) {
    var listItems = null;
    var foodTitle = "";
    const foods = props.foods;
    const catagory = props.catagory;
    //fruits.sort((a,b) => a.name.localeCompare(b.name)); //Alpabetical sort
    //fruits.sort((a,b) => b.name.localeCompare(a.name)); //Alpabetical REVERSE sort
    //fruits.sort((a,b) => a.calories - b.calories)  // numeric order
    //fruits.sort((a,b) => b.calories - a.calories)  // numeric REVERSE order
    if (props.method == "byCal"){  
        createList(foods.sort((a,b) => a.calories - b.calories)); 
        foodTitle = "By Calories"
    }
    if (props.method == "lowCal"){
        const highCalFruits = foods.filter(food => food.calories < 100);
        createList(highCalFruits); 
        foodTitle = "Low Calories"
    }
    if (props.method == "highCal"){
        const highCalFruits = foods.filter(food => food.calories > 100);
        createList(highCalFruits); 
        foodTitle = "High Calories"
    }
    
    if (props.method == "all"){
        createList(foods);  
        foodTitle = "All"    
    }
    
    if (foods.length < 1) {
        foodTitle = "list is empty."
    }
    function createList (toListfoods) {
        listItems = toListfoods.map(food => 
            <li key={food.id}> {food.name} : &nbsp;  <b>{food.calories}</b></li>
        ); 
    }

    return ( 
        <>
            <h3 className="list-catagory">{catagory} {foodTitle}</h3>
            <ol className="list-items">
               {listItems} 
            </ol>            
        </>      
    );

}
List.defaultProps = {
    
    catagory: "Food",
    method: "all",
}
export default List;