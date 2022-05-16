import React from "react";
import { useState } from "react";
import { Formik, Form } from "formik";
import TextField from "./TextField";
import * as Yup from "yup";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
const signComponent = () => {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const validate = Yup.object({
    firstName: Yup.string()
      .max(15, "Must be 15 characters or less")
      .required("Required"),
    lastName: Yup.string()
      .max(20, "Must be 20 characters or less")
      .required("Required"),
    email: Yup.string().email("Email is invalid").required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Password must match")
      .required("Confirm Password is required"),
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
      console.log("i will apreciate you");
      console.log(error.message);
    }
  };
  return (
    <div style={{ marginLeft: "100px" }}>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          password: "",
          confirmPassword: "",
        }}
        validationSchema={validate}
      >
        {(formik) => (
          <div>
            <h1 className='my-4 font-weight-bold-display-4'>Sign up</h1>
            {console.log(formik.values)}
            <Form>
              <TextField
                label='First Name'
                name='firstName'
                type='text'
                placeholder='First Name'
              />
              <TextField
                label='Last Name'
                name='lastName'
                type='text'
                placeholder='Last Name'
              />
              <TextField
                label='Email'
                name='email'
                type='email'
                placeholder='Email address'
                onChange={(event) => {
                  setRegisterEmail(event.target.value);
                }}
              />
              <TextField
                label='Password'
                name='password'
                type='password'
                onChange={(event) => {
                  setRegisterPassword(event.target.value);
                }}
              />
              <TextField
                label='Confirm Password'
                name='confirmPassword'
                type='password'
              />
              <button
                className='btn btn-primary mt-3 px-5 py-2'
                style={{ fontSize: "15px" }}
                type='submit'
                onClick={register}
              >
                Register
              </button>
              {/* <button
                className='btn btn-danger mt-3 ml-4 w-20 px-5 py-2'
                style={{ fontSize: "15px" }}
                type='submit'
              >
                Reset
              </button> */}
            </Form>
          </div>
        )}
      </Formik>
    </div>
  );
};

export default signComponent;

// import React from "react";
// import { Formik, Form } from "formik";
// import TextField from "./TextField";
// import * as Yup from "yup";
// const signComponent = () => {
//   const validate = Yup.object({
//     firstName: Yup.string()
//       .max(15, "Must be 15 characters or less")
//       .required("Required"),
//     lastName: Yup.string()
//       .max(20, "Must be 20 characters or less")
//       .required("Required"),
//     email: Yup.string().email("Email is invalid").required("Email is required"),
//     password: Yup.string()
//       .min(6, "Password must be at least 6 characters")
//       .required("Password is required"),
//     confirmPassword: Yup.string()
//       .oneOf([Yup.ref("password"), null], "Password must match")
//       .required("Confirm Password is required"),
//   });
//   return (
//     <div style={{ marginLeft: "100px" }}>
//       <Formik
//         initialValues={{
//           firstName: "",
//           lastName: "",
//           email: "",
//           password: "",
//           confirmPassword: "",
//         }}
//         validationSchema={validate}
//       >
//         {(formik) => (
//           <div>
//             <h1 className='my-4 font-weight-bold-display-4'>Sign up</h1>
//             {/* {console.log(formik.values)} */}
//             <Form>
//               <TextField
//                 label='First Name'
//                 name='firstName'
//                 type='text'
//                 placeholder='First Name'
//                 onChange={(e) => {
//                   console.log(e.target.value);
//                 }}
//               />
//               <TextField
//                 label='Last Name'
//                 name='lastName'
//                 type='text'
//                 placeholder='Last Name'
//               />
//               <TextField
//                 label='Email'
//                 name='email'
//                 type='email'
//                 placeholder='Email address'
//               />
//               <TextField label='Password' name='password' type='password' />
//               <TextField
//                 label='Confirm Password'
//                 name='confirmPassword'
//                 type='password'
//               />
//               <button
//                 className='btn btn-primary mt-3 px-5 py-2'
//                 style={{ fontSize: "15px" }}
//                 type='submit'
//               >
//                 Register
//               </button>
//               {/* <button
//                 className='btn btn-danger mt-3 ml-4 w-20 px-5 py-2'
//                 style={{ fontSize: "15px" }}
//                 type='submit'
//               >
//                 Reset
//               </button> */}
//             </Form>
//           </div>
//         )}
//       </Formik>
//     </div>
//   );
// };

// export default signComponent;
