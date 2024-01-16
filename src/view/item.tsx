import ItemCard from "../components/card/itemCard.tsx";
import SecondButton from "../components/buttons/secondButton.tsx";
import {useState} from "react";
import AddCoffee from "../components/layout/add.coffee.tsx";
import AddDessert from "../components/layout/add.dessert.tsx";



const Item = (): JSX.Element => {

    const [coffeeState, setCoffeeState] = useState(true);
    const [dessertState, setDessertState] = useState(false);


    const changeButton = (event: any): void => {
        switch (event.target.innerText) {
            case 'Coffee':
                setCoffeeState(true);
                setDessertState(false);
                break;
            case 'Dessert':
                setCoffeeState(false);
                setDessertState(true);
                break;
        }
    }

    const clearAll = () => {
        if (coffeeState){

        }
    }

    return (
        <section className={'w-full h-full bg-gray-100 flex'}>
            <div className={'w-[75%] h-full'}>

                <h1 className={'ml-16 mt-5 text-xl w-full font-round font-[500] cursor-default'}>Item Manage</h1>

                <div
                    className={'w-full h-[71.3vh] flex flex-wrap items-start justify-start mt-2 overflow-y-scroll pl-[40px]'}>
                    <ItemCard/>
                    <ItemCard/>
                    <ItemCard/>
                    <ItemCard/>
                    <ItemCard/>
                </div>
            </div>

            <div className={'w-[25%] h-full border-l-2 border-gray-200 bg-white px-5 py-2'}>
                <div className={'w-full flex'}>
                    <button
                        onClick={changeButton}
                        type={'button'}
                        className={`text-[13px] ${coffeeState ? 'bg-[#3C3C3C]' : 'bg-white'} font-normal mx-1 px-4 text-center py-1.5 font-round ` +
                            `rounded-3xl hover:${!coffeeState && 'bg-gray-200'} active:border-gray-300 ` +
                            `active:${!coffeeState && 'bg-gray-300'} cursor-default text-${coffeeState ? 'white' : 'gray-500'} border-[1px] border-gray-300 my-2`}>
                        Coffee
                    </button>
                    <button
                        onClick={changeButton}
                        type={'button'}
                        className={`text-[13px] ${dessertState ? 'bg-[#3C3C3C]' : 'bg-white'} font-normal mx-1 px-4 text-center py-1.5 font-round ` +
                            `rounded-3xl hover:${!dessertState && 'bg-gray-200'} active:border-gray-300 ` +
                            `active:${!dessertState && 'bg-gray-300'} cursor-default text-${dessertState ? 'white' : 'gray-500'} border-[1px] border-gray-300 my-2`}>
                        Dessert
                    </button>
                </div>
                {
                    coffeeState ? <AddCoffee/> : <AddDessert/>
                }
                <div className={'w-full px-2'}>
                    <button
                        onClick={clearAll}
                        className={`w-full h-[38px] font-round text-sm  ` +
                            ` border-[1px] border-gray-400 rounded-full  ` +
                            `active:bg-[#b0b0b0]`}>Clear All
                    </button>
                </div>



            </div>

        </section>
    );
}

export default Item;
