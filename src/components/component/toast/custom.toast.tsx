
interface Props {
    title:string;
    message:string;
    icon:any;
}
const CustomToast = (props:Props):JSX.Element => {
    return (
        <div className={`w-full px-2 py-3 flex items-center border-l-8 ${props.title === "Success" ? 'border-green-500': props.title === "Error" ? 'border-red-500' : 'border-yellow-500'}`}>
            <div className={`w-12 aspect-square ${props.title === "Success" ? 'bg-green-100': props.title === "Error" ? 'bg-red-100' : 'bg-yellow-100'} rounded-full flex justify-center items-center mr-3`}>
                {props.icon}
            </div>
            <div>
                <h1 className={`text-xs ${props.title === "Success" ? 'text-green-500': props.title === "Error" ? 'text-red-500' : 'text-yellow-500'}`}>{props.title}</h1>
                <h2 className={'text-[14px] text-gray-600 font-Robot tracking-wide'}>{props.message}</h2>
            </div>
        </div>
    );
}

export default CustomToast;
