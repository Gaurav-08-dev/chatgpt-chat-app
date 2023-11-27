import React from 'react'; // eslint-disable-line
import Header from "@/components/header"
import StandardMessageForm from "@/components/customMessageForms/StandardMessageForm"
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
        renderMessageForm={()=>{
          return (<StandardMessageForm props={props} activeChat={chatProps.chat} />)
        }}
        {...chatProps}
      />
    </div>
  )
}

export default Chat