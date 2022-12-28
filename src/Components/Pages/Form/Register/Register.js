import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../../Context/AuthProvider';
import SocalLogin from '../../../Shared/SocalLogin/SocalLogin';

const Register = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { createUser, updateUser } = useContext(AuthContext)
    const [signupErrors, setSignupErrors] = useState('')

    const onRegister = data => {
        setSignupErrors('')
        createUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user)
                toast.success('Register successfully')
                const userInfo = {
                    displayName: data.name
                }
                updateUser(userInfo)
                    .then(() => { })
                    .catch((err) => console.log(err))
                reset()
            })
            .catch(error => {
                setSignupErrors(error.message)
                console.log(error)
            })
    };

    return (

        <div class="flex items-center min-h-screen p-5  bg-gray-100 lg:justify-center">
            <div
                class="flex flex-col overflow-hidden bg-white rounded-md shadow-lg max w-full lg:w-[400px]"
            >
                <div class="p-5 bg-white md:flex-1">
                    <h3 class="my-4 text-2xl font-semibold text-gray-700">Account Register</h3>
                    <form onSubmit={handleSubmit(onRegister)} action="#" class="flex flex-col space-y-5">
                        <div class="flex flex-col space-y-1">
                            <div class="flex items-center justify-between">
                                <label for="name" class="text-sm font-semibold text-gray-500">Name</label>
                            </div>
                            <input
                                {...register('name', { required: 'name is required', maxLength: 30 })}
                                type="text"
                                id="name"
                                class="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
                            />
                            {errors.name && <p className='text-red-600 flex justify-start' role="alert">{errors.name?.message}</p>}
                        </div>
                        <div class="flex flex-col space-y-1">
                            <div class="flex items-center justify-between">
                                <label for="email" class="text-sm font-semibold text-gray-500">Email</label>
                            </div>
                            <input
                                {...register('email', { required: 'email is required', })}
                                type="email"
                                id="email"
                                class="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
                            />
                            {errors.email && <p className='text-red-600 flex justify-start' role="alert">{errors.email?.message}</p>}

                            {signupErrors && <p className='text-red-600 flex justify-start' role="alert">{signupErrors}</p>}

                        </div>
                        <div class="flex flex-col space-y-1">
                            <div class="flex items-center justify-between">
                                <label for="password" class="text-sm font-semibold text-gray-500">Password</label>
                                <Link href="#" class="text-sm text-primary hover:underline focus:text-blue-800">Forgot Password?</Link>
                            </div>
                            <input
                                {...register('password', { required: 'password is required', minLength: { value: 6, message: 'Password must be 6 characters' } })}
                                type="password"
                                id="password"
                                class="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
                            />
                            {errors.password && <p className='text-red-600 flex justify-start' role="alert">{errors.password?.message}</p>}
                        </div>
                        <div class="flex items-center space-x-2">
                            <input
                                type="checkbox"
                                id="remember"
                                class="w-4 h-4 checkbox checkbox-primary"
                            />
                            <label for="remember" class="text-sm font-semibold text-gray-500">Remember me</label>
                        </div>
                        <div>
                            <button
                                type="submit"
                                class="w-full px-4 py-2 text-lg font-semibold text-white transition-colors duration-300 bg-primary rounded-md shadow hover:bg-slate-800	 focus:outline-none focus:ring-blue-200 focus:ring-4"
                            >
                                Log in
                            </button>
                        </div>
                        <div class="flex flex-col space-y-5">
                            <span class="flex items-center justify-center space-x-2">
                                <span class="h-px bg-gray-400 w-14"></span>
                                <span class="font-normal text-gray-500">or login with</span>
                                <span class="h-px bg-gray-400 w-14"></span>
                            </span>
                            <SocalLogin></SocalLogin>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;