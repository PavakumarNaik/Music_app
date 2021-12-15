import React from "react";
import { Card } from "react-bootstrap";
import _ from "lodash";
import { shortTitle } from "../utils/helperFunctions";

const ReUsableCard = (props) => {
  const { data, routeChange } = props;
  return (
    <div className="row">
      {data.map((album, index) => {
        return (
          <React.Fragment key={index}>
            <div className="col-sm-6 col-md-5 col-lg-3 trendingSongsSection">
              <Card
                className="albumblistCard"
                onClick={() => routeChange(album)}
              >
                {!_.isEmpty(album.images) ? (
                  <Card.Img variant="top" src={album.images[0].url} alt="" />
                ) : (
                  <></>
                )}
                <Card.Body>
                  <h6>{shortTitle(album.name, 13)}</h6>
                  <Card.Text>
                    <small>{album.artists[0].name}</small>
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default ReUsableCard;
