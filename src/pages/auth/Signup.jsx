import React, { useState } from "react";
import axios from "axios";

// icons
import { FaRegAddressBook } from "react-icons/fa6";
import { RiMicrosoftLoopFill } from "react-icons/ri";
import { SiNamecheap } from "react-icons/si";
import { InputDesign } from "../../components/ui/input/InputDesign";
import { LuMailOpen } from "react-icons/lu";
import { BsShieldLock } from "react-icons/bs";

// colors
import colorSchema from "../../colors/colorSchema";
import { Button } from "../../components/ui/button/Button";
import { Link, useNavigate } from "react-router";

export const Signup = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handelname = (e) => {
    setName(e.target.value);
  };
  const handelEmail = (e) => {
    setEmail(e.target.value);
  };
  const handelPassword = (e) => {
    setPassword(e.target.value);
  };

  const color = colorSchema();

  const signup = (e) => {
    e.preventDefault();
    let data = {
      fullname: name,
      email: email,
      password: password,
    };
    axios
      .post("http://localhost:3000/auth/signup", data)
      .then((res) => {
        // console.log()
        if (res.data.seccess) {
          navigate("/login");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div
      style={{ background: color.bg }}
      className={`grid place-items-center h-screen  `}
    >
      <div className="text-center px-4 ">
        <h2
          style={{ color: color.brand }}
          className={` flex items-center gap-2 font-ubuntu font-bold text-3xl justify-center `}
        >
          <RiMicrosoftLoopFill />
          <span>FriendLoop</span>
        </h2>
        <h3
          style={{ color: color.txt }}
          className={` font-medium mt-5 font-opensans`}
        >
          Chase your dreams, we're here every step of the way.
          <br /> Lets create your{" "}
          <span
            style={{ color: color.brand }}
            className={`font-ubuntu font-medium  `}
          >
            FriendLoop
          </span>{" "}
          account now.{" "}
        </h3>

        {/* signup form */}
        <form className={`p-2 mt-10 `} onSubmit={(e) => signup(e)}>
          <div className="flex flex-col gap-8">
            <InputDesign
              id={"name"}
              value={name}
              onChange={(e) => handelname(e)}
              type={"text"}
              label={"full name"}
              icon={<SiNamecheap />}
            />
            <InputDesign
              id={"email"}
              value={email}
              onChange={(e) => handelEmail(e)}
              type={"text"}
              label={"email"}
              icon={<LuMailOpen />}
            />
            <InputDesign
              id={"password"}
              value={password}
              onChange={(e) => handelPassword(e)}
              type={"password"}
              label={"password"}
              icon={<BsShieldLock />}
            />

            {/*   signup button  */}
            <div className="">
              <p
                style={{ color: color.txt }}
                className={`font-ubuntu text-sm mt-1  `}
              >
                By registering you agree to the FriendLoop{" "}
                <Link
                  to="/terms"
                  style={{ color: color.brand }}
                  className={`font-semibold   `}
                >
                  Terms of Use
                </Link>
              </p>
              <Button
                type={"submit"}
                text={"Sign up"}
                style={"w-full mt-2 py-2 font-ubuntu font-semibold  "}
                icon={<FaRegAddressBook />}
              />
              <p
                style={{ color: color.txt }}
                className={`font-ubuntu text-sm mt-5  `}
              >
                If you have an account already , Please{" "}
                <Link
                  to="/auth/login"
                  style={{ color: color.brand }}
                  className={`font-semibold   `}
                >
                  Login
                </Link>{" "}
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
