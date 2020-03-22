import React from 'react';
import './MainPage.scss';
import Task from './Task/Task';
import Navbar from './Navbar/Navbar';

function User() {
    return (
        <div id="user_page">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-3 ">
                        <Navbar/>
                    </div>
                    <div className="col-md-9 col-sm-12">
                        <Task/>
                        <Task/>
                        <Task/>
                        <Task/>
                        <Task/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default User;