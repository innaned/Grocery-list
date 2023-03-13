import { Component } from "react";
import icon from './icon.jpg';

export class GroceryList extends Component {
    constructor() {
        super();
        this.state = {
            userInput: "",
            groceryList: [],
        }
    }

    onChangeEvent(e) {
        this.setState({userInput: e})
    }

    addItem(input) {
        if (input ==='') {
            alert ("Please, enter an item")
        }
        else {
        let listArray = this.state.groceryList;
        listArray.push (input)
        this.setState({groceryList: listArray, userInput: ''})
    }
    }

    crossWord(event) {
        const li = event.target;
        li.classList.toggle('crossed')
    }

    deleteItem() {
        let listArray = this.state.groceryList;
        listArray = [];
        this.setState({groceryList: listArray})
    }

    onFormSubmit(e) {
        e.preventDefault();
    }

    render() {
        return(
            <div>
                <form onSubmit={this.onFormSubmit}>
            <div className="inputForm">
                <input type="text"
                placeholder="What do you want to buy?"
                onChange={(e) => {this.onChangeEvent(e.target.value)}}
                value ={this.state.userInput}/>
            </div>
                <div className="btn">
            <button className="btnOne" onClick={() => this.addItem(this.state.userInput)}>Add</button>
            </div>
            <ul>
                {this.state.groceryList.map((item, index) => (
                <li onClick = {this.crossWord} key={index}><img src={icon} width="40px" alt="icon yes"/>{item}</li>))}
                    
            </ul>
                
                <div className="btn">
                <button className="btnTwo" onClick={() => this.deleteItem()}>Delete</button>
                </div>
                </form>
            </div>
        )
    }
}