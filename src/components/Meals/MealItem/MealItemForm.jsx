import { useContext } from "react";
import classes from "./MealItemForm.module.css";
import Input from "../../UI/Input";
import CartContext from "../../../store/cart-context";

const MealItemForm = (props) => {
  const cartContext = useContext(CartContext);

  const onFormSubmit = (event) => {
    cartContext.addItem({ amount: 2 });
    event.preventDefault();
  };

  return (
    <form className={classes.form} onSubmit={onFormSubmit}>
      <Input
        label="Amount"
        input={{
          id: `amount_${props.id}`,
          type: "number",
          min: 1,
          max: 5,
          step: 1,
          defaultValue: 1
        }}
      />
      <button type="submit">+ Add</button>
    </form>
  );
};

export default MealItemForm;
