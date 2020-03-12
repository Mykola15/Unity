import React from 'react';
import './User.scss';
import Tree from './Tree/Tree';

function User() {
    return (
        <div id="user_page">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-8">
                        <Tree/>
                    </div>
                    <div className="col-md-4">
                        <div className="user-info-block">

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default User;