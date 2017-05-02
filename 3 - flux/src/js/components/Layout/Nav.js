import React from 'react';

export default class Nav extends React.Component {
  render() {
    return (
      <nav class="navbar navbar-inverse navbar-fixed-top" role="navigation">
          <div class="container">
              <div class="navbar-header">
                  <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                      <span class="sr-only">Toggle navigation</span>
                      <span class="icon-bar"></span>
                      <span class="icon-bar"></span>
                      <span class="icon-bar"></span>
                  </button>
                  <a class="navbar-brand" href="#">Start Bootstrap</a>
              </div>
              <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                  <ul class="nav navbar-nav">
                      <li>
                          <a href="/#/archives">Archives</a>
                      </li>
                      <li>
                          <a href="/#/settings">Settings</a>
                      </li>
                      <li>
                          <a href="/#/todos">Todos</a>
                      </li>
                  </ul>
              </div>
          </div>
      </nav>
    );
  }

}
