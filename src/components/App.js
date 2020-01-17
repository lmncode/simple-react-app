import React from 'react';
import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom';
import Toolbar from './Toolbar';
import Users from './Users';
import AddUser from './AddUser';
import '../css/App.css';
import Backdrop from './Backdrop';
import Login from './Login';

class App extends React.Component {
	state = {
		sidebarOpen: false,
		isLoggedIn: false
	};

	sidebarToggleClickHandler = () => {
		this.setState((prevState) => {
			return { sidebarOpen: !prevState.sidebarOpen };
		});
	};

	backdropClickHandler = () => {
		this.setState({ sidebarOpen: false });
	};

	loginHandler = () => {
		this.setState({ isLoggedIn: true });
	};

	logoutHandler = () => {
		this.setState({ isLoggedIn: false });
	};

	render() {
		let classes = 'sidebar';
		let backdrop;

		if (this.state.sidebarOpen) {
			classes = 'sidebar open';
		}

		if (this.state.sidebarOpen) {
			backdrop = <Backdrop click={this.backdropClickHandler} />;
		}

		console.log(this.state.isLoggedIn);
		if (this.state.isLoggedIn)
			return (
				<Router>
					<Toolbar sidebarToggleClickHandler={this.sidebarToggleClickHandler} logout={this.logoutHandler} />
					{backdrop}
					<nav className={classes}>
						<ul>
							<li>
								<NavLink exact to="/" className="link" activeClassName="active">
									Users
								</NavLink>
							</li>
							<li>
								<NavLink to="/adduser" className="link">
									Add User
								</NavLink>
							</li>
						</ul>
					</nav>

					<Switch>
						<Route exact path="/" component={Users} />
						<Route path="/adduser" component={AddUser} />
					</Switch>
				</Router>
			);
		else return <Login loggedIn={this.loginHandler} />;
	}
}

export default App;
