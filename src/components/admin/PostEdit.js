import React from 'react';
import {
  Edit, SimpleForm, TextInput, ReferenceInput, SelectInput,
} from 'react-admin';

const PostEdit = (props) => (
  <Edit title={<span>Editing...</span>} {...props}>
    <SimpleForm>
      <TextInput disabled source="id" />
      <ReferenceInput source="userId" reference="users">
        <SelectInput optionText="name" />
      </ReferenceInput>
      <TextInput source="title" />
      <TextInput multiline source="body" />
    </SimpleForm>
  </Edit>
);

export default PostEdit;
