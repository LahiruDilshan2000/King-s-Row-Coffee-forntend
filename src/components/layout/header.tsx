//import Input from "../input/input.tsx";
import { CiSearch } from "react-icons/ci";

const Header = (): JSX.Element => {
    return (
        <header className={'w-full relative h-[80px] px-[50px] flex items-center border-b-2 border-gray-250'}>
            {/*search*/}
            <div className={'bg-gray-100 w-[320px] h-[45px] rounded-3xl flex items-center pl-4'}>
                <CiSearch className={'text-2xl text-gray-400'}/>
                <input className={'w-[200px] h-9 outline-none bg-transparent p-2 font-round font-[200] text-[14px] placeholder-gray-400 placeholder:font-[200]'} placeholder={'Search ...'}/>
                <button className={'h-full bg-[#FFA16C] px-6 rounded-3xl text-white text-sm font-round'}>Search</button>
            </div>

        {/* account pic   */}

            <div className={'flex justify-start items-center h-full absolute right-0 px-5 w-[20vw]'}>
                <div>
                    <img src="src/assets/NicePng_cammy-png_1829287.png" alt="prfile" title={'profile'} className={'w-12 rounded-full object-cover mx-4'} />
                </div>
                <div>
                    <h3 className={'font-round text-[16px] text-black'}>Kasun Perera</h3>
                    <h3 className={'font-round text-[13px] text-gray-500'}>kasunpere@info.gmail.com</h3>
                </div>
            </div>
        </header>
    );
}

export default Header;