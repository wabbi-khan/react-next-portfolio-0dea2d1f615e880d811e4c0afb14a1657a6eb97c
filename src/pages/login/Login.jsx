import React from "react";
import { useState } from "react";
import Link from "next/link";
import { DiCssdeck } from "react-icons/di";
import { Div1 } from "../../components/Header/HeaderStyles";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from "../../firebase";

const Login = () => {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const [user, setUser] = useState({});

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });
  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };

  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <Div1 style={{ margin: "30px 0px 0 50px" }}>
        <Link href='/'>
          <a
            style={{
              display: "flex",
              alignItems: "center",
              color: "white",
            }}
          >
            <DiCssdeck size='3rem' />
            <span style={{ fontSize: "2.5rem" }}>LOGO</span>
          </a>
        </Link>
      </Div1>
      <div
        style={{
          // width: "500px",

          display: "flex",
          justifyContent: "center",
          // alignItems: "center",
          textAlign: "center",
          marginTop: "150px",
        }}
      >
        <div class='form-signin'>
          {/* <img
        class='mb-4'
        src='https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-solid.svg'
        alt=''
        width='72'
        height='72'
      /> */}
          <h1 class='h3 mb-3 font-weight-normal'>Company Logo</h1>
          <h1 class='h3 mb-3 font-weight-normal'>Please log in</h1>
          <label for='inputEmail' class='sr-only'>
            Email address
          </label>
          <input
            style={{ padding: "10px", width: "500px", fontSize: "15px" }}
            type='email'
            id='inputEmail'
            class='form-control'
            placeholder='Email address'
            required
            autofocus
            //  placeholder="Email..."
            onChange={(event) => {
              setLoginEmail(event.target.value);
            }}
          />
          <br />
          <label for='inputPassword' class='sr-only'>
            Password
          </label>
          <input
            style={{ padding: "10px", width: "500px", fontSize: "15px" }}
            type='password'
            id='inputPassword'
            class='form-control'
            placeholder='Password'
            required
            onChange={(event) => {
              setLoginPassword(event.target.value);
            }}
          />
          <br />
          <div class='checkbox mb-3'>
            <label className='px-4'>
              <input type='checkbox' value='remember-me' /> Remember me
            </label>
            <a href='/' className='px-4'>
              Forgot password?
            </a>
          </div>
          <button
            class='btn btn-lg btn-primary btn-block'
            type='submit'
            style={{ padding: "10px", width: "500px", fontSize: "15px" }}
            onClick={login}
          >
            Log in
          </button>
        </div>
      </div>
    </>
  );
};

export default Login;

// import React from "react";
// import Link from "next/link";
// import { DiCssdeck } from "react-icons/di";
// import { Div1, Container } from "../../components/Header/HeaderStyles";
// const Login = () => {
//   return (
//     <>
//       <Div1 style={{ margin: "30px 0px 0 50px" }}>
//         <Link href='/'>
//           <a
//             style={{
//               display: "flex",
//               alignItems: "center",
//               color: "white",
//             }}
//           >
//             <DiCssdeck size='3rem' />
//             <span style={{ fontSize: "2.5rem" }}>LOGO</span>
//           </a>
//         </Link>
//       </Div1>
//       <div
//         style={{
//           display: "flex",
//           justifyContent: "center",
//           textAlign: "center",
//           marginTop: "150px",
//         }}
//       >
//         <form class='form-signin'>
//           {/* <img
//         class='mb-4'
//         src='https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-solid.svg'
//         alt=''
//         width='72'
//         height='72'
//       /> */}
//           <h1 class='h3 mb-3 font-weight-normal'>Company Logo</h1>
//           <h1 class='h3 mb-3 font-weight-normal'>Please log in</h1>
//           <label for='inputEmail' class='sr-only'>
//             Email address
//           </label>
//           <input
//             style={{ padding: "10px", width: "500px", fontSize: "15px" }}
//             type='email'
//             id='inputEmail'
//             class='form-control'
//             placeholder='Email address'
//             required
//             autofocus
//           />
//           <br />
//           <label for='inputPassword' class='sr-only'>
//             Password
//           </label>
//           <input
//             style={{ padding: "10px", width: "500px", fontSize: "15px" }}
//             type='password'
//             id='inputPassword'
//             class='form-control'
//             placeholder='Password'
//             required
//           />
//           <br />
//           <div class='checkbox mb-3'>
//             <label className='px-4'>
//               <input type='checkbox' value='remember-me' /> Remember me
//             </label>
//             <a href='/' className='px-4'>
//               Forgot password?
//             </a>
//           </div>
//           <button
//             class='btn btn-lg btn-primary btn-block'
//             type='submit'
//             style={{ padding: "10px", width: "500px", fontSize: "15px" }}
//           >
//             Log in
//           </button>
//         </form>
//       </div>
//     </>
//   );
// };

// export default Login;
