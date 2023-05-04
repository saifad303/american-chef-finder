import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuthProvider } from "../context/AuthProvider";
import { updateProfile } from "firebase/auth";
import { auth } from "../../firebase.config";
import SmallSpinner from "../components/Loading/SmallSpinner";

const SignUpPage = () => {
  const [validationError, setValidationError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const formRef = useRef();
  const navigate = useNavigate();
  const {
    googleSignInProviderHandler,
    setSignedInUser,
    gitHubSignInProviderHandler,
    createUserProvider,
    updateProfileProvider,
  } = useAuthProvider();

  const googleSignInHandler = () => {
    googleSignInProviderHandler().then((result) => {
      console.log("Google User = ", result.user);
      setSignedInUser(result.user);
      navigate("/");
    });
  };

  const gitHubSignInHandler = () => {
    gitHubSignInProviderHandler().then((result) => {
      console.log("GitHub User = ", result.user);
      setSignedInUser(result.user);
      navigate("/");
    });
  };

  const signedUpSubmitHandler = (e) => {
    e.preventDefault();
    setIsLoading(true);
    if (checkPasswordHandler()) {
      const formValue = formRef.current;
      const credentials = {
        name: formValue.name.value,
        photoUrl: formValue.photoLink.value,
        email: formValue.email.value,
        password: formValue.password.value,
      };

      createUserProvider(credentials)
        .then((result) => {
          console.log("Registered = ", result.user);
          updateDisplayNameAndPhotoUrl(
            formValue.name.value,
            formValue.photoLink.value
          );
          setValidationError("");
          setIsLoading(false);
          navigate("/");
        })
        .catch((err) => {
          console.log(err.message);
          setValidationError(err.message);
          setIsLoading(false);
        });
    } else {
      setValidationError("Password should be at least 6 character long.");
    }
  };

  const checkPasswordHandler = () => {
    const formValue = formRef.current;
    const checkEightCharLong = /(?=.{6,})/;

    // console.log(checkEightCharLong.test(formValue.password.value));
    if (checkEightCharLong.test(formValue.password.value)) {
      return true;
    }

    return false;
  };

  const updateDisplayNameAndPhotoUrl = (name, url) => {
    const formValue = formRef.current;
    updateProfileProvider(name, url).then(() => {
      console.log("User Profile updated");
      formValue.name.value = "";
      formValue.photoLink.value = "";
      formValue.email.value = "";
      formValue.password.value = "";
      setValidationError("");
      navigate("/");
    });
  };

  return (
    <main className="w-full h-screen flex flex-col items-center justify-center sm:px-4">
      <div className="w-full space-y-6 text-gray-600 sm:max-w-md">
        <div className="text-center">
          <img
            src="/img/the-chef-finder-logo.png"
            width={150}
            className="mx-auto"
          />
          <div className="space-y-2">
            <h3 className="text-slate-700 text-2xl font-bold sm:text-3xl">
              Create an account
            </h3>
            <p className="">
              Already have an account?{" "}
              <Link to="/signin" className="font-medium text-slate-700">
                Sign in
              </Link>
            </p>
          </div>
        </div>
        {validationError && (
          <div className=" bg-rose-300 text-lg p-2 rounded-lg text-slate-800">
            {validationError}
          </div>
        )}

        <div className="bg-white shadow-lg p-4 py-6 sm:p-6 sm:rounded-lg">
          <form
            ref={formRef}
            onSubmit={(e) => signedUpSubmitHandler(e)}
            className="space-y-5"
          >
            <div>
              <label className="font-medium">Name</label>
              <input
                name="name"
                type="text"
                required
                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-slate-600 shadow-sm rounded-lg"
              />
            </div>
            <div>
              <label className="font-medium">Photo URL</label>
              <input
                name="photoLink"
                type="text"
                required
                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-slate-600 shadow-sm rounded-lg"
              />
            </div>
            <div>
              <label className="font-medium">Email</label>
              <input
                name="email"
                autoComplete="username"
                type="email"
                required
                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-slate-600 shadow-sm rounded-lg"
              />
            </div>
            <div>
              <label className="font-medium">Password</label>
              <input
                name="password"
                autoComplete="current-password"
                type="password"
                required
                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-slate-600 shadow-sm rounded-lg"
              />
            </div>
            <button
              type="submit"
              className="w-full px-4 py-2 text-white font-medium bg-slate-800  rounded-lg duration-150"
            >
              {isLoading ? <SmallSpinner></SmallSpinner> : "Create account"}
            </button>
          </form>
          <div className="mt-5">
            <button
              onClick={googleSignInHandler}
              className="w-full flex items-center justify-center gap-x-3 py-2.5 mt-5 border rounded-lg text-sm font-medium hover:bg-gray-50 duration-150 active:bg-gray-100"
            >
              <svg
                className="w-5 h-5"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_17_40)">
                  <path
                    d="M47.532 24.5528C47.532 22.9214 47.3997 21.2811 47.1175 19.6761H24.48V28.9181H37.4434C36.9055 31.8988 35.177 34.5356 32.6461 36.2111V42.2078H40.3801C44.9217 38.0278 47.532 31.8547 47.532 24.5528Z"
                    fill="#4285F4"
                  />
                  <path
                    d="M24.48 48.0016C30.9529 48.0016 36.4116 45.8764 40.3888 42.2078L32.6549 36.2111C30.5031 37.675 27.7252 38.5039 24.4888 38.5039C18.2275 38.5039 12.9187 34.2798 11.0139 28.6006H3.03296V34.7825C7.10718 42.8868 15.4056 48.0016 24.48 48.0016Z"
                    fill="#34A853"
                  />
                  <path
                    d="M11.0051 28.6006C9.99973 25.6199 9.99973 22.3922 11.0051 19.4115V13.2296H3.03298C-0.371021 20.0112 -0.371021 28.0009 3.03298 34.7825L11.0051 28.6006Z"
                    fill="#FBBC04"
                  />
                  <path
                    d="M24.48 9.49932C27.9016 9.44641 31.2086 10.7339 33.6866 13.0973L40.5387 6.24523C36.2 2.17101 30.4414 -0.068932 24.48 0.00161733C15.4055 0.00161733 7.10718 5.11644 3.03296 13.2296L11.005 19.4115C12.901 13.7235 18.2187 9.49932 24.48 9.49932Z"
                    fill="#EA4335"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_17_40">
                    <rect width="48" height="48" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              Continue with Google
            </button>
            <button
              onClick={gitHubSignInHandler}
              className="w-full flex items-center justify-center gap-x-3 py-2.5 mt-5 border rounded-lg text-sm font-medium hover:bg-gray-50 duration-150 active:bg-gray-100"
            >
              <img src="/img/github-mark.svg" className="w-[25px]" alt="" />
              Continue with Github
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default SignUpPage;
