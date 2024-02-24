import { FiMoreVertical } from "react-icons/fi";
import {useEffect, useRef, useState} from "react";
import Swal from "sweetalert2";
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
interface Props {
    _id: string;
    name: string;
    desc: string;
    largeSize: number;
    smallSize: number;
    qty: number;
    image: string;
    onLoadAction: () => void;
    setCoffee: (coffee: Data) => void;
}

const ItemCard = (props: Props):JSX.Element => {

    const options: string[] = ["Update", "Delete"];
    const [openOption, setOpenOption] = useState(false);
    const [bottom, setBottom] = useState(-120);
    const iconRef = useRef();

    useEffect(() => {
        if (bottom === -120 && openOption){
            setBottom(0)
        }else if(bottom === 0 && !openOption){
            setBottom(-120);
        }
    }, [openOption])

    const handleWindowClick = (e: any): void => {
        if (iconRef.current && !iconRef.current.contains(e.target)) {
            setOpenOption(false)
        }
    }
    const handleOptions = (option: string, _id: string) => {

        if (option === "Updatee"){

            axios.get(`http://localhost:8080/coffee/getById/${_id}`)
                .then(response => {
                    props.setCoffee(response.data.data)

                })
                .catch(err => {
                    Swal.fire({
                        title: 'Error!',
                        text: 'Something went wrong',
                        icon: 'error',
                        confirmButtonText: 'Cool'
                    });

                });
        }
        if (option === "Deletee"){

            Swal.fire({
                title: "Are you sure?",
                text: "Are you sure do you to delete this coffee item !",
                icon: "question",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, delete it!"
            }).then((result) => {
                if (result.isConfirmed) {

                    /*const config = {
                        headers: {
                            'Authorization': Cookies.get('token')
                        }
                    };*/
                    axios.delete(`http://localhost:8080/coffee/${_id}`, /*config*/)

                        .then(res => {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your item has been deleted.",
                                icon: "success"
                            });
                            props.onLoadAction();
                        })
                        .catch(err => {
                            Swal.fire({
                                title: 'Error!',
                                text: 'Something went wrong',
                                icon: 'error',
                                confirmButtonText: 'Cool'
                            })
                        });

                }
            });
        }
        console.log(option)
        setOpenOption(!openOption);
    }
    window.addEventListener('click', handleWindowClick);


    return (
        <div  className={'w-[340px] h-[220px] bg-white rounded-2xl m-4 flex relative border-[1px] border-gray-200'}>
            <div ref={iconRef}>
                <FiMoreVertical
                    onClick={() => setOpenOption(!openOption)}
                    className={'absolute right-2 top-4 text-sm text-gray-500 cursor-pointer active:bg-gray-100 rounded-full w-6 h-6 px-1'}/>
            </div>

            {
                openOption &&
                <ul
                    className={'w-full bg-black bg-opacity-20 h-full absolute rounded-xl overflow-hidden '}>
                    <div className={`w-full rounded-tl-xl rounded-tr-xl bg-[#262626] absolute ${bottom === -120 && 'bottom-[-120px]'} ${bottom === 0 && 'bottom-[0px]'} py-2 px-3 flex justify-center items-center flex-col transition-all duration-300 ease-linear`}>
                        <span className={'w-10 h-[4px] bg-gray-300 rounded-xl'}></span>
                        {
                            options.map(option => {
                                return <li key={option}
                                           onClick={() => handleOptions(option, props._id)}
                                           className={`w-full text-center py-2 font-round rounded-lg ${option === "Update" ? 'bg-gray-500 text-white' : 'bg-red-500 border-[1px] border-red-600 text-white'}` +
                                               ` active:bg-gray-200 active:border-gray-200 text-[13px] cursor-pointer my-1`}>{option}</li>
                            })
                        }
                    </div>
                </ul>
            }
            {/*pic div*/}
            <div className={'w-[38%] h-full p-3 '}>
                <div className={'w-full h-full bg-gray-100 rounded-xl flex justify-center items-center'}>
                    <img src={props.image} alt="coffee-image"/>
                </div>
                {/*button div*/}
            </div>
            {/*content*/}
            <div className={'w-[62%] h-full py-4 px-1 font-round'}>
                <div className={'w-full flex'}>
                    <h3 className={'font-round text-[16px] text-gray-700 font-bold'}>{props.name}</h3>
                    <h3 className={'font-round text-lg ml-4 text-[#FFA16C]'}>$ <span
                        className={'lg'}> {props.largeSize}</span></h3>
                </div>
                <p className={'font-round text-gray-400 py-2 leading-5 text-sm min-h-[70px]'}>{props.desc} </p>
                <div className={'w-full flex items-center py-1 text-sm text-gray-400 '}>
                    <div className={'w-[60%]'}>
                        <div className={'w-full flex my-1'}>
                            <span className={'text-[12px] bg-[#888888] rounded-3xl text-white cursor-default px-3 py-1'}>Large</span>
                            <div className={'text-end w-[55%] text-[#FFA16C] py-1'}>$ <span> {props.largeSize}</span></div>
                        </div>
                        <div className={'w-full flex my-1'}>
                            <span className={'text-[12px] bg-[#888888] rounded-3xl text-white cursor-default  px-3 py-1'}>Small</span>
                            <div className={'text-end w-[55%] text-[#FFA16C] py-1'}>$ <span> {props.smallSize}</span></div>
                        </div>
                    </div>
                    <div className={'w-[40%] text-center text-sm flex flex-col'}>
                        Qty
                        <span className={'m-1 text-green-500 text-lg'}>{props.qty}</span>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default ItemCard;
