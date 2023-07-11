import React, { Component } from 'react';

export class Newsitem extends Component {
  render() {
    let { title, description, imageUrl, url} = this.props;
    return (
      <div className="my-3">
        <div className="card" style={{ width: '18rem' }}>
          <img src={!imageUrl?"https://image.cnbcfm.com/api/v1/image/107202043-1677727685271-gettyimages-1235596869-CHINA_CONSTRUCTION.jpeg?v=1689053951&w=1920&h=1080":imageUrl }className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <a rel="noreferrer" href={url} target="_blank" className="btn btn-sm btn-dark">Read More</a>
          </div>
        </div>
      </div>
    );
  }
}

export default Newsitem;
