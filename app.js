// const App = () => <div>Some cliche salutation</div>;

// ReactDOM.render(
//   <App />,
//   document.getElementById('app')
// );


const { useState } = React;

const IndividualIngredient = (props) => {
  const [isBold, setIsBold] = useState(false);
  const style = {
    fontWeight: isBold ? 'bold' : 'normal',
    color: isBold? 'goldenrod': 'black',
  };
  return (
    <li style = {style} onMouseOver = {() => setIsBold(!isBold)}>{props.ingredient}</li>
  )
};

/*WORKS*/
// const ItemsNeeded = (props) => (
//   <ul>
//     {props.items.map((ingredient) => (
//       <IndividualIngredient ingredient = {ingredient} />
//     ))}
//   </ul>
// );

/*WORKS*/
function ItemsNeeded(props) {
  return (
    <ul>
      {props.items.map((ingredient) => (
        <IndividualIngredient ingredient = {ingredient} />
      ))}
    </ul>
  )
}
/*WORKS*/
const GroceryList = () => (
  <div>
    <h2>Vicky's Grocery List</h2>
    <ItemsNeeded items={['Milk', 'Juice', 'Cheese']} />
  </div>
);

/*DOESN'T WORK -- is it because the parent format needs to formatted a specific way?*/
// const Grocerylist = function() {
//   return (
//     <div>
//      <h2>Vicky's Grocery List</h2>
//      <ItemsNeeded items={['Milk', 'Juice', 'Cheese']} />
//    </div>
//   )
// };

ReactDOM.render(
  <GroceryList/>,
  document.getElementById('app')
);