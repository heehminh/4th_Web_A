import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import '../App.css';

const Header = () => {
    const [activeLogo, setActiveLogo] = useState(null);

    function handleMouseOver(event) {
        setActiveLogo(event.target);
    }

    function handleMouseOut() {
        setActiveLogo(null);
    }

    const logoClass = (logo) => `Btn_login Small_logo Btn_join Btn_customer Btn_howto Btn_world Search_logo Pre_btn Next_btn Btn_1 Btn_2 Btn_3 Btn_4 Btn_5 Btn_6 Btn_7 Btn_8 Btn_9 Btn_10 Btn_11 ${logo === activeLogo ? 'active' : ''}`;
    return (
        <header className="Header_wrap">
                <div className="Service_wrap">
                    <span className="Small_logo"></span>
                    <div className="Service_list_wrap">
                    <ul className="Service_list">
                        <li className="Btn_login">
                        <Link to="/login"></Link>
                        </li>
                        <li className="Btn_join">
                        <Link to="/join"></Link>
                        </li>
                        <li className="Btn_customer">
                        <Link to="/customer"></Link>
                        </li>
                        <li className="Btn_howto">
                        <Link to="/howto"></Link>
                        </li>
                    </ul>
                    <span className="Btn_world"></span>
                    </div>
                </div>
                <div className="Search_wrap">
                    <div className="Search_left_wrap">
                        <span>
                            <img className="Main_logo" src="https://cdnticket.melon.co.kr/resource/image/web/common/logo.png" />
                        </span>
                        <div className="Search">
                            <input type="text" placeholder="왤케 아프지? 왜 안 되지?" />
                            <span className="Search_logo"></span>
                        </div>
                    </div>
    
                    <div className="Header_event">
                        <div className="Header_slider">
                            <img src="https://cdnticket.melon.co.kr//resource/image/upload/marketing/2023/02/2023022416383942903255-d400-47d5-8449-af86ddd71646.png" />
                            </div>
                        <div className="Controls">
                            <span className="Pre_btn"></span>
                            <span className="Next_btn"></span>
                        </div>
                    </div>
                </div>
                <hr className="Header_hr" />
                <nav className="Menu_list">
                    <a className="Btn_1"></a>
                    <a className="Btn_2"></a>
                    <a className="Btn_3"></a>
                    <a className="Btn_4"></a>
                    <a className="Btn_5"></a>
                    <a className="Btn_6"></a>
                    <a className="Btn_7"></a>
                    <a className="Btn_8"></a>
                    <a className="Btn_9"></a>
                    <a className="Btn_10"></a>
                    <a className="Btn_11"></a>
                </nav>
                <main>
                    <Outlet />
                </main>
        </header>
    );
};

export default Header;