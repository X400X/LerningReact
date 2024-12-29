import {useState} from 'react';

function ColorPicker (){

    const [color,setColor] = useState("#FFFFFF");

    function handleColorChange(event){
        setColor(event.target.value);
    }

    return (
        <>
            <div className="color-picker-container">
                <h1>Color Picker</h1>
                <div className="color-display" style={{backgroundColor: color}} >
                    <p>Selected Color</p>
                    <p>{color}</p>
                </div>
                <div className="color-selector">
                    <label>Select a color</label>
                    <input type="color" value={color} onChange={handleColorChange}/>

                </div>
            </div>
        </>
    );
}
export default ColorPicker