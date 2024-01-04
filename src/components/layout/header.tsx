//import Input from "../input/input.tsx";
import Search from "../search/search.tsx";

const Header = (): JSX.Element => {
    return (
        <header className={'w-full relative h-[80px] px-[50px] flex items-center border-b-2 border-gray-250'}>
            {/*search*/}
            <Search/>

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