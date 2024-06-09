import {ChevronLeft, ChevronRight} from 'react-feather'

const PaginationCard = () => {
    return (
        <div className={'cursor-pointer flex flex-row w-fit bg-gray-200 rounded-2xl text-sm font-round text-gray-500'}>
            <div className={'flex justify-center items-center px-[9px]'}>
                <ChevronLeft size={16}/><span className={'pb-[1px]'}>Prev</span>
            </div>
            <div className={'h-8 aspect-square flex items-center justify-content-center rounded-full bg-[#2c2c2c] text-white'}>
                <span>1</span>
            </div>
            <div className={'h-8 aspect-square flex items-center justify-content-center rounded-full bg-[#2c2c2c] text-white'}>
                <span>2</span>
            </div>
            <div className={'h-8 aspect-square flex items-center justify-content-center rounded-full bg-[#2c2c2c] text-white'}>
                <span>3</span>
            </div>
            <div className={'h-8 aspect-square flex items-center justify-content-center rounded-full bg-[#2c2c2c] text-white'}>
                <span>4</span>
            </div>
            <div className={'h-8 aspect-square flex items-center justify-content-center rounded-full bg-[#2c2c2c] text-white'}>
                <span>5</span>
            </div>
            <div className={'flex justify-center items-center px-[9px]'}>
                <span className={'pb-[1px]'}>Next</span><ChevronRight size={16}/>
            </div>
        </div>
    )
}
export default PaginationCard
