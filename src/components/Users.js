import React from 'react';
import axios from 'axios';
import '../css/Users.css';

class Users extends React.Component {
	state = {
		userList: []
	};
	componentDidMount() {
		axios.get('https://jsonplaceholder.typicode.com/users').then((res) => {
			this.setState({ userList: res.data });
			console.log(this.state.userList);
		});
	}

	getUsers() {
		let users = this.state.userList.map((user) => {
			return (
				<tr key={user.id}>
					<td>{user.id}</td>
					<td>{user.name}</td>
					<td>{user.address.street}</td>
					<td>{user.phone}</td>
				</tr>
			);
		});

		return users;
	}
	render() {
		return (
			<table className="table-fill">
				<thead>
					<tr>
						<th className="text-left">ID</th>
						<th className="text-left">NAME</th>
						<th className="text-left">ADDRESS</th>
						<th className="text-left">PHONE</th>
					</tr>
				</thead>
				<tbody>{this.getUsers()}</tbody>
			</table>
		);
	}
}

export default Users;
