import React from "react";
import AlbumsList from "./AlbumbList";
import { withRouter, useLocation } from "react-router-dom";

const Home = (props) => {
  const location = useLocation();

  return (
    <>
      <div className="">
      { location.state.CategoryData ? <AlbumsList albums={location.state.CategoryData} CategoryName={location.state.CategoryName}/>: null}
      </div>
    </>
  );
};
export default withRouter(Home);
