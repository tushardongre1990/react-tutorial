import { useState } from "react";

const Form = ({ onAddItems }) => {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);
  /*  moved to <App/>
  
    const [items, setItems] = useState([]);
    function handleAddItems() {
      setItems((item) => [...items, item]);
    }
    */

  function handleSubmit(e) {
    e.preventDefault();

    if (!description) return;

    const newItem = {
      description,
      quantity,
      packed: false,
      id: Date.now(),
    };

    /*
      But this newl added item is not being rendered.
      Rendering is done in <PackingList/>
      <PackingList/> is sibling of <Form />
      so move const [items, setItems] = useState([]) to the closest parent of <Form/> and <PackingList/> which is <App/>
      */

    console.log(newItem);
    onAddItems(newItem);

    setDescription("");
    setQuantity(1);
  }
  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your 😍 trip.</h3>
      <select
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item ..."
        value={description}
        onChange={(e) => {
          console.log(e.target.value);
          setDescription(e.target.value);
        }}
      />
      <button>Add</button>
    </form>
  );
};

export default Form;
