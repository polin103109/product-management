import './form.css';

function Form() {
    return <div className="form-container">
        <form class="product-form">
            <div className='form-inputgrp'>
            <label>Product ID: </label>
         <input name='id' type={'number'}/>
            </div>
           
        </form>
    </div>;
  }
export default Form;