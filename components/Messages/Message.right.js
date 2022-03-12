
import React from "react";
import { Avatar } from '@mui/material';
import styles from "./Message.module.css";

export const MessageRight = ({ message, user }) => {
    const messageText = message.text ? message.text : "no message";
    const timestamp = message.ignore ? message.updatedAt : "";
    const avatarURL = user.avatarURL ? user.avatarURL : `https://picsum.photos/200?key=${user.id}`;

    const displayName = user.username ? user.username : "milca";
    return (
        <div className={styles.messageRowRight}>
            <div className={styles.messageOrange}>
                <p className={styles.messageContent}>{messageText}</p>
                <div className={styles.messageTimeStampRight}>{timestamp}</div>
            </div>

            <Avatar
                alt={displayName}
                className={styles.orange}
                src={avatarURL}
            ></Avatar>
        </div>
    );
};
