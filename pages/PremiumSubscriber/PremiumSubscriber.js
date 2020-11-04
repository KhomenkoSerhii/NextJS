import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { Row, Col, Button, Input, Select, Table, Tooltip, Rate } from "antd";

import classes from "./premiumSubscriber.module.scss";

let arrayForHoldingData = [];
const data = [
  {
    key: 1,
    changep: "-11",
    keyword: "John Brown",
    volume: 32,
    change: "-499",
    description: "lorem lorem fwe fwe fwe fwe fwe fwef wefw efew few 1",
    star: 1,
    status: "public",
  },
  {
    key: 2,
    changep: "+22",
    keyword: "Jim Green",
    volume: 42,
    change: "+399",
    description: "lorem lorem2",
    star: 1,
    status: "private",
  },
  {
    key: 3,
    changep: "-33",
    keyword: "Joe Black",
    volume: 52,
    change: "-299",
    description: "lorem lorem3",
    star: 0,
    status: "private",
  },
  {
    key: 4,
    changep: "+44",
    keyword: "Jim Red",
    volume: 62,
    change: "+199",
    description: "lorem lorem4",
    star: 0,
    status: "public",
  },
];

const PremiumSubscriber = () => {
  const router = useRouter();

  // CONST
  const { Option } = Select;

  // HOOKS
  const dataPerPage = 1;
  const [dataSource, setdataSource] = useState(data);
  const [searchValue, setSearchValue] = useState("");
  const [selectValue, setSelectValue] = useState("");
  const [next, setNext] = useState(1);
  const [screenWidth, setScreenWidth] = useState();
  const [customPopup, setCustomPopup] = useState(false);
  const [mousemove, setmouseMove] = useState({ y: 0 });
  // EVENTS
  const loopWithSlice = (start, end) => {
    const slicedData = data.slice(start, end);
    arrayForHoldingData = [...arrayForHoldingData, ...slicedData];
    setdataSource(arrayForHoldingData);
  };

  useEffect(() => {
    loopWithSlice(0, dataPerPage);
  }, []);

  useEffect(() => {
    setScreenWidth(window.innerWidth);
    const handleReSize = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleReSize);
    return () => {
      window.removeEventListener("resize", handleReSize);
    };
  }, [screenWidth]);

  const handleShowMoreData = () => {
    loopWithSlice(next, next + dataPerPage);
    setNext(next + dataPerPage);
  };

  const filterData = (e) => {
    const currValue = e.target.value;
    setSearchValue(currValue);
    const filteredData = data.filter(
      (entry) =>
        entry.keyword.toLowerCase().includes(currValue.toLowerCase()) ||
        entry.description.toLowerCase().includes(currValue.toLowerCase())
    );
    setdataSource(filteredData);
  };

  const filteredStatusByPublicValue = () => {
    const publicValue = data.filter((e) => e.status === "public");
    setdataSource(publicValue);
  };

  const filteredStatusByPrivateValue = () => {
    const privateValue = data.filter((e) => e.status === "private");
    setdataSource(privateValue);
  };
  const filteredByStar = () => {
    const privateValue = data.filter((e) => e.star === 1);
    setdataSource(privateValue);
  };

  const setAllData = () => {
    setdataSource(data);
  };

  const handleChangeTimeRange = (value) => {
    setSelectValue(value);
  };
  const handleChangeCompanies = (value) => {
    // setSelectValue(value);
  };

  const columns = [
    {
      dataIndex: "star",
      key: "star",
      width: "28px",
      render: (text) => <Rate disadbled defaultValue={text} count={1} />,
    },

    {
      title: "Keyword",
      dataIndex: "keyword",
      key: "keyword",
      width: "14%",
      sorter: (a, b) => a.keyword.length - b.keyword.length,
      ellipsis: true,
      render: (text, event) => <span>{text}</span>,
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
      width: "45%",
      className: `${screenWidth < 515 && "hide-block"}`,
      render: (text, event) => (
        <>
          <span>{text}</span>
        </>
      ),
    },

    {
      title: "Avg. Search Volume",
      dataIndex: "volume",
      key: "volume",
      className: `${screenWidth < 375 && "hide-block"}`,
      marginRight: "30px !important",
      sorter: (a, b) => a.volume - b.volume,
      render: (text, event) => (
        <Row>
          <span>{text}</span>
        </Row>
      ),
    },
    {
      title: "Change",
      dataIndex: "change",
      key: "change",
      sorter: (a, b) => a.change - b.change,
      render: (text, event) => (
        <Row style={{ display: "flex", justifyContent: "space-evenly" }}>
          {text > 0 ? (
            <>
              <span style={{ color: "#10A198" }}>{text}</span>
              <img src="/chartUp.svg" alt="" />
            </>
          ) : (
            <>
              <span style={{ color: "#CA1818" }}>{text}</span>
              <img src="/chartDown.svg" alt="" />
            </>
          )}
        </Row>
      ),
    },
    {
      title: "Change %",
      dataIndex: "changep",
      key: "changep",
      sorter: (a, b) => a.changep - b.changep,
      render: (text, event) => (
        <Row>
          {text > 0 ? (
            <>
              <span style={{ color: "#10A198", paddingRight: 2 }}>{text}</span>
              <img src="/ArrowUp.svg" alt="" />
            </>
          ) : (
            <>
              <span style={{ color: "#CA1818", paddingRight: 2 }}>{text}</span>
              <img src="/arrowDown.svg" alt="" />
            </>
          )}
        </Row>
      ),
    },
    {
      dataIndex: "tooltip",
      key: "tooltip",
      width: "28px",
      render: (text, event) => (
        <Tooltip
          placement="bottom"
          color="white"
          title={
            <div className={classes.customTooltip}>
              <div className={classes.tooltipMainBlock}>
                <a>
                  <img src="/Email.svg" alt="" />
                  <p style={{ marginLeft: 10 }}>Email</p>
                </a>
              </div>
              <div
                style={{ marginiTop: 15 }}
                className={classes.tooltipMainBlock}
              >
                <a>
                  <img src="/Tweet.svg" alt="" />
                  <p style={{ marginLeft: 10 }}>Tweet</p>
                </a>
              </div>
            </div>
          }
        >
          <span className={classes.dotsIcon}>
            <img src="/dots.svg" alt="" className={classes.dots} />
          </span>
        </Tooltip>
      ),
    },
  ];

  const timeRange = [
    { time: "Last 1 month" },
    { time: "Last 3 month" },
    { time: "Last 6 month", pro: "pro" },
  ];

  return (
    <>
      <div className={classes.premiumBlock}>
        <div className={classes.mainBlock}>
          <h1 className={classes.premiumH1}>
            Discover markets as they're happening
          </h1>
          <p>Smart investors, entrepreneurs, and writers use Market’s</p>
          <p>AI-powered dashboard to see what's becoming popular.</p>
          <div className={classes.premiumSelectors}>
            <Select
              defaultValue="Select сategory"
              allowClear
              onChange={handleChangeCompanies}
              className={classes.premiumSelect}
            >
              <Option value="Companies">
                <h4>
                  Category:
                  <span style={{ color: "#969696", paddingLeft: 20 }}>
                    Companies
                  </span>
                </h4>
                <span className={classes.proItem}>Pro</span>
              </Option>
            </Select>
            <Select
              defaultValue="Select time range"
              allowClear
              onChange={handleChangeTimeRange}
              className={classes.premiumSelect}
            >
              {timeRange.map((i) => (
                <Option value={i.time} key={i.time}>
                  <h4>
                    Time range:{" "}
                    <span style={{ color: "#969696", paddingLeft: 12 }}>
                      {i.time}
                    </span>
                  </h4>
                  {i.pro && <span className={classes.proItem}>Pro</span>}
                </Option>
              ))}
            </Select>
          </div>
          <span style={{ color: "white", marginTop: 10 }}>
            Next update in 16 minutes 34 seconds
          </span>
        </div>

        <div className={classes.titleBlock}>
          <div className={classes.article}>
            <Row
              gutter={[16, 16]}
              type="flex"
              style={{ flexDirection: "column" }}
            >
              <Col>
                <Row type="flex" gutter={[16, 16]}>
                  <Row className={classes.mainBlockHeader}>
                    <Col xs={24} className={classes.mainHeader}>
                      <Button
                        onClick={setAllData}
                        style={{ width: 129, borderRadius: "8px 0 0 8px" }}
                      >
                        All companies
                      </Button>
                      <Button
                        onClick={filteredStatusByPublicValue}
                        style={{ width: 108 }}
                      >
                        Public
                      </Button>
                      <Button
                        onClick={filteredStatusByPrivateValue}
                        style={{ width: 108 }}
                      >
                        Private
                      </Button>
                      <Button
                        onClick={filteredByStar}
                        style={{ width: 70, borderRadius: "0 8px 8px 0" }}
                      >
                        <img src="/star.svg" className={classes.iconStar} />
                      </Button>
                    </Col>
                    <Col className={classes.premiumSearch}>
                      <Input
                        placeholder="Search across topics and descriptions"
                        value={searchValue}
                        onChange={(e) => filterData(e)}
                      />
                      <img
                        src="/findIcon.svg"
                        alt=""
                        className={classes.findIcon}
                      />
                    </Col>
                  </Row>
                  <Col xs={24} className={classes.scrollColumn}>
                    <div className={classes.infiniteWrapper}>
                      <Table
                        rowClassName={(index) =>
                          index.status === "private" &&
                          selectValue === "Last 6 month"
                            ? "table-row-private"
                            : null
                        }
                        columns={columns}
                        dataSource={dataSource}
                        onRow={(index) => {
                          if (
                            index.status === "private" &&
                            selectValue === "Last 6 month"
                          ) {
                            return {
                              onMouseEnter: (e) => {
                                setmouseMove(e.target.offsetTop);
                                setCustomPopup(true);
                              },
                              onMouseLeave: () => {
                                setCustomPopup(false);
                              },
                            };
                          }
                        }}
                        pagination={false}
                      />
                      {customPopup && (
                        <div
                          className={classes.tableRowPopup}
                          style={{ top: `${mousemove + 20}px` }}
                        >
                          <p>
                            Please upgrade your subscription plan to see more
                            information
                          </p>
                        </div>
                      )}
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
          </div>
        </div>
        <div className={classes.premiumButtonBlock}>
          <Button onClick={() => handleShowMoreData()}>Show More Trends</Button>
        </div>
      </div>
    </>
  );
};

export default PremiumSubscriber;
