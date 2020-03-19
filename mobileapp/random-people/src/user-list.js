import React from "react";
import { SwipeableFlatList } from "react-native";
import UserItem from "./user-item";
import UserActions from "./user-actions";

const UserList = ({ users }) => {
  return (
    <SwipeableFlatList
      data={users}
      bounceFirstRowOnMount={true}
      maxSwipeDistance={160}
      renderItem={UserItem}
      renderQuickActions={UserActions}
    />
  );
};

export default UserList;
