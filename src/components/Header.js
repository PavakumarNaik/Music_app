import React from 'react';

const Header = () => {
    return (
        <div className="row" style={{ height: '6rem' }}>
        <nav class="navbar navbar-light bg-light">
             <div className="col-lg-2">
        <h4 class="navbar-brand">Bee Music</h4>
        </div>
        <div className="col-lg-5">
        <form class="form-inline">
        <div className="row">
        <div className="col-lg-8" >
          <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
          </div>
          <div className="col-lg-4">
          <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button> 
          </div>
          </div>
        </form>
        
        </div>
      </nav>
      </div>
    );
};

export default Header;