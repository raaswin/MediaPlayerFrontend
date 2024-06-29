import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

function Landingpage() {
  return (
    <>
      <div className="row mt-5 w-100 justify-content-center align-items-center">
        <div className="col-md-1"></div>
        <div className="col-md-5 p-5">
          <h3>
            Welcome to <span className="text-warning"> Media Player</span>{" "}
          </h3>
          <p style={{ textAlign: "justify" }}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Exercitationem voluptates molestias atque natus tempora optio
            doloremque obcaecati commodi quae tenetur voluptatum ipsa odit
            ullam, modi amet fugiat sint quaerat et! molestias atque natus
            tempora optio doloremque obcaecati commodi quae tenetur{" "}
          </p>

          <button
            className="btn btn-warning mb-5 "><Link to ={'/home'} style={{textDecoration : 'none', color :'white'}}
            // style={{
            //   color: "white",
            //   width: "150px",
            //   height: "60px",
            //   fontSize: "22px",
            // }}
          >
            Get Started </Link>
          </button>
        </div>

        <div className="col-md-1"></div>
        <div className="col-md-5 d-flex justify-content-center align-items-center p-md-5">
          <img
            src="https://media.tenor.com/lhlDEs5fNNEAAAAC/music-beat.gif"
            alt="no image"
            className="w-75"
          />
        </div>
      </div>

      <div className="row w-100 mt-5">
        <h3 className="mt-5 text-center mb-5">Features</h3>
        <div className="col-md-1 me-md-5"></div>

        <div className="col-md-3 px-5 px-md-4 mt-4">
          <Card style={{ width: "100%" }} className="p-3">
            <Card.Img
              variant="top"
              src="https://i.pinimg.com/originals/18/de/42/18de42ff1fc8b8d5e04a37687dae47ca.gif"
              className="w-100"
              height={"300px"}
            />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-3 px-5 px-md-4 mt-4">
          <Card style={{ width: "100%" }} className="p-3">
            <Card.Img
              variant="top"
              src="https://i.pinimg.com/originals/88/4a/40/884a408310b28171aa1018f77dee2602.gif"
              className="w-100"
              height={"300px"}
            />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>

        <div className="col-md-3 px-5 px-md-4 mt-4">
          <Card style={{ width: "100%" }} className="p-3">
            <Card.Img
              variant="top"
              src="https://i.gifer.com/origin/ce/ce9b1b80a59bc4090dcded493ccba5f3_w200.gif"
              className="w-100"
              height={"300px"}
            />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>

        <div className="col-md-1"></div>
      </div>

      <div className="row w-100 mt-5 ms-1 ms-md-0 p-4 p-md-0">
        <div className="col-md-1"></div>
        <div className="col-md-9 border p-5 rounded m-md-5 ">
          <div className="row w-100">
            <div className="col-md-6">
              <h3 className="text-warning mt-3">Simple fast and Powerful</h3>
              <p className="mt-4">
              
                <span className="fs-4"> Play Everything ! </span> Exercitationem
                voluptates molestias atque natus tempora optio doloremque
                obcaecati commodi quae tenetur voluptatum ipsa odit ullam{" "}
              </p>

              <p className="mt-4">
               
                <span className="fs-4"> Play Everything ! </span> Exercitationem
                voluptates molestias atque natus tempora optio doloremque
                obcaecati commodi quae tenetur voluptatum ipsa odit ullam{" "}
              </p>

              <p className="mt-4">
               
                <span className="fs-4"> Play Everything ! </span> Exercitationem
                voluptates molestias atque natus tempora optio doloremque
                obcaecati commodi quae tenetur voluptatum ipsa odit ullam{" "}
              </p>
            </div>

            <div className="col-md-6">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/KUN5Uf9mObQ?si=6-LMpvlE6kbxRRdt"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>
        <div className="col-md-2"></div>
      </div>
    </>
  );
}

export default Landingpage;