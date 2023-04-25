
import './product-table.css';

function ProductTable ({tableData})  {
    let rows = [];
    if (Array.isArray(tableData)) {
        rows = tableData.map((data)=>
        {
       return (
        <tr key={data.id}>
        <td>{data.id}</td>
        <td>{data.name}</td>
        <td>{data.price}</td>
 </tr>
   
   )
})

}
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
            <tbody>{rows} </tbody>
        </table>
    </div>
    );
  }

export default ProductTable;