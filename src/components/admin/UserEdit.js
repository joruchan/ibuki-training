import React from 'react';
import {
  Edit, SimpleForm, TextInput,
} from 'react-admin';

const UserEdit = (props) => (
  <Edit title={<span>Editing...</span>} {...props}>
    <SimpleForm>
      <TextInput disabled source="id" />
      <TextInput source="register_name" />
      <TextInput source="register_email" />
      <TextInput multiline source="register_date" />
    </SimpleForm>
  </Edit>
);

export default UserEdit;
