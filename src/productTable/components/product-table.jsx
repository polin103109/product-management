import './product-table.css';

const products = [
    {
      id:1,
      name:"laptop",
      price:1000000,
    },
    {
        id:1,
        name:"laptop",
        price:1000000,
      },
      {
        id:1,
        name:"laptop",
        price:1000000,
      },
];

function renderRow(product){
    return (
        <tr key={product.id}>
            <td>{product.id}</td>
            <td>{product.name}</td>
            <td>{product.price}</td>


        </tr>

    )
}
function ProductTable() {
    return <div className="productTable-container">
        <table className='productTable'>
            <thead>  
                <tr>
                    <td>Product ID</td>
                    <td>Product name</td>
                    <td>price</td>
                    <td>Edit</td>
                    <td>Delete</td>
                </tr> 
                </thead>
            <tbody>
              {products.map((product) => renderRow(product))}
            </tbody>
        </table>
    </div>;
  }
 export default ProductTable;