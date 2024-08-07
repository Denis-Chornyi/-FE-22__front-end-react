import React from 'react';
import User from './User';
import Filter from './Filter';

class UsersList extends React.Component {
  state = {
    filterText: ''
  };

  handleFilterChange = event => {
    this.setState({ filterText: event.target.value });
  };

  render() {
    const { users } = this.props;
    const { filterText } = this.state;

    const filteredUsers = users.filter(user =>
      user.name.toLowerCase().includes(filterText.toString().toLowerCase())
    );

    return (
      <div className="users-list">
        <Filter
          filterText={filterText}
          count={filteredUsers.length}
          onChange={this.handleFilterChange}
        />
        <ul className="users">
          {filteredUsers.map(user => (
            <User key={user.id} name={user.name} age={user.age} />
          ))}
        </ul>
      </div>
    );
  }
}

export default UsersList;
