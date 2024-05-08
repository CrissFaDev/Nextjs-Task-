'use client'
import React, { useState, useEffect } from 'react';
import { useRouter } from "next/navigation";

function CardTask() {
    const [tasks, setTasks] = useState([]);
    const router = useRouter();

    useEffect(() => {
        const loadTask = async () => {
            const res = await fetch("/api/tasks", {
                method: "GET",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
            });
            const data = await res.json();
            setTasks(data.tasks);
        };
        loadTask();
    }, []);

    const handleTaskClick = (id) => {
        router.push(`/task/edit/${id}`);
    };

    return (
        <div className='grid grid-cols-3 gap-4 '>
            {tasks.map((task) => (
                <div onClick={() => handleTaskClick(task.id)} className="bg-slate-600 hover:bg-slate-400 p-10 rounded-lg shadow-md cursor-pointer" key={task.id}>
                    <h1 className='font-bold'>{task.title}</h1>
                    <p>{task.description}</p>
                    <p>{task.created_at}</p>
                </div>
            ))}
        </div>
    );
}

export default CardTask;
