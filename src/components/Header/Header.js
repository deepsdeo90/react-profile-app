import React from 'react';
import './Header.css';

const  Header = (props)=>(
    <header>
            <div className="container HeaderTop">
            <img src={require('../../assets/img/logo-small.png')} alt="Troolr" className="Logo" />
            </div>
            <div className="HeaderStrip">
                <div className="container">
                    <ul>
                        <li><i className="fas fa-globe-americas"></i>Locations</li>
                        <li><i className="fas fa-list-ul"></i>Categories</li>
                    </ul>
                </div>
            </div>
    </header>
);
export default Header;