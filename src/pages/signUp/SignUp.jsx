import React from "react";
import Link from "next/link";
import { DiCssdeck } from "react-icons/di";
import { Div1 } from "../../components/Header/HeaderStyles";
import Sign from "../../components/SignComponent/SignComponent";
const SignUp = () => {
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
      <div className='container mt-3'>
        <div className='row'>
          <div className='col-md-7 d-flex'>
            <img
              className='img-fluid w-100'
              src='/images/bgg.svg'
              alt='Picture of the author'
            />
          </div>
          <div className='col-md-5 mt-4'>
            <Sign />
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
