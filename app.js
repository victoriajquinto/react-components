// const App = () => <div>Some cliche salutation</div>;

// ReactDOM.render(
//   <App />,
//   document.getElementById('app')
// );

// Here we create a `TodoList` component

const { useState } = React;

// const IndividualIngredient = (props) => <li>{props.ingredient}</li>

const IndividualIngredient = (props) => {
  const [isBold, setIsBold] = useState(false);
  const style = {
    fontWeight: isBold ? 'bold' : 'normal',
  };
  return (
    <li style = {style} onMouseOver = {() => setIsBold(!isBold)}>{props.ingredient}</li>
  )
}


const ItemsNeeded = (props) => (
  <ul>
    {props.items.map((ingredient) => (
      <IndividualIngredient ingredient = {ingredient} />
    ))}
  </ul>
)


const GroceryList = () => (
  <div>
    <h2>Vicky's Grocery List</h2>
    <ItemsNeeded items={['Milk', 'Juice', 'Cheese']} />
  </div>
);


ReactDOM.render(
  <GroceryList/>,
  document.getElementById('app')
);