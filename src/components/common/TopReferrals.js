import React from "react";
import PropTypes from "prop-types";
import {
  Card,
  CardHeader,
  CardBody,
  ListGroup,
  ListGroupItem
} from "shards-react";

const TopReferrals = ({ title, referralData, imageSrc }) => (
  <Card small>
    <CardHeader className="text-left m-2">
      <h6 className="m-0 h6">{title}</h6>
      <div className="block-handle" />
    </CardHeader>

    <CardBody className="p-0">
      <ListGroup small flush className="list-group-small">
        {referralData.map((item, idx) => (
          <ListGroupItem key={idx} className="d-flex px-3 no-border">
            <span className="text-semibold text-fiord-blue h6">
              {item.title}
            </span>
            {/* <span className="ml-auto text-right text-semibold text-reagent-gray">
              {item.value}
            </span> */}
          </ListGroupItem>
        ))}
        <span className="text-left px-3">
          <img src={imageSrc} alt="" />
        </span>
      </ListGroup>
    </CardBody>
  </Card>
);

TopReferrals.propTypes = {
  /**
   * The component's title.
   */
  title: PropTypes.string,
  imageSrc: PropTypes.object,

  /**
   * The referral data.
   */
  referralData: PropTypes.array
};

TopReferrals.defaultProps = {
  title: "120",
  imageSrc: require("../../images/avatars/Photo.png"),
  referralData: [
    {
      title: "Companies sent order to delivery pool today."
      // value: "19,291"
    }
    // {
    //   title: "Hacker News",
    //   value: "9,291"
    // },
    // {
    //   title: "Reddit",
    //   value: "8,281"
    // },
    // {
    //   title: "The Next Web",
    //   value: "7,128"
    // },
    // {
    //   title: "Tech Crunch",
    //   value: "6,218"
    // },
    // {
    //   title: "YouTube",
    //   value: "1,218"
    // },
    // {
    //   title: "Adobe",
    //   value: "1,171"
    // }
  ]
};

export default TopReferrals;
