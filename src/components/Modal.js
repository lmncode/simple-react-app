import React from 'react';
import '../css/Modal.css';

class Dialog extends React.Component {
	render() {
		if (!this.props.show) {
			return null;
		}
		return (
			<div className="modal">
				<div className="modal-content">
					<h1>User added successfully!</h1>
				</div>
			</div>
		);
	}
}

export default Dialog;
