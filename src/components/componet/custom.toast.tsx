import { IoCloseOutline } from "react-icons/io5";
import { IoCheckmark } from "react-icons/io5";

interface Props {
    type:string;
    icon:any;
}
const CustomToast = ():JSX.Element => {
    return (
        <div className={'w-full h-full flex items-center'}>
            <div className={'w-10 h-10 bg-green-100 rounded-full flex justify-center items-center mr-3'}>
                <IoCheckmark className={'text-green-500 text-xl'}/>
            </div>
            <div>
                <h1 className={'text-xs text-green-400'}>Success</h1>
                <h2 className={'text-sm'}>This is the message</h2>
            </div>
        </div>
    );
}

export default CustomToast;
