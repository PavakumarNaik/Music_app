import React from "react";
import _ from "lodash";
import { Card } from "react-bootstrap";
import { withRouter } from "react-router-dom";

function Cards(props) {
  const { songs } = props;
  const routeChange = (songs) => {
    props.history.push(`/song/${songs.name}`, { album: songs });
    props.suggestionClose()
  };
  return (
    <React.Fragment>
      <Card style={{ width: "12rem" }} onClick={() => routeChange(songs)}>
        {!_.isEmpty(songs.images) ? (
          <Card.Img variant="top" src={songs.images[0].url} alt="" />
        ) : (
          <></>
          //   <img src={music} alt="" />
        )}
        <Card.Body>
          <Card.Title>{songs.name}</Card.Title>
        </Card.Body>
      </Card>
    </React.Fragment>
  );
}

export default withRouter(Cards);
