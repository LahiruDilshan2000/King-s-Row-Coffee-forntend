import {HiMinusSmall} from "react-icons/hi2";
import {IoAdd} from "react-icons/io5";
import {useState} from "react";
import * as ToastUtil from "../../util/toastUtil.ts"
import axios from "axios";
import {ToastContainer, Slide, toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import CustomToast from "../componet/custom.toast.tsx";

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

interface Props {
    cardType:string;
    item:(CoffeeData | DessertData);
}

const MenuCard = (props:Props): JSX.Element => {

    const [selected, setSelected] = useState([false, false])
    const [qty, setQty] = useState(0);
    const [added, setAdded] = useState(false);

    const setSelectedItem = (index:number) => {
         const newArr = [false, false];
         newArr[index] = true;
         setSelected(newArr);
    }

    const handleAddItem = () => {

        //toast("Wow so easy!")
        toast(<CustomToast/>,
            {
                transition:Slide,
                hideProgressBar:true,
                autoClose:false
            });
       //ToastUtil.error();
        /*if (qty > 0){
            setAdded(!added);
        }else {
            setAdded(false)
        }*/

    }

    return (
        <div className={'w-[330px] h-[215px] bg-white rounded-[20px] m-2 flex'}>
            <ToastContainer toastClassName={"toast"} bodyClassName={"toast-body"} />
            {/*pic div*/}
            <div className={'w-[35%] h-full p-2 '}>
                <div className={'w-full h-[70%] bg-gray-100 rounded-xl flex justify-center items-center'}>
                    <img src={`http://localhost:8080/images/${props.item.image}`} alt="image"/>
                </div>
                {/*button div*/}
                <div className={'w-full h-[30%] flex justify-center items-center'}>
                    <HiMinusSmall onClick={() => {
                        qty !== 0 && setQty(qty - 1);
                    }}
                        className={`w-7 h-7 p-1.5 border-[1px] border-gray-200 rounded-full text-black hover:bg-gray-100 active:text-white active:bg-[#3c3c3c] cursor-pointer`}/>
                    <div className={'text-black mx-2'}>
                        {qty}
                    </div>
                    <IoAdd onClick={() => setQty(qty + 1)}
                        className={`w-7 h-7 p-1.5 border-[1px] border-gray-200 rounded-full text-black hover:bg-gray-100 active:text-white active:bg-[#3c3c3c] cursor-pointer`}/>
                </div>
            </div>
            {/*content*/}
            <div className={'w-[65%] h-full py-4 px-3 '}>
                <div className={'w-full relative'}>
                    <h3 className={'text-[15px] text-gray-800 tracking-wide font-bold font-Index'}>{props.item.name}</h3>
                    <h3 className={'font-round absolute right-2 top-[-4px] text-lg text-[#FFA16C]'}>$ <span
                        className={''}> 4.98</span></h3>
                </div>
                <p className={'text-gray-400 py-2 leading-1 text-[13px] font-Index'}>{props.item.desc} </p>

                {
                    props.cardType === "coffee" ?
                        <div className={'w-full flex items-center py-1'}>
                            <h3 className={'font-round mr-3 text-sm text-[#FFA16C]'}>Size</h3>
                            <button className={`px-3.5 py-1.5 border-[1px] font-Index rounded-2xl 
                            border-gray-200 text-[12px] ${!selected[0] && 'hover:bg-gray-100'} mr-1 
                            ${selected[0] ? 'bg-[#3c3c3c] text-white' : 'bg-none text-gray-500'}`}
                                    onClick={() => setSelectedItem(0)}>Small
                            </button>
                            <button className={`px-3.5 py-1.5 border-[1px] font-Index rounded-2xl 
                            border-gray-200 text-[12px] ${!selected[1] && 'hover:bg-gray-100'} mr-1 
                            ${selected[1] ? 'bg-[#3c3c3c] text-white' : 'bg-none text-gray-500'}`}
                                    onClick={() => setSelectedItem(1)}>Large
                            </button>
                        </div>
                        :
                        <div className={'w-full flex items-center py-1'}>
                            <h3 className={'font-round mr-3 text-sm text-[#FFA16C]'}>Size</h3>
                            <span className={`px-4 py-1.5 font-Index rounded-2xl text-[12px] 
                            mr-1 bg-[#3c3c3c] text-white`}>{props.item.size + " g"}
                            </span>
                        </div>

                }

                <button onClick={() => handleAddItem()}
                    className={`mt-2 w-full py-2 rounded-3xl font-Index text-[12px] font-[400] border-[1px] 
                    border-opacity-60 border-[#FFA16C] ${qty > 0 && 'active:bg-[#FFA16C] active:text-white'}  transition-all
                     duration-100 ease-linear ${added ? 'bg-[#FFA16C] text-white': 'bg-white text-[#FFA16C]'}`}>{
                    added ? 'Added to Cart':'Add to Cart'
                }
                </button>
            </div>
        </div>
    );
}

export default MenuCard;
