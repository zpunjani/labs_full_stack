import { NavLink } from "react-router-dom";

export function Nav() {
    return(
        <nav>
            < div className="page-links">
                <NavLink to="/employees">Employees</NavLink>
                <NavLink to="/organization">Organization</NavLink>
            </div>
        </nav>
    )
}

export default Nav