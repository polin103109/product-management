import { useState } from 'react';
import Formgroup from '../formGroup/formGroup';
import './form.css';

function Form(onAddProduct){
    const [product,setProduct] = useState();


 function handleFormSubmit(event){
    event.preventDefault();
    onAddProduct(product);
   }

   function handleOnChange(e){
    // product[e.target.name] = e.target.value;
    console.log(e);
    // setProduct(product);


   }
    return (
    <div className="form-container">
        <form class="product-form" onSubmit={handleFormSubmit}>
          <Formgroup label="Product ID"  fieldName="id" type="number" onChange={handleOnChange}/>
          <Formgroup label="Product Name"  fieldName="name" type="text"onChange={handleOnChange}/>
          <Formgroup label="Product Price"  fieldName="number" type="number"onChange={handleOnChange}/>
          <div className='product-form-footer'>
            <input type="reset" value="Reset"/>
            <input type="submit" value="Submit"/>
          </div>
        </form>
    </div>
    );
  }
export default Form;