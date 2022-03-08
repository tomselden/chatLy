import Head from 'next/head'
import { Col, Container, Row, Image } from 'react-bootstrap'


export default function GroupItem(props) {
    return (
        <Container fluid className='p-2' style={{ borderBottom: '1px solid black' }}>
            <Row>
                <Col xs={3}><Image src="http://placekitten.com/g/200/200" fluid roundedCircle /></Col>
                <Col xs={6}>
                    <div>{props.groupName}</div>
                    <div>{props.lastMessage}</div>
                </Col>
                <Col xs={3}>
                    <div>{props.when}</div>
                    <div>{props.unReadMessages}</div>
                </Col>
            </Row>
        </Container>
    )
}
