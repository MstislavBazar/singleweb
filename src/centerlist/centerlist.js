import React from 'react';
import "./centerlist.css"
import Toolbar from "../toolbar/toolbar"

class centerlist extends React.Component{
    render(){
        return(
            <div className="center">
                <Toolbar/>
            </div>
        )
    }
}

export default centerlist;