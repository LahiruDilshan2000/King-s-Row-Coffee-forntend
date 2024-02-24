import {IoSettingsOutline} from "react-icons/io5";
import {AiOutlineAppstore} from "react-icons/ai";
import {RiHome6Line,} from "react-icons/ri";
import { BsPersonAdd } from "react-icons/bs";
import {TiDocumentText} from "react-icons/ti";
import {HiOutlineLogout} from "react-icons/hi";
import {PiCoffee} from "react-icons/pi";
import {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import SidebarIcon from "../icon/sidebarIcon.tsx";


const NavBar = (): JSX.Element => {

    const [myArray, setMyArray] = useState([false]);

    const handleSelectStyle = (index: number): void => {

        // Create a new array
        const newArray: boolean[] = [false, false, false, false, false, false];

        //desired changes
        newArray[index] = true;

        // Update the state with the new array
        setMyArray(newArray);
    }

    useEffect(() => {
        handleSelectStyle(0);
    }, []);

    return (
        <aside>
            <nav className={'w-20 h-screen pt-6 border-r-[1px] border-gray-700 relative bg-[#202225]'}>
                {/*<h1 className={'text-[1.9rem] text-[#FFA16C] font-[800] text-center font-head'}>King's <span
                    className={'text-black'}>Row</span></h1>*/}

                <ul className={'w-full mt-[80px] flex justify-center items-center flex-col'}>
                    <Link to={'/'}>
                        <SidebarIcon
                            icon={<RiHome6Line className="text-2xl"/>}
                            flag={myArray[0]}
                            index={0}
                            handleOption={handleSelectStyle}/>
                    </Link>
                    <Link to={'/menu'}>
                        <SidebarIcon
                            icon={<AiOutlineAppstore className="text-2xl"/>}
                            flag={myArray[1]}
                            index={1}
                            handleOption={handleSelectStyle}/>
                    </Link>
                    <Link to={'/history'}>
                        <SidebarIcon
                            icon={<TiDocumentText className="text-2xl"/>}
                            flag={myArray[2]}
                            index={2}
                            handleOption={handleSelectStyle}/>
                    </Link>
                    <Link to={'/item'}>
                        <SidebarIcon
                            icon={<PiCoffee className="text-2xl"/>}
                            flag={myArray[3]}
                            index={3}
                            handleOption={handleSelectStyle}/>
                    </Link>
                    <Link to={'/employee'}>
                        <SidebarIcon
                            icon={<BsPersonAdd className="text-2xl"/>}
                            flag={myArray[4]}
                            index={4}
                            handleOption={handleSelectStyle}/>
                    </Link>
                    <Link to={'/profile'}>
                        <SidebarIcon
                            icon={<IoSettingsOutline className="text-2xl"/>}
                            flag={myArray[5]}
                            index={5}
                            handleOption={handleSelectStyle}/>
                    </Link>

                </ul>
                <Link to={'/'}>
                    <div
                        className={`w-full absolute bottom-[40px] flex items-center cursor-pointer justify-center text-gray-400 rotate-180`}>
                        <HiOutlineLogout className="text-2xl hover:text-white"/>
                    </div>
                </Link>
            </nav>
        </aside>
    );
}

export default NavBar;
