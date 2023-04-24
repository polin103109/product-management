function Formgroup({
    label,
    fieldName,
    onChange,
    type
 }){
     return (
         <div className='form-inputgrp'>
         <label>{`${label}:`}</label>
      <input name={fieldName} type={type}  onChange={onChange}  />
         </div>
        );
 }
export default Formgroup; 