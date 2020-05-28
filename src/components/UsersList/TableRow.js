import React from 'react';
import { Link } from "react-router-dom";

const TableRow = ({avatar_url, login, html_url}) => {
  return(
    <tr>
      <td><img alt={avatar_url} src={avatar_url} /></td>
      <td><Link to={`/users/${login}`}>{login}</Link></td>
      <td><a href={html_url} target="_blank">Кнопка</a></td>
    </tr>
  )
}

export default TableRow;