/* eslint-disable react/no-access-state-in-setstate */
import React, { Component } from 'react';
import { Icon, Menu, Segment, Sidebar } from 'semantic-ui-react';
import { HamburgerSpin } from 'react-animated-burgers';
import { NavLink } from 'react-router-dom';
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
              <Image source={NewLogoColor} title="Top main color logo" classNameHere="mobile-menu-image" />
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
                    <a>Home</a>
                  </NavLink>
                </Menu.Item>
                <Menu.Item as="a">
                  <NavLink to="/about" activeClassName="active-nav-link">
                    <a>About</a>
                  </NavLink>
                </Menu.Item>
                <Menu.Item as="a">
                  <NavLink to="/work" activeClassName="active-nav-link">
                    <a>Our Work</a>
                  </NavLink>
                </Menu.Item>
                <Menu.Item as="a">
                  <NavLink to="/contact" activeClassName="active-nav-link">
                    <a>Contact</a>
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
              <a>Home</a>
            </NavLink>
            <NavLink to="/work" activeClassName="active-nav-link">
              <a>Our Work</a>
            </NavLink>
            <Image source={ColorWordLogo} title="Top main color logo" classNameHere="desktop-menu-image" />
            <NavLink to="/about" activeClassName="active-nav-link">
              <a>About</a>
            </NavLink>
            <NavLink to="/contact" activeClassName="active-nav-link">
              <a>Contact</a>
            </NavLink>
          </ul>

          {this.props.children}
        </DesktopNavDiv>
      </React.Fragment>
    );
  }
}

export default Navbar;
