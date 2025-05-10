import React, { useState } from 'react'

const UserPost = () => {

  const [username, setuserName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    fetch('https://dogsapi.origamid.dev/json/api/user', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username,
        email,
        password
      })
    }).then(response => {
      console.log(response)
      return response.json()
    }).then(json => console.log(json))
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={username}
        onChange={({ target }) => setuserName(target.value)}
      />
      <input
        type="email"
        value={email}
        onChange={({ target }) => setEmail(target.value)}
      />
      <input
        type="text"
        value={password}
        onChange={({ target }) => setPassword(target.value)}
      />
      <button>Enviar</button>
    </form>
  )
}

export default UserPost
