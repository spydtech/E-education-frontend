import React, { useState, useEffect } from "react";
import { PencilIcon, TrashIcon } from "@heroicons/react/outline";
import Bar from "./Bar";

const TodoList = () => {
  const [tasks, setTasks] = useState([
    {
      text: "Day1",
      due: "Due on 1/1/23",
      completed: false,
      details: "Introduction to JavaScript, Setting Up the Environment.",
    },
    {
      text: "Day2",
      due: "Due on 8/1/23",
      completed: false,
      details:
        "Basic Syntax and Comments, Variables and Data Types, Operators and Expressions",
    },
    {
      text: "Day3",
      due: "Due on 15/1/23",
      completed: false,
      details:
        "Control Structures (if, else, switch), Loops (for, while, do-while, for...in, for...of), Functions and Parameters",
    },
  ]);
  const [newTask, setNewTask] = useState("");
  const [editIndex, setEditIndex] = useState(null);
  const [editText, setEditText] = useState("");
  const [editDue, setEditDue] = useState("");
  const [editDetailsIndex, setEditDetailsIndex] = useState(null);
  const [editDetailsText, setEditDetailsText] = useState("");
  const [openAccordion, setOpenAccordion] = useState(0); // Initialize to 0 for Day1
  const [selectedTask, setSelectedTask] = useState(tasks[0]); // Select first task initially

  // Load tasks from localStorage when the component mounts
  useEffect(() => {
    const storedTasks = localStorage.getItem("tasks");
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
    }
  }, []);

  // Save tasks to localStorage whenever they are updated
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    if (newTask.trim()) {
      setTasks([
        ...tasks,
        {
          text: newTask,
          due: "No due date",
          completed: false,
          details: "No details",
        },
      ]);
      setNewTask("");
    }
  };

  const toggleTaskCompletion = (index) => {
    const updatedTasks = tasks.map((task, idx) => {
      if (idx === index) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  const startEditTask = (index) => {
    setEditIndex(index);
    setEditText(tasks[index].text);
    setEditDue(tasks[index].due);
  };

  const saveEditTask = () => {
    const updatedTasks = tasks.map((task, idx) => {
      if (idx === editIndex) {
        return { ...task, text: editText, due: editDue };
      }
      return task;
    });
    setTasks(updatedTasks);
    setEditIndex(null);
    setEditText("");
    setEditDue("");
  };

  const startEditDetails = (index) => {
    setEditDetailsIndex(index);
    setEditDetailsText(tasks[index].details);
  };

  const saveEditDetails = () => {
    const updatedTasks = tasks.map((task, idx) => {
      if (idx === editDetailsIndex) {
        return { ...task, details: editDetailsText };
      }
      return task;
    });
    setTasks(updatedTasks);
    setEditDetailsIndex(null);
    setEditDetailsText("");
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, idx) => idx !== index);
    setTasks(updatedTasks);
  };

  const toggleAccordion = (index) => {
    setOpenAccordion(openAccordion === index ? null : index);
    setSelectedTask(tasks[index]);
  };

  return (
    <>
      <Bar />
      <div className="flex flex-col md:flex-row justify-center mb-10 px-4 md:px-0">
        <div className="w-full md:w-[500px] h-auto mx-auto bg-white shadow-lg rounded-lg overflow-hidden mb-4 md:mb-0">
          <div className="px-4 py-2">
            <h1 className="text-gray-800 font-bold text-2xl uppercase">
              Monthly Targets
            </h1>
          </div>
          <form
            className="w-full max-w-sm mx-auto px-4 py-2"
            onSubmit={(e) => {
              e.preventDefault();
              addTask();
            }}
          >
            <div className="flex items-center border-b-2 border-teal-500 py-2">
              <input
                className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                type="text"
                placeholder="Add a task"
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
              />
              <button
                className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
                type="button"
                onClick={addTask}
              >
                Add
              </button>
            </div>
          </form>
          <ul className="divide-y divide-gray-200 px-4">
            {tasks.map((task, index) => (
              <li key={index} className="py-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <input
                      id={`todo${index}`}
                      name={`todo${index}`}
                      type="checkbox"
                      className="h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300 rounded"
                      checked={task.completed}
                      onChange={() => toggleTaskCompletion(index)}
                    />
                    {editIndex === index ? (
                      <div className="flex flex-col">
                        <input
                          className="ml-3 block text-gray-900"
                          value={editText}
                          onChange={(e) => setEditText(e.target.value)}
                        />
                        <input
                          className="ml-3 block text-gray-900 mt-2"
                          value={editDue}
                          onChange={(e) => setEditDue(e.target.value)}
                        />
                      </div>
                    ) : (
                      <label
                        className="ml-3 block text-gray-900 cursor-pointer"
                        onClick={() => toggleAccordion(index)}
                      >
                        <span
                          className={`text-lg font-medium ${
                            task.completed ? "line-through" : ""
                          }`}
                        >
                          {task.text}
                        </span>
                        <span className="text-sm font-light text-gray-500">
                          {" "}
                          {task.due}
                        </span>
                      </label>
                    )}
                  </div>
                  <div className="flex items-center space-x-2">
                    {editIndex === index ? (
                      <button
                        className="text-green-500 hover:text-green-700"
                        onClick={saveEditTask}
                      >
                        Save
                      </button>
                    ) : (
                      <PencilIcon
                        className="h-5 w-5 text-blue-500 hover:text-blue-700 cursor-pointer"
                        onClick={() => startEditTask(index)}
                      />
                    )}
                    <TrashIcon
                      className="h-5 w-5 text-red-500 hover:text-red-700 cursor-pointer"
                      onClick={() => deleteTask(index)}
                    />
                  </div>
                </div>
                {openAccordion === index && (
                  <div className="mt-2 pl-10 pr-4">
                    <div className="bg-gray-100 p-4 rounded-lg shadow-inner">
                      {editDetailsIndex === index ? (
                        <div>
                          <textarea
                            className="w-full p-2 border rounded"
                            value={editDetailsText}
                            onChange={(e) => setEditDetailsText(e.target.value)}
                          />
                          <button
                            className="mt-2 bg-green-500 hover:bg-green-700 text-white py-1 px-2 rounded"
                            onClick={saveEditDetails}
                          >
                            Save Details
                          </button>
                        </div>
                      ) : (
                        <div>
                          <p>{task.details}</p>
                          <button
                            className="mt-2 bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded"
                            onClick={() => startEditDetails(index)}
                          >
                            Edit Details
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
        {selectedTask && (
          <div className="w-full md:w-[500px] mx-auto bg-white shadow-lg rounded-lg overflow-hidden p-4">
            <h2 className="text-gray-800 font-bold text-xl">
              Daily Schedule Details
            </h2>
            <p className="mt-2">
              <strong>Day:</strong> {selectedTask.text}
            </p>
            <p className="mt-2">
              <strong>Due:</strong> {selectedTask.due}
            </p>
            <p className="mt-2">
              <strong>Details:</strong> {selectedTask.details}
            </p>
          </div>
        )}
      </div>
    </>
  );
};

export default TodoList;
