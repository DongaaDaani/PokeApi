import React from 'react'
import Table from 'react-bootstrap/Table';
import { useState } from 'react';
import { Button } from 'react-bootstrap';

/*
-The  cateched items are listed in this component
-using localStorage to get the data.
-There is a remove function to delete items from Catched List.
*/
export default function Catch() {

  const [items, setItems] = useState(JSON.parse(localStorage.getItem('catchedItems')));

  const removeItem = (list, name) => {
    list = list.filter((item) => item.name !== name)
    localStorage.setItem('catchedItems', JSON.stringify(list));
    setItems(list)
  };

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Name</th>
          <th>Weight</th>
          <th>Height</th>
          <th>Operation</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item) =>
          <tr>
            <td>{item.name}</td>
            <td>{item.height}</td>
            <td>{item.weight}</td>          
            <td><Button onClick={() => { removeItem(items, item.name); }} variant="danger">Release</Button> </td>
          </tr>
        )}
      </tbody>
    </Table>
  );
}
