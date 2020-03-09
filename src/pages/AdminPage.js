import React from 'react';
import { Admin, Resource, EditGuesser } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';

import './AdminPage.scss';
import PostIcon from '@material-ui/icons/Book';
import UserIcon from '@material-ui/icons/Group';
import UserList from '../components/admin/UserList';
import PostList from '../components/admin/PostList';
import PostEdit from '../components/admin/PostEdit';
import PostCreate from '../components/admin/PostCreate';
import Dashboard from '../components/admin/Dashboard';
import authProvider from '../components/admin/authProvider';


const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com'); // http://localhost:5001/

const AdminPage = () => (
  <Admin dashboard={Dashboard} authProvider={authProvider} dataProvider={dataProvider}>
    <Resource name="posts" list={PostList} edit={PostEdit} create={PostCreate} icon={PostIcon} />
    <Resource name="users" list={UserList} icon={UserIcon} />
  </Admin>
);

export default AdminPage;
