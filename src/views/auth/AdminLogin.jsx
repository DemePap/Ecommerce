import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { admin_login } from '../../store/Reducers/authReducer';




const AdminLogin = () => {

    const dispatch = useDispatch();
    const [state, setState] = useState({
        email : '',
        password : ''
    });

    const inputHandle =(e) => {
        setState({
            ...state,
            [e.target.name] : e.target.value
        })
    };

    const submit = (e) => {
        e.preventDefault();
        dispatch(admin_login(state));
        // console.log(state);
    }
    return (
        <div className='min-w-screen min-h-screen bg-[#cdcae9] flex justify-center items-center'>
        <div className='w-[350px] text-[#ffffff] p-2'>
        <div className='bg-[#6f68d1] p-4 rounded-md'>

        <div className='h-[90px] flex justufy-center items-center'>
            <div className='w-[120px] h-[90px] '>
                <img className='w-full h-full' src="http://localhost:3000/images/logo.png" alt="img" />
            </div>

        </div>
            {/* <h2 className='text-xl mb-3 font-bold'>
            Bienvenu administrateur (rice)
            </h2>
            <p className='text-sm mb-3 font-medium'>
            Merci de vous connecter
            </p> */}
            <form onSubmit={submit}>
                <div className='flex flex-col w-full gap-1 mb-3'>
                <label htmlFor='email'>Email</label>
                <input onChange={inputHandle} value={state.email} className='px-3 py-2 rounded-md outline-none border 
                border-slate-400 bg-transparent'type='email' name='email' id='email' required placeholder='Email' />
                </div>

                <div className='flex flex-col w-full gap-1 mb-3'>
                <label htmlFor='password'>Mot de passe</label>
                <input onChange={inputHandle} value={state.password} className='px-3 py-2 rounded-md outline-none border 
                border-slate-400 bg-transparent'type='password' name='password' id='password' required placeholder='Mot de passe' />
                </div> 

                <button onChange={submit} className='bg-[#0a0827] p-2 rounded-md w-full hover:shadow-black hover:shadow-lg text-white px-7 py-2 mb-3'>Se connecter</button>
                 
            </form>
        </div>
        </div>
        </div>
    );
};

export default AdminLogin;