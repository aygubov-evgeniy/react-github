import React from 'react';

const TableRow = ({avatar_url, login, html_url}) => {
  return(
    <tr>
      <td><img alt={avatar_url} src={avatar_url} /></td>
      <td><span>{login}</span></td>
      <td><a href={html_url}>Кнопка</a></td>
    </tr>
  )
}

export default TableRow;