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

<<<<<<< HEAD
const encode = (data) => {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
}
=======
/**
 * This Componet has the most diverse functionality. 
 * It is the question form for potential students to ask questions. 
 * It utilizes Google's Recaptcha to check for spam.
 * Validations are the same on server side. 
 */
>>>>>>> backend

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
                notABot: true
            })
        }
    }

    onloadCallback(){
        console.log("Recaptcha loaded.")
    }

/**
 * handleSubmit(event)
 * @param {event} event
 * 
 * This function is where the magic happens.
 * It checks and validates inputs from state. 
 * If the input is not valid messages are set, and output to the form.
 * If checks pass, then we make a post request to Deltona. 
 * There is check for errors (you'd have to check the .php file for that.) in the response
 * If everything checks out we navigate to the confirmation page. 
 * If something isn't right we pop up an alert. (I sincerly doubt this will happen with the average user.)
 */
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

<<<<<<< HEAD
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
=======
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
            
>>>>>>> backend
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
<<<<<<< HEAD
                <form name="contact" data-netlify="true" data-netlify-honeypot="bot-field" onSubmit={this.handleSubmit} >
=======
                <form action="httpS://deltona.birdnest.org/~acc.exleyd2/451mail.php" method="POST" onSubmit={this.handleSubmit} >
>>>>>>> backend
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

/**
 * All validate Functions
 * @param {string} arbitaryInputValue
 * 
 * These are all teh same in nature. 
 * The only true difference is the regex that is tested for validation. 
 * The first check makes sure that the input isn't empty. 
 * The second test's the regex against the input value. 
 * If everything checks out the input is valid. 
 *  
 */
    validateEmail(mailValue){

        let regex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(.\w{2,3})+$/

        if(mailValue === undefined || mailValue === null){
            return false
        }
        else{
            if (regex.test(mailValue)){
                return true
            }
            return false
        }
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
<<<<<<< HEAD
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
=======
>>>>>>> backend
