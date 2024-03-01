import {forwardRef, useEffect, useImperativeHandle, useState} from "react";
import EmptyCart from "../../component/empty/empty.cart.tsx";
import CartCard from "../../card/cartCard.tsx";
import {ToastContainer} from "react-toastify";
import * as ToastUtil from "../../../util/toastUtil.tsx";
import {IoCheckmark, IoCloseOutline} from "react-icons/io5";

interface itemData {
    _id: string;
    name: string;
    size:string | number;
    qty: number;
    image: string;
    total:number;
    unitPrice:number;
    maxQty:number;
}

interface Props {

}

const AddOrder = forwardRef((props: Props, ref):JSX.Element => {

    const [orderId, setOrderId] = useState("");
    const [total, setTotal] = useState(0);
    const [lastTotal, setLastTotal] = useState(0);
    const [date, setDate] = useState("");
    const [detailsArray, setDetailsArray] = useState<itemData[]>([]);

    useImperativeHandle(ref, () => {
        return {
            setData: (data:itemData):void => {

                let isExist = detailsArray.findIndex(value => value._id === data._id && value.size === data.size);
                if (isExist === -1){
                    const temp:itemData[] = [...detailsArray];
                    temp.push(data);
                    setDetailsArray(temp);
                    return;
                }
                detailsArray[isExist].qty = data.qty;
                detailsArray[isExist].total = data.total;
                const ar = [...detailsArray];
                setDetailsArray([]);
                setDetailsArray(ar);
            },
        };
    });

    useEffect(() => {
        let tot = 0;
        detailsArray.map(value => {
            tot += value.total;
        });
        setTotal(tot);
         tot > 8 && (tot -= 3);
        setLastTotal(tot);
    }, [detailsArray]);


    const updateTotals = () => {

        let tot = 0;
        console.log(detailsArray.length)
        detailsArray.map(value => {
            console.log(value.total);
            tot += value.total
        });
        setTotal(tot);
        setLastTotal(tot);
    }

    const setEdit = (qty:number, option:string, _id:string, size:string | number) => {

        let isExist = detailsArray.findIndex(value => value._id === _id && value.size === size);

        if(isExist !== -1 && option === "Add"){
            updateQty(isExist, qty);
        }
        if(isExist !== -1 && option === "Div"){
            reduceQty(isExist, qty);
        }
        if (isExist !== -1 && option === "Delete"){
            deleteQty(isExist);
            return;
        }
        const ar = [...detailsArray];
        setDetailsArray([]);
        setDetailsArray(ar);
    }
    const updateQty = (index:number, qty:number) => {
        if (detailsArray[index].maxQty > qty){
            detailsArray[index].qty = ++qty;
            detailsArray[index].total = detailsArray[index].qty * detailsArray[index].unitPrice;
        }
    }

    const reduceQty = (index:number, qty:number) => {
        if (detailsArray[index].qty > 1){
            detailsArray[index].qty = --qty;
            detailsArray[index].total = detailsArray[index].qty * detailsArray[index].unitPrice;
        }
    }

    const deleteQty = (index:number) => {
        let temp = [...detailsArray];
        temp.splice(index, 1);
        setDetailsArray(temp);
        ToastUtil.error("Success", "Item deleted successfully", <IoCheckmark className={'text-red-500 text-lg'}/>);
    }


    return (
        <section>
            <ToastContainer toastClassName={"toast-class"} bodyClassName={"toast-body"}/>
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

                {
                    detailsArray.length > 0 ?
                        detailsArray.map((value, index) => {
                            return <CartCard
                                key={value._id + index}
                                _id={value._id}
                                name={value.name}
                                size={value.size}
                                qty={value.qty}
                                image={value.image}
                                total={value.total}
                                maxQty={value.maxQty}
                                editQty={setEdit}/>
                        })
                        :
                        <EmptyCart/>
                }

            </div>
            <div className={'flex w-full font-round py-1'}>
                <h3 className={'text-sm text-gray-500 '}>Items</h3>
                <h3 className={'font-Robot w-full text-[13px] text-end flex items-end justify-end'}>{total}<span
                    className={'ml-2 text-[12px] text-gray-500'}>USD</span></h3>
            </div>
            <div className={'flex w-full font-round  border-b-2 border-gray-200 pb-3'}>
                <h3 className={'text-sm text-gray-500'}>Discounts</h3>
                <h3 className={'font-Robot text-red-500 w-full text-[13px] text-end flex items-end justify-end'}>{" - "+3}<span
                    className={'ml-2 text-[12px]'}>USD</span></h3>
            </div>
            <div className={'flex w-full font-round pt-3 pb-2'}>
                <h3 className={'text-sm text-gray-700'}>Total</h3>
                <h3 className={'font-Robot w-full text-[18px] m-0 text-end flex items-end justify-end'}>{lastTotal}<span
                    className={'ml-2 text-[14px] text-gray-500'}>USD</span></h3>
            </div>
            <button
                className={'mt-2 w-full py-3 rounded-3xl font-cde text-sm text-white bg-[#ffa16c] font-[500] hover:bg-[#fe7439]'}>Place
                an order
            </button>
        </section>
    );
});

export default AddOrder;
