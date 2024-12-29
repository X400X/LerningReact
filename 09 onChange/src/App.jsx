import { useState } from "react";

function App() {

  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [comment, setComment] = useState("");
  const [payment, setPayment] = useState();
  const [shipping, setShipping] = useState("Delivery");

  const updateInput = (event)=>{
    setName(event.target.value);
  }
  const handleQuantityChange = (event) => {
    setQuantity(event.target.value);
  }
  const handleCommentChange = (event) => {
    setComment(event.target.value);
  }
  function handlePaymentChange(event){
    setPayment(event.target.value)
  }
  function handleShippingChange(event){
    setShipping(event.target.value)
  }
 
  return (
    <>
      <div>
        <input value={name} onChange={updateInput} /> 
        <p>Name: {name}</p>
       
      </div>
      <div>
        <input value={quantity} onChange={handleQuantityChange} type="number" />
        <p> Quantity :{quantity}</p>
      </div>
      <div>
        <textarea value={comment} onChange={handleCommentChange} placeholder="Enter your comment..." />
        <p>Note: {comment}</p>
      </div>
      <div>
        <select value={payment} onChange={handlePaymentChange}>
          <option value="">Select an option</option>
          <option value="Visa">Visa</option>
          <option value="MasterCard">MasterCard</option>
          <option value="GiftCard">GiftCard</option>
        </select>
        <p>Payment type:{payment}</p>
      </div>
      <div>
        <label>
          <input type="radio" value="Pick Up" checked={shipping === "Pick Up"} onChange={handleShippingChange} />
          Pick up.
        </label><br/>
        <label>
          <input type="radio" value="Delivery" checked={shipping === "Delivery"} onChange={handleShippingChange} /> 
          Delivery.
        </label>
        <p>Shipping :{shipping}</p>
      </div>
      
    </>
  )
}

export default App