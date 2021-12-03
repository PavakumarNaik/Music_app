import React from "react";

const Header = () => {
  return (
    <div className="row" style={{ height: "6rem" }}>
      <nav class="navbar navbar-light  navbar-bglight">
        <div className="row col-lg-5">
          <div className="col-lg-2">
            <img src="https://www.getmusicbee.com/img/musicbee.png" />
          </div>
          <div className="col-lg-2 beeMusicText">
            <h4 class="navbar-brand">Bee Music</h4>
          </div>
        </div>
        <div className="col-lg-5">
          <form class="form-inline">
            <div className="row col-12">
              <div className="col-lg-6">
                <input
                  class="form-control mr-sm-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
              </div>
              <div className="col-lg-2">
                <button
                  class="btn btn-outline-success my-2 my-sm-0"
                  type="submit"
                >
                  Search
                </button>
              </div>
              <div className="col-lg-4">
                <p className="LoginSign-btn">Login / SignUp</p>
              </div>
            </div>
          </form>
        </div>
      </nav>
    </div>
  );
};

export default Header;
