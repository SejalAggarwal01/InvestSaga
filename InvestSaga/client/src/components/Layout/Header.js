import React from 'react'
import {NavLink,Link} from 'react-router-dom';
import { useAuth } from '../../context/auth';
import toast from 'react-hot-toast';

const Header = () => {
  const [auth,setAuth]=useAuth();
  const handleLogout = () => {
    setAuth({
     ...auth,user:null,token:'',
    });
    localStorage.removeItem('auth');
    toast.success("Logout Successfully");
  }
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <Link to="/" className="navbar-brand" >
                InvestQuest
            </Link>
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
             
            <li className="nav-item">
                <NavLink to="/dashboard/user" className="nav-link">
                  <strong>DashBoard</strong>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/financeground" className="nav-link">
                <strong>Finance Ground</strong>
                </NavLink>
              </li>

              {
                !auth.user?(<>
                  <li className="nav-item">
                    <NavLink to="/register" className="nav-link" >
                    <strong>Register</strong>
                    </NavLink>
                  </li>

                  <li className="nav-item">
                    <NavLink to="/login" className="nav-link" >
                    <strong>Login</strong>
                    </NavLink>
                  </li>

                </>):(<>
                  <li className="nav-item dropdown">
                    <NavLink className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" style={{ border: "none" }}>
                      {auth?.user?.name}
                    </NavLink>
                    <ul className="dropdown-menu">
                      <li>
                        <NavLink to = "/dashboard/user/profile" className="dropdown-item" >
                          Profile
                        </NavLink></li>
                     <li>
                      <NavLink onClick={handleLogout} to="/login" className="dropdown-item"  >
                      Logout
                      </NavLink>
                      </li>
                    </ul>
                  </li>

  
                </>)
              }

              <li className="nav-item">
                <NavLink to="/faqs" className="nav-link" >
                <strong>FAQS?</strong>
                </NavLink>
              </li>

            </ul>

          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;