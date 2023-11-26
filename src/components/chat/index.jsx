import React from 'react'
import {
  useMultiChatLogic,
  MultiChatSocket,
  MultiChatWindow
} from 'react-chat-engine-advanced';

const Chat = () => {

  const chatProps = useMultiChatLogic(
    import.meta.env.VITE_PROJECT_ID,
    "admin",
    "1234"
  )

  return (
    <div style={{ flexBasis: "100%" }}>
      <MultiChatSocket
        {...chatProps}
      />
      <MultiChatWindow
        style={{ height: "100vh" }}
        renderChatHeader={(chat) => <Header chat={chat} />}
        {...chatProps}
      />
    </div>
  )
}

export default Chat