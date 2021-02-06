import React from "react";
import { connect } from "react-redux";
import { addSmurf, fetchSmurfs } from "../actions";

class AddForm extends React.Component {
  constructor() {
    super();
    this.state = {
      newSmurf: [
        {
          name: "",
          nickname: "",
          position: "",
          description: "",
          error: "",
        },
      ],
    };
  }

  // componentDidUpdate(prevState, prevProps) {
  //   if (prevState.smurfs !== this.state.newSmurf) {
  //      this.props.fetchSmurfs();
  //   }
  // }

  handleChange = (e) => {
    this.setState({
      newSmurf: { ...this.state.newSmurf, [e.target.name]: e.target.value },
    });
  };

  handleClick = (e) => {
    // console.log("handleClick from AddForm.js");
    e.preventDefault();
    if (!this.state.newSmurf.name) {
      this.setState({ ...this.state.newSmurf, error: "Must have a Name" });
    } else if (!this.state.newSmurf.nickname) {
      this.setState({ ...this.state.newSmurf, error: "Must have a Nick Name" });
    } else if (!this.state.newSmurf.position) {
      this.setState({
        ...this.state.newSmurf,
        error: "Please Give a Position",
      });
    } else if (!this.state.newSmurf.description) {
      this.setState({
        ...this.state.newSmurf,
        error: "Please Give a Description",
      });
    } else {
      this.props.addSmurf(this.state.newSmurf);
      this.setState({
        name: "",
        nickname: "",
        position: "",
        description: "",
      });
    }
  };

  render() {
    return (
      <section>
        <h2>Add New Smurf</h2>
        <form onSubmit={this.handleClick}>
          <div className="form-group">
            <label htmlFor="name">New Smurf Name:</label>
            <br />
            <input
              value={this.state.newSmurf.name}
              onChange={this.handleChange}
              name="name"
              id="name"
            />
            <label htmlFor="nickname">Nick Name:</label>
            <br />
            <input
              value={this.state.newSmurf.nickname}
              onChange={this.handleChange}
              name="nickname"
              id="nickname"
            />
            <label htmlFor="position">Position:</label>
            <br />
            <input
              value={this.state.newSmurf.position}
              onChange={this.handleChange}
              name="position"
              id="position"
            />
            <label htmlFor="description">Description:</label>
            <br />
            <input
              value={this.state.newSmurf.description}
              onChange={this.handleChange}
              name="description"
              id="description"
            />
          </div>

          {this.state.error ? (
            <div
              data-testid="errorAlert"
              className="alert alert-danger"
              role="alert"
            >
              Error:{this.state.error}
            </div>
          ) : (
            <></>
          )}

          <button type="submit">Submit Smurf</button>
        </form>
      </section>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    smurfs: state.smurfs,
    error: state.error,
  };
};

export default connect(mapStateToProps, { addSmurf, fetchSmurfs })(AddForm);

//Task List:
//1. Add in all necessary import components and library methods.
//2. Connect all needed redux state props and action functions to the component before exporting.
//3. Add state holding name, position, nickname and description to component.
//4. Build form DOM to include inputs for name, position and description of the component.
//      - an array of smurfs
//      - a boolean indicating if the app is loading
//      - error text
//      - MAKE SURE TO CORRECTLY CONNECT LABELS TO YOUR FORM INPUTS. USE THE PATTERN OF SHOWN FOR NAME.
//5. Build eventhandler and listener needed to change the state.
//6. Build eventhandler and listener needed to submit a new smurf and dispatch it's associated action.
//7. Ensure that the included alert code only displays when error text is passed in from redux.
//4. DO NOT DELETE THE data-testid FIELD FROM THE ERROR ALERT! This is used for sprint grading.
//8. Style as necessary.
