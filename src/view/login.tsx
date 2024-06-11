import Input from "../components/input/input.tsx";
import {useState} from "react";
import {useNavigate} from "react-router-dom";

interface Props {
    setIsLogged: (log: boolean) => void;
}

const Login = (props: Props): JSX.Element => {

    const [isLogin, setIsLogin] = useState(false);
    const navigate = useNavigate();

    const handleLogin = () => {
        props.setIsLogged(true);
        navigate('/');
    }

    return (
        <section
            className={'row w-full h-[100vh]'}>
            <div className={'col-md-8 bg-gray-100 flex items-center justify-content-center'}>
                <img src="src/assets/9462908_35973-removebg-preview.png" alt="login image" className={'w-80'}/>
            </div>
            <div className={'col-md-4 bg-white px-[85px] py-[120px]'}>
                <div className={''}>
                    <h1 className={'font-pop m-0 text-[1.6rem] font-[500] text-gray-700 my-1'}>
                        Welcome to King's Row System</h1>
                    <h1 className={'font-round mt-4 text-[13px] font-[400] text-gray-400'}>Please log in to your
                        account</h1>
                    <div className={'pl-2 pr-4 py-3'}>
                        <Input
                            value={''}
                            id={1} option={false}
                            type={'text'}
                            name={'Email'}
                            placeholder={"example@gmail.com"}
                            errorMsg={""}
                            callBack={handleLogin}/>

                        <Input
                            value={''}
                            id={2} option={false}
                            type={'password'}
                            name={'Password'}
                            placeholder={".........."}
                            errorMsg={""}
                        />
                    </div>
                </div>
                    <button
                        className={'transition-all duration-200 hover:shadow-[0_10px_20px_rgba(255,_161,_108,_0.4)] w-full py-[10px] font-round text-sm bg-[#ffa16c] text-white rounded-lg active:bg-[#fe7439] '}
                        onClick={() => handleLogin()}>
                        Log in
                    </button>
                <div className={'py-8 flex flex-col'}>
                    <div className={'w-full flex items-center justify-center'}>
                        <hr className={'w-full border-gray-400'}></hr>
                        <span className={'text-sm font-round text-gray-500 px-2 pb-1'}>or</span>
                        <hr className={'w-full border-gray-400'}></hr>
                    </div>
                    <div className={'w-full flex items-center text-sm  justify-center'}>
                        <h1 className={'mt-2 font-round text-gray-400 cursor-default '}>New on our platform ?
                            <span className={'ml-1 cursor-pointer text-[#ffa16c] active:text-red-500'}> Create an account </span>
                        </h1>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default Login;
