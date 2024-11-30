import { useEffect } from "react";
import "./Login.css";

const Login = () => {
  useEffect(() => {
    let signupBtn = document.getElementById("signupbtn");
    let signinBtn = document.getElementById("signinbtn");
    let nameField = document.getElementById("namefield");
    let title = document.getElementById("title");
    let underline = document.getElementById("underline");
    let text = document.getElementById("text");

    signinBtn.addEventListener("click", () => {
      nameField.style.maxHeight = "0";
      title.innerHTML = "Sign Up";
      text.innerHTML = "Forgot Password";
      signupBtn.classList.add("disable");
      signinBtn.classList.remove("disable");
      underline.style.transform = "translateX(35px)";
    });
    signupBtn.addEventListener("click", () => {
      nameField.style.maxHeight = "50px";
      title.innerHTML = "Sign In";
      text.innerHTML = "Password suggestions";
      signupBtn.classList.remove("disable");
      signinBtn.classList.add("disable");
      underline.style.transform = "translateX(0)";
    });
  }, []);

  return (
    <div class="container">
      <div class="form-box">
        <h1 id="title">Login</h1>
        <div id="underline"></div>
        <div class="input-group">
          <div class="input-field" id="namefield">
            <i class="fa-solid fa-user"></i>
            <input type="email" placeholder="email" />
          </div>
          <div class="input-field">
            <i class="fa-solid fa-envelope"></i>
            <input type="email" placeholder="confirm email" />
          </div>
          <div class="input-field">
            <i class="fa-solid fa-lock"></i>
            <input type="password" placeholder="password" />
          </div>
          <p>
            <span id="text">Password Suggestions</span>
            <a href="#" class="fgtpas">
              {" "}
              Click Here
            </a>
          </p>
        </div>
        <div class="btns">
          <button id="signupbtn">Sign Up</button>
          <button id="signinbtn" class="disable">
            Sign in
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
