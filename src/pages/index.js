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
    <Link to="/interactivemedia/">Go to Interactive Media</Link><br />
    <Link to="/webapps/">Go to Web Apps</Link><br />
    <Link to="/massmedia/">Go to Mass Media </Link>

  </Layout>
)

export default IndexPage
