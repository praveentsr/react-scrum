import React, { Component } from 'react';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            posts: []
        };
    }

    render() {
            var data = [{
                    "description": "Scrum: 'stand up'",
                    "time": "9:00",
                    "duration": 30
                },
                {
                    "description": "Meet friends for lunch",
                    "time": "12:00",
                    "duration": 60
                },
                {
                    "description": "Meet with Tom",
                    "time": "14:00",
                    "duration": 120
                },
                {
                    "description": "Call Dave",
                    "time": "14:30",
                    "duration": 60
                },
                {
                    "description": "Resourceing for 'project X'",
                    "time": "18:00",
                    "duration": 60
                },
                {
                    "description": "Sync with India dev team",
                    "time": "18:00",
                    "duration": 60
                },
                {
                    "description": "Status about 'project Z'",
                    "time": "19:15",
                    "duration": 45
                }
            ];


            return <
                div >
                <
                div > {
                    data.map((Desc, Time, Dur) => < Content key = { Time }
                        componentData = { Desc }
                        />)} < /
                        div > <
                        /div>
                    }
                }
            class Content extends React.Component {
                var temp;
                if (prevComponent.time + prevComponent.duration == this.props.componentData.time) {
                    temp = < div > < div > { this.props.componentData.description } < /div>   <
                    div > { this.props.componentData.time } < /div>  </div > ;
                } else if (prevComponent.time + prevComponent.duration == this.props.componentData.time) { <
                    temp = < div style = "background:#cccccc" > < /div >;
                }
                render() {
                    return ({ temp });
                }
                var prevComponent = this.props.componentData;
            }
            export default App;