import express from "express"

const app = express();
const PORT = 3000;

const handleListen = (() =>{
	console.log("hello my name is \n", PORT);
	console.log("server is running on port =", PORT);
})


type Todo = {
	id:number,
	title: string,
	completed: boolean
};
type Todos = Todo[];
const mockTodo:Todos = [{id:1, title: "買い物", completed:false}]

app.get("/todos", (req, res)=>{
	res.json(mockTodo);
})

app.listen(PORT, handleListen);