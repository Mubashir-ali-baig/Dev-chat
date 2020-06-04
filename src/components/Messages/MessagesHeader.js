import React from "react";

import { Header, Segment, Input, Icon } from "semantic-ui-react";
class MessagesHeader extends React.Component {
  render() {
    const {
      channelName,
      numUniqueUsers,
      handleSearchChange,
      searchLoading,
      isPrivateChannel,
      handleStar,
      isChannelStarred,
    } = this.props;
    return (
      <Segment inverted clearing className="message__header">
        <Header fluid="true" as="h2" floated="left" style={{ marginBottom: 0 }}>
          <span>
            {channelName}
            {!isPrivateChannel && (
              <Icon
                
                onClick={handleStar}
                name={isChannelStarred ? "star" : "star outline"}
                color={isChannelStarred ? "purple" : "white"}
                
                />
            )}
          </span>
          <Header.Subheader style={{color:"white"}}>{numUniqueUsers}</Header.Subheader>
        </Header>

        {/* Channel Search Input */}

        <Header floated="right">
          <Input
            loading={searchLoading}
            onChange={handleSearchChange}
            size="mini"
            icon="search"
            name="searchTerm"
            placeholder="Search Messages"
          />
        </Header>
      </Segment>
    );
  }
}

export default MessagesHeader;
