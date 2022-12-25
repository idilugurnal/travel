import React from "react"
import travels from "./data"
import Card from "./components/Card"
import Navbar from "./components/Navbar"

/*
Challenge: Build the Navbar component.
Check the Figma file for the design specifics.
*/

export default function App()
{
    console.log(travels)
    const cards = travels.map((travel) =>
    {
        return <Card title={travel.title}
            key={travel.id}
            {...travel}
        />
    }

    )
    return (
        <div>
            <Navbar/>
            {cards}
        </div>
    )
}