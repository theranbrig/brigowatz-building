/* eslint-disable react/no-access-state-in-setstate */
import React, { Component } from 'react';
import { Menu, Segment, Sidebar } from 'semantic-ui-react';
import { HamburgerSpin } from 'react-animated-burgers';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import Image from './Logo';
import NewLogoColor from '../Assets/Logos/NewLogoColor.png';
import ColorWordLogo from '../Assets/Logos/NewBigColor.png';
import { MobileNavDiv, DesktopNavDiv } from './Styles/NavbarStyles';

class Navbar extends Component {
  state = { visible: false, isActive: false };

  handleSidebarHide = () => this.setState({ isActive: false });

  toggleButton = () => {
    this.setState({
      isActive: !this.state.isActive,
      visible: !this.state.visible,
    });
  };

  render() {
    const { visible } = this.state;
    return (
      <React.Fragment>
        <MobileNavDiv>
          <div className="mobile-nav">
            <HamburgerSpin isActive={this.state.visible} toggleButton={this.toggleButton} barColor="#535C73" />
            <a href="/">
              <Image
                source={NewLogoColor}
                title="Brigowatz Home Concepts Color Logo"
                classNameHere="mobile-menu-image"
              />
            </a>
          </div>
          <div>
            <Sidebar.Pushable as={Segment}>
              <Sidebar
                as={Menu}
                animation="push"
                icon="labeled"
                onHide={this.handleSidebarHide}
                vertical
                visible={visible}
                width="thin"
              >
                <Menu.Item as="a">
                  <NavLink exact to="/" activeClassName="active-nav-link">
                    <a href="/">Home</a>
                  </NavLink>
                </Menu.Item>
                <Menu.Item as="a">
                  <NavLink to="/work" activeClassName="active-nav-link">
                    <a href="/work">Our Work</a>
                  </NavLink>
                </Menu.Item>
                <Menu.Item as="a">
                  <NavLink to="/about" activeClassName="active-nav-link">
                    <a href="/about">About Us</a>
                  </NavLink>
                </Menu.Item>
                <Menu.Item as="a">
                  <NavLink to="/contact" activeClassName="active-nav-link">
                    <a href="/contact">Contact</a>
                  </NavLink>
                </Menu.Item>
              </Sidebar>
              <Sidebar.Pusher dimmed={visible}>{this.props.children}</Sidebar.Pusher>
            </Sidebar.Pushable>
          </div>
        </MobileNavDiv>
        <DesktopNavDiv>
          <ul>
            <NavLink exact to="/" activeClassName="active-nav-link">
              <a href="/">Home</a>
            </NavLink>
            <NavLink to="/work" activeClassName="active-nav-link">
              <a href="/work">Our Work</a>
            </NavLink>
            <Image
              source={ColorWordLogo}
              title="Brigowatz Home Concepts Color Logo"
              classNameHere="desktop-menu-image"
            />
            <NavLink to="/about" activeClassName="active-nav-link">
              <a href="/about">About Us</a>
            </NavLink>
            <NavLink to="/contact" activeClassName="active-nav-link">
              <a href="/contact">Contact</a>
            </NavLink>
          </ul>
          {this.props.children}
        </DesktopNavDiv>
      </React.Fragment>
    );
  }
}

Navbar.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Navbar;
