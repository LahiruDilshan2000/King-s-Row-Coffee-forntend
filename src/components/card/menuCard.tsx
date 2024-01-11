import {HiMinusSmall} from "react-icons/hi2";
import {IoAdd} from "react-icons/io5";

const MenuCard = (): JSX.Element => {
    return (
        <div className={'w-[380px] h-[240px] bg-white rounded-2xl m-5 flex'}>
            {/*pic div*/}
            <div className={'w-[38%] h-full p-3 '}>
                <div className={'w-full h-[70%] bg-gray-100 rounded-xl flex justify-center items-center'}>
                    <img src="" alt=""/>
                </div>
                {/*button div*/}
                <div className={'w-full h-[30%] flex justify-center items-center'}>
                    <HiMinusSmall
                        className={'w-8 h-8 p-1 rounded-full border-2 border-gray-200 text-gray-500 m-2.5 hover:bg-gray-100 active:bg-gray-200 cursor-pointer'}/>
                    {3}
                    <IoAdd
                        className={'w-8 h-8 p-1 rounded-full border-2 border-gray-200 text-gray-500 m-2.5 hover:bg-gray-100 active:bg-gray-200 cursor-pointer'}/>
                </div>
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
                <div className={'w-full flex items-center py-1'}>
                    <h3 className={'font-round mr-3 text-sm'}>Size</h3>
                    <button
                        className={'px-4 py-1.5 border-2 border-gray-300 rounded-3xl font-round m-0.5 text-[13px] font-[500 hover:bg-gray-100'}>Small
                    </button>
                    <button
                        className={'px-4 py-1.5 border-2 border-gray-300 rounded-3xl font-round m-0.5 text-[13px] font-[500 hover:bg-gray-100'}>Large
                    </button>
                </div>
                <button
                    className={'mt-2 w-full py-2.5 border-2 border-[#ffe7d4] rounded-3xl font-cde text-[13px] text-[#FFA16C] font-[500] hover:bg-[#fff4ed]'}>Add
                    to Cart
                </button>
            </div>
        </div>
    );
}

export default MenuCard;
