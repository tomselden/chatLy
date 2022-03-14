import { Col, Container, Row } from 'react-bootstrap'
import { useEffect, useState } from 'react'
import { TextField } from '@mui/material';
import Settings from '@mui/icons-material/Settings';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import PlusOneRounded from '@mui/icons-material/PlusOneRounded';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

import { GroupList } from '../components/GroupItem/GroupItem.component'
import AddNewGroupForm from '../components/AddNewGroupForm/AddNewGroupForm';
import Messages from '../components/Messages/Messages';
import NewMessage from '../components/Messages/NewMessage';
import styles from "../styles/chatrooms.module.css"
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebase';





const ModalBoxStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

let listItems = []
for (let i = 0; i < 10000; i++) {
    listItems.push({ id: i, content: i })
}

export default function Chatrooms() {
    const [user] = useAuthState(auth)
    console.log(user)
    console.log(user.email)
    console.log(user.displayName)
    console.log()
    const [groups, setGroups] = useState([]);
    const [selectedGroupId, setSelectedGroupId] = useState(null);
    const selectedGroupData = selectedGroupId ? groups.find(g => g.id === selectedGroupId) : {};

    const messages = selectedGroupData.messages || [];

    const users = selectedGroupData.users || [];
    const [isModalOpen, setIsModalOpen] = useState(false);

    const getChatrooms = () => {
        fetch('/api/chatrooms')
            .then(response => response.json())
            .then(data => setGroups(data.chatRooms))
            .catch(console.error)
    }

    useEffect(() => {
        getChatrooms()
    }, [])

    return (
        <Container fluid className={styles.chatroomsContainer}>
            <Row className='full-height'>
                <Col className={styles.leftPanel} xs={3}>
                    <div className={styles.settings}>
                        <Settings />
                        <PlusOneRounded />
                        <a onClick={() => setIsModalOpen(true)}>
                            <Fab color="primary" aria-label="add">
                                <AddIcon />
                            </Fab>
                        </a>
                        <Modal
                            open={isModalOpen}
                            onClose={() => setIsModalOpen(false)}
                            aria-labelledby="modal-modal-title"
                            aria-describedby="modal-modal-description"
                        >
                            <Box sx={ModalBoxStyle}>
                                <AddNewGroupForm onSubmit={() => {
                                    setIsModalOpen(false)
                                    getChatrooms();
                                }} />
                            </Box>
                        </Modal>
                    </div>

                    <div className={styles.search}>
                        <TextField
                            id="outlined-basic"
                            variant="outlined"
                            fullWidth
                            label="Search"
                            style={{
                                marginTop: 20
                            }}
                        />
                    </div>
                    <div className={styles.groupList}>
                        <GroupList groups={groups} onChatroomSelected={setSelectedGroupId} />
                    </div>
                </Col>
                <Col className={styles.rightPanel} xs={9}>
                    {selectedGroupId && <>
                        <div className={styles.messages}>
                            <Messages messages={messages} users={users} />
                        </div>
                        <div className={styles.newMessage}>
                            <NewMessage onSubmit={getChatrooms} chatroomId={selectedGroupId} userId={1} />
                        </div>
                    </>}
                </Col>
            </Row>
        </Container>
    )
}
