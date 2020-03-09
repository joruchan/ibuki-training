import React from 'react';
import {
  List, SimpleList, Datagrid, TextField, EmailField, UrlField,
} from 'react-admin';
import { useMediaQuery } from '@material-ui/core';

const UserList = (props) => {
  const isSmall = useMediaQuery((theme) => theme.breakpoints.down('sm'));
  return (
    <List {...props}>
      {isSmall ? (
        <SimpleList
          primaryText={(record) => record.name}
          secondaryText={(record) => `${record.email}`}
          tertiaryText={(record) => record.phone}
        />
      ) : (
        <Datagrid rowClick="edit">
          <TextField source="id" />
          <TextField source="name" />
          <EmailField source="email" />
          <TextField source="phone" />
          <UrlField source="website" />
          <TextField source="company.name" />
        </Datagrid>
      )}
    </List>
  );
};

export default UserList;
