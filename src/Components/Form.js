import React, { Component } from 'react'
//import Button from "../Button"
import InputText from './InputText'
import Button from "../Button"
import httpCreateCard from "./api.http"

export default class Form extends Component {

   state = {
      submitted: false,
      title: "",
   }

   onSubmitHandler = async (e) => {
      try {
      e.preventDefault();
      const response = await httpCreateCard(this.state.title);
      this.setState({
         submitted:true,
      })
      return response.data;
      } catch (err){
         console.log(err);
      }
   }

   onChangeHandler = (e) => {
		const { value , name} = e.target
      this.setState((prev) => {
         return ({
            ...prev,
            [name] : value,
         })
      })
	}

   render() {
      const {submitted,title,onChange} = this.state
      return (
         <>
         {!submitted ?
         <form onSubmit={this.onSubmitHandler}>
            <InputText
            name ={"title"}
            id={"title"}
            value = {title}
            style = {{padding:50}}
            onChange={this.onChangeHandler}/>
            <Button type ={"submit"} >Submit</Button>
         </form> : <h1> NON CI SIAMO</h1>
         }
         </>
      )
      
   }
}
