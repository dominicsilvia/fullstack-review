import React from 'react';
import RepoListItem from './RepoListItem.jsx';

const RepoList = ({repos}) => (
  <div>
    <h4> Repo List Component </h4>
    There are {repos.length} repos.
    <table>
    <tbody>
      <tr>
        <td>Username</td>
        <td>Repo Name</td>
        <td>Forks Count</td>
      </tr>
      {repos.map(repo => <RepoListItem key={repo._id} repo={repo} />)}
      </tbody>
    </table>

  </div>
)

export default RepoList;