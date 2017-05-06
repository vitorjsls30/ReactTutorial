import React from 'react';

export default class Spendings extends React.Component {
  render() {
    return(
      <div class="col-md-8">
          <h1 class="page-header">
            Spendings &nbsp;
            <small>You can check your last spendings bellow</small>
          </h1>

          <ul class="pager">
              <li class="previous">
                  <a href="#">&larr; Older</a>
              </li>
              <li class="next">
                  <a href="#">Newer &rarr;</a>
              </li>
          </ul>
      </div>
    );
  }
}
