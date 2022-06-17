import "./Header.css";
import Link from "./Link";

function Header({ logo }) {
  return (
    <header className="App-header">
      <img src={logo} alt="logo" className="App-logo" />
      <p>
        Edit <code>src/App.js</code>
      </p>
      <Link
        url='https://reactjs.org'
        title='Learn React'
      />
    </header>
  );
}

export default Header;
