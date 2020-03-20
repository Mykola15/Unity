import React from 'react';
import task from './task.svg';
import './Task.scss';

function Task() {
    return (
	<div className="task-page">
    		<div className="name">
        		<h1 className="task-name">
            			Task name
        		</h1>
    		</div>
    		<div className="task-info">
        		<div className="row">
            			<div className="col-12 col-md-6">
                			<div className="main-photo">
                    				<img src={task} className="avatar" alt="Avatar"/>
                			</div>
            			</div>
            			<div className="col-12 col-md-6">
                			<div className="task-additional-info">
                    				<div className="side-images">
                        				<div className="task-image-wrapper">
                            					<img src={task}/>
                        				</div>
                        				<div className="task-image-wrapper">
                            					<img src={task}/>
                        				</div>
                        				<div className="task-image-wrapper">
                            					<img src={task}/>
                        				</div>
                        				<div className="task-image-wrapper">
                            					<img src={task}/>
                        				</div>
                        				<div className="task-image-wrapper">
                            					<img src={task}/>
                        				</div>
                    				</div>
                			</div>
                			<div className="task-info">
                    				<h1 className="task-participants">
                        				3/10 participants
                    				</h1>
                    				<h2 className="task-organizer">
                        				Organized by: Nazar
                    				</h2>
                    				<p className="task-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quisnostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor inreprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecatcupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quisnostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor inreprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>
                			</div>
            			</div>
        		</div>
    		</div>
    		<div className="participate-button">
        		<button className="button">
            			Participate
        		</button>
    		</div>
	</div>

	);

}

export default Task;	