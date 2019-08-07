import React from "react";
import { connect } from "react-redux";
import { fetchUser } from "../actions";

// UserHeader class based component, displayed in PostList component
// Display the user information in a blog post
class UserHeader extends React.Component {
  // ensures that a user is fetched upon loading of component
  componentDidMount() {
    // call the fetchUser action creator to get a blog user
    // function is called with the userId props from PostList
    this.props.fetchUser(this.props.userId);
  }

  render() {
    // the appropriate user is found below in the mapStateToProps function
    const { user } = this.props;

    if (!user) {
      return null;
    }

    return <div className="header">{user.name}</div>;
  }
}

const mapStateToProps = (state, ownProps) => {
  // find the appropriate user in here instead of inside the component
  return { user: state.users.find(user => user.id === ownProps.userId) };
};

export default connect(
  mapStateToProps,
  { fetchUser }
)(UserHeader);
