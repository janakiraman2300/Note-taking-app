import React from 'react'
import NoteWrapper from './NoteWrapper';
import { AiOutlineFileAdd } from "react-icons/ai";
import { IconContext } from 'react-icons';

const CreateNote: React.FC = () => {
    return (
        <NoteWrapper>
            <div className='flex flex-col justify-center items-center w-full h-full gap-y-4'>
                <div className='font-bold text-lg'>Add notes</div>
                <IconContext.Provider value={{size:'2em'}}>
                    <AiOutlineFileAdd />
                </IconContext.Provider>
            </div>
        </NoteWrapper>
    )
}

export default CreateNote