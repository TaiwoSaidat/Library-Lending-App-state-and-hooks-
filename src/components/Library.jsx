import { useState } from 'react'

function Library() {
    //initalise app state with 'usestate' hook
    const [books, setBooks] = useState(["Sophie's World", "The Lord of the Rings"])
    
    //to collect user input
    const [currBook, setCurrBook] = useState('') 

    //function to handle user input
    const handleInput = (e) => {
        setCurrBook(e.target.value);
    }

    //function to add user input to the borrowBooks array
    const borrowBooks = () => {
        if (currBook){
            setBooks([...books, currBook])
            setCurrBook('')
        }   
    }

    const handleKeyPress = (e)=> {
        if(e.key === 'Enter'){
            borrowBooks()
        }
    }

  return (
    <>
      <p>Women Techsters Book Library</p>
      <input 
        type="text" 
        value={currBook} 
        onChange={handleInput} 
        onKeyDown={handleKeyPress}
        placeholder='Kindly enter a book name' 
        />
      <button onClick={()=> borrowBooks('Legend of the Seeker')}>Borrow books</button>
      <br /><br />
      <hr />
      <p>Borrowed Books</p>
      {books.map((book, index) => (
        <li key={index}>{book}</li>
      ))}
    </>
  )
}

export default Library
