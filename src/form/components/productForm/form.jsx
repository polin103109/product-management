import { useState } from 'react';
import Formgroup from '../formGroup/formGroup';
import './form.css';
import ProductTable from '../../../productTable/components/product-table';

function Form(){
  const [tableData,setTableData]= useState([]);
  const [product,setProduct]= useState({
    id:'',
    name:"",
    price:'',
  }
  );
   
function handleFormSubmit(event){
    event.preventDefault();
  if (product.id.trim() === '' || product.name.trim() === '' || product.price.trim() === '') {
    alert('Please fill out all fields');
    return;
  }
else{
  const duplicateId = tableData.find((data) => data.id === product.id);
  if (duplicateId) {
    alert(`Product with ID ${duplicateId.id} already exists`);
    return;
  }
  // if (tableData.some((data) => data.id === product.id)) {
  //    alert('ID is duplicate');
  //     return;
  //   }
}

  const checkEmptyInput = !Object.values(product).every(res=>res==="")
    if(checkEmptyInput){
      const newData = (data) => (
        [...data,product])
        setTableData(newData(tableData));
        setProduct({ id: '', name: '', price: '' });
        // setTableData(newData );
        // const emptyInput = {
        //   id:'',
        //   name:"",
        //   price:'',
        // }
        
        // setProduct(emptyInput )
    }
    }
    
   
// function handleOnChange(e){
//   const newInput = (data) =>(
//     {...data,
//    [e.target.name]:e.target.value});
//    setProduct(newInput);
//     }
    function handleOnChange(e){
      const newInput = (data) => ({...data, [e.target.name]:e.target.value});
      setProduct(newInput(product));
    }
    return (
    <div className="total-div">
      <div className='form-container'>
        <form class="product-form" onSubmit={handleFormSubmit}>
          <Formgroup label="Product ID"   fieldName="id" type="number" onChange={handleOnChange} value={product.id} />
          <Formgroup label="Product Name"   fieldName="name" type="text" onChange={handleOnChange} value={product.name}/>
          <Formgroup label="Product Price"   fieldName="price" type="number" onChange={handleOnChange} value={product.price}/>

          <div className='product-form-footer'>
            <input type="reset" value="Reset"/>
            <input type="submit" value="Submit"/>
          </div>
          </form>
          </div>
        <div className='table-data'>
          <p>Product Table</p>
        <ProductTable tableData={tableData}/>
        </div>
        </div>
    
    );
  }
export default Form;
