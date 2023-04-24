import { Header } from "./header/components";
import "./App.css";
import { ProductTable } from "./productTable/components";
import { Form } from "./form/components";

function App() {
  const products = [
    {
      id: 1,
      name: "laptop",
      price: 1000000,
    },
    {
      id: 2,
      name: "bike",
      price: 100000000,
    },
  ];
  return (
    <div className="App">
      <Header />
      <div className="main">
        <ProductTable products={products} />
        <Form />
      </div>
    </div>
  );
}

export default App;
