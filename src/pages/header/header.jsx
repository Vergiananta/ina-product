import { Fragment } from "react";
import { Col, Container, Row, Navbar, Nav, NavItem, NavLink, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from "reactstrap";
import img1 from "../../assert/logo.png"
import './header.css'
import { AiFillSetting } from "react-icons/ai";

export default function Header() {

    return (
        <Fragment >
            <div className="top-header" />
            <div class="mt-5">
                <Row>
                    <Col md={{ size: 6, offset: 3 }}>
                        <img src={img1} width="160" height="42" class="logo " />
                    </Col>
                    <Col >
                        <Navbar >
                            <Nav className="ml-auto" navbar>
                                <Row>
                                    <Col >
                                        <UncontrolledDropdown setActiveFromChild>
                                            <p style={{ color: 'black', fontSize: '1' }}>
                                                <DropdownToggle tag="a" className="nav-link" caret style={{ color: 'black'}}>
                                                    Language : English
                                                </DropdownToggle>
                                            </p>
                                            <DropdownMenu>
                                                <DropdownItem tag="a" href="" active >Indonesia</DropdownItem>
                                            </DropdownMenu>
                                        </UncontrolledDropdown>
                                    </Col>
                                    <Col >
                                        <NavItem>
                                            <NavLink href=""><AiFillSetting style={{ color: 'black', fontSize: '1vw' }} /></NavLink>
                                        </NavItem>
                                    </Col>
                                </Row>
                            </Nav>
                        </Navbar>
                    </Col>
                </Row>
                <div className="top-header-bottom mt-4 h-25">
                    <p className="text-center p-2 text-header" >You don't have an account yet, please create new account</p>
                </div>
            </div>
        </Fragment>
    )
}