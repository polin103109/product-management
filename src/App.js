import { Header } from "./header/components";
import "./App.css";
import { ProductTable } from "./productTable/components";
import { Form } from "./form/components";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="main">
        <ProductTable />
        <Form />
      </div>
    </div>
  );
}

export default App;
