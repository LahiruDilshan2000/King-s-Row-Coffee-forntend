import {IoIosMore} from "react-icons/io";
import {useRef, useState} from "react";


const EmployeeCard = ():JSX.Element => {


    const options: string[] = ["Update", "Delete"];
    const [openOption, setOpenOption] = useState(false);

    const iconRef = useRef();
    const handleWindowClick = (e: any): void => {
        if (iconRef.current && !iconRef.current.contains(e.target)) {
            setOpenOption(false)
        }
    }
    window.addEventListener('click', handleWindowClick);

    return (

        <div
            className={'w-full flex font-round text-[13px] font-[500] items-center h-16 px-5 border-b-2 border-gray-100 cursor-default'}>
            <div className={'flex w-[25%] h-full items-center'}>
                <img src="src/assets/NicePng_cammy-png_1829287.png" alt="profile"
                     className={'w-8 rounded-full object-cover mr-3'}/>
                <h1>Danapala</h1>
            </div>
            <h3 className={'w-[20%]'}>Pandura</h3>
            <h3 className={'w-[20%]'}>Dana@gmail.com</h3>
            <h3 className={'w-[15%]'}>22</h3>
            <h3 className={'w-[15%]'}>077 410 5585</h3>
            <div ref={iconRef} className={'w-[5%] h-full flex justify-end items-center text-lg relative'}>
                <IoIosMore
                    onClick={() => setOpenOption(!openOption)}
                    className={'active:bg-gray-50 cursor-pointer w-[30px] h-[30px] rounded-full py-1 text-gray-400'}/>
                {
                    openOption &&
                    <ul
                        className={'w-40 bg-white drop-shadow-lg rounded-lg absolute bottom-[-45px] left-[-150px] overflow-hidden'}>
                        {
                            options.map(option => {
                                return <li key={option}
                                    onClick={() => setOpenOption(!openOption)}
                                           className={'w-full text-center py-1.5 font-round text-[12px] hover:bg-gray-100 active:bg-gray-200 cursor-pointer text-[#fe7439] border-b-2 border-gray-100'}>{option}</li>
                            })
                        }
                    </ul>
                }
            </div>
        </div>
    );
}

export default EmployeeCard;