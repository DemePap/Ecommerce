import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaGoogle } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

const Register = () => {
    const [state, setState] = useState({
        name : '',
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
        console.log(state);
    }

    return (
        <div className='min-w-screen min-h-screen bg-[#cdcae9] flex justify-center items-center'>
        <div className='w-[350px] text-[#ffffff] p-2'>
        <div className='bg-[#6f68d1] p-4 rounded-md'>
            <h2 className='text-xl mb-3 font-bold'>
            Bienvenue sur DiaYma
            </h2>
            <p className='text-sm mb-3 font-medium'>
            Merci de vous inscrire
            </p>
            <form onSubmit={submit}>
                <div className='flex flex-col w-full gap-1 mb-3'>
                <label htmlFor='name'>Nom</label>
                <input onChange={inputHandle} value={state.name} className='px-3 py-2 rounded-md outline-none border 
                border-slate-400 bg-transparent' type='text' name='name' id='name' required placeholder='Nom' />
                </div>

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

                <div className='flex items-center w-full gap-3 mb-3'>
                <input className='w-4 h-4 text-blue-600 overflow-hiden bg-gray-200 rounded 
                border-gray-300 focus:ring-blue-500' type='checkbox' name='checkbox' id='checkbox' />
                <label htmlFor='checkbox'>J'accèpte les termes & conditions</label>
                </div>

                
                
                <button onChange={submit} className='bg-[#0a0827] p-2 rounded-md w-full hover:shadow-black hover:shadow-lg text-white px-7 py-2 mb-3'>S'inscrire</button>
               

                <div className='flex items-center mb-3 gap-3 justify-center'>
                <p>Avez-vous deja un compte ? <Link className='font-bold' to='/login'>Se connecter</Link></p>
                </div>
                 
                 <div className='w-full flex flex-col items-center gap-4 mb-3'>

  {/* --- LIGNE + "ou" --- */}
  <div className='w-full flex items-center justify-center gap-2'>
    <div className='w-[45%] h-[1px] bg-slate-700'></div>
    <div className='text-sm text-gray-500'><span className='pb-1 text-white font-bold'>ou</span></div>
    <div className='w-[45%] h-[1px] bg-slate-700'></div>
  </div>

  {/* --- BOUTONS SOCIAL --- */}

  <div className='flex justify-center items-center gap-3'>
    {/* Bouton Google */}
    <div className='w-[135px] h-[35px] flex items-center justify-center rounded-md bg-orange-700 shadow-lg hover:shadow-orange-700/50 cursor-pointer overflow-hidden'>
      <span><FaGoogle /></span>
    </div>

    {/* Bouton Facebook */}
    <div className='w-[135px] h-[35px] flex items-center justify-center rounded-md bg-blue-700 shadow-lg hover:shadow-blue-700/50 cursor-pointer overflow-hidden'>
      <span><FaFacebook /></span>
    </div>
  </div>

</div>


            </form>
        </div>
        </div>
        </div>
    );
};

export default Register;