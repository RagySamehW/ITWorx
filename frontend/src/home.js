import React from 'react';
import './CSS/home.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Home = () => {
  function nominationScreen() {
    window.location.href = "/nomination";
  }
  function voteScreen() {
    window.location.href = "/vote";
  }
  function profilePage() {
    window.location.href = "/profile";
  }
  return (
      <div className="wrapper">
        <div className="header">
          <h1>Employee of the Month</h1>
          <p>Recognize your peers. Vote for your favorite. Celebrate the winners.</p>
          <div className="buttons">
            <button className="btnn" onClick={nominationScreen}>
              Nominate
            </button>
            <button onClick={voteScreen}>
              Vote
            </button>
          </div>
        </div>

        <div className="recent-winners-container">
          <h2>Recent Winners</h2>
        </div>

        <div className="winners">
          <button className="btn2" onClick={profilePage}>
            <div className="winner">
              <img src="./PIC/2.jpg" alt="John Smith" />
              <h3>John Smith</h3>
              <p>Software Engineer</p>
              <p>June 2023</p>
            </div>
          </button>
          <button className="btn3">
            <div className="winner">
              <img src="./PIC/3.jpg" alt="Jane Doe" />
              <h3>Jane Doe</h3>
              <p>Product Manager</p>
              <p>May 2023</p>
            </div>
          </button>
          <button className="btn4">
            <div className="winner">
              <img src="./PIC/4.jpg" alt="Sam Johnson" />
              <h3>Sam Johnson</h3>
              <p>UX Designer</p>
              <p>April 2023</p>
            </div>
          </button>
        </div>
      </div>
  );
};

export default Home;
