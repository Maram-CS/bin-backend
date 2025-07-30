import {readFile, writeFile, appendFile} from "fs/promises";
import {join} from "path";

const AsyncronFunction = async () =>{
    const dir = import.meta.dirname;
    const path = join(dir,"file2.txt");
    await appendFile(path,"\nnahla");
    console.log("AsyncronFunction");

}

const syncronFunction = () => {
    console.log("syncronFunction");
}

AsyncronFunction();
syncronFunction();  