import './App.css';


function wMyButton() {
  return (
    <button>
      I'm a button
    </button>
  );
}
  


const products = [
  { title: 'Cabbage', isFruit: false, id: 1 },
  { title: 'Garlic', isFruit: false, id: 2 },
  { title: 'Apple', isFruit: true, id: 3 },
];


const listItems = products.map(product =>
  <li
    key={product.id}
    style={{
      color: product.isFruit ? 'magenta' : 'darkgreen'
    }}
  >
    {product.title}
  </li>
);



function MyButton() {
  function handleClick() {
    alert('You clicked me!');
  }

  return (
    <button onClick={handleClick}>
      Click me
    </button>
  );
}


//states in reat are used to manage the current situatuion of a component 


function App() {
  return (
    <div>
      <h1>Welcome to my app</h1>
      <MyButton />
      <ul>{listItems}</ul>
    </div>
  );
}

export default App;
