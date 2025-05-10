import React, { useState } from 'react'

const TokenPost = () => {

  const [username, setuserName] = useState('')
  const [password, setPassword] = useState('')
  const [token, setToken] = useState('')


  function handleSubmit(e) {
    e.preventDefault()
    fetch('https://dogsapi.origamid.dev/json/jwt-auth/v1/token', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username,
        password
      })
    }).then(response => {
      console.log(response)
      return response.json()
    }).then(json => {
      setToken(json.token)
    })
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={username}
        onChange={({ target }) => setuserName(target.value)}
      />
      <input
        type="text"
        value={password}
        onChange={({ target }) => setPassword(target.value)}
      />
      <button>Enviar</button>
      <p style={{wordBreak: 'break-all'}}>{token}</p>
    </form>
  )
}

export default TokenPost
