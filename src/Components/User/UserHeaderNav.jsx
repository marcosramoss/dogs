import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { UserContext } from '../../Contexto'
import MinhasFotos from '../../Assets/feed.svg'
import Estatisticas from '../../Assets/estatisticas.svg'
import AdicionarFoto from '../../Assets/adicionar.svg'
import Sair from '../../Assets/sair.svg'
import styles from './UserHeaderNav.module.css'
import { useNavigate } from 'react-router-dom'
import useMedia from '../../Hooks/useMedia'

const UserHeaderNav = () => {
    const { userLogout } = React.useContext(UserContext)
    const mobile = useMedia('(max-width: 40rem)')
    const navigate = useNavigate()
    const [mobileMenu, setMobileMenu] = React.useState(false)
    const pathname = useLocation()
    React.useEffect(() => {
        setMobileMenu(false)
    }, [pathname])

    function handleLogout() {
        userLogout()
        navigate('/login')
    }
    return (
        <>
            {mobile && <button
                aria-label='Menu'
                onClick={() => setMobileMenu(!mobileMenu)}
                className={`${styles.mobileButton} ${mobileMenu && styles.mobileButtonActive}`}
            ></button>}
            <nav className={`${mobile ? styles.navMobile : styles.nav} ${mobileMenu && styles.navMenuActive}`}>
                <NavLink
                    to='/conta' end>
                    <img src={MinhasFotos} alt={MinhasFotos} />
                    {mobile && 'Minhas Fotos'}
                </NavLink>

                <NavLink
                    to='/conta/estatisticas'>
                    <img src={Estatisticas} alt={Estatisticas} />
                    {mobile && 'Estatísticas'}
                </NavLink>

                <NavLink
                    to='/conta/postar'>
                    <img src={AdicionarFoto} alt={AdicionarFoto} />
                    {mobile && 'Adicionar Foto'}
                </NavLink>

                <button onClick={handleLogout}> <img src={Sair} alt={Sair} />
                    {mobile && 'Sair'}
                </button>
            </nav>
        </>
    )
}

export default UserHeaderNav