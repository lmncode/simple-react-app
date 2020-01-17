import React from 'react';
import axios from 'axios';
import '../css/AddUser.css';
import Modal from './Modal';

class AddUser extends React.Component {
	state = {
		show: false
	};

	showModal = (e) => {
		this.setState((prevState) => {
			return { show: !prevState.show };
		});
	};

	handleSubmit = (e) => {
		e.preventDefault();
		const name = document.querySelector('#name-inp').value;
		const address = document.querySelector('#address').value;
		const phone = document.querySelector('#phone').value;

		const formData = {
			title: name,
			body: address,
			userId: phone
		};

		axios
			.post('https://jsonplaceholder.typicode.com/posts', formData)
			.then((res) => {
				this.showModal();
				setTimeout(() => {
					this.showModal();
				}, 2000);
				console.log(res);
			})
			.catch((err) => console.log(err));
	};
	render() {
		return (
			<div className="container">
				<Modal show={this.state.show} />
				<div className="user-form">
					<form onSubmit={this.handleSubmit}>
						<label className="user__label" htmlFor="name-inp">
							Name
						</label>
						<input className="user__input" id="name-inp" type="text" autoComplete="off" required />

						<label className="user__label" htmlFor="address">
							Address
						</label>
						<input className="user__input" id="address" type="text" autoComplete="off" required />

						<label className="user__label" htmlFor="phone">
							Phone number
						</label>
						<input className="user__input" id="phone" type="tel" autoComplete="off" required />

						<button className="user__submit">Add user</button>
					</form>
				</div>
			</div>
		);
	}
}

export default AddUser;
