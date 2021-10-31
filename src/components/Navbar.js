import React, { useState } from 'react'



export default function Navbar() {

    const [isLoading, setLoading] = useState(false);
    const [userdata, setUserdata] = useState([]);
    const loadUsers = async() => {
        //showing loader on beginning of api call
        setLoading(true);

        const responce = await fetch("https://reqres.in/api/users?page=1");

        setLoading(false);
        if (responce.ok) {
            setUserdata((await responce.json()).data);
            setLoading(false);

        } else {

            setLoading(false);
        }
    };

    return ( <
            div >
            <
            input type = "checkbox"
            id = "so" / >
            <
            label htmlFor = "so"
            className = "lab" >
            <
            i id = "icon"
            className = "fas fa-bars" > < /i> <
            /label> <
            header className = "header" >

            <
            nav class = "nav" >
            <
            ul >
            <
            li >

            <
            a style = {
                { color: "red" } }
            for = "so"
            href = "#" > Home < /a>

            <
            /li> <
            li >
            <
            a href = "#project" > Project < /a> <
            /li> <
            li >
            <
            a href = "#team" > Team < /a> <
            /li> <
            li >
            <
            a href = "#blog" > Blog < /a> <
            /li> <
            li >
            <
            a > Contact < /a> <
            /li> <
            li >
            <
            a onClick = { loadUsers } > < button className = "button" > Get User < /button></a >
            <
            /li>

            <
            /ul> <
            h3 > ZIPPY < /h3> <
            /nav> <
            /header> <
            div className = "card-container" > {
                isLoading ? ( < div className = "loader" > < /div>):null} {
                        userdata.map((e) => {
                                    return ( <
                                        >

                                        <
                                        div className = "card1" >
                                        <
                                        img src = { e.avatar }
                                        alt = "img"
                                        className = "images-person" / >
                                        <
                                        h2 style = {
                                            { textAlign: "center", paddingTop: "30px" } } > { e.first_name } { e.last_name } < /h2> <
                                        p >
                                        <
                                        br / >
                                        First Name: { '\u00A0' } < b > { e.first_name } < /b><br/ > < br / >
                                        Last Name: { '\u00A0' } < b > { e.last_name } < /b> <br/ > < br / >
                                        Email: { '\u00A0' } < b > { e.email } < /b></p >

                                        <
                                        /div>


                                        <
                                        />)
                                    })
                            } <
                            /div> <
                            /div>
                    )
                }