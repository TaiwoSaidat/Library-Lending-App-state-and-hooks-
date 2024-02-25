// class components of react state and hook
import { Component } from 'react'

 class LibraryClass extends Component {
    constructor(props){
        super(props)
        this.state ={
            books: ["Sophie's World", "The Lord of the Rings"],
            currBook: ''
        }
    }

    handleInput = (e) => {
        // setCurrBook(e.target.value);
        this.setState({currBook: e.target.value})
    }

    //function to add user input to the borrowBooks array
      borrowBooks = (event) =>{
        if (currBook){
            setBooks([...books, currBook])
            setCurrBook('')
        }  

        event.preventDefault() 
    }

    handleKeyPress = (e)=> {
        if(e.key === 'Enter'){
            borrowBooks()
        }
    }

    render() {
        const {currBook, books} = this.state
    return (
        <>
            <p>Women Techsters Book Library</p>
                <form onSubmit={this.borrowBooks} >
                    <input 
                        type="text" 
                        value={currBook} 
                        onChange={this.handleInput} 
                        onKeyDown={this.handleKeyPress}
                        placeholder='Kindly enter a book name' 
                        />
                <button>Borrow books</button>
                </form>
            <br /><br />
            <hr />
            <p>Borrowed Books</p>
            {books.map((book, index) => (
            <li key={index}>{book}</li>
            ))}
      </>
    )
  }
}

export default LibraryClass

