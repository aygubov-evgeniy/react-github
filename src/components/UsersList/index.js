import React, { useState, useEffect } from 'react';
import Pagination from 'react-bootstrap/Pagination';
import parseLinkHeader from 'parse-link-header';

import './userList.css';
import Table from 'react-bootstrap/Table';
import TableRow from './TableRow.js';

const URL_ALL_USERS = 'https://api.github.com/users';

const UsersList = () => {
  const [data, setData] = useState(null);
  const [currentSince, setCurrentSince] = useState(null);
  const [nextSince, setNextSince] = useState(null);

  useEffect(() => {
    const loadUsers = async () => {
      const response = await fetch(`${URL_ALL_USERS}${currentSince != null ? `?since=${currentSince}` : ''}`);
      const json = await response.json();
      const linkHeader = response.headers.get('link');
      const linkData = parseLinkHeader(linkHeader);
      
      if ('next' in linkData) {
        setNextSince(linkData.next.since);
      }

      setData(json);
    }

    setNextSince(null);
    loadUsers();
  }, [currentSince]);

  const renderTable = () => {
    if (!data) {
      return 'Loading...';
    }

    return (
      <Table responsive striped bordered hover className="usersList">
        <tbody>
          {data.map(({id, avatar_url, login, html_url}) => (
            <TableRow key={id} avatar_url={avatar_url} login={login} html_url={html_url} />
          ))}
        </tbody>
      </Table>
    );
  };

  const renderPagination = () => (
    <Pagination>
      <Pagination.First onClick={() => setCurrentSince(null)} disabled={currentSince === null} />
      <Pagination.Next onClick={() => setCurrentSince(nextSince)} disabled={nextSince === null} />
    </Pagination>
  );

  return(
    <>
      {renderTable()}
      {renderPagination()}
    </>
  )
}

export default UsersList;