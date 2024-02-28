import {useNavigate} from "react-router-dom";

const EmptyOrderItem = ():JSX.Element => {

    const navigate = useNavigate();

    return (
        <div className={'w-full flex justify-center items-center flex-col'}>
            <img src="src/assets/Emptycart (2).png"  className={'w-[400px]'} alt="empty_order"/>
            <h1 className={'font-round text-xl mb-2 text-gray-500'}>Opss.. No product's you have yet .</h1>
            <h3 className={'text-sm font-round text-gray-500'}>Start creating resources by using "Create" button</h3>
            <button type={'button'} onClick={() => navigate( '/item')}
                    className={'px-7 bg-[#3c3c3c] text-white text-sm py-2 my-2 rounded-lg transition-all hover:bg-opacity-80 active:bg-[#3c3c3c]'}>Create</button>
        </div>
    );
}

export default EmptyOrderItem;
