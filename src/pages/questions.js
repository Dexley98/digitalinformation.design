import React, { Component } from 'react'
import axios from 'axios'
import {navigate} from 'gatsby'

import MainMenu from '../components/main-menu'
import Footer from '../components/footer'

// stuff for responsive drop down
import SideDrawer from '../components/side-drawer'
import BackDrop from '../components/back-drop'

import Recaptcha from 'react-recaptcha'

import "../css/layout.css"

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
        questionMssg: undefined,
        notABot: false,
        gRecaptchaResponse: undefined,
        botMssg: undefined
      };

      this.handleInputChange = this.handleInputChange.bind(this)
      this.handleSubmit = this.handleSubmit.bind(this)
      this.verifyCallback = this.verifyCallback.bind(this)
      this.onloadCallback = this.onloadCallback.bind(this)
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
            notABot: false
        })
    }

    verifyCallback(response){
        if(response){
            this.setState({
                // can only be verified once
                gRecaptchaResponse: response,
                notABot: true
            })
        }
    }

    onloadCallback(){
        console.log("Recaptcha loaded.")
    }

    handleSubmit(event){
        event.preventDefault()

        let vaildName = this.validateName(this.state.fullName)
        let vaildEmail = this.validateEmail(this.state.email)
        let vaildQuestion = this.validateQuestion(this.state.question)
        let notABot = this.state.notABot

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

        if(vaildName && vaildEmail && vaildQuestion && notABot){
            axios({
                method: "POST",
                url: "https://deltona.birdnest.org/~acc.exleyd2/451mail.php",
                data: this.state
            }).then( () => {
                this.resetForm()
                navigate("/question-submitted")
            })
            .catch( (error) =>{
                alert("Submission not successful.\n" 
                    + "Error Code: " + error.response.status 
                    + "\nError Message: " + error.response.statusText
                    + "\n Please submit again. " );
            })
            
        }
        else{
            if(!notABot){
                this.setState({
                    botMssg: "Please verify that you are a human!"
                })
            }
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
                    questionMssg: "Your question has some invalid characters. Please try again."
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
                <form action="https://deltona.birdnest.org/~acc.exleyd2/451mail.php" method="POST" onSubmit={this.handleSubmit} >
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
                  <center>
                      <Recaptcha
                        sitekey = "6Ld0aesUAAAAAGab0eDe5J03IT5Mw6zYMeHbLCr5"
                        onloadCallback = {this.onloadCallback}
                        verifyCallback = {this.verifyCallback}
                      />
                      {this.state.botMssg &&
                        <section className="invaild-bot-block">
                            <p>{this.state.botMssg}</p>
                        </section>
                      }
                  </center>
                  <input type="submit" value="Submit" />
                </form>
            </section>
            <Footer />
        </div>
      )
      
    }

    validateEmail(mailValue){

        let regex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(.\w{2,3})+$/

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

        if(nameValue === undefined || nameValue === null){
            return false
        }else{
            if (regex.test(nameValue)) {
                return true
            }
            return false
        }


    }

    validateQuestion(questionValue){
        let regex = /^[a-zA-Z0-9?,.' ]*$/
        if(questionValue === undefined || questionValue === null){
            return false
        }else{
            if (regex.test(questionValue)){
                return true
            }
            return false
        }
    }

}
