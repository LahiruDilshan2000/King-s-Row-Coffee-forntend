import {CiSearch} from "react-icons/ci";

const Search = () : JSX.Element => {
    return (
        <div className={'bg-white w-[320px] h-[45px] rounded-3xl flex items-center pl-4'}>
            <CiSearch className={'text-2xl text-gray-400'}/>
            <input className={'w-[200px] h-9 outline-none bg-transparent p-2 font-round font-[200] text-[14px] placeholder-gray-400 placeholder:font-[200]'} placeholder={'Enter here ...'}/>
            <button className={'h-full bg-[#FFA16C] px-6 rounded-3xl text-white text-sm font-round  hover:bg-[#fe7439]'}>Search</button>
        </div>
    );
}

export default Search;
