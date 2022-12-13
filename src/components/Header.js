import { useState, useEffect, useRef } from "react"
import './Header.css'
import { Googleinfo_API } from "../global/Constants"

const Header = () => {

  const[user,setUser] = useState([]);

  async function fetchgoogleinfo(token){
    fetch(Googleinfo_API+token)
        .then(res => res.json())
        .then(user => {
          console.log(user);
          setUser(user);
          document.getElementById("signInDiv").hidden = true;
        })
    
}

  function handleSignOut(event){
    setUser([]);
    document.getElementById("signInDiv").hidden = false;
  }
  
  function handleCallbackResponse(response){
    console.log("Encoded JWT ID token: " + response.credential);
    //傳token到後端
    fetchgoogleinfo(response.credential);

  }
  //初始化google登入
  useEffect(() => {
    /* global google */
    google.accounts.id.initialize({
      client_id: "",
      callback: handleCallbackResponse
   });

   google.accounts.id.renderButton(
    document.getElementById("signInDiv"),
    { theme: "outline", size: "large"}
   )
  }, []);


    return(
        <header>
  <div className="navbar navbar-dark bg-dark shadow-sm ">
    <div className="container ">
      <a href="#" className="navbar-brand d-flex align-items-center">
        <strong>Movie</strong>
      </a>
      {user.length != 0 &&
      <a href="#" onClick={ (e)=> handleSignOut(e)} className="navbar-brand d-flex align-items-center"> 登出</a>
      }
      {user &&
      <a className="navbar-brand d-flex align-items-center">
      <strong id="signInDiv"></strong>
      <img className="loginImg"  src={user.picture} ></img>
      <strong >{user.name}</strong>
      </a>
      }
    </div>
  </div>
</header>

    );
}

export default Header