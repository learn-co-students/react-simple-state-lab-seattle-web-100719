import React from 'react'
import Matrix from './Matrix.js'

class Cell extends React.Component {
    constructor(props){
        super()
        this.state = {
            color: props.value
        }
    }

    handleCLick = () => {
        this.setState({
            color: '#333'
        })
    }

    render() {
        return <div className="cell"
            style={{backgroundColor: this.state.color}}
            onClick={this.handleCLick}
            >
        </div>
    }
}

export default Cell;