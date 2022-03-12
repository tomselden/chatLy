import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

export default function GroupItem(props) {
    const clickHandler = () => {
        props.onChatroomSelected(props.id)
    };
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
                            {props.lastMessage || " — I'll be in your neighborhood doing errands this…"}
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
