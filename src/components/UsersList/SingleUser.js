import React from 'react';
import { useParams } from "react-router-dom";

import {Container, Row, Col} from 'react-bootstrap';
import './singleUser.css';
import {useFetch} from '../../hooks';

const SingleUser = () => {
  const {id: login} = useParams();
  const res = useFetch(`https://api.github.com/users/${login}`);

  if (!res[0]) {
    return <div>Loading...</div>
  }

  const avatar_url = res[0].avatar_url;
  const name = res[0].name;
  const company = res[0].company;
  const created_at = new Date(res[0].created_at);

  return(
    <div className="SingleUser">
      <Container>
        <Row>
          <Col md={3}><img alt={avatar_url} src={avatar_url} /></Col>

          <Col md={9}>
            <h1>{name}</h1>
            <p>{company}</p>
            <time>{`From ${created_at.getDate()}/${created_at.getMonth()}/${created_at.getFullYear()}`}</time>  
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default SingleUser;