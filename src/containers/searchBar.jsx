import React, { Component } from 'react'

export default class SearchBar extends Component {
  render() {
    return (
      <div>
        <form className="input-group">
            <input />
            <span className="input-group-button">
              <button type="submit" className="btn button-secondary">Submit</button>
            </span>
        </form>
      </div>
    )
  }
}
