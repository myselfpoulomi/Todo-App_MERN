import React, { useState } from 'react';
import { FiEdit, FiTrash2 } from 'react-icons/fi';
import Create from './components/Create';

function Home() {
    const [todos, setTodos] = useState([]);
    const [editIndex, setEditIndex] = useState(null);
    const [input, setInput] = useState('');

    const handleDelete = (index) => {
        setTodos(todos.filter((_, i) => i !== index));
    };

    const handleEdit = (index) => {
        setInput(todos[index]);
        setEditIndex(index);
    };

    const handleUpdate = () => {
        if (input.trim() !== '' && editIndex !== null) {
            setTodos(todos.map((todo, i) => (i === editIndex ? input : todo)));
            setInput('');
            setEditIndex(null);
        }
    };
  
    return (
        <div className='flex flex-col gap-6 items-center justify-center min-h-screen bg-gray-100 p-6'>
            <h2 className='text-4xl font-bold text-gray-800'>Todo List</h2>
            <Create setTodos={setTodos} todos={todos} input={input} setInput={setInput} editIndex={editIndex} handleUpdate={handleUpdate} />
            <div className='w-full max-w-md bg-white shadow-lg rounded-lg p-2'>
                {todos.length === 0 ? (
                    <h2 className='text-gray-500 text-center'>No Records</h2>
                ) : (
                    <ul className='space-y-3'>
                        {todos.map((todo, index) => (
                            <li key={index} className='bg-gray-200 p-3 rounded-md shadow-sm flex justify-between items-center'>
                                <span>{todo}</span>
                                <div className='flex gap-4'>
                                    <FiEdit className='text-blue-500 cursor-pointer text-[18px]' onClick={() => handleEdit(index)} />
                                    <FiTrash2 className='text-red-500 cursor-pointer text-[18px]' onClick={() => handleDelete(index)} />
                                </div>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
}

export default Home;