import './App.css'
import NavBar from "./components/layout/navBar.tsx";
import Header from "./components/layout/header.tsx";
import Menu from "./view/menu.tsx";

function App(): JSX.Element {
    return (
        <section className={'w-full h-[100vh] flex'}>

            {/*nav*/}
            <div className={'h-full w-[250px]'}>
                <NavBar/>
            </div>
            <div className={'h-full w-full border-r-gray-400 flex flex-col'}>
                {/*header*/}
                <div className={'w-full h-[80px]'}>
                    <Header/>
                </div>
                {/*content*/}
                <div className={'w-full h-full'}>
                    <Menu/>
                </div>
            </div>
        </section>
    );
}

export default App
