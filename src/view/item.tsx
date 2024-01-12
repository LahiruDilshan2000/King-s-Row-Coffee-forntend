
import ItemCard from "../components/card/itemCard.tsx";
import SecondButton from "../components/buttons/secondButton.tsx";
import {useState} from "react";
import AddCoffee from "../components/layout/add.coffee.tsx";
import AddDessert from "../components/layout/add.dessert.tsx";



const Item = ():JSX.Element => {

    const [coffeeState, setCoffeeState] = useState(true);
    const [dessertState, setDessertState] = useState(false);


    const changeButton = (event:any):void => {
        switch (event.target.innerText){
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
    return (
        <section className={'w-full h-full bg-gray-100 flex'}>
            <div className={'w-[75%] h-full'}>

                <h1 className={'ml-16 mt-5 text-xl w-full font-round font-[500] cursor-default'}>Item Manage</h1>

                <div className={'w-full h-[71.3vh] flex flex-wrap items-start justify-start mt-2 overflow-y-scroll pl-[40px]'}>
                    <ItemCard/>
                    <ItemCard/>
                    <ItemCard/>
                    <ItemCard/>
                    <ItemCard/>
                </div>
            </div>

            <div className={'w-[25%] h-full border-l-2 border-gray-200 bg-white px-5 py-2'}>
                <div className={'w-full flex'}>
                <SecondButton
                        text={'Coffee'}
                        bg_color={'#3C3C3C'}
                        is_active={coffeeState}
                        onClick={changeButton}/>
                    <SecondButton
                        text={'Dessert'}
                        bg_color={'#3C3C3C'}
                        is_active={dessertState}
                        onClick={changeButton}/>
                </div>
                {
                    coffeeState ? <AddCoffee/>: <AddDessert/>
                }


            </div>

        </section>
    );
}

export default Item;
