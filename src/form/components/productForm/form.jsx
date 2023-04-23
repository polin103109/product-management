import Formgroup from '../formGroup/formGroup';
import './form.css';

function Form(){
    return (
    <div className="form-container">
        <form class="product-form">
          <Formgroup label="Product ID"  fieldName="id" type="number"/>
          <Formgroup label="Product Name"  fieldName="name" type="text"/>
          <Formgroup label="Product Price"  fieldName="number" type="number"/>
          <div className='product-form-footer'>
            <input type="reset" value="Reset"/>
            <input type="submit" value="Submit"/>
          </div>
        </form>
    </div>
    );
  }
export default Form;