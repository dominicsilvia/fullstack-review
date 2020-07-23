import React from 'react';

const RepoListItem = ({repo}) => {

  let {login, name, forks_count, html_url} = repo;

  return (
   <tr>
     <td>{login}</td>
     <td><a href={html_url} target="_blank">{name}</a></td>
     <td>{forks_count}</td>
   </tr>
  )

}

export default RepoListItem;