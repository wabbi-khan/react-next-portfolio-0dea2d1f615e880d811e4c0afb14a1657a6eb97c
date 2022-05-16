import React from "react";
import { ErrorMessage, useField } from "formik";
const TextField = ({ label, placeholder, onChange, ...props }) => {
  const [field, meta] = useField(props);
  // console.log(field, meta);
  return (
    <div className='md-4'>
      <label htmlFor={field.name}> {label} </label>
      <input
        style={{
          width: "200px",
          padding: "10px",
          marginBottom: "15px",
          fontSize: "12px",
        }}
        placeholder={placeholder}
        className={`form-control shadow-none ${
          meta.touched && meta.error && "is-invalid"
        } `}
        autoComplete='off'
        {...field}
        {...props}
        onKeyUp={onChange}
      />
      <div
        style={{
          color: "red",
          fontSize: "12px",
          marginTop: "-10px",
          paddingBottom: "5px",
        }}
      >
        <ErrorMessage name={field.name} />
      </div>
    </div>
  );
};

export default TextField;
