
import { useState } from 'react';
import Formgroup from '../formGroup/formGroup';
import './form.css';

function Form( {onAddProduct}){
  const [tableData,setTableData]= usestate([]);
  const [product,setProduct]= useState({
    id:'',
    name:"",
    price:'',
  }
  );
   
function handleFormSubmit(event){
    event.preventDefault();
    const checkEmptyInput = !Object.values(product).every(res=>res==="")
    if(checkEmptyInput){
      const newData = (data) => (
        [...data,product])
        setTableData(newData );
        const emptyInput = {
          id:'',
          name:"",
          price:'',
        }
        setProduct(emptyInput )
    }
    }
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