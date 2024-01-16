import EmployeeCard from "../components/card/employeeCard.tsx";
import Input from "../components/input/input.tsx";
import {useRef, useState} from "react";
import * as validator from '../util/validator.ts'
import {GrUpload} from "react-icons/gr";

const Employee = (): JSX.Element => {

    const [errorSate, setErrorSate] = useState([false, false, false, false, false]);

    const [name, setName] = useState('');
    const [mail, setMail] = useState('');
    const [address, setAddress] = useState('');
    const [age, setAge] = useState(0);
    const [contact, setContact] = useState('');
    const [previewImage, setPreviewImage] = useState(null);

    const fileInputRef = useRef();

    // Function to trigger click on file input
    const handleClick = () => {
        // @ts-ignore
        fileInputRef.current.click();
    };

    // Function to handle file selection
    const handleFileChange = (event: any) => {
        setPreviewImage(event.target.files[0]);
    };

    const handleInput = (e: any, type: string): void => {

        switch (type) {
            case "Name":
                setName(e.target.value);
                break;
            case "Email":
                setMail(e.target.value);
                break;
            case "Address":
                setAddress(e.target.value);
                break;
            case "Age":
                setAge(e.target.value);
                break;
            case "Contact":
                setContact(e.target.value);
                break;
        }
    }

    const showError = (index: number) => {

        setErrorSate(prevState => {
            const newArray = [...prevState];
            newArray[index] = true;
            return newArray;
        });
    }

    const handleAddEmployee = (): void => {

        setErrorSate([false, false, false, false, false]);

        if (!validator.validateName(name))
            showError(0);

        if (!validator.validateEmail(mail))
            showError(1);

        if (!validator.validateAddress(address))
            showError(2);

        if (!validator.validateAge(age))
            showError(3);

        if (!validator.validateContact(contact))
            showError(4)

    }

    return (
        <section className={'w-full h-full bg-gray-100 flex'}>

            {/*bg-[#fff4ed]*/}
            <div className={'w-[75%] px-[100px] pt-5'}>

                <div className={'w-full bg-white font-abc flex items-center flex-col py-5 rounded-t-[15px]'}>
                    <h1 className={'text-3xl text-gray-500'}>Employee's</h1>
                    <h3 className={'text-[14px] my-1 text-gray-400'}>Manage your employee's</h3>
                    <input type={'text'} placeholder={'Search name / mail / address...'}
                           className={'w-[80%] mt-3 rounded-[4px] px-8 py-2.5 bg-gray-50 shadow-inner outline-none font-[200] ' +
                               'text-[14px] placeholder-gray-400 placeholder:font-[200] text-gray-500 border-[1px] focus:border-[#fe7439]'}/>
                </div>
                <div className={'w-full min-h-[62.5vh] flex flex-col overflow-y-scroll pt-2'}>
                    <EmployeeCard/>
                    <EmployeeCard/>
                </div>
            </div>

            <div className={'w-[25%] h-full border-l-2 bg-white border-gray-200 '}>
                <div className={'w-full h-[22vh] bg-[#ffcaa9] py-2 px-8'}>
                    {
                        previewImage ? <img src={URL.createObjectURL(previewImage)} alt="profile"
                                            onClick={handleClick}
                                            className={'cursor-pointer w-full h-full rounded-xl object-cover'}/>

                            : <div className={'cursor-pointer w-full h-full rounded-xl border-dashed border-2 ' +
                                'border-white flex justify-center items-center flex-col text-white'}
                                   onClick={handleClick}>
                                <h1 className={'font-round text-sm my-2'}>Upload profile</h1>
                                <GrUpload className={'text-2xl'}/></div>
                    }

                    <input type={"file"} className={'hidden'} ref={fileInputRef} onChange={handleFileChange}/>
                </div>
                <div className={'px-8 pt-[20px]'}>
                    <Input id={0} type={'text'} name={'Name'} placeholder={'Insert your name'}
                           errorMsg={"Name must be 3-16 characters and shouldn' t include special characters."}
                           option={errorSate[0]}
                           callBack={handleInput}/>
                    <Input id={1} type={'email'} name={'Email'} placeholder={'Insert your mail'}
                           errorMsg={"It should be valid email address."}
                           option={errorSate[1]}
                           callBack={handleInput}/>
                    <Input id={2} type={'text'} name={'Address'} placeholder={'Address'}
                           errorMsg={"Address must be 3-25 characters."}
                           option={errorSate[2]}
                           callBack={handleInput}/>
                    <Input id={3} type={'number'} name={'Age'} placeholder={'your age'}
                           errorMsg={"Age must greater than 17 and 50 less than."}
                           option={errorSate[3]}
                           callBack={handleInput}/>
                    <Input id={4} type={'tel'} name={'Contact'} placeholder={'phone number'}
                           errorMsg={"Phone number must be 10 characters and shouldn' t include special characters."}
                           option={errorSate[4]}
                           callBack={handleInput}/>
                    <div className={'w-full flex flex-col pt-4'}>
                        <button
                            onClick={handleAddEmployee}
                            className={`w-full h-[40px] font-round text-sm bg-[#3C3C3C] ` +
                                `hover:bg-[#5d5d5d] text-white rounded-full my-2 ` +
                                `active:bg-[#262626]`}>Add to stock
                        </button>
                        <button
                          /*  onClick={clearAll}*/
                            className={`w-full h-[38px] font-round text-sm  ` +
                                ` border-[1px] border-gray-400 rounded-full  ` +
                                `active:bg-[#b0b0b0]`}>Dismiss All
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Employee;
