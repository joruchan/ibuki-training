import { useMediaQuery } from '@material-ui/core';
import React from 'react';
import { Datagrid, EmailField, List, SimpleList, TextField } from 'react-admin';

const UserList = props => {
    const isSmall = useMediaQuery(theme => theme.breakpoints.down('sm'));
    return (
        <List {...props}>
            {isSmall ? (
                <SimpleList
                    primaryText={record => record.register_name}
                    secondaryText={record => record.register_email}
                    tertiaryText={record => record.register_date}
                />
            ) : (
                <Datagrid rowClick='edit'>
                    <TextField source='id' />
                    <TextField source='register_name' />
                    <EmailField source='register_email' />
                    <TextField source='register_phone' />
                    <TextField source='register_date' />
                </Datagrid>
            )}
        </List>
    );
};

export default UserList;
