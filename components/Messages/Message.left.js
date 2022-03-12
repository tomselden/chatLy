import React from "react";
import { Avatar } from '@mui/material';
import styles from "./Message.module.css";

export const MessageLeft = ({ message, user }) => {
    const messageText = message.text ? message.text : "no message";
    const timestamp = message.ignore ? message.updatedAt : "";
    const avatarURL = user.avatarURL ? user.avatarURL : `https://picsum.photos/200?key=${user.id}`;
    
    const displayName = user.username ? user.username : "milca";
    return (
        <>
            <div className={styles.messageRow}>
                <Avatar
                    alt={displayName}
                    className={styles.orange}
                    src={avatarURL}
                ></Avatar>
                <div>
                    <div className={styles.displayName}>{displayName}</div>
                    <div className={styles.messageBlue}>
                        <div>
                            <p className={styles.messageContent}>{messageText}</p>
                        </div>
                        <div className={styles.messageTimeStampRight}>{timestamp}</div>
                    </div>
                </div>
            </div>
        </>
    );
};
