import React, { Component } from "react";
import Loader from "react-loader-spinner";
import AddForm from "./components/AddForm";
import SmurfDisplay from "./components/SmurfDisplay";
import { connect } from "react-redux";
import { fetchSmurfs } from "./actions";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

class App extends Component {
  componentDidMount() {
    this.props.fetchSmurfs();
  }

  render() {
    return (
      <div className="App">
        <nav className="navbar navbar-dark bg-primary">
          <button className="navbar-brand">Smurf Village Database</button>
        </nav>
        <main>
          <AddForm />
          {this.props.isLoading ? (
            <Loader style={{textAlign: 'center'}} type="Circles" color="#00BFFF" height={80} width={80} />
          ) : this.props.error ? (
            <div style={{ color: "red" }}>Received this error trying to get Smurfs: <strong>{this.props.error}</strong></div>
          ) : (
            <h2>Here are the SMURFS!</h2>
          )}
          <SmurfDisplay />
        </main>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    error: state.error,
    isLoading: state.isLoading,
  };
};

export default connect(mapStateToProps, { fetchSmurfs })(App);

//Task List:
//1. Add in SmurfDisplay and AddForm into your application.
