import React from 'react';
import "./toolbar.css"

class Toolbar extends React.Component {
    render(){
        return(
            <div>
                <div className='company'>О компании</div>
                <div className="contacts">Контакты</div>
            </div>
        )
    }
}

export default Toolbar;