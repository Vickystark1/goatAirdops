import React from 'react'

const Sinup = ({popup,setPopup}) => {

   
    function handleSp(e){e.preventDefault()
    }
    if(!popup ) return null

    function close(){
        setPopup(false)
    }

  return (
    <div>
        <div>
       <form action="" className='form '  onSubmit={handleSp}>
         <h2> Singup </h2>
       <i class="fa fa-times me-2" aria-hidden="true" id='close' onClick={close}><button style={{cursor:"pointer",border:"none",background:"none"}} type="button" class="close" aria-label="Close">
  <span aria-hidden="true">&times;</span>
</button></i>
         <label htmlFor="name">Username</label>
         <input type="text" placeholder='Enter Username'/>
         <label htmlFor="email">Email I.d</label>
         <input type="email" placeholder='Enter your email'/>
         <label htmlFor="pass">Password</label>
         <input type="password" placeholder='Enter Password'/>
         <label htmlFor="pass">Confirm Password</label>
         <input type="password" placeholder='Enter Password'/>
         <button className='button' style={{cursor:"pointer"}}> Submit </button>
         
         
       </form>

    </div>
    </div>
  )
}

export default Sinup;