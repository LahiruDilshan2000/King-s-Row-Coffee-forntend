
interface Props {
    id:number;
    type: string;
    name: string;
    placeholder?: string;
    errorMsg: string;
    option: boolean
    callBack: Function;
    value:string | number;
}

const Input = (props: Props): JSX.Element => {

    return (

        <div className={'relative py-3'}>
            <label className={'font-round text-[12px] text-gray-600 absolute top-[2px]  left-2 bg-white'}>
                {props.name}
            </label>
            <input value={props.value}
                placeholder={props.placeholder}
                type={props.type}
                id={props.name}
                onChange={event => props.callBack(event, props.name)}
                className={'w-full h-[38px] rounded-lg block border border-[#ffcaa9] outline-none focus:border-[#fe7439] font-round px-5 text-sm'}/>
            {
                props.option &&
                <div className={'absolute font-round text-[10px] text-red-500'}>{props.errorMsg}</div>
            }
        </div>
    );
}

export default Input;
