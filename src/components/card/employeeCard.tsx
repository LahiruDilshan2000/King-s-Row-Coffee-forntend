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

        /*const config = {
            headers: {
                'Authorization': Cookies.get('token')
            }
        };*/

        axios.get(`http://localhost:8080/employee/getById/${_id}`)
            .then(response => {
                console.log(response.data.data)
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
            text: "Are you sure do you to delete this article !",
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
                            text: "Your file has been deleted.",
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
                    onClick={() => handleGetEmployeeById(props._id)}
                    // onClick={() => navigate('/employee', {state: {_id: props._id}})}
                    type={'button'}
                    className={' text-[13px] font-normal mx-1 px-4 text-center text-orange-400 py-1.5 font-round ' +
                        'rounded-[6px]  hover:bg-[#ffcaa9] hover:text-white ' +
                        'active:bg-gray-200  active:border-gray-200 cursor-default text-gray-500 border-[1px] border-[#ffcaa9] my-2'}>
                    Update
                </button>
                <button
                    onClick={() => handleDeleteEmployee(props._id)}
                    type={'button'}
                    className={'text-[13px] font-normal px-4 text-red-500 text-center py-1.5 font-round rounded-[6px]' +
                        ' hover:bg-[#ffcaa9] hover:text-white ' +
                        'active:bg-gray-200 active:border-gray-200 cursor-default text-gray-500 border-[1px] border-[#ffcaa9] my-2'}>
                    Remove
                </button>
            </div>
        </div>
    );
}

export default EmployeeCard;
