import React from 'react';
import './Arrivals.scss';

const Arrivals = () => {
  return (
    <>
      <section className="section">
        <div className="container">
          <h1 className="h1">NEW ARRIVALS</h1>
          <div className="wrapper">

            <div className="card">
              <img src="/Frame 32.png" alt="" />
              <h3>T-SHIRT WITH TAPE DETAILS</h3>
              <p>⭐⭐⭐⭐4.5/5</p>
              <b>$120</b>
            </div>

            <div className="card">
              <img src="/Frame 33.png" alt="" />
              <h3>T-SHIRT WITH TAPE DETAILS</h3>
              <p>⭐⭐⭐⭐4.5/5</p>
              <b>$120</b>
            </div>

            <div className="card">
              <img src="/Frame 34.png" alt="" />
              <h3>T-SHIRT WITH TAPE DETAILS</h3>
              <p>⭐⭐⭐⭐4.5/5</p>
              <b>$120</b>
            </div>

            <div className="card">
              <img src="/Frame 38.png" alt="" />
              <h3>T-SHIRT WITH TAPE DETAILS</h3>
              <p>⭐⭐⭐⭐4.5/5</p>
              <b>$120</b>
            </div>
          </div>
          <button className="btn2">View All</button>
        </div>
      </section>
    </>
  );
};

export default Arrivals;
