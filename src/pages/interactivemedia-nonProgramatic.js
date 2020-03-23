import React, {Component} from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Menu from "../components/main-menu"




class IM extends Component{
    constructor(){
        super()
        this.state = {
            name: 'Alissa Melsopp'
        }
    }

    render() {
        

        return(
<<<<<<< HEAD:src/pages/interactivemedia-nonProgramatic.js

             <Layout>
                <SEO title="Web Apps" />
                <h1>Hello Welcome to interactive Media</h1>
=======
            <Layout>
                <SEO title="Interactive Media" />
                <h1>Hello Welcome to Interactive Media</h1>
>>>>>>> fd8488c7b26811c80a52205f25baa7f24272de83:src/pages/interactivemedia.js
                <p>We build software that powers the world wide web.</p>
                <p>My name is {this.state.name}</p>
                <Link to="/page-2/">Go to page 2</Link><br />
                <Link to="/massmedia/">Go to Mass Media</Link><br />
                <Link to="/">Back Home</Link>
            </Layout>
        )
    }
}

export default IM
<<<<<<< HEAD:src/pages/interactivemedia-nonProgramatic.js

=======
>>>>>>> fd8488c7b26811c80a52205f25baa7f24272de83:src/pages/interactivemedia.js
