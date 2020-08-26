import React, { useState } from 'react'
import "./ChatInput.css"
import db from "./firebase";
import { useStateValue } from "./Stateprovider";
import firebase from "firebase";
import {Button} from "@material-ui/core"

const ChatInput = ({channelName , channelId}) => {
    const [input , setInput] = useState('');
    const [{ user }] = useStateValue();

    const sendMessage =  e => {
        e.preventDefault();

        if(channelId){
            db.collection("rooms").doc(channelId).collection("messages").doc(channelName).add({
                message : input,
                timestamp : firebase.firestore.FieldValue.serverTimestamp,
                user : user.displayName,
                userImage: user.photoURL,
            });
        }
    }
    return (
        <div className="chatInput">
            <form>
                <input
                    value={input}
                    onChange={(e) => setInput(e.target.value) }
                       />
                <Button disabled={!input} variant ="contained" color="primary" type="submit" onClick={sendMessage}> SEND </Button>
            </form>
        </div>
    )
}

export default ChatInput
