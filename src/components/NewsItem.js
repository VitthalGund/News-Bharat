import React, { Component } from 'react'
import Img from "../defaultImge.jpg"
export class NewsItem extends Component {
    render() {
        let { title, description, imageUrl, publishedAt, author, url, source, type } = this.props;
        return (
            <>
                <div className="card">
                    <span className={`position-absolute top-0 start-100 badge rounded-pill bg-${type}`}
                        style={{ transform: "translate(-100%, -50%)", zIndex: "2", padding: "0.50em", fontSize: "2vh" }}
                    >{source.name}</span>
                    <img src={imageUrl ? imageUrl : Img} loading='lazy' className="card-img-top" alt="headline-poster" />
                    <div className="card-body">
                        <h5 className="card-title">{title}...</h5>
                        <p className="card-text">{description}...   </p>
                        <p className="card-text"><small className="text-body-secondary">By {!author || author.lenght >= 0 ? "Unknown" : author} on {new Date(publishedAt).toUTCString()}</small></p>
                        <a href={url} target='_blank' rel="noreferrer" className="container btn btn-primary">Read More</a>
                    </div>
                </div>
            </ >
        )
    }
}

export default NewsItem;
