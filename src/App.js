import axios from 'axios'
import React, { useState } from 'react'
import Button from './components/Button'
import Input from './components/Input'
import Navbar from './components/Navbar'
import Presentation from './components/Presentation'

const App = () => {
  const [inputText, setInputText] = useState('')
  const onChangeInputText = (e) => setInputText(e.target.value)

  const [results, setResults] = useState([])

  const onSubmitText = async (e) => {
    e.preventDefault()

    try {
      const { data } = await axios.get(`http://localhost:4000/api/iecho?text=${inputText}`)

      setResults([...results, data])
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div style={{minHeight: '100vh', backgroundColor: '#e4e4e4'}}>
      <Navbar
        color={"#df0002"}
        justifyContent='evenly'
        center={
          <form onSubmit={onSubmitText} className='w-100 d-flex justify-content-center'>
              <div className='mx-1' style={{width: '40%'}}>
                <Input
                  placeholder='Insert Text'
                  formControl='sm'
                  onChange={onChangeInputText}
                />
              </div>

              <div className='mx-1'>
                <Button type='submit' backgroundColor='#4900fe' color='#ffffff' text='Send' size='sm' />
              </div>
          </form>
        }
      />

      <Presentation results={results} />
    </div>
  )
}

export default App
