import { Form } from "react-bootstrap";
import React, { useState } from "react";

function Purchase({ id }) {
  const [itemQuantity, setItemQuantity] = useState({
    quantity: 0,
  });

  const handleChange = (e) => {
    const { value } = e.target;
    setItemQuantity(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here, e.g., send data to the server or perform client-side validation.
    console.log(itemQuantity);
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit} id={id}>
        <div className="mb-3">
          <Form.Select
            aria-label="Default select example"
            onChange={handleChange}
            id="quantity"
          >
            <option>Quantity</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </Form.Select>
        </div>
        <button type="submit" className="btn btn-primary">
          Buy me!
        </button>
      </form>
    </div>
  );
}

export default Purchase;
