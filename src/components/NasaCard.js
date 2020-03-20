import React from "react";
import {
  Card,
  CardHeader,
  CardText,
  CardBody,
  CardImg,
  Col

} from "reactstrap";

const NasaCard = ( props ) => {

  return (

    <Col sm="12" md={{size: 6, offset: 3}}>
      <Card>
        <CardHeader>
          Film title: {props.title}
        </CardHeader>
        <CardImg top width="100%" src={props.hdurl} alt="Card image cap" />
        <CardBody>
          <CardText>{props.explanation}</CardText>
        </CardBody>
      </Card>
    </Col>

  );
};
export default NasaCard;