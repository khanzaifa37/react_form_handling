import React from 'react';

const FormFields = (props) => {
    
    const renderFields=()=>{
        let formArray=[];
        for(let elementName in props.formData){
            formArray.push({
                id:elementName,
                settings:props.formData[elementName]
            })
        }
        
        return formArray.map((item,i)=>{
            return(
                <div key={i} className="form_element">
                    {renderTemplates(item)}
                </div>
            )
        })
    }

    const showLabel=(label,labelText)=>{
    return (label)
    ?<label>{labelText}</label>
    :null
    }

    const validate=(element)=>{
        let error=[true,''];
        console.log(element);
        if(element.validation.minlen) {
            const valid = element.value.length >= element.validation.minlen;
            const message = `${ !valid ? 'Must be grater or equal than ' + element.validation.minlen: ''}`

            error = !valid ? [valid,message] : error;
        }
        if(element.validation.required){
            const valid=(element.value.trim() !== '' );            
            const message=`${!valid ? 'This field is required':''}`
            
            error=!valid ? [valid,message] :error;
        }
        return error;
    }

    const changeHandler=(event,id)=>{
        const newState=props.formData;
        newState[id].value=event.target.value;
        let validData = validate(newState[id]);
        newState[id].valid=validData[0];
        newState[id].validationMessage=validData[1];
        props.change(newState);
    }

    const showValidation=(data)=>{
        
        let errorMessage=null;
        if(data.validation && !data.valid)
        {
            errorMessage=(
                <div className="label_error">
                    {data.validationMessage}
                </div>
            )
        }
        return errorMessage;
    }

    const renderTemplates = (data)=>{
        let formTemplate=''
        let fieldName=data.id
        let values=data.settings
        switch(values.element){
            case('input'):
                formTemplate=(
                    <div>
                        {showLabel(values.label,values.labelText)}<br/>
                        <input {... values.config} 
                            value={values.value} 
                            onChange={
                                (event)=>changeHandler(event,fieldName)
                            }
                            
                        />
                        {showValidation(values)}
                    </div>
                )
                break;
            case('textarea'):
                formTemplate=(
                    <div>
                        {showLabel(values.label,values.labelText)}<br/>
                        <textarea 
                            {...values.config}
                            value={values.value}
                            onChange={
                                (event)=>changeHandler(event,fieldName)
                            }
                        />
                    </div>
                )
                break;
            case('select'):
                formTemplate=(
                    <div>
                        {showLabel(values.label,values.labelText)}<br/>
                        <select
                            name={values.config.name}
                            value={values.value}
                            onChange={
                                (event)=>changeHandler(event,fieldName)
                            }
                        >
                            {values.config.options.map((item,i)=>(
                                <option key={i} value={item.val}>
                                    {item.text}
                                </option>
                            ))}
                        </select>
                    </div>
                )
                break;
            default:
                formTemplate=null;
        }
        
        return formTemplate;
    }
    
    return (
        <div>
            {renderFields()}
        </div>
    );
};

export default FormFields;