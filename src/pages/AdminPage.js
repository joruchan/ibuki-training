import React from 'react';
import { Admin, Resource, EditGuesser } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';

import './AdminPage.scss';

import GroupIcon from '@material-ui/icons/Group';
import EmailIcon from '@material-ui/icons/MailOutline';
import UserList from '../components/admin/UserList';
import Dashboard from '../components/admin/Dashboard';
import authProvider from '../components/admin/authProvider';
import UserEdit from '../components/admin/UserEdit';
import MessageList from '../components/admin/MessageList';
import MessageEdit from '../components/admin/MessageEdit';


const dataProvider = jsonServerProvider('http://localhost:5001'); // http://localhost:5001/

const AdminPage = () => {
  fetch('http://localhost:5001/bookings').then((res) => res.json()).then(console.log);
  return (
    <Admin dashboard={Dashboard} authProvider={authProvider} dataProvider={dataProvider}>
      <Resource name="bookings" list={UserList} edit={UserEdit} icon={GroupIcon} />
      <Resource name="messages" list={MessageList} edit={MessageEdit} icon={EmailIcon} />
    </Admin>
  );
};

export default AdminPage;
