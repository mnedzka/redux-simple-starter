import React, { Component } from 'react'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import { fetchWeather } from "../actions/index";

class SearchBar extends Component {
  constructor(props) {
    super(props)

    this.state = {
      term: '',
    }

    this.onInputChange = this.onInputChange.bind(this);
    this.formOnSubmit = this.formOnSubmit.bind(this);
  }

  onInputChange(event) {
    this.setState({
      term: event.target.value,
    })
    console.log(this.state)
  };

  formOnSubmit(event) {
    event.preventDefault();

    this.props.fetchWeather(this.state.term);
    this.setState({term: ''})
  }

  render() {
    return (
      <div>
        <form onSubmit={this.formOnSubmit} className="input-group">
            <input 
              placeholder="Get a five day forecast in your favorite city"
              className="form-cotrol"
              value={this.state.term}
              onChange={this.onInputChange}
            />
            <span className="input-group-button">
              <button type="submit" className="btn button-secondary">Submit</button>
            </span>
        </form>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchWeather }, dispatch)
}

export default connect(null, mapDispatchToProps)(SearchBar)
