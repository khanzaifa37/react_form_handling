import React from 'react';


const Button = (props) => {
    
    const submit=(submit)=>{
        return submit?
        <input type="submit" value ={props.text} className="btn" style={{
            background:props.bgcolor,
            color:props.color,
            margin:"10px"
        }} />
        :
        <div className="btn" style={{
            background:props.bgcolor,
            color:props.color,
            margin:"10px"
        }}>
        {props.text}
        </div>
    }
    
    return (
        submit(props.submit)
    )
};



export default Button;