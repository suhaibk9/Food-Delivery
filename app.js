import React from "react";
import ReactDOM from 'react-dom/client';
const Header = () => {
    return <div className="header">
        <div className="logo-container">
            <img className="logo" src="https://t3.ftcdn.net/jpg/03/33/90/50/360_F_333905026_amrbBXbprfqaAw2ThEv4AvZ39NVLaFw0.jpg" />
        </div>
        <div className="nav-items">
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Contact Us</li>
                <li>Cart</li>
            </ul>
        </div>
    </div>
}
const ResturantCard = () => {
    return <div className="res-card">
        <h3>Meghana Foods</h3>
    </div>
}
const Body = () => {
    return <div className="body">
        <div className="Search">Search</div>
        <div className="res-container">
            <ResturantCard />
        </div>
    </div>
}
const AppLayout = () => {
    return <div>
        <Header />
        <Body />
    </div>
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppLayout />);