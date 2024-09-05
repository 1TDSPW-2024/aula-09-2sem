import { Link } from "react-router-dom";
import { Nav,MenuList,MenuItem} from "../../style/styled";

export default function Menu(){
    return(
      <Nav>
        <MenuList>
            <MenuItem> <Link to="/">Home</Link></MenuItem>
            <MenuItem><Link to="/produtos">Produtos</Link></MenuItem>
            <MenuItem><Link to="/users">Usuários</Link></MenuItem>
        </MenuList>
      </Nav>
    );
  }