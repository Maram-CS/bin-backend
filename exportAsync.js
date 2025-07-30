import {readFile,writeFile,appendFile} from "fs/promises";
import { pathNote } from "./async.js";

const LoadNote = async () => {
    const newNot = await [readFile(pathNote,"utf-8")][0];
    const NewNote =  newNot.trim().split(",");
    const MapNote = new Map();
    NewNote.forEach((element,index) => {
            MapNote.set(index,element);            
    });
    
    console.log(MapNote);
    return MapNote;
}



const cleanDataBase = async () => {
    const Note = await LoadNote();
    Note.forEach((element,index) =>{
        if(element === ""){
            
            Note.delete(index);
        }
    })
    return Note;
}

const DeleteNote = async(index) => {
    const Note = await LoadNote();
    Note.delete(index-1);
    await writeFile(pathNote,"","utf-8");
    Note.forEach(async(element,index)=>{
        await appendFile(pathNote,`${element}, `);
    })
   
    console.log(Note);
    return Note;
}

    const addNote = async (Note) => {
        const note = await LoadNote();
       await appendFile(pathNote,`${note.size}: ${Note}, `);
       cleanDataBase();
       return note;
    }
export {addNote,DeleteNote,LoadNote};