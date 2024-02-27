import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Context from "../../helper/fileContext";
import { useSelector } from "react-redux";

// CRUD
// Create - POST method - create a data
// Read - GET method - list down data
// Update - PUT method - edit particular data
// Delete - DELETE method - delete any data

export default function Form(props) {
    // console.log('***', window.location.search.split('').pop());
    const data = useSelector((store) => store)
    console.log('data***', data);

    const contextData = useContext(Context)

    // console.log('contextData*****', contextData);

    const params = useParams()
    // console.log('**', params);
    const storedValue = JSON.parse(localStorage.getItem('user')) || []

    const [user, setUser] = useState({})
    const [errors, setErrors] = useState({})

    const navigate = useNavigate()

    useEffect(() => {
        if (params?.id) {
            setUser(storedValue[params.id] || {})
        }
    }, [])

    const handleOnChange = (event) => {
        const userData = {
            ...user,
            [event.target.name]: event.target.value
        }
        setUser(userData)
        // setErrors({ ...errors, [event.target.name]: '' })
    }

    // const validate = () => {
    //     let error = {}
    //     if (!user.fName) {
    //         error.fName = '* Please provide first name'
    //     }

    //     if (!user.lName) {
    //         error.lName = '* Please provide last name'
    //     }

    //     setErrors(error)

    //     console.log('error***', error);

    //     if (user.fName && user.lName) {
    //         handleSubmit()
    //     }

    // }

    // console.log('err******', errors);

    const handleSubmit = () => {
        // if (user.fName && user.lName) {
        if (params?.id) {
            let updatedData = storedValue.map((el, i) => {
                if (i == params.id) return user
                else return el
            })
            localStorage.setItem('user', JSON.stringify([...updatedData]))
        } else {
            localStorage.setItem('user', JSON.stringify([...storedValue, user]))
        }
        navigate('/table')
        // } else {
        //     alert('please enter required fields')
        // }
    }

    // if (params.id <= storedValue.length - 1) {

    return (
        <div>
            <h2>{props.heading}</h2>
            <input type='text' name='fName' value={user.fName} onChange={(event) => handleOnChange(event)} /><br />
            <span style={{ color: 'red' }}>{errors.fName}</span><br />
            <input type='text' name='lName' value={user.lName} onChange={(event) => handleOnChange(event)} /><br />
            <span style={{ color: 'red' }}>{errors.lName}</span><br />
            <button onClick={handleSubmit}>{contextData.buttonLabel}</button>
        </div>
    )

    // } else {
    //     console.log('something went wrong');
    // }
}
