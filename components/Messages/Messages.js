
import React from "react";
import { Stack } from '@mui/material';
import { MessageLeft } from "./Message.left";
import { MessageRight } from "./Message.right";

export default function ({ messages = [], users = [] }) {
    return (<Stack gap={3} style={{ margin: 20 }}>

        {messages.map((message) => {
            const user = users.find(u => u.id === message.userId)

            // TODO: if the logged in user, return MessageRight Instead
            // if (yourOwnMEsage) {
            //     return (
            //         <MessageRight message={message} user={user} />
            //     )
            // }

            return (
                <MessageLeft message={message} user={user} />
            )
        })}
    </Stack>)

}
