/* eslint-disable react/no-access-state-in-setstate */
import React, { Component } from 'react';
import { Icon, Menu, Segment, Sidebar } from 'semantic-ui-react';
import { HamburgerSpin } from 'react-animated-burgers';
import { NavLink } from 'react-router-dom';
import Image from './Logo';
import ColorLogo from '../Assets/Logos/ColorLogo.png';
import ColorWordLogo from '../Assets/Logos/ColorWordLogo.png';
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
            <HamburgerSpin isActive={this.state.visible} toggleButton={this.toggleButton} />
            <Image source={ColorLogo} title="Top main color logo" classNameHere="mobile-menu-image" />
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
                  <Image source={ColorLogo} />
                  <a href="/">Home</a>
                </Menu.Item>
                <Menu.Item as="a">
                  <Icon name="info" />
                  <a href="/about">About</a>
                </Menu.Item>
                <Menu.Item as="a">
                  <Icon name="cart" />
                  <a href="/work">Work</a>
                </Menu.Item>
                <Menu.Item as="a">
                  <Icon name="up chevron" />
                  <a href="/contact">Contact</a>
                </Menu.Item>
              </Sidebar>
              <Sidebar.Pusher dimmed={visible}>{this.props.children}</Sidebar.Pusher>
            </Sidebar.Pushable>
          </div>
        </MobileNavDiv>
        <DesktopNavDiv>
          <ul>
            <a href="/">Home</a>
            <a href="/about">About</a>
            <Image source={ColorWordLogo} title="Top main color logo" classNameHere="desktop-menu-image" />
            <a href="/work">Our Work</a>
            <a href="/contact">Contact</a>
          </ul>
          {this.props.children}
        </DesktopNavDiv>
      </React.Fragment>
    );
  }
}

export default Navbar;
