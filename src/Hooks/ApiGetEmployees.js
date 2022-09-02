import React, {useState, useEffect} from 'react'
import axios from 'axios'

function ApiGetEmployees() {

    const [employees, setEmployees] = useState([]);
    const [id, setId] = useState();
    const [item, setItem] = useState({});

    useEffect(() => {
        axios.get("https://apitester.ir/api/Categories")
            .then(response => {
                setEmployees(response.data)
            })
            .catch(exp => {
                console.log(exp);
            })
    }, []);

    const findItem=()=> {
        axios.get(`https://apitester.ir/api/Categories/${id}`)
            .then(response=>{
                setItem(response.data)
            })
            .catch(exp=>{
                console.log(exp)
            })
    };

    return (
        <>
            <label> Search By id : </label>
            <input type='text' onChange={(e)=>setId(e.target.value)}></input>
            <button onClick={()=>findItem()}> Find me </button>
            <h1> Result of Search is : {item.categoryId} is {item.categoryName} - {item.description}</h1>

            <hr/>
            <h1> Employees List</h1>
                {
                    employees.map((item,index) => {
                        return (
                            <div key={index}>
                                <label >{item.categoryId}. {item.categoryName} - {item.description}</label>
                                <br/>
                            </div>
                        )
                    })
                }
        </>
    );
}

export default ApiGetEmployees;