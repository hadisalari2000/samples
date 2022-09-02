import React, {useState} from 'react'
import CheckBoxFunctionalComponent from "../Components/FunctionalComponent/CheckBoxFunctionalComponent";

function UseStateInputForm() {

    const [userList, setUserList] = useState([{key: -1, value: 'User_List'}]);

    const [user, setUser] = useState({
        firstName: '',
        lastName: '',
        age: ''
    });

    function handleChange(event) {
        const {name, value} = event.target;
        setUser({...user, [name]: value});
    }

    function insertUserHandleClick() {
        setUserList([...userList, {
            key: userList.length,
            value: `${user.firstName} ${user.lastName} is ${user.age} years old.`
        }]);
    }

    return (
        <>
            <h1>User Description : {user.firstName} {user.lastName} - {user.age} years old</h1>

            {/*<input name='firstName' value={user.firstName} onChange={(event) => {
                return setUser({...user, firstName: event.target.value})
            }}/>*/}

            <br/>
            <label>first Name</label>
            <input name='firstName' value={user.firstName} onChange={e => handleChange(e)}/>

            <br/>
            <label>last Name</label>
            <input name='lastName' value={user.lastName} onChange={e => handleChange(e)}/>

            <br/>
            <label>age</label>
            <input name='age' value={user.age} onChange={e => handleChange(e)}/>

            <br/>
            <button onClick={insertUserHandleClick}>Insert User</button>

            <br/>
            <br/>
            <ul>
                {
                    userList.map(item => {
                        /*return(<li key={item.key}>{item.value}</li>)*/
                        /*return(<div><input type="checkbox"/>{item.value}</div>)*/
                        /*return(<CheckBoxComponent key={item.key} user_index={item.key} checked={true} value={item.value}/>)*/
                        return (<CheckBoxFunctionalComponent key={item.key} user_index={item.key} checked={true}
                                                             value={item.value}/>)
                    })
                }
            </ul>
        </>
    )
}

export default UseStateInputForm