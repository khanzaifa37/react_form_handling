import React, { Component } from 'react';
import FormFields from './widgets/Forms/formFields';
import Button from './widgets/button';
import {firebaseDB} from '../firebase';

class User extends Component {
    state={
        formData:{
            name:{
                config:{
                    name:"name_input",
                    type:"text",
                    placeholder:"Enter your name",
                },
            label:true,
            labelText:"Name",
            value:"",
            element:"input",
            validation:{
                required:true,
                minlen:5
            },
            valid:false,
            touched:false,
            validationMessage:''
            },
            lastName:{
                config:{
                    name:"lastname_input",
                    type:"text",
                    placeholder:"Enter your Lastname",
                },
            label:true,
            labelText:"Last Name",
            value:"",
            element:"input",
            validation:{
                required:false
            },
            valid:true,
            touched:false,
            validationMessage:''
            },
            message:{
                config:{
                    name:"message_input",
                    rows:4,
                    cols:36
                },
            label:true,
            labelText:"Message",
            value:"",
            element:"textarea",
            validation: {
                required: false
            },
            valid: true,
            touched: false,
            validationMessage: ''
            },
            age:{
                config:{
                    name:"age_input",
                    options:[
                        {val:1,text:"10-20"},
                        {val:2,text:"20-30"},
                        {val:3,text:"30+"},
                    ]
                },
            label:true,
            labelText:"Age",
            value:"",
            element:"select",
            validation: {
                required: false
            },
            valid: true,
            touched: false,
            validationMessage: ''
            }
        }
    }

    updateForm=(newState)=>{
        this.setState({
            formData:newState
        });
    }

    submitForm=(event)=>{
        event.preventDefault();
        let dataToSubmit={};
        let formIsValid=true;
        for (let key in this.state.formData){
            dataToSubmit[key]=this.state.formData[key].value;
        }
        for(let key in this.state.formData){
            formIsValid=this.state.formData[key].valid && formIsValid;
        }
        
        if(formIsValid){
            firebaseDB.ref('users').push(dataToSubmit)
            .then(()=>{
                console.log("New user added");
            }).catch((e)=>{
                console.log(e);
            })
        }
    }

    render() {
        return (
            <div className="container">
                <form onSubmit={this.submitForm}>
                    <FormFields 
                        formData={this.state.formData} 
                        change={(newState)=>this.updateForm(newState)}    
                    />


                    <Button submit={true} bgcolor="#2A00C3" color="#fff" text="Submit" />
                </form>
               
            </div>
        );
    }
}

export default User;