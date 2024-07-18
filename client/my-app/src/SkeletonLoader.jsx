import React from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const SkeletonHome = () => {
  return (
    <div>
      <div className="navbar-skeleton">
        <Skeleton height={80} width="100%" />
      </div>

      <section className="home" id="home">
        <div className="content">
          <h3><Skeleton width={550} height={45} /></h3>
          <p>
            <Skeleton width={600} height={20} />
            <Skeleton width={350} height={20} />
          </p>
          <Skeleton width={150} height={50} />
        </div>
      </section>

      <section className="home1" id="home1">
        <h1 className="heading"><Skeleton width={150} /></h1>
        <div className="box-container1">
        <div className="box">
            <Skeleton width={400} height={250} />
            <h3><Skeleton width={120} height={30} /></h3>
          </div>
          <div className="box">
            <Skeleton width={400} height={250} />
            <h3><Skeleton width={120} height={30} /></h3>
          </div>
          <div className="box">
            <Skeleton width={400} height={250} />
            <h3><Skeleton width={120} height={30} /></h3>
          </div>
        </div>
      </section>

      <section className="home1" id="home1">
        <div className="box-container1">
        <div className="box">
            <Skeleton width={400} height={250} />
            <h3><Skeleton width={120} height={30}/></h3>
          </div>
          <div className="box">
            <Skeleton width={400} height={250} />
            <h3><Skeleton width={120} height={30} /></h3>
          </div>
          <div className="box">
            <Skeleton width={400} height={250} />
            <h3><Skeleton width={120} height={30} /></h3>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SkeletonHome;
