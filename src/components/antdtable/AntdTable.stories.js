import React from 'react'
import { Table } from "antd";
import "antd/dist/antd.css";

const dataSource = [
    {
      key: '1',
      name: 'Mike',
      age: 32,
      address: '10 Downing Street',
    },
    {
      key: '2',
      name: 'John',
      age: 42,
      address: '10 Downing Street',
    },
  ];
  
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
  ];

export default {
    title: 'Form/Table', // going to display in sidebar
    component: Table,
}

//########################## Aproach-1  ##################
//Called Ant Design Table
//export const anttable = () => <Table dataSource={dataSource} columns={columns} />;
// To display custom name in sidebar
//anttable.storyName = 'Table - Ant Design'

//########################## Aproach-2  ##################
const Template = args => <Table dataSource={dataSource} columns={columns} {...args} />

export const anttable = Template.bind({})
// anttable.args = {
//     //variant: "style1",
//     dataSource: { dataSource },
//     columns:{ columns }
// }