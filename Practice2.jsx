import { useEffect, useState } from "react";

function Practice2(){
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [number, setNumber] = useState("");

    function saveUser(){
        console.warn({name, email, number});
        let data = {name, email, number}
        fetch('https://reqres.in/api/users' , {
            method: 'POST',
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
            body: JSON.stringify(data)
        }).then((result) => {
            console.warn('result', result);
        })
    }

    return(
        <div>
            <h1>Form POST API</h1>
            <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} /> <br /><br />
            <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} /> <br /><br />
            <input type="number" placeholder="Number" value={number} onChange={(e) => setNumber(e.target.value)} /> <br /><br />

            <button onClick={saveUser}>Add User</button>
        </div>
    )
}

export default Practice2