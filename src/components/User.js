import React from 'react';

class User extends React.Component {
    constructor(props) {
    super(props);

    this.state = {
      userData: null,
    };
  }

  async componentDidMount() {
    const USER_API = "https://api.github.com/users/itsyourtechguy";
    const response = await fetch(USER_API);
    const data = await response.json();
    console.log(data);
    this.setState({ userData: data });
  }

  render() {
    const { name, avatar_url, location } = this.state.userData || {};

    return (
      <div className="user-card">
        <img src={avatar_url} alt="User Avatar" className="user-img" />
        <div className="user-info">
        <h2>{name}</h2>
        <p>Location: {location}</p>
        </div>
        
      </div>
    );
  }
}

export default User; 