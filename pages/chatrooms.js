import { Col, Container, Row, Stack, SearchB } from 'react-bootstrap'
import {useState} from 'react'
import GroupItem from '../components/GroupItem/GroupItem.component'
import { TextField } from '@mui/material';

import Settings from '@mui/icons-material/Settings';
import PlusOneRounded from '@mui/icons-material/PlusOneRounded';
import ReactScrollableList from 'react-scrollable-list'

const fakeGroups = [
    { groupName: 'cats rule', lastMessage: 'meow', when: '2mins ago', unReadMessages: 5 },
    { groupName: 'cats rule twice', lastMessage: 'meow ++', when: '5mins ago', unReadMessages: 35 },
    { groupName: 'cats rule forever', lastMessage: 'pr pr pr pr', when: '5mins ago', unReadMessages: 7 },
]
let listItems = []
for (let i = 0; i < 10000; i++) {
  listItems.push({ id: i, content: i })
}
const fakeMessages = [
    { sender: 'Rama', message: 'How are you?'},
    { sender: 'Johnny', message: 'Am good.'},
    { sender: 'Rama', message: 'How are you?'},
    { sender: 'Johnny', message: 'Am good.'},
    { sender: 'Rama', message: 'How are you?'},
    { sender: 'Johnny', message: 'Am good.'},
    { sender: 'Rama', message: 'How are you?'},
    { sender: 'Johnny', message: 'Am good.'},
    { sender: 'Rama', message: 'How are you?'},
    { sender: 'Johnny', message: 'Am good.'},
    { sender: 'Rama', message: 'How are you?'},
    { sender: 'Johnny', message: 'Am good.'}
]

export default function Chatrooms() {


    const [newMessage, setNewMessage] = useState('')
    const [allMessages, setAllMessages] = useState(fakeMessages)
    // const TextBubble = (sender, text) 

    return (
        <Container fluid>
            <Row className='full-height'>
                <Col style={{ border: '1px solid black' }} xs={3}>
                    <div style={{flex: 'row'}}>
                        {/* <Icon n÷ame */}
                        <Settings/>
                        <PlusOneRounded/>
                    </div>
                    <TextField
                    id="outlined-basic"
                    variant="outlined"
                    fullWidth
                    label="Search"
                    style={{
                        marginTop: 20
                    }}
                    />

                    <Stack gap={3}>
                        {fakeGroups.map(groupData => <GroupItem {...groupData} />)}
                    </Stack>


                </Col>
                <Col style={{ border: '1px solid black' }} xs={9}>
                    <div style={{marginRight: 0}}>
                        <Settings/>
                    </div>
                    <Stack gap={3} style={{margin: 20}}>

                        {allMessages.map((message) => {
                            if(message.sender == 'Rama'){
                                return (
                                    <div style={{textAlign: 'right'}}>
                                        {message.message}
                                    </div>
                                )
                            }
                            else{
                                return (
                                    <div >
                                        {message.message}
                                    </div>
                                )
                            }
                        })}
                    </Stack>
                

                    <TextField

                        id="outlined-basic"
                        variant="outlined"
                        value={newMessage}
                        onChange={(event) => setNewMessage(event.target.value)}
                        onKeyDown={(event) => {
                            if(newMessage.length > 0 && event.keyCode == 13){
                                setAllMessages([...allMessages, {'sender': 'Rama', 'message': newMessage}])
                                setNewMessage('')
                                // alert(newMessage)
                            }
                        }}
                        label="Message"
                        style={{
                            marginTop: 20,
                            position: 'absolute', bottom: 20,
                            width: '72.5%'
                        }}
                        
                    />

                </Col>
            </Row>
        </Container>
    )
}
