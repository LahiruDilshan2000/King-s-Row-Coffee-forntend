

interface customButtonProps {
    text:string;
    br_color:string;
    br_reduce:number;
    bg_active:string;
    bg_hover:string;
    bg_color:string;
    is_active:boolean;
}
const SecondButton = (props: customButtonProps):JSX.Element => {
    return (
        <button
            type={'button'}
            className={`text-[13px] bg-[${props.is_active ? props.bg_color: '#fffff'}] font-normal mx-1 px-4 text-center py-1.5 font-round rounded-[${props.br_reduce}px]  
            hover:bg-[${props.bg_hover}] active:border-[${props.bg_hover}] hover:text-white active:bg-[${props.bg_active}] active:border-[${props.bg_active}] cursor-default text-${props.is_active ? 'white': 'gray-500'} border-[1px] border-[${props.br_color}] my-2`}>
            {props.text}
        </button>
    );
}

export default SecondButton;
