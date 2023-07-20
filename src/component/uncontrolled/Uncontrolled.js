import React,{useRef} from 'react'

const Uncontrolled = () => {
  const name=useRef();
  const  Surname=useRef();
  const onhandle=(event)=>{
    event.preventDefault()
    let data={
      name:name.current.value,
      surname:Surname.current.value,
    }
   console.log(data)

  }
  return (
    <div>
      <form action="">
        <label htmlFor="Name">Name</label>
        <input type="text" id='Name' placeholder='Enter your name' ref={name} />
        <br />
        <label htmlFor="Surname">Surname</label>
        <input type="text"  id="Surname" ref={Surname} placeholder='Enter your surname'/>
        <br />
        <button onClick={onhandle}>Submit</button>
      </form>
      
    </div>
  )
}

export default Uncontrolled
