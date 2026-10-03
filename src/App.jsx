import { useState } from 'react'


function App() {
  const [count, setCount] = useState(0)
  const [name, setName] = useState('')

  return (
    <div style={{ textAlign: 'center', padding: '30px', Fontfamily: " Arial, sans-serif" , backgroundColor: 'rgb(4 , 4 , 61)', }}>
      

           {/* 1 & 2 - Heading and paragraph */}
           <h1 style={{color: 'lemonchiffon'}}> MY FIRST REACT APP</h1>
           <p style={{color: 'lemonchiffon' , Fontfamily: "italic" }}> Hello! My name is Stillwin, this is my first react app!</p>

       <h2>Count:{count}</h2>
       <button onClick={() => setCount(count + 1)} style={{margin: '5px', padding: '10px'}}>Increase</button>
       <button onClick={() => setCount(count - 1)} style={{margin: '5px', padding: '10px'}}>Decrease</button>
       <button onClick={() => setCount(0)} style={{margin: '5px', padding: '10px'}}>Reset</button>
 
{/* 4 - Even/Odd Message */}
        <p>{count % 2 === 0 ? 'Even number' : 'Odd'}</p>
        {/* 5- Input field */}
        <div style={{marginTop: '20px'}}>
        
          <input
            type="text"
            placeholder="Enter your name"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={{padding: '10px'}} 
          />
        </div>
        {/* 6 - Personalised Greeting */}
        {name && (
          <h3 style={{color: "#ff6b6b"}}>
            Hello, {name}! Welcome to My React App</h3>
        )}
        {/* Bonus - Footer */}
        <footer style={{marginTop: '100px', padding: '10px', backgroundColor: '#f0f0f0'}}>
          <p>copyright {new Date().getFullYear()} My React App. All rights reserved.</p>
        </footer>
      </div>
  )
}

export default App



