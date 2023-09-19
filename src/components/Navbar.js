import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';


export class Navbar extends Component {
    static propTypes = {
        category: PropTypes.string
    }

    constructor(props) {
        super(props);
        this.state = {
            category: ""
        }
    }
    handleOnchange = (value) => {
        this.setState({
            category: value
        });
    }
    handleOnSearch = (value) => {
        // console.log("data: " + value)
        this.props.setSearch(value);
        this.setState({ category: "" })
    }

    render() {
        return (
            <div>
                <nav className="navbar fixed-top navbar-expand-lg bg-body-tertiary">
                    <div className="container-fluid">
                        <Link className="navbar-brand" to="/">NewsMonkey</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/about">About</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/business">Business</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/entertainment">Entertainment</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/health">Health</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/science">Science</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/sports">Sports</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/technology">Technology</Link>
                                </li>
                            </ul>
                            <form className="d-flex">
                                <input className="form-control me-2" type="text"
                                    placeholder="Search..." aria-label="Search"
                                    list="category"
                                    value={this.state.category}
                                    onChange={(e) => {
                                        e.preventDefault();
                                        this.handleOnchange(e.target.value);
                                    }}
                                    autoComplete='on'
                                />
                                <datalist id="category" style={{ width: "100%" }}>
                                    <option value="general">Top Headlines</option>
                                    <option value="business">business</option>
                                    <option value="entertainment">entertainment</option>
                                    <option value="health">health</option>
                                    <option value="science">science</option>
                                    <option value="sports">sports</option>
                                    <option value="technology">technology</option>
                                </datalist>
                                <button className="btn btn-outline-success" onClick={(e) => {
                                    e.preventDefault();
                                    this.handleOnSearch(this.state.category);
                                }} type="submit">Search</button>
                            </form>
                        </div>
                    </div>
                </nav >
            </div >
        )
    }
}

export default Navbar
