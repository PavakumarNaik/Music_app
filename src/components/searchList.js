import React from "react";
import Cards from "./card";

function SearchList({ filteredSongs , suggestionClose}) {
  return (
    <div>
      <div className="row ">
        {filteredSongs.map((songs, index) => {
          return (
            <React.Fragment key={index}>
              <div className="col-sm-6 col-md-5 col-lg-3 albums">
                <Cards key={songs.id} songs={songs}  suggestionClose={suggestionClose}/>
              </div>
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
}

export default SearchList;
