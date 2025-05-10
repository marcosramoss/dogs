import React from 'react'
import Input from '../Forms/Input'
import Button from '../Forms/Button'
import Error from '../Helper/Error'
import { useForm } from '../../Hooks/useForm'
import { USER_POST } from '../../api'
import { UserContext } from '../../Contexto'
import { useFetch } from '../../Hooks/useFetch'

const LoginCreate = () => {

  const username = useForm()
  const email = useForm('email')
  const password = useForm()

  const { userLogin } = React.useContext(UserContext)
  const { loading, error, request } = useFetch('', {})


  async function handleSubmit(event) {
    event.preventDefault()
    const { url, options } = USER_POST({
      username: username.value,
      email: email.value,
      password: password.value,
    })
    const { response } = await request(url, options)
    if (response.ok) userLogin(username.value, password.value)
    console.log(response)
  }

  return (
    <section className='animeLeft'>
      <h1 className='title'>Cadastre-se</h1>
      <form onSubmit={handleSubmit}>
        <Input label="Nome" type="text" name="username" placeholder="Nome do usuário" {...username} />
        <Input label="E-mail" type="email" name="email" placeholder="E-mail do usuário" {...email} />
        <Input label="Senha" type="password" name="password" placeholder="Senha do usuário" {...password} />
        {loading ? <Button disabled> Cadastrando... </Button> : <Button>Cadastrar</Button>}
        <Error error={error} />
      </form>
    </section>
  )
}

export default LoginCreate
