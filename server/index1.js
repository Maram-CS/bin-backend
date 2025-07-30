import {createServer} from "http";
import {coffees, juices} from "./index2.js";
const port = 3001;

const server = createServer((req,res) => {
    const url = req.url;
    res.setHeader("Content-Type","application/json");
    switch(url){
        case "/coffee" : 
            res.writeHead(200);
            res.end(coffees);   
            break;
        case "/juice" :
            res.writeHead(200);
            res.end(juices);
            break;
        default : 
            res.setHeader("Content-Type","text/js");
            res.writeHead(404);
            res.end("window.alert("+"Page not found"+")");
            break;
    }
})
console.log("the server is running "); 

server.listen(port,"localhost", ()=>{
    console.log(`server is running on port ${port}`);
})

