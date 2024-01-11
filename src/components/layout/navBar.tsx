import {IoSettingsOutline} from "react-icons/io5";
import {AiOutlineAppstore} from "react-icons/ai";
import {RiHome6Line,} from "react-icons/ri";
import {LuArchiveRestore} from "react-icons/lu";
import {TiDocumentText} from "react-icons/ti";
import {HiOutlineLogout} from "react-icons/hi";
import {useState} from "react";
import {Link} from "react-router-dom";


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

    return (
        <aside>
            <nav className={'w-[250px] h-[100vh] pt-6 border-r-2 border-gray-150 relative'}>
                <h1 className={'text-3xl text-[#FFA16C] font-[800] text-center font-AA '}>King's <span
                    className={'text-black'}>Row</span></h1>

                <div className={'mt-[80px] h-[230px] font-round border-b-2 border-gray-150'}>
                    <ul className={'w-full'}>
                        <Link to={'/item'}>
                            <li className={`bg-gradient-to-r from-[#fff4ed] ... w-full h-[50px] flex pl-8 items-center  hover:bg-gray-100 cursor-pointer transition-all relative ${myArray[0] ? 'text-[#FFA16C]' : 'text-gray-500'}`}
                                onClick={() => handleSelectStyle(0)}><RiHome6Line className="mr-5 text-2xl"/>Home
                                page{myArray[0] &&
                                    <span
                                        className={'bg-[#FFA16C] rounded-tl-3xl rounded-bl-3xl w-[5px] h-full absolute right-0'}></span>}
                            </li>
                        </Link>
                        <Link to={'/employee'}>
                            <li className={`w-full h-[50px] flex pl-8 items-center border-[#FFA16C] hover:bg-gray-100 cursor-pointer transition-all relative ${myArray[1] ? 'text-[#FFA16C]' : 'text-gray-500'}`}
                                onClick={() => handleSelectStyle(1)}><AiOutlineAppstore
                                className="mr-5 text-2xl"/>Menu{myArray[1] && <span
                                className={'bg-[#FFA16C] rounded-tl-3xl rounded-bl-3xl w-[5px] h-full absolute right-0'}></span>}
                            </li>
                        </Link>
                        <Link to={'/history'}>
                            <li className={`w-full h-[50px] flex pl-8 items-center border-[#FFA16C] hover:bg-gray-100 cursor-pointer transition-all relative ${myArray[2] ? 'text-[#FFA16C]' : 'text-gray-500'}`}
                                onClick={() => handleSelectStyle(2)}><TiDocumentText
                                className="mr-5 text-2xl"/>History{myArray[2] && <span
                                className={'bg-[#FFA16C] rounded-tl-3xl rounded-bl-3xl w-[5px] h-full absolute right-0'}></span>}
                            </li>
                        </Link>
                        <Link to={'/menu'}>
                            <li className={`w-full h-[50px] flex pl-8 items-center border-[#FFA16C] hover:bg-gray-100 cursor-pointer transition-all relative ${myArray[3] ? 'text-[#FFA16C]' : 'text-gray-500'}`}
                                onClick={() => handleSelectStyle(3)}><LuArchiveRestore
                                className="mr-5 text-2xl"/>Purchases{myArray[3] && <span
                                className={'bg-[#FFA16C] rounded-tl-3xl rounded-bl-3xl w-[5px] h-full absolute right-0'}></span>}
                            </li>
                        </Link>
                    </ul>
                </div>

                <Link to={'/profile'}>
                    <div
                        className={`h-[50px] font-round mt-8 pl-8 flex items-center relative hover:bg-gray-100 cursor-pointer ${myArray[4] ? 'text-[#FFA16C]' : 'text-gray-500'}`}
                        onClick={() => handleSelectStyle(4)}>
                        <IoSettingsOutline className="mr-5 text-2xl"/> Profile{myArray[4] &&
                        <span
                            className={'bg-[#FFA16C] rounded-tl-3xl rounded-bl-3xl w-[5px] h-full absolute right-0'}></span>}
                    </div>
                </Link>

                <Link to={'/login'}>
                    <div
                        className={`w-full h-[50px] font-round absolute bottom-[40px] pl-8 flex items-center hover:bg-gray-100 cursor-pointer text-gray-500`}>
                        <HiOutlineLogout className="mr-5 text-2xl"/>Log out
                    </div>
                </Link>
            </nav>
        </aside>
    );
}

export default NavBar;
