import {useState} from "react";
import './ItemCounter.css'
type Props = {
  name: string;
  quantity?: number;
};

export const ItemCounter = ({ name, quantity = 1 }: Props) => {
  const [count, setQuantity] = useState<number>(quantity);
  const handleAdd = () => {
    setQuantity(count + 1);
  };
  const handleSubtract = () => {
    if (count === 1) return;
    setQuantity(count - 1);
  };
  return (
    <section
      className ="item-row"
    >
      <span
        className="item-text"
      >
        {name}
      </span>
      <button onClick={handleAdd}>+1</button>
      <span>{count}</span>
      <button onClick={handleSubtract}>-1</button>
    </section>
  );
};
