import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar'
import Alert from './components/Alert';


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      apikey: process.env.REACT_APP_NEWS_API_KEY,
      progress: 0,
      search: "",
      alert: {}
    }
  }
  setProgress = (num) => {
    this.setState({
      progress: num
    });
    console.log("Value to: " + num)
  }
  setSearch = (value) => {
    this.setState({
      search: value
    });
  }

  displayAlert = (message, type) => {
    this.setState({
      alert: { mgs: message, type: type }
    });
    setTimeout(() => {
      this.setState({ alert: null });
    }, 2000);
  }

  render() {
    return (
      <>
        <Router>
          <LoadingBar
            transitionTime={100} // default 300
            loaderSpeed={600}    // default 400
            waitingTime={500}    // default 1000
            color='#f11946'
            progress={this.state.progress}
            height={2}
          />
          <Navbar setSearch={this.setSearch} />
          <Alert alert={this.state.alert} />
          <Routes>
            <Route exact path="/" element={
              <News displayAlert={this.displayAlert} setProgress={this.setProgress} pageSize={10} apiKey={this.state.apikey} country="in" category="general" q={this.state.search} />
            } />
            <Route exact path="/general" element={
              <News displayAlert={this.displayAlert} setProgress={this.setProgress} key="general" pageSize={10} apiKey={this.state.apikey} country="in" category="general" q={this.state.search} />
            } />
            <Route exact path="/business" element={
              <News displayAlert={this.displayAlert} setProgress={this.setProgress} key="business" pageSize={10} apiKey={this.state.apikey} country="in" category="business" q={this.state.search} />
            } />
            <Route exact path="/entertainment" element={
              <News displayAlert={this.displayAlert} setProgress={this.setProgress} key="entertainment" pageSize={10} apiKey={this.state.apikey} country="in" category="entertainment" q={this.state.search} />
            } />
            <Route exact path="/health" element={
              <News displayAlert={this.displayAlert} setProgress={this.setProgress} key="health" pageSize={10} apiKey={this.state.apikey} country="in" category="health" q={this.state.search} />
            } />
            <Route exact path="/science" element={
              <News displayAlert={this.displayAlert} setProgress={this.setProgress} key="science" pageSize={10} apiKey={this.state.apikey} country="in" category="science" q={this.state.search} />
            } />
            <Route exact path="/sports" element={
              <News displayAlert={this.displayAlert} setProgress={this.setProgress} key="sports" pageSize={10} apiKey={this.state.apikey} country="in" category="sports" q={this.state.search} />
            } />
            <Route exact path="/technology" element={
              <News displayAlert={this.displayAlert} setProgress={this.setProgress} key="technology" pageSize={10} apiKey={this.state.apikey} country="in" category="technology" q={this.state.search} />
            } />

          </Routes>
        </Router>
      </>
    )
  }
}