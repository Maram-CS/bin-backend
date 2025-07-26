
import {readFileSync , appendFileSync} from "node:fs"
import os from "os"
import path from "path";

const dirname  = import.meta.dirname;
console.log(dirname);
const pathNote = path.join(dirname,"file/note.txt"); 
const content = readFileSync(pathNote,"utf-8");

    const New_content = content.split("\n");
    function addNote (note) {
        New_content.push(note);
        try{
        appendFileSync(pathNote,`${New_content[New_content.length-1]}\n`,"utf-8");
        }catch(err){
            console.log(err);
        }
    }
    
    addNote("better");
    console.log(New_content);

console.log(os.hostname());







