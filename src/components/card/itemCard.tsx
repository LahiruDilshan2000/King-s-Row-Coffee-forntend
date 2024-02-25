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
        }else if (bottom === 0 && !openOption){
            setBottom(-120);
        }
    }, [openOption])

    const handleWindowClick = (e: any): void => {
        if (openOption){
            if (iconRef.current && !iconRef.current.contains(e.target)) {
                //console.log("dawdawdawd")
                resetOption(false);
               // setOpenOption(false)
            }
        }
    }
    const handleOptions = (option: string, _id: string) => {

        if (option === "Update"){
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
        if (option === "Delete"){

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
        resetOption(!openOption);
    }
    window.addEventListener('click', handleWindowClick);

    const resetOption = (opt:boolean) => {
        setBottom(-120);
        setTimeout( () => {
            setOpenOption(opt);
        }, 500)

    }


    return (
        <div  className={'w-[330px] h-[225px] bg-white rounded-[20px] m-2 flex relative'}>
            <div ref={iconRef}>
                <FiMoreVertical
                    onClick={() => setOpenOption(!openOption)}
                    className={'absolute right-2 top-4 text-sm text-gray-500 cursor-pointer active:bg-gray-100 rounded-full w-6 h-6 px-1'}/>
            </div>

            {
                openOption &&
                <ul
                    className={'w-full bg-black bg-opacity-20 h-full absolute rounded-[20px] overflow-hidden '}>
                    <div className={`w-full rounded-tl-2xl rounded-tr-2xl bg-[#3c3c3c]  absolute ${bottom === -120 && 'bottom-[-120px]'} ${bottom === 0 && 'bottom-[0px]'} py-2 px-3 flex justify-center items-center flex-col transition-all duration-300 ease-linear`}>
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
            <div className={'w-[62%] h-full py-2 px-1 font-Robot'}>
                <div className={'w-full flex'}>
                    <h3 className={'font-round text-[18px] text-gray-700 font-bold'}>{props.name}</h3>
                </div>
                <div className={'font-cde relative pt-3 text-sm text-black text-[17px]'}>
                    <div className={'w-full leading-3 py-1'}>$ {props.largeSize}
                        <span className={'absolute right-[130px] pl-1 text-[11px] text-[#FFA16C]'}>USD</span>
                    </div>
                    <div className={'w-full relative '}>$ {props.smallSize}
                        <span className={'absolute right-[130px] pl-1 text-[11px] text-[#FFA16C]'}>USD</span>
                    </div>
                </div>
                <p className={'font-round text-gray-400 pt-2 leading-5 text-[13px] min-h-[68px] overflow-y-scroll'}>{props.desc} </p>
                <div className={'w-full flex items-center py-1 text-sm text-gray-400 '}>
                    <div className={'w-full text-gray-400'}>
                        <div className={'text-[#FFA16C]'}>Quantity</div>
                        <div>
                            <div className={'text-gray-600 text-sm font-Robot'}>{props.qty}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ItemCard;
