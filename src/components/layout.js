/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"

import { Container, Row, Col } from "react-bootstrap"

import Header from "./header"

const Layout = ({ children }) => (
  <>
    <Container fluid className="px-0 main">
      <Row noGutters className="justify-content-center">
        <Col>
          <Header />
        </Col>
      </Row>
      <Row noGutters>
        <Col>
          <Container className="mt-5">
            <main>{children}</main>
          </Container>
        </Col>
      </Row>
    </Container>
    <Container fluid className="px-0">
      <Row noGutters>
        <Col className="footer-col">
          <footer>
            <span>© {new Date().getFullYear()}</span>
          </footer>
        </Col>
      </Row>
    </Container>
  </>
)

export default Layout
