import React, { useState } from 'react'
import { isEmpty, size } from 'lodash'
import shortid, { isValid } from 'shortid'

function App() {
  const [task, setTask] = useState("")
  const [tasks, setTasks] = useState([])
  const [editMode, setEditMode] = useState(false)
  const [id, setId] = useState("")
  const [error, setError] = useState(null)

  const valiForm = () =>{
    let isValid = true
    setError(null)
    if (isEmpty(task)) {
      setError("Debes Ingresar una Tarea.....")
       isValid = false
    }
    return isValid
  }

  const saveTask = (e) => {
    e.preventDefault()
    if(!valiForm()){
      return
    }

    const editTask = tasks.map(item => item.id === id ? { id,name: task } : item)
    setTasks(editTask);
    setEditMode(false)
    setId("")
    setTask("");
  }

  const addTask = (e) => {
    e.preventDefault()

    if(!valiForm()){
      return
    }

    const newTask = {
      id: shortid.generate(),
      name: task
    }

    setTasks([...tasks, newTask])
    setTask("");
  }

  const deleteTask = (id) => {
    const filteredTasks = tasks.filter(task => task.id !== id)
    setTasks(filteredTasks)
  }

  const   editTask = (thetask) => {
    setError(null)
    setTask(thetask.name)
    setEditMode(true)
    setId(thetask.id)
  }


  return (
    <div className="container mt-5">
      <h1>Tareas</h1>
      <hr />
      <div className="row">
        <div className="col-8">
          <h4 className="text-center">Lista de Tareas</h4>
          {
            size(tasks) === 0 ? (
              <li className="list-group-item">Aun no hay Tareas Programadas...</li>
            ) : (
                <ul className="list-group">
                  {
                    tasks.map((task) => (
                      <li className="list-group-item" key={task.id}>
                        <span className="lead">{task.name}</span>
                        <button
                          className="btn btn-danger btn-sm float-right mx-2"
                          onClick={() => deleteTask(task.id)}
                        >
                          Eliminar
                        </button>
                        <button
                          className="btn btn-warning btn-sm float-right"
                          onClick={() => editTask(task)}
                        >
                          Editar
                        </button>
                      </li>
                    ))
                  }
                </ul>
              )
          }
        </div>
        <div className="col-4">
          <h4 className="text-center">
            { editMode ? "Editar Tarea" : "Agregar Tarea"}
          </h4>
          <form onSubmit={ editMode ? saveTask : addTask}>
            {
              error && <span className="text-danger">{error}</span>
            }
            <input
              type="text"
              className="form-control mb-2"
              placeholder="Ingrese la tarea....."
              onChange={(text) => setTask(text.target.value)}
              value={task}
            />
            <button
              className={ editMode ? "btn btn-warning btn-block" : "btn btn-dark btn-block" }
              type="submit"
            >
              { editMode ? "Guardar" : "Agregar" }
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
