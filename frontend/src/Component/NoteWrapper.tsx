import React , {FunctionComponent} from 'react'
interface WrapperProps {
    children : React.ReactNode
}

const NoteWrapper: FunctionComponent<WrapperProps> = ({ children }: WrapperProps) => {
    return (
        <div className=' my-4 mx-4 p-2 w-52 h-52 sm:w-96 sm:h-96 border shadow-sm rounded-md border-gray-400 overflow-y-auto '>
            {children}
        </div>
    )
}

export default NoteWrapper