import React from 'react';
import logo from '../../assets/logo_mini.png';
import UserMenu from './UserMenu/UserMenu';
import { useNavigate } from 'react-router-dom';
import { NavbarContainer, NavbarLogo, NavbarList, NavbarContent } from './styles';

const Navbar = () => {
  let goto = useNavigate();
  return (
    <NavbarContainer>
      <NavbarContent>
        <NavbarLogo onClick={() => goto('/')}>
          <img src={logo} />
          <h3>
            Brisanet <br /> Geek
          </h3>
        </NavbarLogo>
        <NavbarList>
          <ul>
            <li onClick={() => goto('/heroes')}>Personagens</li>
            <li onClick={() => goto('/comics')}>Quadrinhos</li>
            <li>Eventos</li>
          </ul>
        </NavbarList>
        <div>
          <UserMenu />
        </div>
      </NavbarContent>
    </NavbarContainer>
  );
};

export default Navbar;
