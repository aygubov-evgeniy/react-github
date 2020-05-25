import React from 'react';
import Pagination from 'react-bootstrap/Pagination';
import { useFetch } from "../../hooks";

import Table from 'react-bootstrap/Table';
import TableRow from './TableRow.js';

const UsersList = () => {
  const URL_ALL_USERS = 'https://api.github.com/users';
  const USERS_PER_PAGE = 10;
  const [data, loading] = useFetch(URL_ALL_USERS);

  const handlePaginate = (number) => (
    // if(number === 1) {
    //   return data.slice(0, 2)
    // }

    data.map(({id, avatar_url, login, html_url}, index) => (
      <TableRow key={id} avatar_url={avatar_url} login={login} html_url={html_url} />
    ))
  )

  let active = 1;
  let items = [];
  for (let number = 1; number <= 5; number++) {
    items.push(
      <Pagination.Item key={number} active={number === active} onClick={() => handlePaginate(number)}>
        {number}
      </Pagination.Item>,
    );
  }

  const paginationBasic = (
    <Pagination>{items}</Pagination>
  );

  return(
    <>
    <Table responsive>
      <tbody>
        {loading ? ('Loading...') : handlePaginate()}
      </tbody>
    </Table>

    {paginationBasic}
    </>
  )
}

export default UsersList;