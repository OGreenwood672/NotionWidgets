import React from "react";
import { ReactP5Wrapper } from "react-p5-wrapper";
import Clock from "./Clock.js"

import "./Clock.css"

export default function ClockHome() {

    return (
        <div className="clock-background">
            <div className="sketch">
                <ReactP5Wrapper sketch={Clock} />
            </div>
        </div>
    )

}