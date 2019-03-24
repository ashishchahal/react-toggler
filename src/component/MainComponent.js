import React from 'react';

class Main extends React.Component{
    constructor(props){
        super(props);
        this.state={
            isRed: true
        }
        this.toggleColor= this.toggleColor.bind(this);
        this.toggleRed= this.toggleRed.bind(this)
    }

    toggleColor(){
            this.setState({
                isRed: false
            })
        
    }
    toggleRed(){
        this.setState({
            isRed: true
        })
    }
    render(){
        const {isRed} = this.state;

        if(isRed){
        return( 
        <div>
            <button className="btn btn-danger" onClick={this.toggleColor}>Red Button</button>
        </div>)}
        else{
            return(<div>
                <button className="btn btn-primary" onClick={this.toggleRed}> Blue Button</button>
            </div>)
        }

    }
}

export default Main;