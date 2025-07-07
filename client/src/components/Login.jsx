import React from 'react'

const Login = ({ setShowLogin }) => {

    const [state, setState] = React.useState("login");
    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    const onSubmitHandler = async (event)=>{
        event.preventDefault();
    }
    return (
        <div onClick={() => setShowLogin(false)} className='fixed top-0 bottom-0 left-0 right-0 z-100 flex items-center text-sm text-gray-600 bg-black/50'>
            <form onSubmit={onSubmitHandler} onClick={(e)=> e.stopPropagation()} class="flex flex-col  m-auto bg-white text-gray-500 max-w-[340px] w-full mx-4 md:p-6 p-4 py-8 text-left text-sm rounded-lg shadow-[0px_0px_10px_0px] shadow-black/10">
                <h2 class="text-2xl font-bold mb-9 text-center text-gray-800">Sign Up</h2>
                <div class="flex items-center my-2 border bg-indigo-500/5 border-gray-500/10 rounded gap-1 pl-2">
                    <svg width="18" height="18" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3.125 13.125a4.375 4.375 0 0 1 8.75 0M10 4.375a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0" stroke="#6B7280" stroke-opacity=".6" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    <input class="w-full outline-none bg-transparent py-2.5" type="text" placeholder="Username" required />
                </div>
                <div class="flex items-center my-2 border bg-indigo-500/5 border-gray-500/10 rounded gap-1 pl-2">
                    <svg width="18" height="18" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="m2.5 4.375 3.875 2.906c.667.5 1.583.5 2.25 0L12.5 4.375" stroke="#6B7280" stroke-opacity=".6" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M11.875 3.125h-8.75c-.69 0-1.25.56-1.25 1.25v6.25c0 .69.56 1.25 1.25 1.25h8.75c.69 0 1.25-.56 1.25-1.25v-6.25c0-.69-.56-1.25-1.25-1.25Z" stroke="#6B7280" stroke-opacity=".6" stroke-width="1.3" stroke-linecap="round" />
                    </svg>
                    <input class="w-full outline-none bg-transparent py-2.5" type="email" placeholder="Email" required />
                </div>
                <div class="flex items-center mt-2 mb-8 border bg-indigo-500/5 border-gray-500/10 rounded gap-1 pl-2">
                    <svg width="18" height="18" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="m2.5 4.375 3.875 2.906c.667.5 1.583.5 2.25 0L12.5 4.375" stroke="#6B7280" stroke-opacity=".6" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M11.875 3.125h-8.75c-.69 0-1.25.56-1.25 1.25v6.25c0 .69.56 1.25 1.25 1.25h8.75c.69 0 1.25-.56 1.25-1.25v-6.25c0-.69-.56-1.25-1.25-1.25Z" stroke="#6B7280" stroke-opacity=".6" stroke-width="1.3" stroke-linecap="round" />
                    </svg>
                    <input class="w-full outline-none bg-transparent py-2.5" type="password" placeholder="Password" required />
                </div>
                <button class="w-full mb-3 bg-indigo-500 hover:bg-indigo-600 transition-all active:scale-95 py-2.5 rounded text-white font-medium">Create Account</button>
                <p class="text-center mt-4">Already have an account? <a href="#" class="text-blue-500 underline">Log In</a></p>
            </form>
        </div>
    )
}

export default Login
