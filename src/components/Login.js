import React from 'react';
import '../css/Login.css';

class Login extends React.Component {
	state = {
		passowrdShow: false,
		username: '',
		password: ''
	};

	onSubmit = (e) => {
		e.preventDefault();

		const username = document.querySelector('#username-inp').value;
		const password = document.querySelector('#password-inp').value;

		if (!(username === 'tamino' && password === 'tamino123')) {
			return;
		}

		this.props.loggedIn();
		console.log(this.props.loggedIn);
	};

	iconToggleHandler = () => {
		this.setState((presState) => {
			return { passowrdShow: !presState.passowrdShow };
		});
	};
	render() {
		let iconClasses = 'fa fa-eye-slash';
		let inpType = 'password';
		if (this.state.passowrdShow) {
			iconClasses = 'fa fa-eye';
			inpType = 'text';
		}
		return (
			<div className="container">
				<div className="login-form">
					<form>
						<div className="logo">
							<h1>The Logo</h1>
						</div>

						<label className="login__label" htmlFor="usename-inp">
							İstifadəçi adını daxil edin
						</label>
						<input className="login__input" id="username-inp" type="text" />

						<label className="login__label" htmlFor="passowrd-inp">
							Şifrənizi daxil edin
						</label>
						<input className="login__input" id="password-inp" type={inpType} />
						<div className="icon-eye">
							<i id="icon" className={iconClasses} onClick={this.iconToggleHandler} />
						</div>

						<button className="user__submit" onClick={this.onSubmit}>
							Sign in
						</button>
					</form>
				</div>
			</div>
		);
	}
}

export default Login;
