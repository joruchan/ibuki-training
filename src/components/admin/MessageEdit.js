import React from 'react';
import { Edit, SimpleForm, TextInput } from 'react-admin';

const MessageEdit = props => (
    <Edit title={<span>Editing...</span>} {...props}>
        <SimpleForm>
            <TextInput disabled source='id' />
            <TextInput source='contact_name' />
            <TextInput source='contact_email' />
            <TextInput multiline source='contact_message' />
        </SimpleForm>
    </Edit>
);

export default MessageEdit;
