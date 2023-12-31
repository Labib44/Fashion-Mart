import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";
import toast from "react-hot-toast";


const SignUp = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { createUser, updateUser } = useContext(AuthContext);
    const [signUpError, setsignUpError] = useState('');
    const navigate = useNavigate();

    const handleSignUp = data => {
        console.log(data);
        setsignUpError('');

        createUser(data.email, data.password, data.role)
       
            .then(result => {
                const user = result.user;
                console.log(user);
                // toast.success('User create Successfully');
                const userInfo = {
                    displayName: data.name
                }
                updateUser(userInfo)
                    .then(() => {})
                    .catch(error => console.log(error))
                    toast.success('User create Successfully');
                    navigate('/');
                
            })
            .catch(error => {
                // console.log(error);
                setsignUpError(error.message)
            });
    }


    return (
        <div>
            <div className="mx-auto max-w-4xl my-36">
                <div className="hero-content flex sm:flex-wrap">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl text-gray-600 font-bold">Sign Up !</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">

                        <form onSubmit={handleSubmit(handleSignUp)}>
                            <div className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Your Name</span>
                                    </label>
                                    <input {...register("name", { required: "Email Address is required" })} type="text" placeholder="Name" className="input input-bordered input-info" />
                                    {errors.name && <p className='text-red-500' role="alert">{errors.name?.message}</p>}
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input {...register("email", { required: "Email Address is required" })} type="email" placeholder="email" className="input input-bordered input-info" />
                                    {errors.email && <p className='text-red-500' role="alert">{errors.email?.message}</p>}
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input {...register("password", { required: "Password Address is required", minLength: { value: 6, message: "Password must be 6 characters" } })} type="password" placeholder="password" className="input input-bordered input-info" />
                                    {errors.password && <p className='text-red-500' role="alert">{errors.password?.message}</p>}

                                </div>
                                <div>
                                    {signUpError && <p className='text-red-500'>{signUpError}</p>}
                                </div>
                                <div className="form-control mt-6">
                                    <input className="btn btn-outline btn-info" type="submit" value="Sign Up" />
                                    <p>Already have an account <Link to='/login' className='text-emerald-700 font-bold'> Login</Link></p>
                                </div>
                                <div className="flex flex-col w-full border-opacity-50">
                                    <div className="divider">OR</div>
                                    <Link className='btn btn-outline btn-info '>Login With Google</Link>
                                    <Link className='btn btn-outline btn-info mt-5'>Login With Facebook</Link>
                                </div>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;