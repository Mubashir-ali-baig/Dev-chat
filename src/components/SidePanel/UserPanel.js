import React from "react";
import { Grid, Header, Icon, Dropdown, Image } from "semantic-ui-react";
import firebase from "../../firebase";
import { connect } from "react-redux";
class UserPanel extends React.Component {
  state = {
    user: this.props.currentUser,
  };

  dropDownOptions = () => [
    {
      key: "user",
      text: (
        <span>
          Signed in as <strong>{this.state.user.displayName}</strong>
        </span>
      ),
      disabled: true,
    },
    {
      key: "avatar",
      text: <span>Change Avatar</span>,
    },
    {
      key: "signout",
      text: <span onClick={this.handleSignout}>Sign Out</span>,
    },
  ];

  handleSignout = () => {
    firebase
      .auth()
      .signOut()
      .then(() => console.log("signed out!"));
  };

  render() {
    const { user } = this.state;
    return (
      <Grid style={{ background: "#4c3c4c" }}>
        <Grid.Row style={{ padding: "1.5em", margin: 0 }}>
          <Header inverted floated="left" as="h2">
            <Icon name="code" />
            <Header.Content>DevChat</Header.Content>
          </Header>
          {/*User DropDown*/}
          <Header style={{ padding: "0.75em" }} as="h4" inverted>
            <Dropdown
              trigger={
                <span>
                  <Image src={user.photoURL} spaced="right" avatar />
                  {user.displayName}
                </span>
              }
              options={this.dropDownOptions()}
            />
          </Header>
        </Grid.Row>
      </Grid>
    );
  }
}

export default UserPanel;
