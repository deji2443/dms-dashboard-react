import React from "react";
// import { Link } from "react-router-dom";
import { Dropdown, NavItem } from "shards-react";

export default class UserActions extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: false
    };

    this.toggleUserActions = this.toggleUserActions.bind(this);
  }

  toggleUserActions() {
    this.setState({
      visible: !this.state.visible
    });
  }

  render() {
    return (
      <NavItem tag={Dropdown} caret toggle={this.toggleUserActions}>
        <div className="text-nowrap px-3">
          <img
            className="user-avatar rounded-circle mr-2 mt-2 "
            src={require("./../../../../images/avatars/Photo.jpg")}
            alt="User"
          />
          <span className="d-none d-md-inline-block mt-2 text-black">
            John Adams
          </span>
        </div>
        {/* <DropdownToggle caret tag={NavLink} className="text-nowrap px-3">
          <img
            className="user-avatar rounded-circle mr-2"
            src={require("./../../../../images/avatars/Photo.jpg")}
            alt="User Avatar"
          />{" "}
          <span className="d-none d-md-inline-block">John Adams</span>
        </DropdownToggle>
        <Collapse tag={DropdownMenu} right small open={this.state.visible}>
          <DropdownItem tag={Link} to="user-profile">
            <i className="material-icons">&#xE7FD;</i> Profile
          </DropdownItem>
          <DropdownItem tag={Link} to="edit-user-profile">
            <i className="material-icons">&#xE8B8;</i> Edit Profile
          </DropdownItem>
          <DropdownItem tag={Link} to="file-manager-list">
            <i className="material-icons">&#xE2C7;</i> Files
          </DropdownItem>
          <DropdownItem tag={Link} to="transaction-history">
            <i className="material-icons">&#xE896;</i> Transactions
          </DropdownItem>
          <DropdownItem divider />
          <DropdownItem tag={Link} to="/" className="text-danger">
            <i className="material-icons text-danger">&#xE879;</i> Logout
          </DropdownItem>
        </Collapse> */}
      </NavItem>
    );
  }
}
