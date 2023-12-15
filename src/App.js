import React,{useState} from 'react'

const App = () => {
  const [data,setData] = useState({
    firstname:'',
    lastname:'',
    gender:'',
    DOB:'',
    education:'',
    username:'',
    email:'',
    password:'',
    confirmPassword:''
  })
  const {firstname,lastname,gender,DOB,education,username,email,password,confirmPassword}=data;
  const changeHandler = e => {
    setData({...data,[e.target.name]:e.target.value})
  }
  const submitHandler = e => {
    e.preventDefault();
    if(username.length<=5){
      alert("username must be at least 5 characters");
    }
    else if(password !== confirmPassword){
      alert("passwords are not matching");
    }
    else {
      console.log(data);
    }
  }
  return (
    <div>
      <center>
       <form onSubmit={submitHandler}>
       <input type="firstname" name="firstname" value={firstname} onChange={changeHandler} placeholder="FirstName"/> <br/>
       <input type="lastname" name="lastname" value={lastname} onChange={changeHandler} placeholder="LastName"/> <br/>
       <input type="gender" name="gender" value={gender} onChange={changeHandler} placeholder="Gender"/> <br/>
       <input type="DOB" name="DOB" value={DOB} onChange={changeHandler} placeholder="DOB"/> <br/>
       <input type="education" name="education" value={education} onChange={changeHandler} placeholder="Education"/> <br/>
        <input type="text" name="username" value={username} onChange={changeHandler} placeholder="username"/> <br/>
        <input type="email" name="email" value={email} onChange={changeHandler} placeholder="email"/> <br/>
        <input type="password" name="password" value={password} onChange={changeHandler} placeholder="password"/> <br/>
        <input type="password" name="confirmPassword" value={confirmPassword} onChange={changeHandler} placeholder="confirm password"/> <br/>
        {password !== confirmPassword ?<p style={{"color":"red"}}>Passwords are not matching</p>:null}
        <input type='submit' name='submit'/>
       </form>
      </center>
    </div>
  )
}

export default App;
