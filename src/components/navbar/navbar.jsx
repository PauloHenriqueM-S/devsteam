import styles from '@/components/navbar/navbar.module.css'
import Logo from '@/components/logo/logo'
import Input from '@/components/forms/input/input'
import CartButton from '@/components/forms/cartButton/cartButton'

export default function Navbar({cart, onRemove}) {
  return(
    <nav className={styles.navbar}>
      <Logo />
      <div className={styles.search}>
      <Input placeholder="Buscar" fullWidth type="text" />
      </div>
      <CartButton cart={cart} onRemove={onRemove} />
    </nav>
  )
}

