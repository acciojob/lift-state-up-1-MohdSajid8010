
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  const [showModal, setshowModal] = useState(false)
  return (
    <div className="parent">
      {/* Do not remove the main div */}
      <h1>Parent Component</h1>

      <div className="child">
      <h1>Child Component</h1>


        <button onClick={() => setshowModal(!showModal)}>Show Modal</button>
        {
          showModal ? (
            <div >
              <h3>Modal Content</h3>
              <p>This is the modal content.</p>
            </div>
          ) : ("")
        }
      </div>
    </div>
  )
}

export default App
