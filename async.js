import{join} from "path";
import{addNote,DeleteNote} from "./exportAsync.js";
const dir = import.meta.dirname;
const pathNote = join(dir,"file/note2.txt");





//addNote("maram berrahal");
DeleteNote(2);

export {pathNote};



