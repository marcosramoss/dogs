import React from 'react'
import { useLocation } from 'react-router-dom'
import UserHeaderNav from './UserHeaderNav'
import styles from './UserHeader.module.css'

export const UserHeader = () => {
  const [title, setTitle] = React.useState('')
  const lacation = useLocation()
  
  React.useEffect(() => {
    const { pathname } = lacation
    switch (pathname) {
      case '/conta/estatisticas':
        setTitle('Estatísticas')
        break
      case '/conta/postar':
        setTitle('Poste Sua Foto')
        break
      default:
        setTitle('Minhas Conta')
    }
  }, [lacation])

  return (
    <header className={styles.header}>
      <h1 className='title'>{title}</h1>
        <UserHeaderNav/>
    </header>
  )
}
export default UserHeader