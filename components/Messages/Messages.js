
import React, { useEffect, useRef } from "react";
import { Stack } from '@mui/material';
import { MessageLeft } from "./Message.left";
import { MessageRight } from "./Message.right";

export default function Messages({ messages = [], users = [], userId }) {

    return (<Stack gap={3} style={{ margin: 20 }}>
        {messages.map((message, index) => {
            const lastIndex = messages.length - 1;
            const isLastMessage = index === lastIndex;
            const user = users.find(u => u.id === message.userId)
            if (message.userId === userId) {
                return (
                    <MessageRight key={index} isLastMessage={isLastMessage} message={message} user={user} />
                )
            }

            return (
                <MessageLeft key={index} isLastMessage={isLastMessage} message={message} user={user} />
            )
        })}
    </Stack>)

}
