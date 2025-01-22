// import { useState } from 'react'
import scissor from "./assets/scissors.svg";
import calendar from "./assets/calendar_svgrepo.com.svg";
import services from "./assets/services_svgrepo.com.svg";
import arrow from "./assets/arrow.svg";
// import viteLogo from '/vite.svg'
import "./App.css";
import Nav from "./components/Nav/Nav";

function App() {
  return (
    <>
    <Nav />
      <header>
        <article>
          <aside>
            <p>Where Every Cut Tells Your Story</p>
            <div>
              <img src={arrow} alt="arrow icon" />
            </div>
          </aside>
          <h1>
            Look <span>Good</span>.
            <br />
            Feel <span>Great</span>.
            <br />
            Every Time
          </h1>
          <div className="scissor">
            <img src={scissor} alt="scissor icon" />
          </div>
        </article>
        <div className="action">
          <button className="btn-icon btn">
            <div>
              <img src={calendar} alt="icon" />
            </div>{" "}
            Book Your Appointment
          </button>
          <button className="btn-icon btn primary">
            <div>
              <img src={services} alt="icon" />
            </div>{" "}
            Explore Our Services
          </button>
        </div>
      </header>
    </>
  );
}

export default App;
