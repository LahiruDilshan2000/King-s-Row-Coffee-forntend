import {IoAdd} from "react-icons/io5";
import {HiMinusSmall} from "react-icons/hi2";
import MenuCard from "../components/card/menuCard.tsx";
import {useEffect, useState} from "react";
import axios from "axios";
import EmptyOrderItem from "../components/componet/empty.order.item.tsx";


interface CoffeeData {
    _id: string;
    name: string;
    desc: string;
    largeSize: number;
    smallSize: number;
    qty: number;
    image: string;
}

interface DessertData {
    _id: string;
    name: string;
    desc: string;
    size: number;
    price: number;
    qty: number;
    image: string;
}

const Menu = (): JSX.Element => {

    const [options, setOptions] = useState<boolean[]>([true, false, false])
    const [coffeeData, setCoffeeData] = useState<CoffeeData[]>([]);
    const [dessertData, setDessertData] = useState<DessertData[]>([]);
    const [allArray, setAllArray] = useState<(DessertData | CoffeeData) []>([])

    const fetchData = (): void => {

        if (options[1]) {
            handleGetCoffeeData();
            return;
        }
        if (options[2]) {
            handleGetDessertData();
        }
    }

    const handleGetCoffeeData = () => {

        // 'http://localhost:8080/emplaoyee?size=100&page=1'
         axios.get('http://localhost:8080/coffee/getAll')
            .then(response => {
                setCoffeeData(response.data.data);
            })
            .catch(err => {
                console.log(err);
            });
    }

    const handleGetDessertData =  () => {

        // 'http://localhost:8080/emplaoyee?size=100&page=1'
        axios.get('http://localhost:8080/dessert/getAll')
            .then(response => {
                setDessertData(response.data.data);
            })
            .catch(err => {
                console.log(err);
            });
    }
    useEffect(() => {
        handleGetCoffeeData();
        handleGetDessertData();
    }, []);

    useEffect(() => {
        setAllArray([...coffeeData, ...dessertData]);
    }, [coffeeData]);

    useEffect(() => {
        fetchData();
    }, [options]);

    useEffect(() => {
        if (options[0]) {
            setAllArray([...coffeeData, ...dessertData]);
        }
    }, [options[0]]);

    const showMenu = (index: number) => {
        const array = [false, false, false];
        array[index] = true;
        setOptions(array);
    }

    return (
        <section className={'w-full h-full  flex bg-white'}>
            {/*Menu*/}
            <div className={'w-[78%] h-full'}>
                <div className={'pl-10 py-4 font-Index tracking-wider'}>
                    <h1 className={'text-2xl font-bold text-[#3c3c3c]'}>Orders</h1>
                    <h4 className={'text-[12px] text-gray-400'}>Good morning kasun. You 4 pending orders .</h4>
                </div>
                {/*nav*/}
                <div className={'w-full h-10 px-10'}>
                    <ul className={'w-full h-full flex font-Index text-[13px] text-gray-400 gap-2'}>
                        <li onClick={() => showMenu(0)}
                            className={`w-20 h-9 flex justify-center items-center cursor-pointer transition-all 
                            ease-linear duration-200 hover:rounded-xl 
                            ${options[0] ? 'text-white bg-[#3c3c3c] rounded-xl' : 'rounded-[25px] border-[1px] border-gray-300'}`}>All
                        </li>
                        <li onClick={() => showMenu(1)}
                            className={`w-20 h-9 flex justify-center items-center cursor-pointer transition-all 
                            ease-linear duration-200 hover:rounded-xl 
                            ${options[1] ? 'text-white bg-[#3c3c3c] rounded-xl' : 'rounded-[25px] border-[1px] border-gray-300'}`}>Coffee
                        </li>
                        <li onClick={() => showMenu(2)}
                            className={`w-20 h-9 flex justify-center items-center cursor-pointer transition-all 
                            ease-linear duration-200 hover:rounded-xl 
                            ${options[2] ? 'text-white bg-[#3c3c3c] rounded-xl' : 'rounded-[25px] border-[1px] border-gray-300'}`}>Dessert
                        </li>
                    </ul>
                </div>

                {/*cards*/}

                <div className={'w-full h-[80vh] flex flex-wrap mt-4 overflow-y-scroll px-10 pt-5 pb-12 bg-[#f2f6fc]'}>

                    {
                        options[1] ?
                            coffeeData.length > 0 ?
                                coffeeData.map(value => {
                                    return <MenuCard
                                        cardType={"coffee"}
                                        key={value._id}
                                        item={value}
                                    />
                                })
                                :
                                <EmptyOrderItem/>
                            :
                            options[2] ?
                                dessertData.length > 0 ?
                                    dessertData.map(value => {
                                        return <MenuCard
                                            cardType={"dessert"}
                                            key={value._id}
                                            item={value}
                                        />
                                    })
                                    :
                                    <EmptyOrderItem/>
                                :
                                options[0] ? allArray.length > 0 ?
                                    allArray.map((value: (CoffeeData | DessertData), index: number) => {
                                        return <MenuCard
                                            cardType={index < coffeeData.length ? "coffee" : "dessert"}
                                            key={value._id}
                                            item={value}
                                        />
                                    })
                                    :
                                    <EmptyOrderItem/>
                                    :
                                    <div>111111</div>

                    }
                </div>
            </div>

            {/*Cart*/}
            <div className={'w-[22%] h-full border-l-2 bg-white border-gray-200 px-5 pt-24'}>
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
                    <div className={'w-full h-full rounded-2xl flex justify-center items-center flex-col'}>
                        <img src="src/assets/EmptyOrder-removebg-preview.png" alt="empty-cart"/>
                        <h1 className={'font-pop text-[13px] tracking-wide font-bold text-gray-500'}>No item's for cart
                            yet .</h1>
                    </div>
                    {/*<div className={'w-full h-[24vh] flex py-4 border-b-2 border-gray-200'}>
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
                    </div>*/}

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
