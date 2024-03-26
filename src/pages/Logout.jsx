import React from 'react'

const Logout = () => {
    return (
        <div className="w-full min-h-screen flex items-center justify-center">
            <div className="w-full h-screen flex items-center justify-center">

                <div className="hidden lg:flex lg:w-1/2 xl:w-2/3 2xl:w-3/4 h-full bg-cover bg-[url('https://vojislavd.com/ta-template-demo/assets/img/auth-background.jpg')]">
                    <div className="w-full h-full flex flex-col items-center justify-center bg-black bg-opacity-30">
                        <img className='w-36' src='https://www.bacancytechnology.com/main-boot-5/images/chatbot/side-img-1.gif' />
                        <div className="flex items-center justify-center space-x-2">
                            <h1 className="text-3xl xl:text-4xl 2xl:text-5xl font-bold text-gray-100 tracking-wider">Welcome to IntelliTalk</h1>
                        </div>
                        <p className="text-gray-300 mt-4 px-16 text-center">"Intellitalk: Your Intelligent Conversation Partner"</p>
                        <a href="#" className="mt-6 bg-gray-100 hover:bg-gray-200 px-6 py-2 rounded text-sm uppercase text-gray-900 transition duration-150" title="Learn More">Get Start</a>
                    </div>
                </div>
                <div className="w-full sm:w-4/6 md:w-2/3 lg:w-1/2 xl:w-2/4 2xl:w-1/4 h-full bg-white flex items-center justify-center">
                    <div className="w-full px-12">

                        <h2 className="text-center text-2xl font-bold tracking-wide text-gray-800">Welcome Back</h2>
                        <p className="text-center text-sm text-gray-600 mt-2">Don't have an account? <a href="#" className="text-blue-600 hover:text-blue-700 hover:underline" title="Sign In">Sign up here</a></p>

                        <form className="my-8 text-sm">
                            <div className="flex flex-col my-4">
                                <label for="email" className="text-gray-700">Email Address</label>
                                <input type="email" name="email" id="email" className="mt-2 p-2 border border-gray-300 focus:outline-none focus:ring-0 focus:border-gray-300 rounded text-sm text-gray-900" placeholder="Enter your email" />
                            </div>

                            <div className="flex flex-col my-4">
                                <label for="password" className="text-gray-700">Password</label>
                                <div className="relative flex items-center mt-2">
                                    <input name="password" id="password" className="flex-1 p-2 pr-10 border border-gray-300 focus:outline-none focus:ring-0 focus:border-gray-300 rounded text-sm text-gray-900" placeholder="Enter your password" type="password" />
                                    <button type="button" className="absolute right-2 bg-transparent flex items-center justify-center text-gray-700">
                                    </button>
                                </div>
                            </div>

                            <div className="my-4 flex items-center justify-end space-x-4">
                                <button className="bg-blue-600 hover:bg-blue-700 rounded-lg px-8 py-2 text-gray-100 hover:shadow-xl transition duration-150 uppercase">Sign in</button>
                            </div>

                        </form>

                        <div className="flex items-center justify-between">
                            <div className="w-full h-[1px] bg-gray-300"></div>
                            <span className="text-sm uppercase mx-6 text-gray-400">Or</span>
                            <div className="w-full h-[1px] bg-gray-300"></div>
                        </div>
                        <div className="text-sm">
                            <a href="#" className="flex items-center justify-center space-x-2 text-gray-600 my-2 py-2 bg-gray-100 hover:bg-gray-200 rounded">
                                <span>Sign up with Google</span>
                            </a>
                            <a href="#" className="flex items-center justify-center space-x-2 text-gray-600 my-2 py-2 bg-gray-100 hover:bg-gray-200 rounded">
                                <span>Sign up with Facebook</span>
                            </a>
                            <a href="#" className="flex items-center justify-center space-x-2 text-gray-600 my-2 py-2 bg-gray-100 hover:bg-gray-200 rounded">
                                <span>Sign up with LinkedIn</span>
                            </a>
                        </div>
                    </div>
                </div>



            </div >
        </div >
    )
}

export default Logout