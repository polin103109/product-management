import './form.css';
function Formgroup({
   label,
   fieldName,
   type
}){
    return (
        <div className='form-inputgrp'>
        <label>{`${label}:`}</label>
     <input name={fieldName} type={type}/>
        </div>
       );
}


function Form(){
    return (
    <div className="form-container">
        <form class="product-form">
          <Formgroup label="Product ID"  fieldName="id" type="number"/>
          <Formgroup label="Product Name"  fieldName="name" type="text"/>
          <Formgroup label="Product Price"  fieldName="number" type="number"/>
        </form>
    </div>
    );
  }
export default Form;