import { useState } from "react";
import Card from "./components/Card";

function App() {

  const[todo , setTodo] = useState([])
  const [text, settext] = useState('')

  const addTodo = () => {
    return () => {
      if(text.length === 0) return
      setTodo([...todo, text])
      settext('')
    }
  }

  const handleDelete = (index) => {
    const newTodo = [...todo]
    newTodo.splice(index, 1)
    setTodo(newTodo)
  }

  return (
    <>
      <div className=" bg-gray-300 text-center font-semibold text-5xl py-10 tracking-wider ">
        TODO APP
      </div>
      <div className=" my-10 sm:flex justify-center">
        <div className="font-semibold text-2xl p-3">Enter your Task here :</div>
        <input
          className="border border-black sm:pl-2 sm:pr-10 sm:mx-3 bg-gray-100 rounded-lg"
          type="text"
          onChange={e=>settext(e.target.value)}
          size={50}
          value={text}
          placeholder="Enter your Task"
        />
        <button className="bg-blue-400 px-8 text-white rounded-xl hover:bg-blue-600" onClick={addTodo()}>Add</button>
      </div> 
      {todo.length === 0 ? (
        <div className="text-center text-xl font-semibold">
          <p>No Task Added</p>
        </div>
      ) : (
        todo.map((item, index) => (
          <Card todo={item} key={index} onDelete={() => handleDelete(index)} />
        ))
      )}
    </>
  );
}

export default App;
