import Head from 'next/head'
import Image from 'next/image'
import { Col, Container, Row } from 'react-bootstrap'
import Avatar from '../components/Avatar'
import styles from '../styles/Home.module.css'

export default function Chatrooms() {
    return (
        <Container fluid>
            <Row className='full-height'>
                <Col style={{ border: '1px solid black' }} xs={3}>list of chats</Col>
                <Col style={{ border: '1px solid black' }} xs={9}>open chat</Col>
            </Row>
        </Container>
    )
}
