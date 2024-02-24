import Swal from "sweetalert2";
import axios from "axios";
import {useNavigate} from "react-router-dom";

interface Props {
    _id: string;
    name: string;
    email: string;
    address: string;
    age: number;
    contact: string;
    image: string;
}

const EmployeeCard = (props: Props): JSX.Element => {


    const navigate = useNavigate();

    const handleGetEmployeeById = (_id: string):void => {

        axios.get(`http://localhost:8080/employee/getById/${_id}`)
            .then(response => {
                console.log("get")
                navigate('/employee', {state: {employee: response.data.data}})

            })
            .catch(err => {
                Swal.fire({
                    title: 'Error!',
                    text: 'Something went wrong',
                    icon: 'error',
                    confirmButtonText: 'Cool'
                });

            });
    }

    const handleDeleteEmployee = (_id:string):void => {

        Swal.fire({
            title: "Are you sure?",
            text: "Are you sure do you to delete this Employee !",
            icon: "question",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                /*const config = {
                    headers: {
                        'Authorization': Cookies.get('token')
                    }
                };*/
                axios.delete(`http://localhost:8080/employee/${_id}`, /*config*/)

                    .then(res => {
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your employee has been deleted.",
                            icon: "success"
                        });
                        //handleGetMyArticles();
                    })
                    .catch(err => {
                        Swal.fire({
                            title: 'Error!',
                            text: 'Something went wrong',
                            icon: 'error',
                            confirmButtonText: 'Cool'
                        })
                    });

            }
        });
    }

    return (
        <div
            className={'w-full relative rounded-[5px] flex bg-white text-[13px] font-[500] items-center h-16 px-5 border-b-[1px] border-gray-200 cursor-default'}>
            <div className={'flex h-full items-center'}>
                <img src={props.image} alt="profile"
                     className={'w-11 h-11 rounded-full object-cover mr-3'}/>
            </div>
            <div className={''}>
                <h1 className={'mx-2 text-[#ffa16c] text-[15px] '}>{props.name}</h1>
                <div className={'font-normal flex text-gray-400 text-[12px]'}>
                    <h3 className={'mx-2'}>{props.email}</h3>
                    <h3 className={'mx-2'}>{props.address}</h3>
                    <h3 className={'mx-2'}>{props.age}</h3>
                    <h3 className={'mx-2'}>{props.contact}</h3>
                </div>
            </div>
            <div className={'absolute right-4 '}>
                <button
                    onClick={() => handleDeleteEmployee(props._id)}
                    type={'button'}
                    className={'text-[13px] font-normal mx-1 px-4 my-2 py-1.5 text-center border-[1px] ' +
                        'border-red-400 rounded-[6px] hover:bg-red-500 transition-all duration-100 ease-linear ' +
                        'active:bg-blue-600  cursor-default text-red-500 hover:text-white'}>
                    Remove
                </button>
                <button
                    onClick={() => handleGetEmployeeById(props._id)}
                    // onClick={() => navigate('/employee', {state: {_id: props._id}})}
                    type={'button'}
                    className={'text-[13px] font-normal mx-1 px-4 my-2 py-1.5 text-center text-white bg-gray-400  ' +
                        'rounded-[6px]  hover:bg-blue-500 transition-all duration-100 ease-linear ' +
                        'active:bg-blue-600  cursor-default'}>
                    Update
                </button>
            </div>
        </div>
    );
}

export default EmployeeCard;
