import React, {useState , useEffect} from 'react';
import "./Sidebar.css";
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import SidebarOption from  "./SidebarOption";
import CreateIcon from '@material-ui/icons/Create';
import CommentIcon from '@material-ui/icons/Comment';
import AcUnitIcon from '@material-ui/icons/AcUnit';
import AccessibilityNewIcon from '@material-ui/icons/AccessibilityNew';
import FacebookIcon from '@material-ui/icons/Facebook';
import MoodIcon from '@material-ui/icons/Mood';
import WorkIcon from '@material-ui/icons/Work'; 
import AddIcon from '@material-ui/icons/Add';
import {db} from "./firebase";
import { useStateValue } from './Stateprovider';

const Sidebar = () => {
    const [channels, setChannels] =  useState([]);
    const [{ user }] = useStateValue();


    useEffect(()=> {
        //run the code when sidebar compnent loads
     db.collection('rooms').onSnapshot(snapshot =>(
         setChannels(
             snapshot.docs.map(doc=>({
                 id:doc.id,
                 name : doc.data().name,
             }))
             )
         )
     )
    }, []);

    return (
        <div className="sidebar">
            <div className="sidebar__header">
                <div className ="sidebar__info">
                <h2>Clever Programmer </h2>
                <h3>
                    <FiberManualRecordIcon />
                   {user?.displayName}
                </h3>
                </div>
                <CreateIcon />
            </div>
               
            <SidebarOption Icon={CommentIcon} title ="Threads" />
            <SidebarOption title="Youtube" />
            <SidebarOption Icon={AcUnitIcon} title ="Threads" />
            <SidebarOption Icon={AccessibilityNewIcon} title ="Threads" />
            <SidebarOption Icon={FacebookIcon} title ="Threads" />
            <SidebarOption Icon={MoodIcon} title ="Threads" />
            <SidebarOption Icon={WorkIcon} title ="Threads" />
            <hr />
            <SidebarOption Icon={WorkIcon} title ="Threads" />
            <hr />
            <SidebarOption Icon={AddIcon} addChannelOption title ="Add Channel" />
            {/* connect db and list all the channels */}
            {/* sidebar options */ }
            {channels.map(channel => (
                <SidebarOption title={channel.name} id={channel.id} />
            ))}
            </div>
    )
}

export default Sidebar
