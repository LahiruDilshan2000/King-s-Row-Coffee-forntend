import {toast, Slide} from "react-toastify";
import CustomToast from "../components/component/toast/custom.toast.tsx";

export const error = (title: string, message: string, icon: any) => {

    return toast(<CustomToast icon={icon} title={title} message={message}/>, {
        transition: Slide,
        hideProgressBar: true,
        autoClose: 1000,
        // isLoading:true,
    });

}

