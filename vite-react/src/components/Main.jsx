import React from "react";
import LinkedIn from "../assets/linkedIn.png"
function Main()
{
    
    return (
        <main>
            <h1 >Idil Ugurnal</h1>
            <h3 >Software Engineer</h3>
            <div className="main--button_container">
            <form action="mailto:idilugurnal@me.com" method="get" target="_blank">
                <button className="main--button" type="submit">
                    Email
                </button>
            </form>
            <form action="https://www.linkedin.com/in/idilugurnal/" method="get" target="_blank">
            <button className="main--button_linkedIn"  type="submit">
                    <div className="main--button_content">
                            <img src={LinkedIn} className="main--button_icon" />
                            <p className="button--title"> LinkedIn</p>
                    </div>
                </button>
            </form>
            </div>
            <h4>About</h4>
            <p>I am developing full-stack web applications with front-end focus. In 2020, I have graduated from
                Istanbul Technical Unviersity with BSc. degree in Computer Engineering. In my senior year, I was working,
                at Accenture Istanbul as a Software Developer. I have continued to work there after my studies as well. 
                I developed web application features using Typescript and React for almost a year at Accenture.
                Then, I continued my master's degree at Humboldt University of Berlin in Management and Economics.
                During my masters I had the chance to work at Hypatos GmbH. Hypatos GmbH is providing solutions for 
                document hyperautomation with the help of AI. I was working as a part time 
                Data Analyst for the first six months. During this time, my responsibilites included building ETL 
                pipelines for visualizing and analyzing marketing campaign performance of the company. After, I have started
                working as a Software Engineer. I worked on the company's product that is called Studio. At studio,
                I worked full-stack with front-end focus. I built responsive components and features hand in hand
                with the design team and clients. Developed key features for the product such as
                multi-company users, authentication reset mechanism, data normalization, undo-redo mechanism,
                and so on using React, Typescript and Python.
            </p>
            <h4>Skills and Tech Stack</h4>
            <p>Typescript, Javascript, React.js, Python, Java</p>
        </main>
    )
}

export default Main