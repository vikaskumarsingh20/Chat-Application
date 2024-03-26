import React from 'react'

const Footer = () => {
    return (
        <footer className="pb-4 text-gray-200">
            <div className="max-w-5xl xl:max-w-5xl mx-auto divide-y divide-gray-900 px-4 sm:px-6 md:px-8">
                <ul className="text-sm font-medium sm:pb-20 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-10">
                    <li className="space-y-5">
                        <h2 className="text-2xl tracking-wide text-white">Connect</h2>
                        <ul className="space-y-4">
                            <li>
                                <a
                                    className="hover:text-white transition-colors duration-200 text-xl"
                                    href="/"
                                >
                                    Twitter
                                </a>
                            </li>
                            <li>
                                <a
                                    className="hover:text-white transition-colors duration-200 text-xl"
                                    href="/"
                                >
                                    Facebook
                                </a>
                            </li>
                            <li>
                                <a
                                    className="hover:text-white transition-colors duration-200 font-semibold text-xl"
                                    href="/"
                                >
                                    Instagram
                                </a>
                            </li>
                        </ul>
                    </li>
                </ul>
                <div className="flex flex-col-reverse justify-between pt-5 pb-4 border-t lg:flex-row bg-top border-black">
                    <ul className="flex flex-col space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row">
                        <li>
                            <a
                                href="/"
                                className="text-md text-gray-200 hover:text-white transition-colors duration-300 hover:text-deep-purple-accent-400 font-semibold"
                            >
                                Terms of Service
                            </a>
                        </li>
                        <li>
                            <a
                                href="/"
                                className="text-md text-gray-200 hover:text-white transition-colors duration-300 hover:text-deep-purple-accent-400 font-semibold"
                            >
                                Privacy Policy
                            </a>
                        </li>
                        <li>
                            <a
                                href="/"
                                className="text-md text-gray-200 hover:text-white transition-colors duration-300 hover:text-deep-purple-accent-400 font-semibold"
                            >
                                Ad Choices
                            </a>
                        </li>
                        <li>
                            <a
                                href="/"
                                className="text-md text-gray-200 hover:text-white transition-colors duration-300 hover:text-deep-purple-accent-400 font-semibold"
                            >
                                Cookie Policy
                            </a>
                        </li>
                        <li>
                            <a
                                href="/"
                                className="text-md text-gray-200 hover:text-white transition-colors duration-300 hover:text-deep-purple-accent-400 font-semibold"
                            >
                                Partners
                            </a>
                        </li>
                    </ul>
                    <ul className="flex flex-col mb-3 space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row">
                        <a
                            href="/"
                            className="text-md text-gray-200 hover:text-white transition-colors duration-300 hover:text-deep-purple-accent-400 font-semibold tracking-tight"
                        >
                            © 2024 IntelliTALK..
                        </a>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer