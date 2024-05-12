import React from 'react'
import { NavLink } from 'react-router-dom';

const UserMenu = () => {
  return (
    <div className='text-center' style={{ marginTop: '20px', padding: '10px', backgroundColor: (0,0,0,0.3), borderRadius: '5px' }}>
      <div className="list-group">
        <h4 style={{ marginBottom: '15px' ,color:'white'}}>Dashboard</h4>
        <NavLink 
          to="/dashboard/user/profile" 
          className="list-group-item list-group-item-action"
          style={{ backgroundColor: '#007bff', color: '#fff', borderRadius: '5px', textAlign: 'center' }}
          activeStyle={{ backgroundColor: '#0056b3' }}
        >
          Profile
        </NavLink>
      </div>
    </div>
  )
}

export default UserMenu;
