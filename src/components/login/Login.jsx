
import  './login.css'
import { useEffect, useState } from 'react'

const Login = () => {
    const [showRegister, setshowRegister] = useState(false);
useEffect(() => {
    const content = document.querySelector(".container");
    if(showRegister === true){
        content.classList.add('sign-up-mode')
    }
    if(showRegister === false){
        content.classList.remove('sign-up-mode')
    }

}, [showRegister]);
  return (
    <div className="container" >
    <div className="forms-container">
      <div className="signin-signup">
                    <form action="#" className="sign-in-form">
                    <h2 className="title">Sign in</h2>
                    <div className="input-field">
                      <i className="icon-user"></i>
                      <input type="text" placeholder="Username" />
                    </div>
                    <div className="input-field">
                      <i className="icon-lock-closed"></i>
                      <input type="password" placeholder="Password" />
                    </div>
                    <input type="submit" value="Login" className="btn solid" />
                    <p className="social-text">Or Sign in with social platforms</p>
                    <div className="social-media">
                      <a href="#" className="social-icon">
                        <i className="icon-facebook1"></i>
                      </a>
                      <a href="#" className="social-icon">
                        <i className="icon-instagram"></i>
                      </a>
                      <a href="#" className="social-icon">
                        <i className="icon-whatsapp"></i>
                      </a>
                      <a href="#" className="social-icon">
                        <i className="icon-github"></i>
                      </a>
                    </div>
                  </form>
                    <form action="#" className="sign-up-form">
                    <h2 className="title">Sign up</h2>
                    <div className="input-field">
                      <i className="icon-user"></i>
                      <input type="text" placeholder="Username" />
                    </div>
                    <div className="input-field">
                      <i className="icon-alternate_email"></i>
                      <input type="email" placeholder="Email" />
                    </div>
                    <div className="input-field">
                      <i className="icon-vpn_key"></i>
                      <input type="password" placeholder="Password" />
                    </div>
                    <input type="submit" className="btn" value="Sign up" />
                    <p className="social-text">Or Sign up with social platforms</p>
                    <div className="social-media">
                      <a href="#" className="social-icon">
                        <i className="icon-facebook1"></i>
                      </a>
                      <a href="#" className="social-icon">
                        <i className="icon-instagram"></i>
                      </a>
                      <a href="#" className="social-icon">
                        <i className="icon-whatsapp"></i>
                      </a>
                      <a href="#" className="social-icon">
                        <i className="icon-github"></i>
                      </a>
                    </div>
                  </form>
      </div>
    </div>

    <div className="panels-container">
      <div className="panel left-panel">
        <div className="content">
          <h3>New here ?</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis,
            ex ratione. Aliquid!
          </p>
          <button className="btn transparent" id="sign-up-btn" onClick={() => {
        setshowRegister(true)
          }}>
            Sign up
          </button>
        </div>
        <img src="img/bg.svg" className="image" alt="" />
      </div>
      <div className="panel right-panel">
        <div className="content">
          <h3>One of us ?</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
            laboriosam ad deleniti.
          </p>
          <button className="btn transparent" id="sign-in-btn" onClick={() => {
          setshowRegister(false)
           }}>
            Sign in
          </button>
        </div>
        <img src="img/bg.svg" className="image" alt="" />
      </div>
    </div>
    </div>

  )
}

export default Login