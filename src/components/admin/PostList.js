import React from 'react';
import { useMediaQuery } from '@material-ui/core';
import {
  List, SimpleList, Datagrid, TextField, ReferenceField, EditButton,
} from 'react-admin';

const PostList = (props) => {
  const isSmall = useMediaQuery((theme) => theme.breakpoints.down('sm'));
  return (
    <List {...props}>
      {isSmall ? (
        <SimpleList
          primaryText={(record) => record.title}
          secondaryText={(record) => `By ${record.name}`}
          tertiaryText={(record) => record.body}
        />
      ) : (
        <Datagrid>
          <TextField source="id" />
          <ReferenceField label="User" source="userId" reference="users">
            <TextField source="name" />
          </ReferenceField>
          <TextField source="title" />
          <TextField source="body" />
          <EditButton />
        </Datagrid>
      )}
    </List>
  );
};
export default PostList;
