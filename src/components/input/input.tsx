import React from "react";

/*interface Props {
    type: string;
    name: string;
    placeholder?: string;
    label: string;
    optional: boolean
    callBack: Function;
}*/

class Input extends React.Component<any, any> {

    /*handleInput = (e:object): void => {
        console.log(e.target.value);
    }*/

    render() {
        return (

            <div className={'mb-2 w-full'}>
                <label htmlFor={this.props.name}
                       className={'block text-gray-400 text-[14px] mb-0.5'}>
                    {this.props.label}</label>

                <input
                    /*placeholder={this.props.placeholder}
                    type={this.props.type}
                    id={this.props.name}
                    onChange={event => this.props.callBack(event, this.props.name)}*/
                    className={'w-full h-[35px] rounded-[5px] px-3 block border border-green-300 outline-none focus:border-green-600'}/>
            </div>
        );
    }
}

export default Input;