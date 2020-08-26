import React from 'react';
import './App.css'; 
import ListItems from './ListItems';
import { library } from '@fortawesome/fontawesome-svg-core'
import{faTrash} from '@fortawesome/free-solid-svg-icons'

library.add(faTrash);

class App extends React.Component{
  constructor(props){
    super(props)
    this.state={
      items:[],
      currentItem:{
        text:'',
        key:''
      }
    }
  }

  handleInput = (e) => {
    this.setState({currentItem:{
      text: e.target.value,
      key: Date.now()
    }})
  }

  addItem = (e) => {
    e.preventDefault()
    const newItem = this.state.currentItem
    if(newItem.text !==''){
      const newItems=[...this.state.items, newItem];
      this.setState({
        items: newItems,
        currentItem:{
          text:'',
          key:''
        }
      })
    }
  }

  //funtion to delete item
  deleteItem=(key)=>{
    const filteredItems = this.state.items.filter(item =>
      item.key !==key)
      this.setState({
        items: filteredItems
      })
  }

  //function to edit item
  editItem = (text, key) =>{
    const items = this.state.items;
    items.map(item =>{
      if(item.key === key){
        item.text = text
      }
      return null;
    })
    this.setState({
      items : items
    })
  }

  render(){
    return(
      <div className='App'>  
        <header>
          <form id='to-do-form' onSubmit={this.addItem}>
            <input 
              type='text' 
              placeholder='Enter Text'
              value={this.state.currentItem.text}
              onChange={this.handleInput}
            />

            <button type='submit'>Add</button>
          </form>
        </header>
        <ListItems items={this.state.items} 
          deleteItem={this.deleteItem}
          editItem = {this.editItem}/>
      </div>
    )
  }
}


export default App;