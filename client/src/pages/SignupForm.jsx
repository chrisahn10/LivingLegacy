import Auth from '../utils/auth';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from "@apollo/client";
import { ADD_USER } from "../utils/mutations";
import {
  Card,
  Input,
  Button,
  Typography,
} from "@material-tailwind/react";

const SignupForm = () => {
  const [formState, setFormState] = useState({
    username: '',
    email: '',
    password: '',
  });
  const [addUser, { error, data }] = useMutation(ADD_USER);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);

    try {
      const { data } = await addUser({
        variables: { ...formState },
      });

      Auth.login(data.addUser.token);
    } catch (e) {
      console.error(e);
    }
  };


  return (
    <>
    <div className="bg-fit" style={{backgroundImage: 'url(../src/assets/home/signupHero.jpg)', width: ""}}>
      <Card color="transparent" className="flex justify-center items-center p-10">
        <div className="rounded-lg shadow-2xl p-4 bg-gray-200/60">
          <Typography variant="h4" className="font-Bree text-green-500">
            Sign Up
          </Typography>
          <Typography color="gray" className="mt-1 font-normal">
            Nice to meet you! Enter your details to register.
          </Typography>

          {/* Input Form */}

          <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
            <div className="mb-1 flex flex-col gap-6">

              {/* User Name */}

              <Typography variant="h6" color="blue-gray" className="-mb-3">
                User Name
              </Typography>
              <Input
                size="lg"
                placeholder="Enter your name"
                value={formState.username}
                onChange={handleChange}
                name="username"
                className="bg-white !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
                required
                minLength="3"
                pattern="[A-Za-z]+"
              />

              {/* Email */}

              <Typography variant="h6" color="blue-gray" className="-mb-3">
                Your Email
              </Typography>
              <Input
                size="lg"
                placeholder="Enter your email"
                value={formState.email}
                onChange={handleChange}
                name="email"
                className="bg-white !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
                required
                pattern="/^[\w-]+(\.[\w-]+)*@[a-zA-Z\d-]+(\.[a-zA-Z\d-]+)*\.[a-zA-Z]{2,}$/"
              />

              {/* Password */}

              <Typography variant="h6" color="blue-gray" className="-mb-3">
                Password (Minimum 8 characters)
              </Typography>
              <Input
                type="password"
                size="lg"
                placeholder="********"
                value={formState.password}
                onChange={handleChange}
                name="password"
                className="bg-white !border-t-blue-gray-200 focus:!border-t-gray-900"
                id='password'
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
                required
                minLength="8"
              />
              <div
                id="togglePassword"
                className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
              >
                <svg
                  className="h-6 w-6 text-gray-500 hover:text-gray-700"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    d="M5 12h14M12 5l7 7-7 7"
                  ></path>
                </svg>
              </div>
            </div>
            <Button
              className="mt-6 bg-green-600 text-white"
              fullWidth
              disabled={!(formState.username && formState.email && formState.password)}
              type='submit'
              onClick={handleFormSubmit}
              variant='gradient'
            >
              Sign Up
            </Button>
            <Typography color="gray" className="mt-4 text-center font-normal">
              Already have an account?&nbsp;&nbsp;
              <a href="/login" className="font-bold text-cyan-500 underline">
                Log In
              </a>
            </Typography>
          </form>
        </div>
      </Card>
      </div>
    </>
  );
};


export default SignupForm;