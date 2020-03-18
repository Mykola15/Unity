import React from 'react';
import tree from './tree.svg';
import './Tree.scss';
import Achievement from './Achievement/Achievement';
function Tree() {

    return (
        <div className="tree-block">
            <div className="tree-img">
                <img className="tree-img-colorful" src={tree} alt="Tree" style={{height: '30%'}}/>
                <img className="tree-img-grayscale" src={tree} alt="Tree"/>
            </div>
            <div className="achievements" style={{position:"absolute",top:"500px",left:'120px',width:"300px",margin:0,padding:0}}>
                <Achievement/>
            </div>
            <div className="achievements" style={{position:"absolute",top:"400px",left:'600px',width:"300px",margin:0,padding:0}}>
                <Achievement/>
            </div>
            <div className="achievements" style={{position:"absolute",top:"300px",left:'50px',width:"300px",margin:0,padding:0}}>
                <Achievement/>
            </div>
        </div>
    );
}

export default Tree;