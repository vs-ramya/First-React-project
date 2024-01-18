// Form.js
import React, { Fragment, useState } from "react";
import Card from './Card';

function Form(props) {
    const[enteredname,setenteredname]=useState('');
    const[enteredage,setenteredage]=useState('');
    function addEventHandler(event) {
        event.preventDefault();
        if(enteredname.trim().length===0 || enteredage.trim().length===0){
            return;

        }
        if(+enteredage<1){
            return;
        }
        //enteredname,enteredage are the values that are being being entered in the input forms
        props.onaddUser(enteredname,enteredage);
        //here it sets the form input empty after each submission of a value we don't have to use it 
        //if we don't want to be empty the form input
        setenteredname('')
        setenteredage('')

    }
    function addnameHandler(event) {
        setenteredname(event.target.value);
    }
    function addagehandler(event) {
        setenteredage(event.target.value);
    }
   

    return (
        <Fragment>
            {/* the below addeventhandler connects the above function with the event */}
            <Card>
                <div className="box">
                <form onSubmit={addEventHandler} className="centered-form">
                    <div className="form-center">
                    <label>Username:</label>
                    </div>
                    <div className="form-center">
                    <input type="text" value={enteredname} onChange={addnameHandler} />
                    </div>
                    <div className="form-center">
                    <label>Age(Years):</label>
                    </div>
                    <div className="form-center">
                    <input type="number" value={enteredage} onChange={addagehandler} />
                    </div>
                    <div className="form-center">
                    <button type="submit" className="button">Add User</button>
                    </div>
                </form>
                </div>
            </Card>
        </Fragment>
    );
}

export default Form;
