import React from 'react'; // eslint-disable-line
import Header from "@/components/header"
import StandardMessageForm from "@/components/customMessageForms/StandardMessageForm"
import Ai from "@/components/customMessageForms/Ai";
import AiCode from "@/components/customMessageForms/AiCode";


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
      {...chatProps}
        style={{ height: "100vh" }}
        renderChatHeader={(chat) => <Header chat={chat} />}
        renderMessageForm={(props)=>{

          if(chatProps.chat?.title.startsWith("AiChat_")){
            return <Ai props={props} activeChat={chatProps.chat}/>
          }

          if(chatProps.chat?.title.startsWith("AiCode_")){
            return <AiCode props={props} activeChat={chatProps.chat}/>
          }
          
          return (
          
          <StandardMessageForm 
          props={props} 
          activeChat={chatProps.chat} />


          )
        }}
        {...chatProps}
      />
    </div>
  )
}

export default Chat