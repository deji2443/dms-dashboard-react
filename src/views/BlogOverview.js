import React from "react";
import PropTypes from "prop-types";
import { Container, Row, Col } from "shards-react";

import PageTitle from "./../components/common/PageTitle";
import SmallStats from "./../components/common/SmallStats";
import UsersOverview from "./../components/blog/UsersOverview";
import Delivery from "./../components/blog/Delivery";

// import UsersByDevice from "./../components/blog/UsersByDevice";
// import NewDraft from "./../components/blog/NewDraft";
// import Discussions from "./../components/blog/Discussions";
import TopReferrals from "./../components/common/TopReferrals";
import ExchangePool from "./../components/common/ExchangePool";

const BlogOverview = ({ smallStats, smallStatsTwo }) => (
  <Container fluid className="main-content-container px-4">
    {/* Page Header */}
    <Row noGutters className="page-header py-4">
      <PageTitle title="Dashboard" subtitle="" className="text-sm-left mb-3" />
    </Row>

    {/* Small Stats Blocks */}
    {/* <Row>
      {smallStats.map((stats, idx) => (
        <Col className="col-lg mb-4" key={idx} {...stats.attrs}>
          <SmallStats
            id={`small-stats-${idx}`}
            variation="1"
            chartData={stats.datasets}
            chartLabels={stats.chartLabels}
            label={stats.label}
            value={stats.value}
            percentage={stats.percentage}
            increase={stats.increase}
            decrease={stats.decrease}
          />
        </Col>
      ))}
    </Row> */}

    {/* <Row>
      <Col lg="8" md="12" sm="12" className="mb-4">
        <UsersOverview />
      </Col>

      <Col lg="4" md="6" sm="12" className="mb-4">
        <UsersByDevice />
      </Col>

      <Col lg="4" md="6" sm="12" className="mb-4">
        <NewDraft />
      </Col>

      <Col lg="5" md="12" sm="12" className="mb-4">
        <Discussions />
      </Col>

      <Col lg="3" md="12" sm="12" className="mb-4">
        <TopReferrals />
      </Col>
    </Row> */}

    <Row>
      <Col lg="3" md="12" sm="12" className="mb-4">
        <div className="d-block mx-auto">
          {smallStats.map((stats, idx) => (
            <Col
              lg="12"
              md="12"
              sm="12"
              className="mb-4 d-block"
              key={idx}
              {...stats.attrs}
            >
              <SmallStats
                id={`small-stats-${idx}`}
                variation="1"
                chartData={stats.datasets}
                chartLabels={stats.chartLabels}
                label={stats.label}
                value={stats.value}
                percentage={stats.percentage}
                increase={stats.increase}
                decrease={stats.decrease}
                // imgValue={stats.imgValue}
              />
            </Col>
          ))}

          {/* {smallStats.map((stats, idx) => (
            <Col
              lg="12"
              md="12"
              sm="12"
              className="mb-4"
              key={idx}
              {...stats.attrs}
            >
              <SmallStats
                id={`small-stats-${idx}`}
                variation="1"
                chartData={stats.datasets}
                chartLabels={stats.chartLabels}
                label={stats.label}
                value={stats.value}
                percentage={stats.percentage}
                increase={stats.increase}
                decrease={stats.decrease}
              />
            </Col>
          ))} */}
        </div>
      </Col>
      <Col lg="3" md="12" sm="12" className="mb-4">
        <TopReferrals />
      </Col>

      <Col lg="6" md="12" sm="12" className="mb-4">
        <UsersOverview />
      </Col>
    </Row>

    <Row>
      <Col lg="3" md="12" sm="12" className="mb-4 col-sm">
        <div className="d-block mx-auto">
          {smallStatsTwo.map((stats, idx) => (
            <Col
              lg="12"
              md="12"
              sm="12"
              className="mb-4 d-block"
              key={idx}
              {...stats.attrs}
            >
              <SmallStats
                id={`small-stats-${idx}`}
                variation="1"
                chartData={stats.datasets}
                chartLabels={stats.chartLabels}
                label={stats.label}
                value={stats.value}
                percentage={stats.percentage}
                increase={stats.increase}
                decrease={stats.decrease}
                // imgValue={stats.imgValue}
              />
            </Col>
          ))}

          {/* {smallStats.map((stats, idx) => (
            <Col
              lg="12"
              md="12"
              sm="12"
              className="mb-4"
              key={idx}
              {...stats.attrs}
            >
              <SmallStats
                id={`small-stats-${idx}`}
                variation="1"
                chartData={stats.datasets}
                chartLabels={stats.chartLabels}
                label={stats.label}
                value={stats.value}
                percentage={stats.percentage}
                increase={stats.increase}
                decrease={stats.decrease}
              />
            </Col>
          ))} */}
        </div>
      </Col>
      <Col lg="3" md="12" sm="12" className="mb-4">
        <ExchangePool />
      </Col>

      <Col lg="6" md="12" sm="12" className="mb-4">
        <Delivery />
      </Col>
    </Row>
  </Container>
);

BlogOverview.propTypes = {
  /**
   * The small stats dataset.
   */
  smallStats: PropTypes.array,
  smallStatsTwo: PropTypes.array
};

