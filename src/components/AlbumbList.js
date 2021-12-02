import React from "react";
import { Card } from "react-bootstrap";
import _ from "lodash";
import { withRouter } from "react-router-dom";

function AlbumsList(props) {
  const { albums } = props;

  const routeChange = (albumId) => {
    props.history.push("/detailPage", { album: albumId });
  };
  return (
    <React.Fragment>
      {Object.keys(albums).length > 0 && (
        <div className="albums">
          <div className="container">
            <div className="row">
              {albums.items.map((album, index) => {
                return (
                  <React.Fragment key={index}>
                    <div className="col-sm-6 col-md-5 col-lg-3">
                      <Card
                        style={{ width: "15rem" }}
                        onClick={() => routeChange(album)}
                      >
                        <a
                          target="_blank"
                          // href={album.external_urls.spotify}
                          rel="noopener noreferrer"
                          className="card-image-link"
                        >
                          {!_.isEmpty(album.images) ? (
                            <Card.Img
                              variant="top"
                              src={album.images[0].url}
                              alt=""
                            />
                          ) : (
                            <></>
                            //   <img src={music} alt="" />
                          )}
                        </a>
                        <Card.Body>
                          <Card.Title>{album.name}</Card.Title>
                          <Card.Text>
                            <small>
                              {album.artists
                                .map((artist) => artist.name)
                                .join(", ")}
                            </small>
                          </Card.Text>
                        </Card.Body>
                      </Card>
                    </div>
                  </React.Fragment>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </React.Fragment>
  );
}
export default withRouter(AlbumsList);
