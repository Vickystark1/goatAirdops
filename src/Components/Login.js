import './Login.css'


const Login = ({show,setShow}) => {

    function handleSum(e){
    e.preventDefault()
    }

    function close(){
        setShow(false)
    }

    if(!show ) return null

  return (
    <div>
       <form action="" className='form' onSubmit={handleSum}>
         <h2> Login </h2>
       <i className="fa fa-close me-2" aria-hidden="true" id='close' onClick={close}  ><button style={{cursor:"pointer",border:"none",background:"none"}}  type="button" class="close" aria-label="Close">
  <span aria-hidden="true">&times;</span>
</button></i>
         <label htmlFor="name">Username</label>
         <input type="text" placeholder='Enter Username'/>
         <label htmlFor="pass">Password</label>
         <input type="password" placeholder='Enter Password'/>
         <button className='button' style={{cursor:"pointer"}}> Submit </button>
         <label className='pb-3' htmlFor="" id='fg'>Forget password <input type='checkbox'></input></label>
       </form>

    </div>
  )
}

export default Login;