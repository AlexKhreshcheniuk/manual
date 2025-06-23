import logo from '../../assets/images/hero-app-logo.svg';
import './header.scss';

export const Header = () => {
  return (
    <header className="header">
      <img src={logo} className="header__logo" alt="logo" />
    </header>
  );
}
