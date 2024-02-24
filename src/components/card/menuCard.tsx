import {HiMinusSmall} from "react-icons/hi2";
import {IoAdd} from "react-icons/io5";

const MenuCard = (): JSX.Element => {
    return (
        <div className={'w-[330px] h-[220px] bg-white rounded-2xl m-4 flex'}>
            {/*bg-[#202225]*/}
            {/*pic div*/}
            <div className={'w-[35%] h-full p-3 '}>
                <div className={'w-full h-[70%] bg-gray-100 rounded-xl flex justify-center items-center'}>
                    <img src="src/assets/89201034_3d_Paper_Coffee_Cup_-7-removebg-preview.png" alt=""/>
                </div>
                {/*button div*/}
                <div className={'w-full h-[30%] flex justify-center items-center'}>
                    <HiMinusSmall
                        className={'w-7 h-7 p-1 border-[1px] border-gray-400 rounded-full text-gray-500 hover:bg-gray-100 active:text-white active:bg-gray-400 cursor-pointer'}/>
                    <div className={'text-black mx-2'}>
                        {3}
                    </div>
                    <IoAdd
                        className={'w-7 h-7 p-1 border-[1px] border-gray-400 rounded-full text-gray-500 hover:bg-gray-100 active:text-white active:bg-gray-400 cursor-pointer'}/>
                </div>
            </div>
            {/*content*/}
            <div className={'w-[65%] h-full py-4 px-3 '}>
                <div className={'w-full flex'}>
                    <h3 className={'text-lg text-gray-800 tracking-wide font-bold '}>Cappucino</h3>
                    <h3 className={'font-round text-lg ml-4 text-[#FFA16C]'}>$ <span
                        className={'lg'}> 4.98</span></h3>
                </div>
                <p className={'font-round text-gray-400 py-2 leading-1 text-sm'}>Lorem ipsum dolor sit amet
                    ,codaw consectetur adipisicing elitsdaadsa. Accusamus. </p>
                <div className={'w-full flex items-center py-1'}>
                    <h3 className={'font-round mr-3 text-sm text-blue-500'}>Size</h3>

                    <div className={'font-round px-3 text-[18px] text-[#FFA16C] border-r-[1px] border-gray-500'}>S
                    </div>
                    <div className={'font-round px-3 text-[18px] text-[#FFA16C]'}>L
                    </div>
                </div>
                <button
                    className={'mt-2 w-full py-2.5 rounded-3xl font-round text-[13px] text-gray-600 border-[1px] font-normal border-[#FFA16C] active:bg-[#FFA16C] active:text-white hover:bg-[#262626]transition-all duration-100 ease-linear'}>Add
                    to Cart
                </button>
            </div>
        </div>
    );
}

export default MenuCard;
