import { Outlet, useNavigate } from "react-router-dom";
import User from "../user";
import Table from "../table";

export default function Home(props) {

    const navigate = useNavigate()
    return (
        <div>Home Page
            {/* <Outlet /> */}
            {/* {props.children} */}
            <User setButtonLabel={props.setButtonLabel} />
            <Table buttonLabel={props.buttonLabel} />
        </div>
    )
}


// 93491271008     960903

// import React, { Component } from 'react'

// export default class index extends Component {
//     componentDidMount() {

//     }
//     componentDidUpdate() {

//     }
//     componentWillUnmount() {

//     }
//   render() {
//     return (
//       <div>
        
//       </div>
//     )
//   }
// }
