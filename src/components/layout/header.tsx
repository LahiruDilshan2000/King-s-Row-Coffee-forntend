//import Input from "../input/input.tsx";
import Search from "../search/search.tsx";

const Header = (): JSX.Element => {
    return (
        <header className={'w-full relative h-[80px] px-[50px] bg-[#202225] flex items-center border-b-[1px] border-gray-700'}>
            {/*search*/}
            <Search/>

        {/* account pic   */}

            <div className={'flex justify-start items-center h-full absolute right-0 px-5 w-[20vw]'}>
                <div className={'relative'}>
                    <img src="src/assets/NicePng_cammy-png_1829287.png" alt="prfile" title={'profile'} className={'w-10 rounded-full opacity-70 object-cover mx-4 cursor-pointer'} />
                    <span className={'absolute w-3 rounded-full aspect-square bg-green-500 bottom-0 right-3'}></span>
                </div>
                <div>
                    <h3 className={'font-round text-[14px] text-gray-100'}>Kasun Perera</h3>
                    <h3 className={'font-round text-[12px] text-gray-400'}>kasunpere@info.gmail.com</h3>
                </div>
            </div>
        </header>
    );
}

export default Header;
