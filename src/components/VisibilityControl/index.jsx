import './index.css'
import { useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEyeSlash, faEye, faBan } from '@fortawesome/free-solid-svg-icons'

const VisibilityControl = ({ setShowCompleted, deleteDoneTasks }) => {
    const inputRef = useRef()

    const handleDelete = () => {
        if (window.confirm('Are you sure you want to delete all completed tasks?')) {
            deleteDoneTasks()
        }
    }

    return (
        <div className='VisibilityControl'>
            <input type="checkbox" id='show-done' onChange={() => setShowCompleted(inputRef.current.checked)} ref={inputRef} />
            <label htmlFor="show-done">{inputRef.current.checked ? <FontAwesomeIcon icon={faEyeSlash} /> : <FontAwesomeIcon icon={faEye} />}</label>
            <button onClick={handleDelete}><FontAwesomeIcon icon={faBan} /></button>
        </div>
    )
}
export default VisibilityControl