import GroupIcon from '@material-ui/icons/Group';
import EmailIcon from '@material-ui/icons/MailOutline';
import jsonServerProvider from 'ra-data-json-server';
import React from 'react';
import { Admin, fetchUtils, Resource } from 'react-admin';
import authProvider from '../components/admin/authProvider';
import Dashboard from '../components/admin/Dashboard';
import MessageEdit from '../components/admin/MessageEdit';
import MessageList from '../components/admin/MessageList';
import UserEdit from '../components/admin/UserEdit';
import UserList from '../components/admin/UserList';
import './AdminPage.scss';

const httpClient = (url, options = {}) => {
    if (!options.headers) {
        options.headers = new Headers({ Accept: 'application/json' });
    }
    const token = localStorage.getItem('token');
    options.headers.set('Authorization', `Bearer ${token}`);
    return fetchUtils.fetchJson(url, options);
};

const dataProvider = jsonServerProvider('http://localhost:5001', httpClient); // http://localhost:5001/

const AdminPage = () => {
    fetch('http://localhost:5001/bookings')
        .then(res => res.json())
        .then(console.log);
    return (
        <Admin dashboard={Dashboard} authProvider={authProvider} dataProvider={dataProvider}>
            <Resource name='bookings' list={UserList} edit={UserEdit} icon={GroupIcon} />
            <Resource name='messages' list={MessageList} edit={MessageEdit} icon={EmailIcon} />
        </Admin>
    );
};

export default AdminPage;
