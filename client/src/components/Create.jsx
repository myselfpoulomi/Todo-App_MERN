import React from 'react';

function Create({ setTodos, todos, input, setInput, editIndex, handleUpdate }) {
    const handleAdd = () => {
        if (input.trim() !== '') {
            setTodos([...todos, input]);
            setInput('');
        }
    };

    return (
        <div className='flex gap-2 items-center justify-center w-full max-w-md'>
            <input 
                className='border border-gray-300 rounded-md p-3 w-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400' 
                type='text' 
                placeholder='Enter a task...' 
                value={input} 
                onChange={(e) => setInput(e.target.value)}
            />
            {editIndex !== null ? (
                <button 
                    className='bg-green-500 hover:bg-green-600 text-white p-3 rounded-md shadow-md transition-all' 
                    type='button' 
                    onClick={handleUpdate}
                >
                    Update
                </button>
            ) : (
                <button 
                    className='bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-md shadow-md transition-all' 
                    type='button' 
                    onClick={handleAdd}
                >
                    Add
                </button>
            )}
        </div>
    );
}

export default Create;
