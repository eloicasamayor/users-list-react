import React, {useState} from 'react';

import './AddUser.css';
import Button from '../UI/Button';
import Card from '../UI/Card';

const AddUser = (props) => {
    const [enteredUsername, setEnteredUsername] = useState('');
    const [enteredAge, setEnteredAge] = useState('');

    const addUserHandler = (event) => {
        event.preventDefault();
        if(enteredUsername.trim().length === 0 || enteredAge.trim().length === 0){
            if(+enteredAge < 1){
                console.log('Age must be >1');
                return;
            }
            console.log('No input can be empty');
           return;
        }
        props.onAddUser(enteredUsername, enteredAge);
        setEnteredUsername('');
        setEnteredAge('');
        
    }

    const usernameChangeHandler = (event) => {
        setEnteredUsername(event.target.value);
    };

    const ageChangeHandler = (event) => {
        setEnteredAge(event.target.value);
    };

    return (
    <Card className='addUserForm'>
        <form onSubmit={addUserHandler}>
            <label className='formItems'>Username</label> 
            <input id="username" type="text"  value={enteredUsername} onChange={usernameChangeHandler}/>
            <label className='formItems'>Age (Years)</label> 
            <input id="age" type="number" value={enteredAge} onChange={ageChangeHandler}/>
            <Button type="submit">Add User</Button>
        </form>
    </Card>)
}

export default AddUser;