import React from 'react';
import {
  Create, SimpleForm, TextInput, ReferenceInput, SelectInput,
} from 'react-admin';

const PostCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput disabled source="id" />
      <ReferenceInput source="userId" reference="users">
        <SelectInput optionText="name" />
      </ReferenceInput>
      <TextInput source="title" />
      <TextInput multiline source="body" />
    </SimpleForm>
  </Create>
);

export default PostCreate;
