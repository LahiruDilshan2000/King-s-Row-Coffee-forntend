import {useReducer, useState} from "react";
import {GrUpload} from "react-icons/gr";
import CustomInput from "../input/customInput.tsx";
import SecondButton from "../buttons/second.button.tsx";


interface FormState {

    coffeeName: string;
    coffeeNameError: string | null;

    description: string;
    descriptionError: string | null;

    largeSize: number;
    largeSizeError: string | null;

    smallSize: number;
    smallSizeError: string | null;

    qty: number;
    qtyError: string | null;
}

interface FormFieldSetAction {
    formFieldName: string;
    formFieldValue: string | number;
}

const formFieldSetReducer = (state: FormState, action: FormFieldSetAction): FormState => {

    switch (action.formFieldName) {
        case "Coffee": {
            return {
                ...state,
                coffeeName: action.formFieldValue + '',
                coffeeNameError: "isValid(action.formFieldValue)"
            };
        }
        case "Desc": {
            return {
                ...state,
                description: action.formFieldValue + '',
                descriptionError: null
            };
        }
        case "largeSize": {
            return {
                ...state,
                largeSize: +action.formFieldValue,
                largeSizeError: null
            };
        }
        case "smallSize": {
            return {
                ...state,
                smallSize: +action.formFieldValue,
                smallSizeError: null
            };
        }
        case "Qty": {
            return {
                ...state,
                qty: +action.formFieldValue,
                qtyError: null
            };
        }
        default: {
            return state;
        }
    }
};
const AddCoffee = (): JSX.Element => {

    const [state, dispatch] = useReducer<(state: FormState, action: FormFieldSetAction) => FormState>(
        formFieldSetReducer,
        {
            coffeeName: '',
            coffeeNameError: null,

            description: '',
            descriptionError: null,

            largeSize: +'',
            largeSizeError: null,

            smallSize: +'',
            smallSizeError: null,

            qty: +'',
            qtyError: null
        }
    );


    const [coffeeImg, setCoffeeImg] = useState(null)

    return (
        <section className={'w-full px-2 pt-1'}>
            <div className={'w-full h-[20vh] my-3'}>
                <input type={'file'} className={'hidden'}/>
                {
                    coffeeImg ?
                        <img src={''} title={'coffee-img'} alt={'coffee-img'} className={'object-cover w-full h-full' +
                            'rounded-xl'}/> :
                        <div className={'w-full h-full border-dashed border-[2px] border-[#ffcaa9] rounded-xl ' +
                            'flex justify-center items-center flex-col cursor-pointer'}>
                            <h1 className={'font-round text-gray-400 text-[12px] m-2'}>Click for Upload</h1>
                            <GrUpload className={'text-gray-400 text-xl'}/>
                        </div>
                }

            </div>
            <div className={'w-full'}>

                <CustomInput
                    type={'text'}
                    name={'Coffee'}
                    placeholder={'Cappucino...'}
                    errorMsg={state.coffeeNameError}
                    callBack={(value, name) => dispatch({formFieldName: name, formFieldValue: value})}/>

                <CustomInput
                    type={'text'}
                    name={'Desc'}
                    placeholder={'Description for flavours.. '}
                    errorMsg={state.descriptionError}
                    callBack={(value, name) => dispatch({formFieldName: name, formFieldValue: value})}/>

                <div className={'w-full flex'}>
                    <div className={'w-[50%] pr-2'}>
                        <CustomInput
                            type={'number'}
                            name={'Large size'}
                            placeholder={'00.00'}
                            errorMsg={state.largeSizeError}
                            callBack={(value, name) => dispatch({formFieldName: name, formFieldValue: value})}/>
                    </div>
                    <div className={'w-[50%] pl-2'}>
                        <CustomInput
                            type={'number'}
                            name={'Small size'}
                            placeholder={'00.00'}
                            errorMsg={state.smallSizeError}
                            callBack={(value, name) => dispatch({formFieldName: name, formFieldValue: value})}/>
                    </div>
                </div>
                <CustomInput
                    type={'number'}
                    name={'Qty'}
                    placeholder={'Qty on hand'}
                    errorMsg={state.qtyError}
                    callBack={(value, name) => dispatch({formFieldName: name, formFieldValue: value})}/>

                <button
                   /* onClick={setCoffeeImg}*/
                    className={`w-full h-[40px] font-round text-sm bg-[#3C3C3C] ` +
                        `hover:bg-[#5d5d5d] text-white rounded-full my-2 ` +
                        `active:bg-[#262626]`}>Add to stock
                </button>
                {/*<SecondButton
                    name={'Add to stock'}
                    onclick={setCoffeeImg}
                    bg_color={'#3C3C3C'}
                    bg_hover={'#5d5d5d'}
                    bg_active={'#262626'}
                    br_color={null}/>*/}
            </div>
        </section>
    );
}

export default AddCoffee;
