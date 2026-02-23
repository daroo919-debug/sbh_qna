// js/login.js

import { auth } from "../firebase.js";
import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-auth.js";

const btnLogin = document.getElementById("btnLogin");

btnLogin.addEventListener("click", async () => {
  const emailInput = document.getElementById("email");
  const pwInput = document.getElementById("password");
  const errorLogin = document.getElementById("errorLogin");

  const email = emailInput.value.trim();
  const password = pwInput.value.trim();

  errorLogin.innerText = "";

  if (!email || !password) {
    errorLogin.innerText = "이메일과 비밀번호를 입력해주세요.";
    return;
  }

  try {
    await signInWithEmailAndPassword(auth, email, password);
    window.location.href = "../main.html";
  } catch (err) {
    errorLogin.innerText = "로그인에 실패했습니다. 이메일/비밀번호를 확인해주세요.";
    console.error("로그인 오류:", err);
  }
});
