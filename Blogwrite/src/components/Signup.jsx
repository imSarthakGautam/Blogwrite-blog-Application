import React, { useState } from 'react';
import authService from '../appwrite/auth';
import { Link, useNavigate } from 'react-router-dom';
import { login as storeLogin } from '../store/authSlice';
import { Button, Input, Logo_sec } from './index';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';

function Signup() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [error, setError] = useState('');
    const { register, handleSubmit } = useForm();

    const create = async (data) => {
        setError('');
        try {
            console.log('Signup request from form')
            const userData = await authService.createAccount(data);
            if (userData) {
                const userData = await authService.getCurrentUser();
                console.log('getCurrentUser', userData, )
                if (userData) dispatch(storeLogin(userData));
                navigate('/');
            }
        } catch (error) {
            setError(error.message);
            console.log(`error: ${error.message}`);
        }
    };

    return (
        <div className="flex justify-center ">
            <div className="w-full max-w-lg bg-white shadow-md rounded-xl p-8 border border-gray-300">
                <div className="mb-5 flex justify-center">
                    <Logo_sec width="200px" />
                </div>
                <h2 className="text-center text-3xl font-semibold text-gray-800">Sign up to create account</h2>
                <p className="mt-2 text-center text-gray-600 text-md">
                    Already have an account?&nbsp;
                    <Link
                        to="/login"
                        className="text-primary font-medium hover:underline text-blue-700"
                    >
                        Sign In
                    </Link>
                </p>
                {error && <p className="text-red-600 mt-4 text-center">{error}</p>}

                <form onSubmit={handleSubmit(create)} className="mt-8 space-y-5">
                    <Input
                        label="Full Name"
                        placeholder="Enter your full name"
                        className="text-gray-900 text-xl bg-gray-50 border border-gray-300 "
                        {...register("name", { required: true })}
                    />
                    <Input
                        label="Email"
                        placeholder="Enter your email"
                        type="email"
                        className="text-gray-900 bg-gray-50 border border-gray-300 text-xl"
                        {...register("email", {
                            required: true,
                            validate: {
                                matchPattern: (value) =>
                                    /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) || "Invalid email address",
                            }
                        })}
                    />
                    <Input
                        label="Password"
                        type="password"
                        placeholder="Enter your password"
                        className="text-gray-900 bg-gray-50 border border-gray-300 text-xl mb-5"
                        {...register("password", { required: true })}
                    />
                    <Button type="submit" className="w-full bg-primary text-white hover:bg-primary-dark transition-all font-semibold text-xl mt-10">
                        Create Account
                    </Button>
                </form>
            </div>
        </div>
    );
}

export default Signup;
