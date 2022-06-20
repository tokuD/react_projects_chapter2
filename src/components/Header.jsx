import "./Header.css"
import { Link as RouterLink } from "react-router-dom"
import { Breadcrumbs, Link } from "@mui/material";

function Header({ logo }) {
  return (
    <header className="App-header">
      <img src={logo} alt="logo" className="App-logo" />
      <h1>My Portfolio</h1>
      <Breadcrumbs aria-label="breadcrumb">
        <Link
          underline="hover"
          sx={{ display: 'flex', alignItems: 'center'}}
          href='/'
        >
          About me
        </Link>
        <Link
          underline="hover"
          sx={{ display: 'flex', alignItems: 'center'}}
          href='/projects'
        >
          Projects
        </Link>
      </Breadcrumbs>
    </header>
  );
}

export default Header;
