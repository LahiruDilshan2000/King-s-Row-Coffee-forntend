import './App.css'
import NavBar from "./components/layout/navBar.tsx";
import Header from "./components/layout/header.tsx";
import Menu from "./view/menu.tsx";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./view/home.tsx";
import Item from "./view/item.tsx";
import Profile from "./view/profile.tsx";
import Employee from "./view/employee.tsx";
import History from "./view/history.tsx";
import Login from "./view/login.tsx";

function App(): JSX.Element {
    return (
        <section className={'w-full h-[100vh] flex'}>
            <BrowserRouter>
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
                        <Routes>
                            <Route path={'/'} element={<Home/>}/>
                            <Route path={'/menu'} element={<Menu/>}/>
                            <Route path={'/item'} element={<Item/>}/>
                            <Route path={'/profile'} element={<Profile/>}/>
                            <Route path={'/employee'} element={<Employee/>}/>
                            <Route path={'/history'} element={<History/>}/>
                            <Route path={'/login'} element={<Login/>}/>
                        </Routes>
                    </div>
                </div>
            </BrowserRouter>
        </section>
    );
}

export default App
