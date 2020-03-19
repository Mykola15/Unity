import React from 'react';
import tree from './tree.svg';
import './Tree.scss';
import Achievement from './Achievement/Achievement';

function Tree() {

    return (
        <div className="tree-block row">

            <div className="tree-img">
                <img className="tree-img-colorful" src={tree} alt="Tree" style={{height: '30%'}}/>
                <img className="tree-img-grayscale" src={tree} alt="Tree"/>
            </div>
            <div className="container-fluid" style={{height: "100%",position:"absolute"}}  >
            <div className="achievements" style={{ height: "100%"}}>
                    <div className="row achievement-row">
                        <div className=" achievement col-3">
                            <Achievement/>
                            <Achievement/>
                        </div>
                        <div className="col-6"></div>
                        <div className="achievement col-3" style={{marginBottom:"5%"}}>
                            <Achievement/>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Tree;