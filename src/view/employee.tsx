import EmployeeCard from "../components/card/employeeCard.tsx";
import {createRef, useEffect, useState} from "react";

import axios from "axios";
import {GrNext} from "react-icons/gr";
import {MdOutlineArrowBackIosNew} from "react-icons/md";
import Search from "../components/search/search.tsx";
import AddEmployee from "../components/layout/add.employee.tsx";


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

    const [data, setData] = useState<Data[]>([]);
    const addEmployeeRef = createRef();


    const handleSetEmployee = (employee: Data) => {
        // @ts-ignore
        addEmployeeRef?.current?.setEmployee(employee);
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

    return (
        <section className={'w-full h-full bg-[#f2f6fc] flex'}>

            {/*bg-[#fff4ed]*/}
            <div className={'w-[78%] h-full px-10'}>
                <div className={'pt-8 font-Index tracking-wider'}>
                    <h1 className={'text-2xl font-bold text-[#3c3c3c]'}>Employee's</h1>
                    <h4 className={'text-[12px] text-gray-400'}>Good morning kasun. You have update 4 employee details
                        .</h4>
                </div>
                <div className={'flex gap-2 py-3'}>
                    <div
                        className={' px-4 w-fit pl-2 pr-3 py-2 rounded-xl font-Index text-[12px] text-gray-400 bg-blue-100 '}>You
                        have new 3 orders
                    </div>
                    <div
                        className={' px-4 w-fit pl-2 pr-3 py-2 rounded-xl font-Index text-[12px] text-gray-400 bg-red-100 '}>No
                        updated employee's
                    </div>
                </div>
                <div className={'pb-4 flex'}>
                    <Search/>
                    <div
                        className={'w-full mt-2 h-10 flex justify-end items-center font-round text-[12px] text-gray-500 gap-2'}>
                        <div
                            className={'hover:bg-gray-100 transition-all flex justify-center items-center w-9 h-9 rounded-full bg-white shadow border-[1px] border-gray-200 cursor-pointer'}>
                            <MdOutlineArrowBackIosNew/></div>
                        <div
                            className={'hover:bg-gray-100 transition-all flex justify-center items-center w-9 h-9 rounded-full bg-white shadow border-[1px] border-gray-200 cursor-pointer'}>
                            <GrNext/></div>
                    </div>
                </div>
                <div className={'w-full min-h-[70vh] flex flex-col overflow-y-scroll pt-2'}>

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
                                setEmployee={handleSetEmployee}
                                handleOnLoad={fetchData}
                                image={`http://localhost:8080/images/${value.image}`}/>
                        })

                    }
                </div>
            </div>

            <div className={'w-[22%] h-full border-l-2 pt-16 bg-white border-gray-200 '}>
                <AddEmployee ref={addEmployeeRef} onLoadAction={fetchData} onSetEmployee={handleSetEmployee}/>
            </div>
        </section>
    );
}

export default Employee;
