import React from 'react';
import {Button,Navbar,NavDropdown,FormControl,Nav,Form} from 'react-bootstrap'
export default class Testlang extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
      <style type="text/css">
        {`
        .btn-flat {
          background-color: purple;
          color: white;
        }

        .btn-xxl {
          padding: 1rem 1.5rem;
          font-size: 1.5rem;
        }
        .customColor{
          background-color:#899998
        }
        `}
      </style>
      <Navbar bg="customColor" expand="lg">
        <Navbar.Brand class="" href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Homes</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" >
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
      </>
    )
  }
}
