import fs from "fs";
import {clearDataBase,pathNote} from "./index1.js";

const loadNote = ()=>{
    try{
        const mainNote = [fs.readFileSync(pathNote,"utf-8")][0].trim().split(",");
        const mapNote = new Map();
        mainNote.forEach((element,index) => {
            mapNote.set(index,element);
        });
        return mapNote;
       
    }catch(err){
        console.log(`you are not allowed to read this file because of the error: ${err}`);
    }
}

const addNote = (note)=>{
    const Note = loadNote();
    const size  = Note.size;
    Note.set(size,`${size}: ${note},`);

        fs.appendFileSync(pathNote,`${size}: ${note}, `,"utf-8");
    
    
}
    const DeleteNote = (index) =>{
        const Note = loadNote();
        Note.delete(index-1);
        clearDataBase(Note);
        fs.writeFileSync(pathNote,"","utf-8");
        Note.forEach((element)=>{
             fs.appendFileSync(pathNote,` ${element},`,"utf-8");
        })
        
    }

export {DeleteNote,loadNote,addNote};