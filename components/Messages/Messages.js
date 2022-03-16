
import React from "react";
import { Stack } from '@mui/material';
import { MessageLeft } from "./Message.left";
import { MessageRight } from "./Message.right";

export default function Messages({ messages = [], users = [], userId }) {
    return (<Stack gap={3} style={{ margin: 20 }}>

        {messages.map((message, index) => {
            const user = users.find(u => u.id === message.userId)

            if (message.userId === userId) {
                return (
                    <MessageRight key={index} message={message} user={user} />
                )
            }

            return (
                <MessageLeft key={index} message={message} user={user} />
            )
        })}
    </Stack>)

}
