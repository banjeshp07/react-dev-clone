import React from 'react';
import Hero from '../components/Hero'; // path sahi hona chahiye

const Home = () => {
  return (
    <>
      <Hero />
      <section className="py-5">
        <div className="container text-center">
          <h2 className="mb-4">Why React?</h2>
          <div className="row">
            <div className="col-md-4 mb-3">
              <div className="card h-100">
                <div className="card-body">
                  <h5 className="card-title">Declarative</h5>
                  <p className="card-text">React makes it painless to create interactive UIs by designing simple views for each state.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-3">
              <div className="card h-100">
                <div className="card-body">
                  <h5 className="card-title">Component-Based</h5>
                  <p className="card-text">Build encapsulated components that manage their own state, then compose them to make complex UIs.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-3">
              <div className="card h-100">
                <div className="card-body">
                  <h5 className="card-title">Learn Once, Write Anywhere</h5>
                  <p className="card-text">React can render on the server using Node and power mobile apps using React Native.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;  // ✅ Ye bhi important hai
