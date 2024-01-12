import { FiMoreVertical } from "react-icons/fi";
import {useRef, useState} from "react";


const ItemCard = ():JSX.Element => {

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
        <div   className={'w-[380px] h-[210px] bg-white rounded-2xl m-5 flex relative'}>
            <div ref={iconRef}>
                <FiMoreVertical
                    onClick={() => setOpenOption(!openOption)}
                    className={'absolute right-4 top-4 text-sm text-gray-500 cursor-pointer active:bg-gray-100 rounded-full w-6 h-6 px-1'}/>
            </div>

            {
                openOption &&
                <ul
                    className={'px-3 bg-white absolute top-2 right-[5px] rounded-xl'}>
                    {
                        options.map(option => {
                            return <li key={option}
                                       onClick={() => setOpenOption(!openOption)}
                                       className={'px-6 text-center py-2 font-round rounded-lg text-[12px] hover:bg-[#ffcaa9] hover:text-white ' +
                                           'active:bg-gray-200 active:border-gray-200 text-[13px] cursor-pointer text-gray-500 border-[1px] border-[#ffcaa9] my-2'}>{option}</li>
                        })
                    }
                </ul>
            }
            {/*pic div*/}
            <div className={'w-[38%] h-full p-3 '}>
                <div className={'w-full h-full bg-gray-100 rounded-xl flex justify-center items-center'}>
                    <img src="" alt=""/>
                </div>
                {/*button div*/}
            </div>
            {/*content*/}
            <div className={'w-[62%] h-full py-4 px-3 font-round'}>
                <div className={'w-full flex'}>
                    <h3 className={'font-round text-lg text-gray-700 font-bold'}>Cappucino</h3>
                    <h3 className={'font-round text-lg ml-4 text-[#FFA16C]'}>$ <span
                        className={'lg'}> 4.98</span></h3>
                </div>
                <p className={'font-round text-gray-400 py-2 leading-5 text-sm'}>Lorem ipsum dolor sit amet
                    ,codaw consectetur adipisicing elitsdaadsa. Accusamus. </p>
                <div className={'w-full flex items-center py-1 text-sm text-gray-400 '}>
                    <div className={'w-[60%]'}>
                        <div className={'w-full flex my-1'}>
                            <span className={'text-[12px] bg-[#888888] rounded-3xl text-white cursor-default px-3 py-1'}>Large</span>
                            <div className={'text-end w-[55%] text-[#FFA16C] py-1'}>$ <span> 3.00</span></div>
                        </div>
                        <div className={'w-full flex my-1'}>
                            <span className={'text-[12px] bg-[#888888] rounded-3xl text-white cursor-default  px-3 py-1'}>Small</span>
                            <div className={'text-end w-[55%] text-[#FFA16C] py-1'}>$ <span> 3.00</span></div>
                        </div>
                    </div>
                    <div className={'w-[40%] text-center  text-sm flex flex-col'}>
                        Qty
                        <span className={'m-1 text-[#FFA16C] text-lg'}>20</span>

                    </div>

                </div>
            </div>
        </div>
    );
}

export default ItemCard;
