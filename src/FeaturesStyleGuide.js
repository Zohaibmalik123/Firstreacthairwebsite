import React from 'react';
import { Col, Row, Button, Container } from 'react-bootstrap';
import CommonCard from './CommonCard';

function FeaturesStyleGuide() {
    return (
        <>
            <CommonCard
                title="STYLE GUIDE"
                home="HOME"
                service="STYLEGUIDE"
            />
            <Container>
                <div className="fonts">
                    <h1>
                        FONT FAMILY
                    </h1>
                    <h4>
                        HEADING FONT : ROBOTO
                    </h4>
                    <h4>
                        BASE FONT : ROBOTO
                    </h4>
                </div>
            </Container>

            <Container>
                <div className="heading">
                    <h1>
                        HEADING TITLE - 30PX
                    </h1>
                    <h2>
                        HEADING TITLE - 20PX
                    </h2>
                    <h3>
                        HEADING TITLE - 18PX
                    </h3>
                    <h4>
                        HEADING TITLE - 16PX
                    </h4>
                    <h5>
                        HEADING TITLE - 14PX
                    </h5>
                    <h6>
                        HEADING TITLE - 12PX
                    </h6>
                </div>
            </Container>

            <Container>
                <div className="color">
                    <h1>COLORS</h1>
                </div>
                <Row>
                    <Col className="col-lg-2 col-md-2 col-sm-4 col-xs-12">
                        <div className="box-default-color"> </div>
                        <div className="box-info">
                            <h6 className="mt20"> DEFAULT</h6>
                            <h5>#d41b2c</h5>
                        </div>
                    </Col>

                    <Col className="col-lg-2 col-md-2 col-sm-4 col-xs-12">
                        <div className="box-primary-color"> </div>
                        <div className="box-info">
                            <h6 className="mt20">PRIMARY</h6>
                            <h5>#18150d</h5>
                        </div>
                    </Col>
                    <Col className="col-lg-2 col-md-2 col-sm-4 col-xs-12">
                        <div className="box-heading-color"> </div>
                        <div className="box-info">
                            <h6 className="mt20">PRIMARY</h6>
                            <h5>#18150d</h5>
                        </div>
                    </Col>
                    <Col className="col-lg-2 col-md-2 col-sm-4 col-xs-12">
                        <div className="box-grey-color"> </div>
                        <div className="box-info">
                            <h6 className="mt20">PRIMARY</h6>
                            <h5>#5D5C59</h5>
                        </div>
                    </Col>
                    <Col className="col-lg-2 col-md-2 col-sm-4 col-xs-12">
                        <div className="box-bg-color"> </div>
                        <div className="box-info">
                            <h6 className="mt20">PRIMARY</h6>
                            <h5>#EFFEF7</h5>
                        </div>
                    </Col>
                </Row>
            </Container>

            <Container>
                <div className="copy">
                    <h1>BASE COPY</h1>
                </div>
                <div>
                    <p className="baseparagraph">Lorem ipsum dolor sit ametest link adipiscing elitullam dignissim convallis esuisque aliquamonec faucibuunc iaculis suscipit duiam sit amet sem Aliquam libero nisi imperdiet atincidunt nec gravida vehicula nisraesent mattis massa quis luctus fermentum turpis mi volutpat justoeu volutpat enim diam eget metusaecenas ornare toronec sed tellus eget sapien fringilla nonumm aurisa anteusp endisse quam seconsequat commodo vitae feugiat in nuncorbi mperdiet augue quislorem tellusorbi aliquam semper nibh aliquam variusnisl sagittis facilisis raesent convallis venenatis dolor a cursus ipsum imperdiet etIn pretium ligula elitt lorem ipsuk egestas purus aliquam ided ultrices tortordolor at commodo metus pulvinar velInteger dictum nisl id magna condimentum eleifend. </p>
                </div>
            </Container>

            <Container>
                <div className="copy">
                    <h1>LIST TYPES</h1>
                </div>
                <Row>
                    <Col className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                        <h2 className="mb10">Unordered List</h2>
                        <ul className="list-type">
                            <li>Interdum et malesuada fames acante.</li>
                            <li>Pellentesque auctor felisid maximus aliquet.</li>
                            <li>Interdum et malesuada fames acante.</li>
                            <li>Phasellus vitae dictum diam vitae condime.</li>
                            <li>Aliquam hendrerit tempus neque a eleifend. </li>
                        </ul>
                    </Col>
                    <Col className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                        <h2 className="mb11">Ordered List</h2>
                        <ol className="list-type">
                            <li>Interdum et malesuada fames acante.</li>
                            <li>Pellentesque auctor felisid maximus aliquet.</li>
                            <li>Interdum et malesuada fames acante.</li>
                            <li>Phasellus vitae dictum diam vitae condime.</li>
                            <li>Aliquam hendrerit tempus neque a eleifend. </li>
                        </ol>
                    </Col>
                </Row>
            </Container>

            <Container>
            <div className="color">
                <h1>BUTTONS</h1>
            </div>
            <div className="mb-2">
                <Button className="button default btn-large" size="lg">
                    BUTTON DEFAULT
                </Button>
                <Button className="button primary btn-large mx-1" size="lg">
                    BUTTON PRIMARY
                </Button>
                <hr/>
            </div>

            <div className="mb-2">
                <Button className="button default btn-small" size="md">
                    BUTTON DEFAULT
                </Button>
                <Button className="button btn-small primary mx-1 " size="md">
                    BUTTON PRIMARY
                </Button>
                <hr/>
            </div>
            <div className="mb-2">
                <Button className=" default btn-small" size="sm">
                    BUTTON DEFAULT
                </Button>
                <Button className="button btn-small primary mx-1" size="sm">
                    BUTTON PRIMARY
                </Button>
                <hr/>
            </div>
            <div className="mb-2">
                <Button className="button btn-small default" size="sm">
                    BUTTON DEFAULT
                </Button>
                <Button className="button btn-small primary mx-1" size="sm">
                    BUTTON PRIMARY
                </Button>
                <hr/>
            </div>
            </Container>

        </>
    )
}

export default FeaturesStyleGuide
