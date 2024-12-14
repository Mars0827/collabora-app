import React from 'react';

const LoginPage = () => {
    return (
        <div className="h-full bg-black flex items-center justify-center px-4 py-32">
            <div className="max-w-md w-full bg-black text-white">
                <h1 className="text-3xl font-bold text-center mb-2">Login account</h1>
                <p className="text-center mb-8 text-sm">Start your journey better with Collabora.</p>

                <form className="space-y-4 w-4/6 m-auto">
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium mb-1">Email*</label>
                        <input
                            type="email"
                            id="email"
                            className="h-11 w-full bg-bgBlack border border-grayBorder2 rounded-sm py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-600 placeholder:text-sm text-sm placeholder:text-grayBorder2"
                            placeholder="Enter your email"
                        />
                    </div>
                    <div className="pb-5">
                        <label htmlFor="password" className="block text-sm font-medium mb-1">Password*</label>
                        <input
                            type="password"
                            id="password"
                            className="h-11 w-full bg-bgBlack border border-grayBorder2 rounded-sm py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-600 placeholder:text-sm text-sm placeholder:text-grayBorder2"
                            placeholder="Enter your password"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-600 hover:bg-blue-500 text-white py-2 px-4 rounded-sm"
                    >
                        Log in
                    </button>
                </form>

                <p className="text-center text-sm text-gray-500 mt-8">
                    Don&apos;t have an account? <a href="/register" className="text-blue-500 hover:underline">Create one</a>
                </p>
            </div>
        </div>
    );
};

export default LoginPage;
