
import './product-table.css';


function ProductTable (props)  {
    const products = props.products;

    function renderRow (product)  {
        return (
            <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.price}</td>
         </tr>
      );
    }
    // if (!Array.isArray(products)) {
    //     return <div>Products must be an array</div>;
    // }
    
    return (
    <div className="productTable-container">
        <table className='productTable'>
            <thead>  
                <tr>
                    <td>Product ID</td>
                    <td>Product name</td>
                    <td>price</td>
                </tr> 
                </thead>
            <tbody>{products.map((product)=> renderRow(product)) }</tbody>
        </table>
    </div>
    );
  }
 export default ProductTable;