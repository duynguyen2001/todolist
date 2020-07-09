import React from 'react'
import ReactDOM from 'react-dom'



class Todolist extends React.Component {
    constructor(props){
        super(props);
        this.state={lists: ['Enter a new todo task','The new todo apps']}
    
        console.log(props)
    }
    _handleKeyDown = (e) => {
        if (e.key === 'Enter') {
          this.addlist();
        }
      }
    listAllTodos = () => Object.keys(this.state.lists).map(number => {
        return (<li key={number}>{number} {this.state.lists[number]} 
            <button onClick={() =>{ 
                let index= number
                this.deleteItems(index)
            }}>Delete</button> </li> )
    })
    addlist= () => {
        let newLists= this.state.lists;
        newLists.push(document.getElementById("todo").value);
        this.setState({lists: newLists});
        console.log(this.state.lists);
    }
    deleteItems =(index) =>{
        let newLists=this.state.lists;
        newLists.splice(index,1);
        this.setState({lists: newLists});
        console.log(this.state.lists)
    }

    render() {
        return (
            <div>
                <h1>This is the Todolist</h1>
                <div>
                    <input id="todo" type="text" name="tasks" placeholder="Adding the new tasks" onKeyDown={this._handleKeyDown}/>
                    <input type="submit" onClick={this.addlist}/>
                </div>
                
                <ul id="lists">
                    {this.listAllTodos()}
                </ul>
                <div id="demo"></div>
                <div id="demo2"></div>
            </div>
        )
    }
}


export default Todolist;