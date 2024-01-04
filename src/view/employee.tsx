
const Employee = ():JSX.Element => {
    return (
        <section className={'w-full h-full bg-gray-100 flex'}>

            <div className={'w-full h-[87.5vh] mt-2 overflow-y-scroll px-[40px] pb-4'}>
                <h1 className={'text-xl font-[500]'}>Employee</h1>
                <div className={'w-full min-h-[200vh] bg-white mt-5 rounded-xl py-3 px-3'}>
                    <ul className={'w-full flex font-round text-[13px] font-[500] text-gray-500 items-center h-16 pl-5 bg-[#fff4ed] rounded-tl-lg rounded-tr-lg'}>
                        <li className={'w-[10%]'}>Emp ID</li>
                        <li className={'w-[20%]'}>Employee Name</li>
                        <li className={'w-[20%]'}>Address</li>
                        <li className={'w-[20%]'}>Email</li>
                        <li className={'w-[10%]'}>Age</li>
                        <li className={'w-[15%]'}>Contact</li>
                    </ul>

                    <ul className={'w-full flex font-round text-[13px] font-[500] items-center h-16 pl-5 border-b-2 border-gray-100'}>
                        <li className={'w-[10%]'}>Emp0012</li>
                        <li className={'flex w-[20%] h-full items-center'}>
                            <img src="src/assets/NicePng_cammy-png_1829287.png" alt="profile" className={'w-8 rounded-full object-cover mr-1'}/>
                            <h1>Danapala</h1>
                        </li>
                        <li className={'w-[20%]'}>Pandura</li>
                        <li className={'w-[20%]'}>Dana@gmail.com</li>
                        <li className={'w-[10%]'}>22</li>
                        <li className={'w-[15%]'}>077 410 5585</li>
                    </ul>
                </div>
            </div>

            <div className={'w-[25%] h-full border-l-2 border-gray-200 bg-white px-5 py-6'}>

            </div>

        </section>
    );
}

export default Employee;