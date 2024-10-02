import React from 'react'
import { useState } from 'react'

const App = () => {
  const [count, setCount] = useState(0)
  function handleClick (){
    setCount(count + 1)
  }
  return (
    <div>
      <section>
        <h1>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut sint earum dolore soluta laboriosam molestiae corrupti recusandae maxime aspernatur vel maiores dicta, nemo accusamus dolores architecto veritatis tenetur exercitationem. Voluptatibus.
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis pariatur quaerat, laboriosam velit sequi quos corporis architecto consectetur labore nihil magni quibusdam mollitia officiis? Repudiandae voluptatem necessitatibus repellendus perspiciatis quo.
        </p>
      </section>
      <button onClick={handleClick}>clicked {count} times</button>
    </div>
  )
}

export default App
