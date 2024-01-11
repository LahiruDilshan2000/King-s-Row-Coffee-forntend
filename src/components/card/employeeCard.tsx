
const EmployeeCard = ():JSX.Element => {


    return (

        <div
            className={'w-full relative rounded-[5px] flex bg-white text-[13px] font-[500] items-center h-16 px-5 border-b-[1px] border-gray-200 cursor-default'}>
            <div className={'flex h-full items-center'}>
                <img src="src/assets/NicePng_cammy-png_1829287.png" alt="profile"
                     className={'w-11 rounded-full object-cover mr-3'}/>
            </div>
            <div className={''}>
                <h1 className={'mx-2 text-[#ffa16c] text-[15px] '}>Danapala</h1>
                <div className={'font-normal flex text-gray-400 text-[12px]'}>
                    <h3 className={'mx-2'}>Dana@gmail.com</h3>
                    <h3 className={'mx-2'}>Pandura</h3>
                    <h3 className={'mx-2'}>22</h3>
                    <h3 className={'mx-2'}>077 410 5585</h3>
                </div>
            </div>
            <div className={'absolute right-4 '}>
                <button type={'button'} className={' text-[13px] font-normal mx-1 px-4 text-center text-orange-400 py-1.5 font-round rounded-[6px]  hover:bg-[#ffcaa9] hover:text-white ' +
                    'active:bg-gray-200  active:border-gray-200 cursor-default text-gray-500 border-[1px] border-[#ffcaa9] my-2'}>
                    Update</button>
                <button type={'button'} className={'text-[13px] font-normal px-4 text-red-500 text-center py-1.5 font-round rounded-[6px] hover:bg-[#ffcaa9] hover:text-white ' +
                    'active:bg-gray-200 active:border-gray-200 cursor-default text-gray-500 border-[1px] border-[#ffcaa9] my-2'}>Remove</button>
            </div>
        </div>
    );
}

export default EmployeeCard;
