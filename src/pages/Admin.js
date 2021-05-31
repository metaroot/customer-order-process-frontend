import * as React from "react";
import jsonServerProvider from 'ra-data-json-server';
import { Admin, Resource, List, Create, Edit, SimpleForm, SelectInput, TextInput, DateInput, ReferenceManyField, Datagrid, TextField, DateField, EditButton, defaultI18nProvider } from 'react-admin';


const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');

const AdminPanel = () => (
    <Admin dataProvider={dataProvider}>
        <Resource name="users" edit={UserEdit} list={UserList} create={UserCreate}  />
    </Admin>
);

export const UserList = (props) => (
    <List {...props}>
        <Datagrid>
            <TextField source="id" />
            <TextField source="name" />
            <TextField source="username" />
            <TextField source="email" />
            <EditButton basePath="/users" />
        </Datagrid>
    </List>
);


const UserCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="username" />
            <TextInput source="email" />
            <TextInput source="password" options={{ multiLine: true }} />
            <SelectInput source="role" choices={[
                    { id: 'admin', name: 'Admin' },
                    { id: 'manager', name: 'Manager' },
                    { id: 'am', name: 'Assistant Manager' },
            ]} />
        </SimpleForm>
    </Create>
);

const UserEdit = (props) => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput source="username" />
            <TextInput source="email" />
            <TextInput source="password" options={{ multiLine: true }} />
            <SelectInput source="role" choices={[
                    { id: 'admin', name: 'Admin' },
                    { id: 'manager', name: 'Manager' },
                    { id: 'am', name: 'Assistant Manager' },
            ]} />
        </SimpleForm>
    </Edit>
);

export default AdminPanel;