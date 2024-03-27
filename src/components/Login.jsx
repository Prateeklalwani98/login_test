// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { useNavigate, Link } from "react-router-dom";

// function Login(props) {
//   const history = useNavigate();

//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [loginCheck, loginPass] = useState(false);

//   async function submit(e) {
//     e.preventDefault();

//     try {
//       await axios
//         .post("http://localhost:8000/", {
//           email,
//           password,
//         })
//         .then((res) => {
//           if (res.data === "exist") {
//             loginPass(true);
//           } else if (res.data === "notexist") {
//             alert("Try Again");
//           }
//         })
//         .catch((e) => {
//           alert("wrong details");
//           console.log(e);
//         });
//     } catch (e) {
//       console.log(e);
//     }
//   }

//   return (
//     <div className="login">
//       <h1>Login</h1>

//       <form action="POST">
//         <input
//           type="email"
//           onChange={(e) => {
//             setEmail(e.target.value);
//           }}
//           placeholder="Email"
//         />
//         <input
//           type="password"
//           onChange={(e) => {
//             setPassword(e.target.value);
//           }}
//           placeholder="Password"
//         />
//         <input type="submit" onClick={submit} />
//       </form>
//     </div>
//   );
// }

// export default Login;

import { useState } from "react";

function Login({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(email, password);
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
