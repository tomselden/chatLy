import { Col, Container, Row, Stack } from 'react-bootstrap'
import GroupItem from '../components/GroupItem/GroupItem.component'

const fakeGroups = [
    { groupName: 'cats rule', lastMessage: 'meow', when: '2mins ago', unReadMessages: 5 },
    { groupName: 'cats rule twice', lastMessage: 'meow ++', when: '5mins ago', unReadMessages: 35 },
    { groupName: 'cats rule forever', lastMessage: 'pr pr pr pr', when: '5mins ago', unReadMessages: 7 },
]

export default function Chatrooms() {
    return (
        <Container fluid>
            <Row className='full-height'>
                <Col style={{ border: '1px solid black' }} xs={3}>
                    <Stack gap={3}>
                        {fakeGroups.map(groupData => <GroupItem {...groupData} />)}
                    </Stack>


                </Col>
                <Col style={{ border: '1px solid black' }} xs={9}>open chat</Col>
            </Row>
        </Container>
    )
}
