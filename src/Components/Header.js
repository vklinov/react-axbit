import React, { Component } from 'react'
import { Nav, Navbar, Container } from 'react-bootstrap'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Time from "../Pages/Time";
import Town from "../Pages/Town";
import Weatger from "../Pages/Weatger";

export default class Header extends Component {
    render() {
        return (
            <>
            <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
                <Container>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="/time">Время</Nav.Link>
                            <Nav.Link href="/town">Город</Nav.Link>
                            <Nav.Link href="/weatger">Погода</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <Router>
                <Switch>
                    <Route exact path="/time" component={Time} />
                    <Route exact path="/town" component={Town}/>
                    <Route exact path="/weatger" component={Weatger}/>
                </Switch>
            </Router>
            </>
        )
    }
}
