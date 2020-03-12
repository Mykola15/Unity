import React from 'react';
import tree from './tree.svg';
import './Tree.scss';

function Tree() {
    return (
        <div className="tree-block">
            <div className="tree-img">
                <img className="tree-img-colorful" src={tree} alt="Tree"/>
                <img className="tree-img-grayscale" src={tree} alt="Tree"/>
            </div>
        </div>
    );
}

export default Tree;