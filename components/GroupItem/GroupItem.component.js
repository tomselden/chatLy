
import { Badge, MailIcon, Typography, Avatar, ListItemAvatar, ListItemText, Divider, ListItem, List } from '@mui/material';

export default function GroupItem(props) {
    const clickHandler = () => {
        props.onChatroomSelected(props.id)
    };
    const lastMessage = props.messages[props.messages.length - 1]
    return (
        <>
            <ListItem alignItems="flex-start" onClick={clickHandler}>
                <ListItemAvatar>
                    <Avatar alt="Remy Sharp" src={props.imageURL || `https://picsum.photos/200?key=${props.id}`} />
                </ListItemAvatar>
                <ListItemText
                    primary={props.name || props.id}
                    secondary={
                        <>
                            <Typography
                                sx={{ display: 'inline' }}
                                component="span"
                                variant="body2"
                                color="text.primary"
                            >
                                {props.username || "milcab"}
                            </Typography>
                            {" "}
                            {lastMessage ? lastMessage.text : "no messages"}
                            {" "}
                            {
                                props.messages.length > 0 &&
                                <Badge badgeContent={props.messages.length} color="success" />
                            }
                        </>
                    }
                />
            </ListItem>
            <Divider variant="inset" component="li" />
        </>
    )
}

export const GroupList = ({ groups, onChatroomSelected }) =>
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
        {groups.map(groupData => <GroupItem {...groupData} onChatroomSelected={onChatroomSelected} />)}
    </List>
