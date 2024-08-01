import { useState } from 'react'
import { useEffect } from 'react'
import './App.css'
import axios from 'axios'

function App() {
  const [data, setData] = useState([])

  // GET

  /*
  useEffect(() => {
    axios.get('https://reqres.in/api/users?page=2')
    .then(res => setData(res.data.data))
    .catch(err => console.log(err));
  }, [])
  */

  // POST

  /*
  useEffect(() => {
    axios.post('https://reqres.in/api/users', {
      "name": "Haris",
      "job": "Frontend Developer"
    })
    .then(res => console.log(res))
    .catch(err => console.log(err));
  }, [])
  */

  // PUT

  /*
  useEffect(() => {
    axios.put('https://reqres.in/api/users/2', {
      "name": "Haris Yousaf",
      "job": "React Practice"
    })
    .then(res => console.log(res))
    .catch(err => console.log(err));
  }, [])
  */

  // DELETE
  /*
  useEffect(() => {
    axios.delete('https://reqres.in/api/users/2')
    .then(res => console.log(res))
    .catch(err => console.log(err));
  }, [])
  */

  return (
    <>
      <div>
        <h1>RESTFUL API PRACTICE</h1>
        <br /><br />
        {
          data.map((email, e) => {
            return <p key={e}>{email.email}</p>
          })
        }
      </div>
    </>
  )
}

export default App