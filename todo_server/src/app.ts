import express from "express"

const app = express();
const PORT = 3001;

const handleListen = (() =>{
	console.log("hello my name is \n", PORT);
	console.log("server is running on port =", PORT);
})

app.listen(PORT, handleListen);