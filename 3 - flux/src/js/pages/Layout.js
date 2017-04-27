import React from 'react';
import {Link} from 'react-router';

import Nav from '../components/Layout/Nav';
import SideBar from '../components/Layout/SideBar';
import Footer from '../components/Layout/Footer';

export default class Layout extends React.Component {
  navigate() {
    this.props.router.push('/');
  }

  render() {
    const {router} = this.props;

    return (
      <div>
        <Nav />
        <div class="container">
            <div class="row">
                {this.props.children}
                <SideBar/>
            </div>
            <Footer/>
        </div>
      </div>
    );
  }
}
