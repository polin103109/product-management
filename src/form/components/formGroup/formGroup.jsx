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
export default Formgroup; 