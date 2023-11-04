import React, { useEffect, useState } from 'react'
import CreateNote from './CreateNote'
import NoteWrapper from './NoteWrapper'
import { ApiRequest } from '../api'

interface notesItrf {
    title: string
    id?: number | string
    text: string
}
const dummyNotes: notesItrf[] = [
    { title: "one", text: "one" },
    { title: "two", text: "two" },
    { title: "three", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat quo repellendus dolorem libero, ratione recusandae excepturi dignissimos nemo numquam, nostrum reiciendis maiores eaque error sed reprehenderit quibusdam deleniti illo dolore." },
    { title: "four", text: "four" },
]

const MainNotes: React.FC = () => {
    const [notes, setNotes] = useState<notesItrf[]>([])
    async function fetchNotes() {
        try {
            const data = await ApiRequest('/api/notes/', 'GET');
            setNotes(data);
            console.log(data);

        } catch (error: unknown) {
            // Handle the error
            if (typeof error === ('string' || 'object'))
                alert(error.toString())
            console.error('API Request Error:', error);
        }
    }
    useEffect(() => {

        fetchNotes();
    }, [])

    return (
        <div className='flex flex-col justify-center items-center sm:flex '>
            <div className='sm:flex sm:flex-row sm:flex-wrap'>
                <CreateNote />
                {dummyNotes.map((note) => (
                    <NoteWrapper>
                        <div>
                            <h1 className='border-b text-center font-semibold py-2'>{note.title}</h1>
                            <p className='text-center py-3 px-2 whitespace-break-spaces'>{note.text}</p>
                        </div>
                    </NoteWrapper>
                ))}
            </div>
        </div>
    )
}

export default MainNotes