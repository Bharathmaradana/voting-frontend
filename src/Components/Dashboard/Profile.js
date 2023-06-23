import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import "./dashcss.css";
import { Button } from "react-bootstrap";
import { Heading, Input1, Input2, Container } from "./Styles";
import { CopyToClipboard } from "react-copy-to-clipboard";
import copy from "copy-to-clipboard";
import { useNavigate } from "react-router-dom";
function Profile() {
  const navigate = useNavigate();
  const [name, setname] = useState({});
  useEffect(() => {
    axios
      .get("http://localhost:5003/userdata/", {
        headers: {
          "x-token": localStorage.getItem("token"),
        },
      })
      .then((res) => {
        console.log(res.data);
        setname(res.data);
      });
  }, []);
  if (localStorage.getItem("token") == null) {
    navigate("/login");
  }
  const logout_1 = () => {
    localStorage.clear();
    refreshPage();
    function refreshPage() {
      window.location.reload(false);
    }
  };

  return (
    <div
      style={{ position: "relative", display: "flex", flexDirection: "column" }}
    >
      <header style={{ width: "100%" }}>
        <a href="#" className="logo">
          <span>ClaimYour</span>Vote
        </a>

        <input type="checkbox" id="menu-bar" />
        <label for="menu-bar" className="fas fa-bars"></label>

        <nav className="navbar">
          <a href="/Home">Home</a>
          <a href="/Home">Features</a>
          {localStorage.getItem("roomid") ? (
            <a href="/Dashboard">Dasboard</a>
          ) : (
            <a href="/Home">About</a>
          )}
          {localStorage.getItem("userid") ? (
            <a href="/Profile">Profile</a>
          ) : (
            <a href="/Home">Rating</a>
          )}
          {name ? <a href="/Rooms">Rooms</a> : <a href="/Register">Register</a>}
          {name ? (
            <a onClick={() => logout_1()} href="/Login">
              Logout
            </a>
          ) : (
            <a href="/Login">Login</a>
          )}
        </nav>
      </header>

      <div
        className="profile"
        style={{ backgroundColor: "#eee", position: "relative" }}
      >
        <div
          className="row"
          style={{
            width: "100%",
            height: "100%",
            position: "relative",
            padding: "90px",
          }}
        >
          <div className="col-lg-4" style={{ height: "100%" }}>
            <div className="profile_1">
              <div
                style={{
                  justifyContent: "center",
                  textAlign: "center",
                  alignItems: "center",
                }}
              >
                <img
                  src="IMG_2795.jpg"
                  className="img-fluid"
                  style={{
                    height: "200px",
                    width: "200px",
                    borderRadius: "15px",
                  }}
                />
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    textAlign: "center",
                    alignItems: "center",
                  }}
                >
                  <p>Name:</p> <h3>{name.name}</h3>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    textAlign: "center",
                    alignItems: "center",
                  }}
                >
                  <p>Type:</p> <h3>ADMIN/USER</h3>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    textAlign: "center",
                    alignItems: "center",
                  }}
                >
                  <p>RollNo:</p> <h3>{name.rollno}</h3>
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-lg-8"
            style={{
              height: "100%",
              width: "100%",
              justifyContent: "space-evenly",
              backgroundColor: "#ffffff",
              borderRadius: "5px",
            }}
          >
            {" "}
            <div
              style={{
                height: "100%",
                width: "100%",
                justifyContent: "space-evenly",
                padding: "20px",
              }}
            >
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-evenly",
                }}
              >
                <div
                  style={{
                    width: "100%",
                    display: "flex",
                    flexDirection: "row",
                    marginTop: "1%",
                  }}
                >
                  <p>Full Name</p>
                  <p style={{ marginLeft: "5%" }}>{name.name}</p>
                </div>
                <span className="underline"></span>
                <div
                  style={{
                    width: "100%",
                    display: "flex",
                    flexDirection: "row",
                    marginTop: "7%",
                  }}
                >
                  <p>Email</p>
                  <p style={{ marginLeft: "5%" }}>{name.email}</p>
                </div>
                <span className="underline"></span>
                <div
                  style={{
                    width: "100%",
                    display: "flex",
                    flexDirection: "row",
                    marginTop: "7%",
                  }}
                >
                  <p>Roll No</p>
                  <p style={{ marginLeft: "5%" }}>{name.rollno}</p>
                </div>
                <span className="underline"></span>
                <div
                  style={{
                    width: "100%",
                    display: "flex",
                    flexDirection: "row",
                    marginTop: "7%",
                  }}
                >
                  <p>Your Password</p>
                  <p style={{ marginLeft: "5%" }}>{name.password}</p>
                </div>
                <span className="underline"></span>
              </div>
            </div>
          </div>
        </div>
        <div className="row" style={{ backgroundColor: "#eee", flex: "start" }}>
          {/* <div
            className="rooms__1"
            style={{ paddingLeft: "180px", paddingRight: "200px" }}
          >
            <div
              className="rooms__2"
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "start",
                alignItems: "start",
                padding: "20px",
              }}
            >
              <h1>Room-1</h1>
              <h1>ROOM ID i.e To Enter the Room</h1>
              <h1>You have voted for: Bharath_2002</h1>
            </div>
          </div> */}
          <div
            className="rooms__1"
            style={{
              paddingLeft: "180px",
              paddingRight: "200px",
            }}
          >
            {name.rooms &&
              name.rooms.map((data, index) => {
                return (
                  <div
                    className="rooms__2"
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "start",
                      alignItems: "start",
                      padding: "20px",
                      position: "relative",
                      marginTop: "5%",
                    }}
                  >
                    <h1>Room-{index}</h1>
                    <h4>
                      ROOM ID i.e To Enter the Room :{" "}
                      <span style={{ color: "blue" }}>{data.roomid}</span>
                    </h4>
                    <h4>
                      You have voted for:{" "}
                      <span style={{ color: "brown" }}>{data.prevname}</span>
                    </h4>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
