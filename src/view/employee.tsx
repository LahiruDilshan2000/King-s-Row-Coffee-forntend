import EmployeeCard from "../components/card/employeeCard.tsx";
import Input from "../components/input/input.tsx";
import {useEffect, useRef, useState} from "react";
import * as validator from '../util/validator.ts'
import {GrUpload} from "react-icons/gr";
import axios from "axios";
import Swal from 'sweetalert2'
import {useLocation} from "react-router-dom";
import { GrNext } from "react-icons/gr";
import { MdOutlineArrowBackIosNew } from "react-icons/md";


interface Data {
    _id: string;
    name: string;
    email: string;
    address: string;
    age: number;
    contact: string;
    image: string;
}

const Employee = (): JSX.Element => {


    const location = useLocation();
    let employee: Data | null = location?.state?.employee;
    const [employeeState, setEmployeeState] = useState<'Add' | 'Update'>(!employee ?  "Add": "Update");

    const [errorSate, setErrorSate] = useState([false, false, false, false, false]);

    const [name, setName] = useState<string>('');
    const [mail, setMail] = useState<string>('');
    const [address, setAddress] = useState<string>('');
    const [age, setAge] = useState<number | string>('');
    const [contact, setContact] = useState<string>('');
    const [image, setImage] = useState<any>('');
    const [oldImage, setOldImage] = useState<File | string>('');
    const [data, setData] = useState<Data[]>([]);
    const fileInputRef = useRef();


    useEffect(() => {
        handleSetData()
    }, [employee])

    const handleSetData = () => {

        if (employee) {
            setEmployeeState("Update")
            setName(employee.name);
            setMail(employee.email);
            setAddress(employee.address);
            setAge(employee.age);
            setContact(employee.contact);
            setOldImage(`http://localhost:8080/images/${employee.image}`)
            setImage('')
        }
    }

    const clearAll = () => {

        setName('');
        setMail('');
        setAddress('');
        setAge('');
        setContact('');
        setOldImage('')
        setImage('')
        employee = null;
        setEmployeeState('Add')
    }


    const fetchData = (): void => {

        // 'http://localhost:8080/emplaoyee?size=100&page=1'
        axios.get('http://localhost:8080/employee/getAll')
            .then(response => {
                setData(response.data.data);

            })
            .catch(err => {
                console.log(err);
            });
    }
    useEffect(() => {
        fetchData();
    }, []);


    // Function to trigger click on file input
    const handleClick = (): void => {
        fileInputRef.current?.click();
    };

    // Function to handle file selection
    const handleFileChange = (event: any) => {
        setOldImage('')
        setImage(event.target.files[0]);
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

    const handleValidation = (): boolean => {

        setErrorSate([false, false, false, false, false]);

        if (!validator.validateName(name)) {
            showError(0);
            return false;
        }

        if (!validator.validateEmail(mail)) {
            showError(1);
            return false;
        }

        if (!validator.validateAddress(address)) {
            showError(2);
            return false;
        }

        if (!validator.validateAge(+age)) {
            showError(3);
            return false;
        }

        if (!validator.validateContact(contact)) {
            showError(4);
            return false;
        }
        return true;
    }

    const handleEmployee = () => {

        if (employeeState === "Update") {
            if (handleValidation()) {
                handleUpdateEmployee();
            }
        } else {
            if (handleValidation()) {
                handleAddEmployee();
            }
        }
    }

    const handleUpdateEmployee = () => {

        if (image) {
            const config = {
                headers: {
                    'Content-Type': 'multipart/form-data',
                }
            };
            let data = JSON.stringify({
                _id:employee?._id,
                name: name,
                email: mail,
                address: address,
                age: age,
                contact: contact
            });

            const formData = new FormData();

            // @ts-ignore
            formData.append('file', image);
            formData.append('employee', data);

            console.log(formData.get('employee'))

            axios.put('http://localhost:8080/employee', formData, config)
                .then(res => {
                    clearAll();
                    fetchData();
                    Swal.fire({
                        title: "Success !",
                        text: res.data.message,
                        icon: "success"
                    });
                })
                .catch(err => {
                    console.log(err)
                    Swal.fire({
                        title: err.response.data.status,
                        text: err.response.data.message,
                        icon: 'error',
                        confirmButtonText: 'Cool'
                    })
                });
        } else {
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                }
            };

            let data = JSON.stringify({
                _id:employee?._id,
                name: name,
                email: mail,
                address: address,
                age: age,
                contact: contact
            });
            axios.put('http://localhost:8080/employee/withoutImage', data, config)
                .then(res => {
                    clearAll();
                    fetchData();
                    Swal.fire({
                        title: "Success !",
                        text: res.data.message,
                        icon: "success"
                    });
                })
                .catch(err => {
                    console.log(err)
                    Swal.fire({
                        title: err.response.data.status,
                        text: err.response.data.message,
                        icon: 'error',
                        confirmButtonText: 'Cool'
                    })
                });
        }
    }

    const handleAddEmployee = () => {

        //  'Authorization': Cookies.get('token')
        const config = {
            headers: {
                'Content-Type': 'multipart/form-data',
            }
        };

        let empData = JSON.stringify({
            name: name,
            email: mail,
            address: address,
            age: age,
            contact: contact
        });

        const formData = new FormData();

        console.log(image)
        // @ts-ignore
        formData.append('file', image);
        formData.append('employee', empData);

        console.log(formData.get('file'))

        axios.post('http://localhost:8080/employee', formData, config)
            .then(res => {
                clearAll();
                fetchData();
                Swal.fire({
                    title: "Success !",
                    text: res.data.message,
                    icon: "success"
                });

            })
            .catch(err => {
                console.log(err)
                Swal.fire({
                    title: err.response.data.status,
                    text: err.response.data.message,
                    icon: 'error',
                    confirmButtonText: 'Cool'
                })
            });
    }

    return (
        <section className={'w-full h-full bg-gray-100 flex'}>

            {/*bg-[#fff4ed]*/}
            <div className={'w-[78%] px-[100px] pt-5'}>

                <div className={'w-full bg-white font-abc flex items-center flex-col py-5 rounded-t-[15px]'}>
                    <h1 className={'text-3xl text-gray-500'}>Employee's</h1>
                    <h3 className={'text-[14px] my-1 text-gray-400'}>Manage your employee's</h3>
                    <input type={'text'} placeholder={'Search name / mail / address...'}
                           className={'w-[80%] mt-3 rounded-[4px] px-8 py-2.5 bg-gray-50 shadow-inner outline-none font-[200] ' +
                               'text-[14px] placeholder-gray-400 placeholder:font-[200] text-gray-500 border-[1px] focus:border-[#fe7439]'}/>
                </div>
                <div className={'w-full min-h-[55vh] flex flex-col overflow-y-scroll pt-2'}>

                    {
                        data.length > 0 &&
                        data.map((value) => {
                            return <EmployeeCard
                                key={value._id}
                                _id={value._id}
                                name={value.name}
                                email={value.email}
                                address={value.address}
                                age={value.age}
                                contact={value.contact}
                                image={`http://localhost:8080/images/${value.image}`}/>
                        })

                    }
                </div>
                <div className={'w-full mt-2 h-10 flex justify-center items-center font-round text-[12px] text-gray-500'}>
                    <div className={'flex justify-center items-center mx-5 cursor-pointer hover:text-red-500'}><MdOutlineArrowBackIosNew className={'mr-1 text-lg'}/>Previous</div>
                    <div className={'flex justify-center items-center mx-5 cursor-pointer'}>Next<GrNext className={'ml-1 text-lg'}/></div>
                </div>
            </div>

            <div className={'w-[22%] h-full border-l-2 bg-white border-gray-200 '}>
                <div className={'w-full h-[22vh] bg-[#ffcaa9] py-2 px-8'}>
                    {
                        image || oldImage ? <img src={oldImage ? oldImage : URL.createObjectURL(image)} alt="profile"
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
                    <Input id={0} value={name} type={'text'} name={'Name'} placeholder={'Insert your name'}
                           errorMsg={"Name must be 3-16 characters and shouldn' t include special characters."}
                           option={errorSate[0]}
                           callBack={handleInput}/>
                    <Input id={1} value={mail} type={'email'} name={'Email'} placeholder={'Insert your mail'}
                           errorMsg={"It should be valid email address."}
                           option={errorSate[1]}
                           callBack={handleInput}/>
                    <Input id={2} value={address} type={'text'} name={'Address'} placeholder={'Address'}
                           errorMsg={"Address must be 3-25 characters."}
                           option={errorSate[2]}
                           callBack={handleInput}/>
                    <Input id={3} value={age} type={'number'} name={'Age'} placeholder={'your age'}
                           errorMsg={"Age must greater than 17 and 50 less than."}
                           option={errorSate[3]}
                           callBack={handleInput}/>
                    <Input id={4} value={contact} type={'tel'} name={'Contact'} placeholder={'phone number'}
                           errorMsg={"Phone number must be 10 characters and shouldn' t include special characters."}
                           option={errorSate[4]}
                           callBack={handleInput}/>
                    <div className={'w-full flex flex-col pt-4'}>
                        <button
                            onClick={handleEmployee}
                            className={`w-full h-[40px] font-round text-sm bg-[#3C3C3C] ` +
                                `hover:bg-[#5d5d5d] text-white rounded-full my-2 ` +
                                `active:bg-[#262626]`}>{employeeState}
                        </button>
                        <button
                            onClick={() => clearAll()}
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
