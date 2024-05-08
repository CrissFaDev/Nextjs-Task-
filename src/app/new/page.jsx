'use client'
import { useRouter } from 'next/navigation'
import { useState, useEffect } from "react";

function NewPage({ params }) {
  //console.log(params);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");


  useEffect(() => {
    if (params.id) {
      fetch(`/api/tasks/${params.id}`)
        .then(res => res.json())
        .then(data => {
          setTitle(data.task.title);
          setDescription(data.task.description);
          //console.log(data);
        });
    }
  }, [params.id]);


  const router = useRouter()

  const handlerSubmit = async (e) => {
    e.preventDefault();
    //console.log(title, description);

    if (params.id) {
      //console.log("update");
      const res = await fetch(`/api/tasks/${params.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          title,
          description
        }),
      })
      //const data = await res.json();
      //console.log(data);

    } else {
      const res = await fetch('/api/tasks', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          title,
          description
        }),
      })
      //const data = await res.json();
    }
    router.refresh()
    router.push('/');
  }

  const handleDelete = async () => {
    await fetch(`/api/tasks/${params.id}`, {
      method: 'DELETE',
    });
    router.replace('/');
  };

  return (
    <div style={{ minHeight: "calc(100vh - 7.3rem)" }} className=" flex justify-center items-center">
      <form className="bg-slate-800 p-10 lg:w-5/6 md:w-1/2" onSubmit={handlerSubmit}>
        <h1 className="text-center font-bold">Mi nueva tarea</h1>
        <label className="font-bold text-sm" htmlFor="title">
          Titulo tarea
        </label>
        <input
          onChange={(e) => { setTitle(e.target.value) }}
          id="title"
          className="border border-gray-400 p-2 mb-4 w-full text-black"
          type="text"
          name="title"
          placeholder="titulo de lal tarea"
          value={title}
        />
        <label className="font-bold text-sm" htmlFor="descripcion">
          Descripcion tarea
        </label>
        <textarea
          onChange={(e) => { setDescription(e.target.value) }}
          id="descripcion"
          className="border border-gray-400 p-2 mb-4 w-full text-black"
          rows="3"
          type="text"
          name="description"
          placeholder="describe tu tarea"
          value={description}
        ></textarea>
        <div className='flex justify-between'>
          <button className="bg-blue-500 hover:bg-blue-800 font-bold px-4 py-2 rounded-md" type='submit' >
            enviar
          </button>
          {
            params.id &&
            <button className="bg-red-500 hover:bg-red-800 font-bold px-4 py-2 rounded-md " type='button' onClick={handleDelete}>
              borrar
            </button>
          }
        </div>
      </form>
    </div>
  );
}

export default NewPage;