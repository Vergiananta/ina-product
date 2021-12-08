import { Col, Container, Input, Label, Row } from "reactstrap";
import './content.css'

export default function Content() {
    return (
        <Container>
            <div class="mt-5 pt-5">
                <p class="title">Create new account</p>
            </div>
            <div>
                <Col>
                    <p className="form" style={{ fontWeight: "bold" }}>Title</p>
                </Col>
                <Col>
                    <Row>
                        <Col xs="1">
                            <div className="form">
                                <Input type="checkbox" name="site_name"
                                    value="Mrs"
                                /> Mrs
                            </div>
                        </Col>
                        <Col xs="1">
                            <div className="form">
                                <Input type="checkbox" name="site_name"
                                    value="Ms"
                                /> Ms
                            </div>
                        </Col>
                        <Col xs="1">
                            <div className="form">
                                <Input type="checkbox" name="site_name"
                                    value="Mdm"
                                /> Mdm
                            </div>
                        </Col>
                        <Col xs="1">
                            <div className="form">
                                <Input type="checkbox" name="site_name"
                                    value="Mr"
                                /> Mr
                            </div>
                        </Col>
                        <Col xs="1">
                            <div className="form">
                                <Input type="checkbox" name="site_name"
                                    value="Dr"
                                /> Dr
                            </div>
                        </Col>
                    </Row>
                </Col>
            </div>
            <Col className="mt-4">
                <Row>
                    <Col>
                        <Label for="lastname" className="form" style={{ fontWeight: 'bold' }}>
                            LastName <l style={{ color: 'red' }}>*</l>
                        </Label>
                        <Input
                            id="lastname"
                            name="lastname"
                            placeholder="Last name"
                            type="text"
                        />
                    </Col>
                    <Col>
                        <Label for="firstname" className="form" style={{ fontWeight: 'bold' }}>
                            FirstName <l style={{ color: 'red' }}>*</l>
                        </Label>
                        <Input
                            id="firstname"
                            name="firstname"
                            placeholder="First name"
                            type="text"
                        />
                    </Col>
                </Row>
            </Col>
            <Col className="mt-4">
                <Label for="mobilePhone" className="form" style={{ fontWeight: 'bold' }}>
                    Mobile phone number <l style={{ color: 'red' }}>*</l>
                </Label>

            </Col>
            <Col className="mt-5">
                <p className="title" style={{ fontWeight: "bold" }}>Address</p>
                <Label for="firstname" className="form" style={{ fontWeight: 'bold' }}>
                    Address <l style={{ color: 'red' }}>*</l>
                </Label>
                <Input
                    id="address"
                    name="address"
                    placeholder="Address"
                    type="text"
                />
            </Col>
            <Col className="mt-4">
                <Row>
                    <Col>
                        <Label for="country" className="form" style={{ fontWeight: 'bold' }}>
                            Country/Location <l style={{ color: 'red' }}>*</l>
                        </Label>
                        <Input
                            id="country"
                            name="country"
                            type="select"
                        >
                            <option>
                                1
                            </option>
                            <option>
                                2
                            </option>
                            <option>
                                3
                            </option>
                            <option>
                                4
                            </option>
                            <option>
                                5
                            </option>
                        </Input>
                    </Col>
                    <Col>
                        <Label for="country" className="form" style={{ fontWeight: 'bold' }}>
                            Province/District <l style={{ color: 'red' }}>*</l>
                        </Label>
                        <Input
                            id="country"
                            name="country"
                            type="select"
                        >
                            <option>
                                1
                            </option>
                            <option>
                                2
                            </option>
                            <option>
                                3
                            </option>
                            <option>
                                4
                            </option>
                            <option>
                                5
                            </option>
                        </Input>
                    </Col>
                </Row>
            </Col>
            <Col className="mt-5">
                <p class="title">Contacts</p>
                <Row>
                    <Col>
                        <Label for="emailAddress" className="form" style={{ fontWeight: 'bold' }}>
                            Email Address <l style={{ color: 'red' }}>*</l>
                        </Label>
                        <Input
                            id="emailAddress"
                            name="emailAddress"
                            placeholder="Email address"
                            type="text"
                        />
                    </Col>
                    <Col>
                        <Row>
                            <Col>
                                <Label for="day" className="form" style={{ fontWeight: 'bold' }}>
                                    Date of birth <l style={{ color: 'red' }}>*</l>
                                </Label>
                                <Input
                                    id="day"
                                    name="day"
                                    placeholder="DD"
                                    type="number"
                                />
                            </Col>
                            <Col>
                                <Label for="month" className="form" style={{ fontWeight: 'bold' }}>
                                    Month <l style={{ color: 'red' }}>*</l>
                                </Label>
                                <Input
                                    id="month"
                                    name="month"
                                    placeholder="MM"
                                    type="number"
                                />
                            </Col>
                            <Col>
                                <Label for="year" className="form" style={{ fontWeight: 'bold' }}>
                                    Year
                                </Label>
                                <Input
                                    id="year"
                                    name="year"
                                    placeholder="YYYY"
                                    type="number"
                                />
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Col>
            <Col className="mt-5">
                <p class="title">Standard Privacy Note</p>
                <p>
                    I warrant that the above information is true and correct i understand that failure to answer all questions listed in this application form may prevent L'OCCITANE from processing my application and L'OCCITANE may refuse to accept this application in the right of my individual circumstances.

                </p>
                <p>
                    I understand that the information collected will be used and retained by L'OCCITANE for the purpose of (i) my application of membership program of L'OCCITANE (ii) providing member-exclusive services, and (iii) the daily management operation and maintenance of membership account at L'OCCITANE.
                </p>
            </Col>
            <Col>
                <Row>
                    <Col>
                    
                    </Col>
                    <Col>
                    
                    </Col>
                    <Col>
                    
                    </Col>
                </Row>
            </Col>
        </Container>
    )
}