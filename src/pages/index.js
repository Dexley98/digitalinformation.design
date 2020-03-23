import React from "react"
import { Link } from "gatsby"

import '../fonts/AvenirLTStd-Book.otf'
import '../fonts/AvenirLTStd-Light.otf'
import '../fonts/AvenirLTStd-Roman.otf'

import '../fonts/Raleway-ExtraBold.ttf'
import '../fonts/Raleway-ExtraBoldItalic.ttf'
import '../fonts/Raleway-Black.ttf'
import '../fonts/Raleway-BlackItalic.ttf'

import Layout from "../components/layout"
import SEO from "../components/seo"
import Menu from "../components/main-menu"

const IndexPage = () => (
  <Layout>

    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
<<<<<<< HEAD
    <Link to="/page-2/">Go to page 2</Link><br />
=======
    <Link to="/interactivemedia/">Go to Interactive Media</Link><br />
>>>>>>> fd8488c7b26811c80a52205f25baa7f24272de83
    <Link to="/webapps/">Go to Web Apps</Link><br />
    <Link to="/massmedia/">Go to Mass Media </Link>
  </Layout>
)

export default IndexPage
