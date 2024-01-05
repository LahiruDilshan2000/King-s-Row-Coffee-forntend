import EmployeeCard from "../components/card/employeeCard.tsx";
import Input from "../components/input/input.tsx";
import {useRef, useState} from "react";
import * as validator from '../util/validator.ts'

const Employee = (): JSX.Element => {

    const [errorSate, setErrorSate] = useState([false, false, false, false, false]);

    const [file, setFile] = useState(undefined);
    const [name, setName] = useState('');
    const [mail, setMail] = useState('');
    const [address, setAddress] = useState('');
    const [age, setAge] = useState(0);
    const [contact, setContact] = useState('');
    const [previewImage, setPreviewImage] = useState(null);

    const fileInputRef = useRef(undefined);

    // Function to trigger click on file input
    const handleClick = () => {
        fileInputRef.current.click();
    };

    // Function to handle file selection
    const handleFileChange = (event:any) => {

        setFile(event.target.files[0]);

        if (file) {

        }
            // Use FileReader to read the file as a data URL
            const reader = new FileReader();

            reader.onload = (e) => {
                // Set the data URL as the src attribute of the img element
                const dataURL = e.target.result;
                setPreviewImage(dataURL);
            };

            reader.readAsDataURL(file);
    };

    const handleInput = (e: any, type: string): void => {

        switch (type){
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
        console.log(errorSate)
    }

    const showError = (index:number) => {

        setErrorSate(prevState => {
            const newArray = [...prevState];
            newArray[index] = true;
            return newArray;
        });
    }

    const handleAddEmployee = ():void => {

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
            <div className={'w-[75%] h-[87.5vh] mt-2 overflow-y-scroll px-[40px] pb-4'}>
                <h1 className={'text-xl font-[500]'}>Employee</h1>
                <div className={'w-full min-h-[75vh] bg-white mt-5 rounded-xl py-3 px-3'}>
                    <ul className={'w-full flex font-round text-[12px] font-[500] text-gray-400 items-center h-16 px-5  rounded-tl-lg rounded-tr-lg'}>
                        <li className={'w-[25%]'}>Employee Name</li>
                        <li className={'w-[20%]'}>Address</li>
                        <li className={'w-[20%]'}>Email</li>
                        <li className={'w-[15%]'}>Age</li>
                        <li className={'w-[15%]'}>Contact</li>
                        <li className={'w-[5%]'}></li>
                    </ul>

                    <EmployeeCard/>
                    <EmployeeCard/>
                </div>
            </div>

            <div className={'w-[25%] h-full border-l-2 bg-white border-gray-200 '}>
                <div className={'w-full h-[15vh] bg-[#ffe7d4] relative'}>
                    <img src={previewImage} alt="profile"
                         onClick={handleClick}
                         className={'absolute w-[100px]  h-[100px] rounded-full right-0 left-0 bottom-[-40px] bg-gray-100 m-auto shadow-xl cursor-pointer border-[#ffa16c] animation hover:border-2'}/>
                    <input type={"file"} className={'hidden'} ref={fileInputRef} onChange={handleFileChange}/>
                </div>
                <div className={' px-5 pt-[50px]'}>
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
                    <div className={'w-full flex flex-col py-3'}>
                        <button
                            onClick={handleAddEmployee}
                            className={'w-full h-[45px] font-round text-sm bg-[#ffa16c] text-white rounded-3xl my-1 active:bg-[#fe7439]'}>Add
                            to stock
                        </button>
                        <button
                            className={'w-full h-[40px] font-round text-sm border-2 border-gray-300 font-[400] text-gray-600 rounded-3xl my-2 active:bg-[#e7e7e7]'}>Clear
                            All
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Employee;