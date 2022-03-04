# chatLy


Application idea:

summary
a chat application that allows users to join a chat room something like slack. we can create chat rooms and share URLs. Each user should provide us with an email and name to join a chat. 

features:
⁃list of chat rooms
⁃joining chat rooms button
⁃delete chat rooms button
⁃chat room
⁃chat room code
⁃chat room URL
⁃chat room text field; where the user enters their messages
⁃chat room messages list
⁃chat room message
⁃exit chat room button
⁃form for entering user information

Database structure

⁃user
  ⁃id
  ⁃userName
  ⁃email
  ⁃avatar
⁃messages
  ⁃types(IMG, videos, and emojis)
  ⁃value(text, videos)
  ⁃chat room id
  ⁃user-id
  ⁃timestamp
⁃chat room
  ⁃id
  ⁃name
  ⁃URL
⁃chat room users
  ⁃user-id 
  ⁃group id

Backend endpoints
⁃GET /chatrooms return list of chat rooms by querying the chat room table
⁃POST /chat room this endpoint inserts /modify in the chat room
⁃DELETE /chatroom /id
⁃POST /chatroom/id/join 
⁃insert chartroom and user id into chatrooms—users table
⁃redirects user to chat room
⁃POST /user allow users to enter name and email
⁃PUT user/id (modify users)

Frontend
⁃2 pages
⁃chat rooms
⁃chatrooms/id
