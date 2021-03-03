import React, { useState, useEffect } from "react";
import Background from "../images/Background.jpg";
import MobileBackground from "../images/MobileBackground.jpg";
import CardBackground from "../images/Border.png";
import CardBackground2 from "../images/Border2.png";
import Element from "../images/Element.png";
import Element2 from "../images/Element2.png";
import Content from "../images/Content.png";
import Union from "../images/Union.png";
import Subtract from "../images/Subtract.png";
import Arrow from "../images/Arrow.png";
import Vector from "../images/Vector.png";

import Menu from "./Menu";

import { shows, reviews } from "../data/Data";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const background = {
  // width: "auto",
  height: "750px",
  backgroundImage: `url("${Background}")`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "100% 100%",
};

const mobileBackground = {
  // width: "auto",
  height: "750px",
  backgroundImage: `url("${MobileBackground}")`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "100% 100%",
};

const cardBackground = {
  width: "14rem",

  backgroundImage: `url("${CardBackground}")`,
  backgroundRepeat: "no-repeat",
  backgroundSize: " 100% 100%",
};
const cardBackground2 = {
  width: "14rem",
  backgroundImage: `url("${CardBackground2}")`,
  backgroundRepeat: "no-repeat",
  backgroundSize: " 100% 100%",
};

const element = {
  width: "50%",
  height: "150px",
  backgroundImage: `url("${Element}")`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "100% 100%",
  margin: "4px",
};
const element2 = {
  width: "50%",
  height: "150px",
  backgroundImage: `url("${Element2}")`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "100% 100%",
  margin: "4px",
};

const Home = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const imageUrl = windowWidth >= 650 ? background : mobileBackground;

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <div className="content-font">
      <div className="top" style={imageUrl}>
        <Menu />
        <div className="container text-white">
          <div style={{ marginBottom: "140px" }}>
            <h1 className="head-font" style={{ fontSize: "50px" }}>
              Cari Cari
            </h1>
            <p>
              Live from their sofa to yours.Get closer to your favorite artists
              and never miss out.
            </p>
          </div>
          <Carousel
            swipeable={true}
            draggable={true}
            responsive={responsive}
            removeArrowOnDeviceType={["superLargeDesktop", "desktop"]}
          >
            <div className="center">
              <div className="element" style={element2}>
                <img className="icon" src={Vector} />
                <p>0</p>
                <p>Label</p>
              </div>
            </div>
            <div className="center">
              <div className="element" style={element}>
                <img className="icon" src={Content} />
                <p>0</p>
                <p>Label</p>
              </div>
            </div>
            <div className="center">
              <div className="element" style={element}>
                <img className="icon" src={Content} />
                <p>0</p>
                <p>Label</p>
              </div>
            </div>
            <div className="center" style={{ height: "150px" }}>
              <div className="element" style={element}>
                <img className="icon" src={Content} />
                <p>0</p>
                <p>Label</p>
              </div>
            </div>
          </Carousel>
        </div>
      </div>
      <div className="container text-white mt-2">
        <div className="pt-6">
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <h3 className="head-font">Upcoming Shows</h3>
            <span className="text-warning">View All</span>
          </div>
          <div
            className="row"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div className="col-10 col-md-12">
              <Carousel
                className="carousel"
                swipeable={true}
                draggable={true}
                responsive={responsive}
                removeArrowOnDeviceType={["superLargeDesktop", "desktop"]}
              >
                {shows.map((show) => {
                  return (
                    <div
                      key={show.id}
                      className="center ms-5"
                      style={cardBackground}
                    >
                      <div
                        className="card rounded-3"
                        style={{
                          margin: "6px 0px -6px -12px",
                          width: "14rem",
                          backgroundColor: "#111229",
                        }}
                      >
                        <img
                          src={show.img}
                          className="card-img-top"
                          alt="..."
                        />
                        <div className="card-body">
                          <div className="badge bg-warning text-dark mb-2">
                            {show.badge}
                          </div>
                          <h5 className="card-title mb-4">{show.name}</h5>
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                            }}
                          >
                            <a href="#" className="">
                              More Info
                              <img className="ms-3" src={Arrow} />
                            </a>
                            <img
                              style={{
                                width: "14px",
                              }}
                              src={Union}
                              onMouseEnter={(e) =>
                                (e.currentTarget.src = Subtract)
                              }
                              onMouseLeave={(e) =>
                                (e.currentTarget.src = Union)
                              }
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </Carousel>
            </div>
          </div>
        </div>
        <div className="pt-6">
          <h3 className="head-font">Reviews</h3>
          <div className="row">
            <div className="col-10 col-md-12">
              <Carousel
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
                className="carousel-review"
                swipeable={true}
                draggable={true}
                responsive={responsive}
                removeArrowOnDeviceType={["superLargeDesktop", "desktop"]}
              >
                {reviews.map((review) => {
                  return (
                    <div
                      key={review.id}
                      className="center ms-5"
                      style={cardBackground2}
                    >
                      <div
                        className="card border border-warning"
                        style={{
                          margin: "6px 0px -6px -12px",
                          width: "14rem",
                          backgroundColor: "#111229",
                          // boxShadow: "1rem -1rem 0px 1px #301B69",
                        }}
                      >
                        <div className="card-body">
                          {/* <div class="badge bg-warning text-dark mb-2">Warning</div> */}
                          <span
                            className="card-title mb-4 center"
                            style={{
                              display: "flex",
                              justifyContent: "left",
                              fontSize: "16px",
                            }}
                          >
                            <img className="profile-img" src={review.img} />
                            <div
                              style={{
                                marginLeft: "4px",
                                display: "flex",
                                flexDirection: "column",
                              }}
                            >
                              {review.name}
                              <div
                                className="text-warning"
                                style={{ fontSize: "12px" }}
                              >
                                <img src={review.flag} />
                                {review.place}
                              </div>
                            </div>
                          </span>
                          <p>
                            Mauris blandit aliquet elit, eget tincidunt nibh
                            pulvinar a. Praesent sapien massa, convallis a
                            pellentesque nec, egestas non nisi.
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
