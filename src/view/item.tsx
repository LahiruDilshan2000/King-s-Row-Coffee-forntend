import {HiMinusSmall} from "react-icons/hi2";
import {IoAdd} from "react-icons/io5";
import ItemCard from "../components/card/itemCard.tsx";
import SecondButton from "../components/buttons/secondButton.tsx";


const Item = ():JSX.Element => {
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
                        br_color={''}
                        br_reduce={20}
                        bg_active={''}
                        bg_hover={'#363636'}
                        bg_color={'#ffa16c'}
                        is_active={false}/>
                </div>
            </div>

        </section>
    );
}

export default Item;
