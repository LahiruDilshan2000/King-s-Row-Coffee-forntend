import {GrUpload} from "react-icons/gr";
import CustomInput from "../input/customInput.tsx";
import {useReducer, useState} from "react";
import * as validator from "../../util/validator.ts";

interface FormState {

    dessertName: string;
    dessertNameError: string | null;

    description: string;
    descriptionError: string | null;

    size: any;
    sizeError: string | null;

    price: number;
    priceError: string | null;

    qty: number;
    qtyError: string | null;
}

interface FormFieldSetAction {
    formFieldName: string;
    formFieldValue: any/*string | number*/;
}

const formFieldSetReducer = (state: FormState, action: FormFieldSetAction): FormState => {

    switch (action.formFieldName) {

        case "Dessert": {
            return {
                ...state,
                dessertName: String(action.formFieldValue) ,
                dessertNameError: validator.validateItemName(String(action.formFieldValue))
            };
        }
        case "Desc": {
            return {
                ...state,
                description: String(action.formFieldValue),
                descriptionError: validator.validateDes(String(action.formFieldValue))
            };
        }
        case "Size": {
            return {
                ...state,
                size:  +action.formFieldValue,
                sizeError: validator.validateNumber(+action.formFieldValue)
            };
        }
        case "Price": {
            return {
                ...state,
                price: +action.formFieldValue,
                priceError: validator.validateNumber(+action.formFieldValue)
            };
        }
        case "Qty": {
            return {
                ...state,
                qty: +action.formFieldValue,
                qtyError: validator.validateNumber(+action.formFieldValue)
            };
        }
        default: {
            return state;
        }
    }
};




const AddDessert = (): JSX.Element => {

    const [state, dispatch] = useReducer<(state: FormState, action: FormFieldSetAction) => FormState>(
        formFieldSetReducer,
        {
            dessertName: '',
            dessertNameError: null,

            description: '',
            descriptionError: null,

            size: '',
            sizeError: null,

            price: +'',
            priceError: null,

            qty: +'',
            qtyError: null
        }
    );

    const isEmpty = ():void => {

        if (state.dessertName){

            dispatch({formFieldName: 'dessert', formFieldValue: 'value'})
            console.log("wadwa")
            state.dessertNameError= "aaaaa";

            console.log(state.dessertNameError)
        }
    }

    const [dessertImg, setDessertImg] = useState(null);

    const clearAll = () => {
        console.log(state.dessertName);
        dispatch({formFieldName: "Size", formFieldValue: undefined});
        console.log(state.dessertName);
    }


    return (
        <section className={'w-full px-2 pt-1'}>
            <div className={'w-full h-[20vh] my-3'}>
                <input type={'file'} className={'hidden'}/>
                {
                    dessertImg ?
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
                    value={state.dessertName}
                    type={'text'}
                    name={'Dessert'}
                    placeholder={'Cheesecake...'}
                    errorMsg={state.dessertNameError}
                    callBack={(value, name) => dispatch({formFieldName: name, formFieldValue: value})}/>

                <CustomInput
                    type={'text'}
                    name={'Desc'}
                    placeholder={'Description for flavours.. '}
                    errorMsg={state.descriptionError}
                    callBack={(value, name) => dispatch({formFieldName: name, formFieldValue: value})}/>

                <div className={'w-full flex'}>
                    <div className={'w-[50%] pr-1'}>
                        <CustomInput
                            value={state.size}
                            type={'number'}
                            name={'Size'}
                            placeholder={'100g'}
                            errorMsg={state.sizeError}
                            callBack={(value, name) => dispatch({formFieldName: name, formFieldValue: value})}/>
                    </div>
                    <div className={'w-[50%] pr-1'}>
                        <CustomInput
                            type={'number'}
                            name={'Price'}
                            placeholder={'00.00'}
                            errorMsg={state.priceError}
                            callBack={(value, name) => dispatch({formFieldName: name, formFieldValue: value})}/>
                    </div>
                </div>
                <CustomInput
                    type={'number'}
                    name={'Qty'}
                    placeholder={'10'}
                    errorMsg={state.qtyError}
                    callBack={(value, name) => dispatch({formFieldName: name, formFieldValue: value})}/>
                <button
                     onClick={isEmpty}
                    className={`w-full h-[40px] font-round text-sm bg-[#3C3C3C] ` +
                        `hover:bg-[#5d5d5d] text-white rounded-full my-2 ` +
                        `active:bg-[#262626]`}>Add to stock
                </button>

                <button
                    onClick={ () => clearAll()}
                    className={`w-full h-[38px] font-round text-sm  ` +
                        ` border-[1px] border-gray-400 rounded-full  ` +
                        `active:bg-[#b0b0b0]`}>Clear All
                </button>
            </div>
        </section>
    );
}

export default AddDessert;
