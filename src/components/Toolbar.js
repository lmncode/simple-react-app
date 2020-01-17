import React from 'react';
import '../css/Toolbar.css';

const Toolbar = (props) => (
	<header className="toolbar">
		<nav className="toolbar-navigation">
			<div>
				<button className="toggle-button" onClick={props.sidebarToggleClickHandler}>
					<div className="toggle-button-line" />
					<div className="toggle-button-line" />
					<div className="toggle-button-line" />
				</button>
			</div>
			<div className="toolbar-logo">
				<a href="/">The Logo</a>
			</div>
			<div className="spacer" />
			<div className="logout-icon" onClick={props.logout}>
				<i className="fas fa-sign-out-alt" />
			</div>
		</nav>
	</header>
);

export default Toolbar;
