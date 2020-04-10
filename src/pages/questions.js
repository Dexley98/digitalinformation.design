import React, { Component } from 'react'
import axios from 'axios'
import {navigate} from 'gatsby'


export default class Questions extends Component {
    constructor(props) {
      super(props);
      this.state = {
        fullName: "John Smith",
        email: "example@mail.com",
        question: "Enter your question here!",
      };
  
      this.handleInputChange = this.handleInputChange.bind(this)
      this.handleSubmit = this.handleSubmit.bind(this)
    }
  
    handleInputChange(event) {
        const target = event.target
        console.log(target)
        const inputName = target.name
        const inputValue = target.value
        this.setState({
            [inputName]: inputValue
        })

    }

    resetForm(){
        this.setState({
            fullName: "Chewy",
            email: "example@mail.com",
            question: "Enter yodfadfaur question here!",
        })
    }

    handleSubmit(event){
        event.preventDefault()
        console.log(this.state)
        let stateArray = [this.state]
        console.log(stateArray)

        axios({
            method: "POST",
            url: "http://deltona.birdnest.org/~acc.exleyd2/451mail.php",
            data: JSON.stringify(this.state)
        }).then( (response) => {
            if (response.data.status === 'success'){
                console.log('message sent')
                this.resetForm()
            }else if(response.data.status === 'fail'){
                console.log("message failed to send.")
            }
        })

        navigate("/question-submitted")
    }
  
    render() {
      return (
        <div>
            <section className="questions-form-overview">
                <h1>QUESTIONS?</h1>
                <p>Fill out your information and a brief description of what you're looking for and we will get back to you as soon as we can!</p>
            </section> 
            <section className="questions-form-block">
                <form action="http://deltona.birdnest.org/~acc.exleyd2/451mail.php" method="POST" onSubmit={this.handleSubmit} >
                  <label>
                    Full Name
                    <input
                      name="fullName"            
                      type="text"
                      value={this.state.fullName}
                      onChange={this.handleInputChange} />
                  </label>
                  <br />
                  <label>
                    Email
                    <input
                      name="email"            
                      type="email"
                      value={this.state.email}
                      onChange={this.handleInputChange} />
                  </label>
                  <br />
                  <label>
                    Question
                    <input
                      name="question"            
                      type="text"
                      value={this.state.question}
                      onChange={this.handleInputChange} />
                  </label>
                  <br />
                  <input type="submit" value="Submit" />
                </form>
            </section>
        </div>
      )
    }

    validateEmail(mailValue){
        
        let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

        if (regex.test(mailValue)){
            return true
        }
        return false
    }

    validateName(nameValue)
    {
        var regex = /^[a-zA-Z ]{2,30}$/

        if (regex.test(nameValue)) {
            return true
        }
        return false
    }



}
/*
function dummyThicc(){
    let valid = false
    if(inputName === "fullName"){
        valid = this.validateName(inputValue)
        if(valid){
            this.setState({
                [inputName]: inputValue,
                nameMssg: undefined
            })
        }
        this.setState({
            nameMssg: "Something doesn't look right. Please try typing your name again."
        })
    }
    if(inputName === "email"){
        valid = this.validateEmail(inputValue)
        if(valid){
            this.setState({
                [inputName]: inputValue,
                emailMssg: undefined
            })
        }
        this.setState({
            emailMssg: "That doesn't look like a valid email. Please try again."
        })
    }
    if(inputName === "question"){
        valid = true
        this.setState({
            [inputName]: inputValue    
        });
    }
}*/