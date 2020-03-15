import { useMediaQuery } from '@material-ui/core';
import React from 'react';
import { Datagrid, EmailField, List, SimpleList, TextField } from 'react-admin';

const MessageList = props => {
    const isSmall = useMediaQuery(theme => theme.breakpoints.down('sm'));
    return (
        <List {...props}>
            {isSmall ? (
                <SimpleList
                    primaryText={record => record.contact_name}
                    secondaryText={record => record.contact_email}
                    tertiaryText={record => record.contact_message}
                />
            ) : (
                <Datagrid rowClick='edit'>
                    <TextField source='id' />
                    <TextField source='contact_name' />
                    <EmailField source='contact_email' />
                    <TextField source='contact_phone' />
                    <TextField source='contact_message' />
                </Datagrid>
            )}
        </List>
    );
};

export default MessageList;
