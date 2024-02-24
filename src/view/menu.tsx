import {IoAdd} from "react-icons/io5";
import {HiMinusSmall} from "react-icons/hi2";
import MenuCard from "../components/card/menuCard.tsx";


const Menu = (): JSX.Element => {


    return (
        <section className={'w-full h-full bg-gray-100 flex'}>

            {/*Menu*/}
            <div className={'w-[78%] h-full'}>
                {/*nav*/}
                <div>
                    <ul className={'w-full h-[12vh] flex gap-3 items-center px-8'}>
                        <li className={'py-2 px-6 rounded-3xl bg-[#FFA16C] text-white cursor-pointer border-gray-200 font-round text-sm'}>Coffee</li>
                        <li className={'py-2 px-6 rounded-3xl cursor-pointer font-round text-sm bg-gray-700 text-white transition-all duration-300 ease-linear hover:rounded-xl hover:bg-[#FFA16C]'}>Dessert</li>
                    </ul>
                </div>

                {/*cards*/}

                <div className={'w-full h-[71.3vh] flex flex-wrap items-start justify-start mt-2 overflow-y-scroll pl-[10px]'}>
                    <MenuCard/>
                    <MenuCard/>
                    <MenuCard/>
                    <MenuCard/>
                    <MenuCard/>
                </div>

            </div>

            {/*Cart*/}
            <div className={'w-[22%] h-full border-l-2 bg-white border-gray-200 px-5 py-6'}>
                <div className={'flex w-full font-round'}>
                    <h1 className={'text-xl font-[400] text-gray-800'}>Cart</h1>
                    <h3 className={'w-full text-end  text-[12px] font-[500] text-gray-800 flex items-end justify-end'}>Order#3242</h3>
                </div>
                <div className={'flex w-full font-round py-1'}>
                    <h1 className={'text-sm text-gray-400'}>Date</h1>
                    <h3 className={'w-full text-end text-[13px] font-[500] text-gray-400 flex items-end justify-end'}>2024/01/04</h3>
                </div>
                <div className={'w-full h-[50vh] py-3 overflow-y-scroll'}>

                    {/*card*/}
                    <div className={'w-full h-[24vh] flex py-4 border-b-2 border-gray-200'}>
                        <div className={'w-[40%] h-full bg-gray-100 rounded-xl'}>
                            <img src="" alt=""/>
                        </div>
                        <div className={'w-[60%] h-full px-5 py-2 font-round justify-center items-center'}>
                            <h1 className={'text-gray-800'}>Cappucino</h1>
                            <h3 className={'text-[12px] text-gray-400'}>Small</h3>
                            <div className={'w-full flex mt-5'}>
                                <h1 className={'flex items-center mr-3 text-gray-500'}>$ <span>14.94</span></h1>
                                <div className={'flex justify-center items-center'}>
                                    <HiMinusSmall
                                        className={'w-6 h-6 py-1 m-1 rounded-full border-[1px] border-gray-400 hover:bg-gray-300 active:bg-gray-400 cursor-pointer'}/>
                                    <div className={'text-black mx-2'}>
                                        {3}
                                    </div>
                                    <IoAdd className={'w-6 h-6 py-1 m-1 rounded-full border-[1px] border-gray-400 hover:bg-gray-300 active:bg-gray-400 cursor-pointer'}/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={'w-full h-[24vh] flex py-4 '}>
                        <div className={'w-[40%] h-full bg-gray-100 rounded-xl'}>
                            <img src="" alt=""/>
                        </div>
                        <div className={'w-[60%] h-full px-5 py-2 font-round justify-center items-center'}>
                            <h1 className={''}>Cappucino</h1>
                            <h3 className={'text-[12px] text-gray-400'}>Small</h3>
                            <div className={'w-full flex mt-5'}>
                                <h1 className={'flex items-center mr-3'}>$ <span>14.94</span></h1>
                                <div className={'flex justify-center items-center'}>
                                    <HiMinusSmall
                                        className={'w-6 h-6 py-1 m-1 rounded-full border-2 border-gray-200 text-gray-500  hover:bg-gray-100 active:bg-gray-200 cursor-pointer'}/>
                                    {3}
                                    <IoAdd className={'w-6 h-6 py-1  m-1 rounded-full border-2 border-gray-200 text-gray-500 hover:bg-gray-100 active:bg-gray-200 cursor-pointer'}/>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className={'flex w-full font-round py-1'}>
                    <h3 className={'text-sm text-gray-500 '}>Items</h3>
                    <h3 className={'w-full text-end text-[12px] flex items-end justify-end text-green-500'}>$ <span
                        className={'font-cde text-green-500'}> 20.92</span></h3>
                </div>
                <div className={'flex w-full font-round  border-b-2 border-gray-200 pb-3'}>
                    <h3 className={'text-sm text-gray-500'}>Discounts</h3>
                    <h3 className={'w-full text-end text-[12px] flex items-end justify-end text-red-500'}>$ -<span
                        className={'font-cde text-red-500'}> 3.00</span></h3>
                </div>
                <div className={'flex w-full font-round pt-3 pb-2'}>
                    <h3 className={'text-sm text-gray-700'}>Total</h3>
                    <h3 className={'w-full text-end text-[12px] text-[#FFA16C] flex items-end justify-end'}>$ <span
                        className={'font-cde text-[14px]'}> 17.92</span></h3>
                </div>
                <button
                    className={'mt-2 w-full py-3 rounded-3xl font-cde text-sm text-white bg-[#ffa16c] font-[500] hover:bg-[#fe7439]'}>Place
                    an order
                </button>
            </div>
        </section>
    );
}

export default Menu;
