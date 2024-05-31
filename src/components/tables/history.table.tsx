import {useState} from "react";

const HistoryTable = ():JSX.Element => {

    const [headers, setHeaders] = useState(['ID', 'Date', 'QTY', 'Total', 'Status', 'Action']);

    return (
        <section className={'w-full bg-white rounded-xl'}>
            <div className={'px-4 h-16 flex items-center text-xl text-gray-500'}>
                <h1>You recent orders</h1>
            </div>
            <div className={'w-full bg-purple-700 flex gap-3 bg-opacity-5 h-10 border-t-[1px] border-b-[1px] border-gray-200'}>
                {
                    headers.map(value => {
                        return <div className={`${value == 'Date' ? 'w-[380px]' : 'w-56'} flex items-center pl-8 uppercase text-gray-500 font-[500] text-[13px]`}>
                            <h3>{value}</h3>
                        </div>
                    })
                }
            </div>
        </section>
    );
}

export default HistoryTable;
