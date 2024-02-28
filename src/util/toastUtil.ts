import {toast, Slide} from "react-toastify";


export const error = () => {
    toast("Hello",
        {
            transition:Slide,
            hideProgressBar:true,
            autoClose:5000
        });
}
