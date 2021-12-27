import React from 'react';
import { Card } from "react-bootstrap";
import { imagePath } from '../consts/staticImages';

const GoogleAdds = () => {
    return (
        <div>
             <Card className="addImage">
            <Card.Img
              variant="top"
              src={imagePath.blanckit}
            />
          </Card>
          <Card className="addImage">
            <Card.Img
              variant="top"
              src={imagePath.acronics}
            />
          </Card>
          <Card className="addImage">
            <Card.Img
              variant="top"
              src={imagePath.systemDesign}
            />
          </Card>
        </div>
    );
};

export default GoogleAdds;