import {useState} from "react";

const History = ():JSX.Element => {

    const [options, setOptions] = useState<boolean[]>([true, false, false])

    const showMenu = (index:number) => {
        const array = [false, false, false];
        array[index] = true;
        setOptions(array);
    }

    return (
        <section className={'w-full h-full bg-[#f2f6fc]'}>
            <div className={'pl-10 py-4 font-Index tracking-wider'}>
                <h1 className={'text-2xl font-bold text-[#3c3c3c]'}>You Order History</h1>
                <h4 className={'text-[12px] text-gray-400'}>Good morning kasun. You have placed 4 order's for now .</h4>
            </div>
            <div className={'flex mx-10 gap-2'}>
                <div className={' px-4 w-fit pl-2 pr-3 py-2 rounded-xl font-Index text-[12px] text-gray-400 bg-green-100 '}>You have new 3 orders</div>
                <div className={' px-4 w-fit pl-2 pr-3 py-2 rounded-xl font-Index text-[12px] text-gray-400 bg-purple-100 '}>You last 3 orders</div>
            </div>
            <div className={'w-full flex flex-wrap px-10 py-2 gap-6'}>
                <div className={'w-[400px] h-[200px] bg-white'}></div>
                <div className={'w-[400px] h-[200px] bg-white'}></div>
                <div className={'w-[400px] h-[200px] bg-white'}></div>
            </div>
            <div className={'w-full h-10 px-10'}>
                <ul className={'w-full h-full flex pl-4 font-Index text-[13px] text-gray-400'}>
                    <li onClick={() => showMenu(0)}
                        className={`w-6 h-full flex items-center cursor-pointer justify-center mr-6 border-b-[3px] ${options[0] ? 'text-[#3c3c3c] border-[#3c3c3c]': 'border-white '}`}>All</li>
                    <li onClick={() => showMenu(1)}
                        className={`h-full flex items-center cursor-pointer justify-center mr-6 border-b-[3px] ${options[1] ? 'text-[#3c3c3c] border-[#3c3c3c]': 'border-white '}`}>Coffee</li>
                    <li onClick={() => showMenu(2)}
                        className={`h-full flex items-center cursor-pointer justify-center border-b-[3px] ${options[2] ? 'text-[#3c3c3c] border-[#3c3c3c]': 'border-white '}`}>Dessert</li>
                </ul>
            </div>
            <section className={'px-10'}>
                <div className={'w-full bg-white h-[47vh] overflow-y-scroll'}>

                </div>
            </section>
        </section>
    );
}

export default History;
