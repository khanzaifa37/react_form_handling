import React,{Component} from 'react';
import Button from '../components/widgets/button';
class Controlled extends Component{
    
    state={
        name:'',
        lastname:''
    }
    
    handleNameChange=(event)=>{
        this.setState({
            name:event.target.value
        })
    }

    handleLastnameChange=(event)=>{
        this.setState({
            lastname:event.target.value
        })
    }


    onSubmitHandler=(event)=>{
        event.preventDefault();
        console.log(this.state);
    }

    
    render(){
        // console.log(this.state);
    return(
        <div className=" container">
            <form onSubmit={this.onSubmitHandler}>
                <div className="form_element" >
                    <label >First Name</label>
                    <input type="text" onChange={this.handleNameChange} value={this.state.name} />
                </div>
                <div className="form_element" >
                    <label >Last Name</label>
                    <input type="text" name="lastName" onChange={this.handleLastnameChange} value={this.state.lastname}/>
                </div>
                <div>
                <Button submit={true} bgcolor="#2A00C3" color="#fff" text="Submit" />
                </div>
            </form>
        </div>
    )
    }
}

export default Controlled;