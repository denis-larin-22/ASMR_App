import { Link } from "react-router-dom";
import { icons } from "../../assets";
import { useState } from 'react';
import { AnimatePresence, motion } from "framer-motion";

export const Sidebar = () => {
    const [toggleVissible, setToggleVissible] = useState(false);
    const logo = icons.find((item) => item.nameIcon === 'logo');
    const navigationIconList = icons.filter((item) => item.nameIcon !== 'logo');

    return (
        <section className="absolute top-0 left-0 z-20 w-screen lg:w-fit min-h-fit lg:min-h-screen p-5 flex flex-row lg:flex-col justify-between items-center">
            <a href="/" className="w-9 h-9">
                {logo?.icon}
            </a>

            <nav className="mb-[300px] py-6 px-4 bg-dark-alt rounded-full hidden lg:flex flex-col gap-10 ">
                {navigationIconList.map((svgIcon, index) => (
                    <Link
                        key={index}
                        to={svgIcon.nameIcon === 'home' ? '/' :
                            svgIcon.nameIcon === 'sound-video' ? '/sound' : '/playlist'}
                        className="inline-block w-6 h-6 hover:scale-125 duration-150"
                    >
                        {svgIcon.icon}
                    </Link>
                ))}
            </nav>

            <button className="block lg:hidden" onClick={() => setToggleVissible(true)} >
                <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" fill="rgba(255, 255, 255, 0.5)" /></svg>
            </button>

            <AnimatePresence>
                {toggleVissible && <motion.nav
                    className="absolute top-0 right-0 z-50 w-screen h-screen bg-dark p-5 flex flex-col gap-6 items-start justify-center"
                    initial={{ opacity: 0, x: '100%' }}
                    animate={{ opacity: 1, x: 0, transition: { duration: 0.4 } }}
                    exit={{ opacity: 0, x: '100%', transition: { duration: 0.4 } }}
                >
                    <button className="absolute top-6 right-5" onClick={() => setToggleVissible(false)}>
                        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" fill="rgba(255, 255, 255, 0.5)" /></svg>
                    </button>
                    {navigationIconList.map((svgIcon, index) => (
                        <Link
                            key={index}
                            to={svgIcon.nameIcon === 'home' ? '/' :
                                svgIcon.nameIcon === 'sound-video' ? '/sound' : '/playlist'}
                            className=" hover:scale-125 duration-150 flex items-center gap-3 text-m-md text-white-opacity"
                        >
                            <div className="inline-block w-6 h-6">{svgIcon.icon}</div>
                            {svgIcon.nameIcon === 'home' ? 'Home' :
                                svgIcon.nameIcon === 'sound-video' ? 'Sound page' : 'Create sound'
                            }
                        </Link>
                    ))}
                </motion.nav>}
            </AnimatePresence>
        </section>
    )
}