BlogOverview.defaultProps = {
  smallStats: [
    {
      label: "Total Exchange Pool Orders",
      value: "504",
      // percentage: "4.7%",
      // increase: true,
      // imgValue: require("../images/avatars/Vector.png"),
      chartLabels: [null, null, null, null, null, null, null],
      // attrs: { md: "6", sm: "6" },
      datasets: [
        {
          label: "Today",
          fill: "start",
          borderWidth: 1.5,
          backgroundColor: "rgba(255, 0, 0, 0)",
          borderColor: "rgb(255, 178, 0)",
          data: [1, 2, 1, 3, 5, 4, 7]
        }
      ]
    },
    {
      label: "Total Companies",
      value: "504",
      percentage: "4.7%",
      increase: true,
      // imgValue: require("../images/avatars/Vector..png"),
      chartLabels: [null, null, null, null, null, null, null],
      attrs: { md: "6", sm: "6" },
      datasets: [
        {
          label: "Today",
          fill: "start",
          borderWidth: 1.5,
          backgroundColor: "rgba(255,0,0,0)",
          borderColor: "rgb(255,178,0)",
          data: [1, 2, 1, 3, 5, 4, 7]
        }
      ]
    }
    // {
    //   label: "Comments",
    //   value: "8,147",
    //   percentage: "3.8%",
    //   increase: false,
    //   decrease: true,
    //   chartLabels: [null, null, null, null, null, null, null],
    //   attrs: { md: "4", sm: "6" },
    //   datasets: [
    //     {
    //       label: "Today",
    //       fill: "start",
    //       borderWidth: 1.5,
    //       backgroundColor: "rgba(255,180,0,0.1)",
    //       borderColor: "rgb(255,180,0)",
    //       data: [2, 3, 3, 3, 4, 3, 3]
    //     }
    //   ]
    // },
    // {
    //   label: "New Customers",
    //   value: "29",
    //   percentage: "2.71%",
    //   increase: false,
    //   decrease: true,
    //   chartLabels: [null, null, null, null, null, null, null],
    //   attrs: { md: "4", sm: "6" },
    //   datasets: [
    //     {
    //       label: "Today",
    //       fill: "start",
    //       borderWidth: 1.5,
    //       backgroundColor: "rgba(255,65,105,0.1)",
    //       borderColor: "rgb(255,65,105)",
    //       data: [1, 7, 1, 3, 1, 4, 8]
    //     }
    //   ]
    // },
    // {
    //   label: "Subscribers",
    //   value: "17,281",
    //   percentage: "2.4%",
    //   increase: false,
    //   decrease: true,
    //   chartLabels: [null, null, null, null, null, null, null],
    //   attrs: { md: "4", sm: "6" },
    //   datasets: [
    //     {
    //       label: "Today",
    //       fill: "start",
    //       borderWidth: 1.5,
    //       backgroundColor: "rgb(0,123,255,0.1)",
    //       borderColor: "rgb(0,123,255)",
    //       data: [3, 2, 3, 2, 4, 5, 4]
    //     }
    //   ]
    // }
  ],
  smallStatsTwo: [
    {
      label: "Total Cancel Orders",
      value: "504",
      percentage: "4.7%",
      increase: true,
      // imgValue: require("../images/avatars/ok.png"),
      chartLabels: [null, null, null, null, null, null, null],
      attrs: { md: "6", sm: "6" },
      datasets: [
        {
          label: "Today",
          fill: "start",
          borderWidth: 1.5,
          backgroundColor: "rgba(255, 0, 0, 0)",
          borderColor: "rgb(255, 178, 0)",
          data: [1, 2, 1, 3, 5, 4, 7]
        }
      ]
    },
    {
      label: "Total Created Orders",
      value: "504",
      percentage: "4.7%",
      increase: true,
      // imgValue: require("../images/avatars/Vec.png"),
      chartLabels: [null, null, null, null, null, null, null],
      attrs: { md: "6", sm: "6" },
      datasets: [
        {
          label: "Today",
          fill: "start",
          borderWidth: 1.5,
          backgroundColor: "rgba(255,0,0,0)",
          borderColor: "rgb(255,178,0)",
          data: [1, 2, 1, 3, 5, 4, 7]
        }
      ]
    }
    // {
    //   label: "Comments",
    //   value: "8,147",
    //   percentage: "3.8%",
    //   increase: false,
    //   decrease: true,
    //   chartLabels: [null, null, null, null, null, null, null],
    //   attrs: { md: "4", sm: "6" },
    //   datasets: [
    //     {
    //       label: "Today",
    //       fill: "start",
    //       borderWidth: 1.5,
    //       backgroundColor: "rgba(255,180,0,0.1)",
    //       borderColor: "rgb(255,180,0)",
    //       data: [2, 3, 3, 3, 4, 3, 3]
    //     }
    //   ]
    // },
    // {
    //   label: "New Customers",
    //   value: "29",
    //   percentage: "2.71%",
    //   increase: false,
    //   decrease: true,
    //   chartLabels: [null, null, null, null, null, null, null],
    //   attrs: { md: "4", sm: "6" },
    //   datasets: [
    //     {
    //       label: "Today",
    //       fill: "start",
    //       borderWidth: 1.5,
    //       backgroundColor: "rgba(255,65,105,0.1)",
    //       borderColor: "rgb(255,65,105)",
    //       data: [1, 7, 1, 3, 1, 4, 8]
    //     }
    //   ]
    // },
    // {
    //   label: "Subscribers",
    //   value: "17,281",
    //   percentage: "2.4%",
    //   increase: false,
    //   decrease: true,
    //   chartLabels: [null, null, null, null, null, null, null],
    //   attrs: { md: "4", sm: "6" },
    //   datasets: [
    //     {
    //       label: "Today",
    //       fill: "start",
    //       borderWidth: 1.5,
    //       backgroundColor: "rgb(0,123,255,0.1)",
    //       borderColor: "rgb(0,123,255)",
    //       data: [3, 2, 3, 2, 4, 5, 4]
    //     }
    //   ]
    // }
  ]
};

export default BlogOverview;
