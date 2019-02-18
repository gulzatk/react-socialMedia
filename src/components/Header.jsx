import React from 'react';


function Header() {
  let gridStyle = {
    display: 'grid',
    gridTemplateColumns: '3fr 1fr 1fr'
  };

  let menuStyle = {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr'

  };
  return (
    <div style={gridStyle}>
      <style jsx >{`
        #searchStyle{

        }
        `}
      </style>
      <div className="menu" style={menuStyle}>
        <h2> Home</h2>
        <h2> Notifications</h2>
        <h2> Messages</h2>
      </div>

      <input id="searchStyle" type="text" placeholder="Search.." />
      <input type=" text" placeholder="Tweet" />

    </div>
  );
}
export default Header;