import React from "react";
import Label from "../../components/common/Label";
import AppInput from "../../components/common/AppInput";
import AppButton from "../../components/common/AppButton";

const Login = () => {
  return (
    <>
      <div className="flex items-center justify-center h-full h-screen">
        <div className="p-5 bg-white rounded-md w-1/2 m-auto ">
          <div className="text-center">
            <strong className="text-xl">Welcom Back</strong>
            <p>Please enter your details</p>
          </div>

          <div className="form">
            <form action="">
              <div>
                <Label text="Email" />
                <AppInput />
              </div>
              <div>
                <Label text="Password" />
                <AppInput type="password" />
              </div>

              <AppButton text="Login" />
              <p>Forgot Pasword</p>
              <p>create new account</p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
