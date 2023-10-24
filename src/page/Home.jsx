import React from 'react'

function Home() {
  return (
   <>
      <section class='heading'>
            <h1>What do you need help with?</h1>
            <p>Please choose from an option below</p>
          </section>
    
          <a to='/new-ticket' class='btn btn-reverse btn-block'>
             Create New Ticket
          </a>
    
          <a to='/tickets' class='btn btn-block'>
           View My Tickets
          </a></>
  )
}

export default Home