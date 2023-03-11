import React, { Component } from "react";
import "../styles/ContactPage.css";

class ContactPage extends Component {
  state = {
    value: "",
    isEmpty: true,
  };

  handleChange = (e) => {
    if (e.target.value.length > 0) {
      this.setState({
        value: e.target.value,
        isEmpty: false,
      });
    } else {
      this.setState({
        value: e.target.value,
        isEmpty: true,
      });
    }
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({
      value: "",
      isEmpty: true,
    });
  };

  handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      this.setState({
        value: "",
        isEmpty: true,
      });
    }
  };

  render() {
    return (
      <div className="contact">
        <form onSubmit={this.handleSubmit} onKeyDown={this.handleKeyDown}>
          <h3>Napisz do nas</h3>
          <textarea
            value={this.state.value}
            onChange={this.handleChange}
            placeholder="Wpisz wiadomość..."
          ></textarea>
          <button>Wyślij</button>
        </form>
      </div>
    );
  }
}

export default ContactPage;
