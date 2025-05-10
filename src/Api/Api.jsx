import React from 'react'
import UserPost from './endpoinst/UserPost'
import TokenPost from './endpoinst/TokenPost'
import PhotoPost from './endpoinst/PhotoPost'
import PhotoGet from './endpoinst/PhotoGet'




const Api = () => {
  return (
    <div>
      <h2>User Post</h2>
      <p>Criar usuários</p>
      <UserPost/>
      <h2>Token Post</h2>
      <p>Pegar o token do usuário criado</p>
      <TokenPost/>
      <h2>Photo Post</h2>
      <p>Postar uma foto</p>
      <PhotoPost/>
      <h2>Photo Get</h2>
      <p>Pegar uma foto</p>
      <PhotoGet/>
    </div>
  )
}

export default Api
