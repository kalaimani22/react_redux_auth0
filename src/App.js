import React, { Component } from "react";
import { connect } from "react-redux";
import "./App.css";
import actions from "./actions";
import UserProfile from "./pages/UserProfile";

class App extends Component {
  componentDidMount() {
    this.fetchData();
  }

  componentDidUpdate(prevProps) {
    if (this.props.auth.isAuthenticated !== prevProps.auth.isAuthenticated) {
      this.fetchData();
    }
  }

  fetchData() {
    const { isAuthenticated } = this.props.auth;
    const { getProfile } = this.props;

    if (isAuthenticated) {
      getProfile();
    }
  }

  renderPublic() {
    const { login } = this.props;

    return (
      <div className="content-wrap">
        <div className="btn-wrap">
          <button onClick={login}>Log In</button>
        </div>
      </div>
    );
  }

  renderProfile() {
    const { logout } = this.props;
    const { profile } = this.props.auth;

    if (!profile) {
      return (
        <div className="content-wrap">
        <p>Loading profile...</p>
        </div>)
    }

    return (
      <div className="content-wrap">
        <div className="btn-wrap">
          <button onClick={logout}>Log Out</button>
        </div>

        <UserProfile {...profile} />
      </div>
    );
  }

  render() {
    const { isAuthenticated } = this.props.auth;

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Auth0 using Redux</h1>
        </header>
        <main>
          {!isAuthenticated && this.renderPublic()}
          {isAuthenticated && this.renderProfile()}
        </main>
        <footer />
      </div>
    );
  }
}

export default connect((state) => state, actions)(App);
