import ItemCard from "../components/card/itemCard.tsx";
import {createRef, useEffect, useState} from "react";
import AddCoffee from "../components/layout/add.coffee.tsx";
import AddDessert from "../components/layout/add.dessert.tsx";
import axios from "axios";

interface Data {
    _id: string;
    name: string;
    desc: string;
    largeSize: number;
    smallSize: number;
    qty: number;
    image: string;
}

const Item = (): JSX.Element => {


    const [coffeeState, setCoffeeState] = useState(true);
    const [dessertState, setDessertState] = useState(false);

    const [data, setData] = useState<Data[]>([]);
    const addCoffeeRef = createRef();

    const setCoffee = (coffee:Data) => {
        // @ts-ignore
        addCoffeeRef?.current?.setCoffee(coffee);
    }

    const fetchData = (): void => {

        // 'http://localhost:8080/emplaoyee?size=100&page=1'
        axios.get('http://localhost:8080/coffee/getAll')
            .then(response => {
                setData(response.data.data);
            })
            .catch(err => {
                console.log(err);
            });
    }

    useEffect(() => {
        fetchData();
    }, []);


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

    return (
        <section className={'w-full h-full bg-[#f2f6fc] flex'}>
            <div className={'w-[78%] h-full'}>
                <div className={'pl-10 py-4 font-Index tracking-wider'}>
                    <h1 className={'text-2xl font-bold text-[#3c3c3c]'}>Items</h1>
                    <h4 className={'text-[12px] text-gray-400'}>Good morning kasun. You have added new 4 items .</h4>
                </div>
                <div className={'w-full h-8 flex px-10 gap-2'}>
                    <button
                        onClick={changeButton}
                        type={'button'}
                        className={`shadow cursor-pointer text-[13px] ${coffeeState ? 'bg-[#3C3C3C]' : 'bg-white'} font-normal px-4 text-center h-full font-round ` +
                            `rounded-3xl hover:${!coffeeState && 'bg-gray-200'} active:border-gray-300 ` +
                            `active:${!coffeeState && 'bg-gray-300'} cursor-default text-${coffeeState ? 'white' : 'gray-500'} border-[1px] border-gray-300 `}>
                        Coffee
                    </button>
                    <button
                        onClick={changeButton}
                        type={'button'}
                        className={`shadow cursor-pointer text-[13px] ${dessertState ? 'bg-[#3C3C3C]' : 'bg-white'} font-normal px-4 text-center font-round ` +
                            `rounded-3xl hover:${!dessertState && 'bg-gray-200'} active:border-gray-300 ` +
                            `active:${!dessertState && 'bg-gray-300'} cursor-default text-${dessertState ? 'white' : 'gray-500'} border-[1px] border-gray-300`}>
                        Dessert
                    </button>
                </div>
                <div
                    className={'w-full h-[80vh] flex flex-wrap mt-4 overflow-y-scroll px-10 pt-5 pb-12'}>
                    {
                        data.length > 0 &&
                        data.map(value => {
                            return <ItemCard
                                onLoadAction={fetchData}
                                setCoffee={setCoffee}
                                qty={value.qty}
                                key={value._id}
                                smallSize={value.smallSize}
                                largeSize={value.largeSize}
                                name={value.name}
                                _id={value._id}
                                desc={value.desc}
                                image={`http://localhost:8080/images/${value.image}`}/>
                        })
                    }
                </div>
            </div>

            <div className={'w-[22%] h-full border-l-2 border-gray-200 bg-white px-5 pt-20'}>
                {
                    coffeeState ? <AddCoffee ref={addCoffeeRef} onLoadAction={fetchData} onSetCoffee={setCoffee}/> : <AddDessert/>
                }
            </div>

        </section>
    );
}

export default Item;
