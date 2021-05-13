import './form-input.scss'

const FormInput=({label, handleChange, ...otherInputProps})=>{
    return(
        <div className="group">
            <input className= 'form-input' onChange={handleChange} {...otherInputProps}/>
            {
                label? (<label className={`${otherInputProps.value.length ? 'shrink' : ''} form-label`}>{label}</label>) 
                : null
            }           
        </div>
        )
}
export default FormInput;