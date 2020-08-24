import React from "react";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      codeOutput: "................",
      dateOutput: "--/--",
      dateOutputValue: "",
      nameOutput: "____",
      nameOutputValue:"",
    };
  }
  handleCodeInputChange = event => {
    if (/([a-z]|[*\-+/ ])+/i.test(event.target.value)) {
      alert("The code input must contain only numbers!");
      event.target.value = event.target.value.substring(
        0,
        event.target.value.length - 1
      );
    } else {
      var output = "";
      var blankOutput = "................";
      var groupsOfFourNumbers = event.target.value.match(/\d{4}/g);
      var remainingNumbers = "";
      if (groupsOfFourNumbers !== null) {
        remainingNumbers = event.target.value.substring(
          groupsOfFourNumbers.length * 4
        );
        for (var i = 0; i < groupsOfFourNumbers.length; i++) {
          i < 3
            ? (output = output + groupsOfFourNumbers[i] + " ")
            : (output = output + groupsOfFourNumbers[i]);
        }
      } else remainingNumbers = event.target.value;

      output = output + remainingNumbers;

      this.setState({
        codeOutput:
          output + blankOutput.substring(0, 16 - event.target.value.length),
      });
    }
  };
  handleDateInputChange = event => {
    this.setState({
      dateOutputValue: event.target.value,
    });
  };
  submitDate = () => {
    let pattern = new RegExp("^(((0[1-9])|(1[0-2]))/2[0-5])$");
    if (pattern.test(this.state.dateOutputValue))
      this.setState({
        dateOutput: this.state.dateOutputValue,
      });
    else
      alert(
        "Please fill in the date input with a value that matches the specified format! "
      );
  };
  handleNameInputChange = event => {
     
     this.setState({
      nameOutputValue: event.target.value,
    });
     
  };
  submitName = () => {
    if (/(^[a-z]+$)|((^[a-z]+)([ ]{0,1})([a-z]+$))/i.test(this.state.nameOutputValue))
    this.setState({
      nameOutput: this.state.nameOutputValue,
    });
    else alert ("The name input must contain letters and spaces (one space at a time) only and start and end with a letter!")
  };
  render() {
    return (
      <div className="App">
        <form>
        <input
            type="text"
            className="codeInput"
            maxLength="16"
            placeholder="Insert your card code here"
            onChange={this.handleCodeInputChange}
          ></input>
          <br></br>
          <br></br>
          <input
            type="text"
            className="dateInput"
            placeholder="MM/YY"
            onChange={this.handleDateInputChange}
          ></input>
          <input type="button" value="OK" className="okBtn" onClick={this.submitDate}></input>
          <br></br>
          <br></br>
          <input
            type="text"
            placeholder="Insert your name here"
            className="nameInput"
            onChange={this.handleNameInputChange}
          ></input>
          <input type="button" value="OK" className="okBtn" onClick={this.submitName}></input>
        </form>
        
        <div className="outputs">
            <p className="codeOutput">{this.state.codeOutput}</p>
            <p className="dateOutput">{this.state.dateOutput}</p>
            <p className="nameOutput">{this.state.nameOutput}</p>
            </div>
        </div>
    );
  }
}
export default App;
