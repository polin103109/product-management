
import { useState } from 'react';
import Formgroup from '../formGroup/formGroup';
import './form.css';

function Form( {onAddProduct}){
  const [product,setProduct]= useState({
    id:0,
    name:"",
    price:0,
  });
   
function handleFormSubmit(event){
    event.preventDefault();
    console.log(product);
    onAddProduct(product);
   }
function handleOnChange(e){
   product[e.target.name] = e.target.value;
   setProduct(product);
}
    return (
    <div className="form-container">
        <form class="product-form" onSubmit={handleFormSubmit}>
          <Formgroup label="Product ID"  fieldName="id" type="number" onChange={handleOnChange} />
          <Formgroup label="Product Name"  fieldName="name" type="text" onChange={handleOnChange}/>
          <Formgroup label="Product Price"  fieldName="price" type="number" onChange={handleOnChange}/>

          <div className='product-form-footer'>
            <input type="reset" value="Reset"/>
            <input type="submit" value="Submit"/>
          </div>
        </form>
    </div>
    );
  }
export default Form;