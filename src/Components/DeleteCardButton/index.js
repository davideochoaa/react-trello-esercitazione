import React, { Component } from 'react'

export class index extends Component {
   render() {
      const { type, onClickHandler } = this.props
      return (
         <button
            type={type}
            className="delete-card"
            onClick={onClickHandler}>
            <i className="fa-solid fa-delete-left"></i>
         </button>
      )
   }
}

export default index