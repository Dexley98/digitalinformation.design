import React, { Component } from 'react'
import axios from 'axios'
import {navigate} from 'gatsby'

import MainMenu from '../components/main-menu'
import Footer from '../components/footer'

// stuff for responsive drop down
import SideDrawer from '../components/side-drawer'
import BackDrop from '../components/back-drop'


import "../css/layout.css"

const encode = (data) => {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
}

export default class Questions extends Component {
    constructor(props) {
      super(props);
      this.state = {
        siteDrawerOpen: false,
        fullName: undefined,
        email: undefined,
        question: undefined,
        nameMssg: undefined,
        emailMssg: undefined,
        questionMssg: undefined
      };

      this.handleInputChange = this.handleInputChange.bind(this)
      this.handleSubmit = this.handleSubmit.bind(this)
    }

    drawerToggleClickHandler = () =>{
        this.setState((prevState) => {
          return {sideDrawerOpen: !prevState.sideDrawerOpen}
        })
      }
  
    backdropClickHandler = () => {
        this.setState({sideDrawerOpen: false})
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
            fullName: undefined,
            email: undefined,
            question: undefined,
        })
    }

    handleSubmit(event){
        event.preventDefault()

        console.log('entire state ', this.state)
        let vaildName = this.validateName(this.state.fullName)
        let vaildEmail = this.validateEmail(this.state.email)
        let vaildQuestion = this.validateQuestion(this.state.question)
        console.log('question ', this.state.question)
        console.log(vaildQuestion)

        if(vaildName){
            this.setState({
                nameMssg: undefined
            })
        }

        if(vaildEmail){
            this.setState({
                emailMssg: undefined
            })
        }

        if(vaildQuestion){
            this.setState({
                questionMssg: undefined
            })
        }

        if(vaildName && vaildEmail && vaildQuestion){
            fetch("/", {
                method: "POST",
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
                body: encode({ "form-name": "contact", ...this.state })
              })
                .then(() => alert("Success!"))
                .catch(error => alert(error))

            this.resetForm()
            navigate("/question-submitted")
        }
        else{
            if(!vaildName){
                this.setState({
                    nameMssg: "That name doesn't look right. Please try again."
                })
            }
            if(!vaildEmail){
                this.setState({
                    emailMssg: "That doesn't look like a vaild email. Please try again."
                })
            }
            if(!vaildQuestion){
                this.setState({
                    questionMssg: "You have to ask a question!"
                })
            }
        }


    }

    render() {
      let sideDrawer = null;
      let backDrop = null;
      if (this.state.sideDrawerOpen) {
        sideDrawer = <SideDrawer />
        backDrop = <BackDrop click={this.backdropClickHandler}/>
      }
    
      return (
        <div>
        <MainMenu drawerClickHandler={this.drawerToggleClickHandler}/>
        {sideDrawer}
        {backDrop}
            <section className="questions-form-overview" id="top">
                <h1>QUESTIONS?</h1>
                <p>Fill out your information and a brief description of what you're looking for and we will get back to you as soon as we can!</p>
            </section>
            <section className="questions-form-block">
                <form name="contact" data-netlify="true" data-netlify-honeypot="bot-field" onSubmit={this.handleSubmit} >
                  <input type="hidden" name="form-name" value="contact" />
                  <label>
                    Full Name
                    <input
                      name="fullName"
                      type="text"
                      placeholder="What's your name?"
                      value={this.state.fullName}
                      onChange={this.handleInputChange} />
                  </label>
                  {this.state.nameMssg &&
                    <section className="invaild-name-block">
                        <p>{this.state.nameMssg}</p>
                    </section>
                  }
                  <br />
                  <label>
                    Email
                    <input
                      name="email"
                      type="email"
                      placeholder="example@gmail.com"
                      value={this.state.email}
                      onChange={this.handleInputChange} />
                  </label>
                  {this.state.emailMssg &&
                    <section className="invaild-email-block">
                        <p>{this.state.emailMssg}</p>
                    </section>
                  }
                  <br />
                  <label>
                    Question
                    <input
                      name="question"
                      type="text"
                      placeholder="What is your question?"
                      value={this.state.question}
                      onChange={this.handleInputChange} />
                  </label>
                  {this.state.questionMssg &&
                    <section className="invaild-question-block">
                        <p>{this.state.questionMssg}</p>
                    </section>
                  }
                  <br />
                  <input type="submit" value="Submit" />
                </form>
            </section>
            <Footer />
        </div>
      )
    }

    validateEmail(mailValue){

        let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

        if(mailValue !== undefined || mailValue !== null){
            if (regex.test(mailValue)){
                return true
            }
            return false
        }
        return false

    }

    validateName(nameValue)
    {
        let regex = /^[a-zA-Z ]{2,30}$/

        if(nameValue == undefined || nameValue == null){
            return false
        }else{
            if (regex.test(nameValue)) {
                return true
            }
            return false
        }


    }

    validateQuestion(questionValue){
        if(questionValue === undefined){
            return false
        }
        return true
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


    // form stuff from deltona

    action="http://deltona.birdnest.org/~acc.exleyd2/451mail.php" method="POST" onSubmit={this.handleSubmit}
}*/
