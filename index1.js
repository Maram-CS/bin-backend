
import path from "path";
import {DeleteNote,addNote} from "./index2.js";

const dirname = import.meta.dirname;
const pathNote = path.join(dirname,"file/note2.txt");


  const clearDataBase = (Note) => {
    
   Note.forEach((element,index) => {
      if(element === ""){
        Note.delete(index);
      }
    })
  }
addNote("nahla berrahal");


//DeleteNote(2);
export {clearDataBase,pathNote};