import {useState} from "react";
import { GrUpload } from "react-icons/gr";

const AddCoffee = (): JSX.Element => {

    const [coffeeImg, setCoffeeImg] = useState(null)

    return (
        <section className={'w-full'}>
            <div className={'w-[50%] h-[20vh] inline-block px-3 py-2'}>
                <input type={'file'} className={'hidden'}/>

                {
                    coffeeImg ?
                        <img src={''} title={'coffee-img'} alt={'coffee-img'} className={'object-cover w-full h-full' +
                            'rounded-xl'}/>:
                        <div className={'w-full h-full border-dashed border-[2px] border-[#ffcaa9] rounded-xl ' +
                            'flex justify-center items-center flex-col cursor-pointer'}>
                            <h1 className={'font-round text-gray-400 text-[12px] m-2'}>Click for Upload</h1>
                            <GrUpload className={'text-gray-400 text-xl'}/>
                        </div>
                }

            </div>
            <div className={'w-[50%] h-[10vh] bg-blue-500 inline-block'}>

            </div>
            <div className={'w-full'}>

            </div>
        </section>
    );
}

export default AddCoffee;
