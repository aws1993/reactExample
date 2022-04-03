import React, { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import classes from "./AddUser.module.css"


const AddUser = props =>{
    const [enterUserName ,setEnterUserName] = useState('');
    const [enterAge ,setEnterAge] = useState('');
    const addUserHandler =(event)=>{
        event.preventDefault();
        if(enterUserName.trim().length === 0 || enterAge.trim().length === 0){
            return ;
        }
        if(+enterAge<1){
            return;
        }
        console.log(enterUserName ,enterAge);
        setEnterUserName('');
        setEnterAge('');
    }
    const UserChangeHandler =(event)=>{
        setEnterUserName(event.target.value);
    }
    const AgeChangeHandler =(event)=>{
        setEnterAge(event.target.value);
    }
    return(
        <Card>
          <form onSubmit={addUserHandler} className={classes.input}>
            <label htmlFor="username">Username</label>
            <input id="username" type="text" value={enterUserName} onChange={UserChangeHandler}/>
            <label htmlFor="age">Age(Years)</label>
            <input id="age" value={enterAge} type="number" onChange={AgeChangeHandler}/>
            <Button type="submit" >add user</Button>

          </form>
        </Card>
    );

};

export default AddUser;