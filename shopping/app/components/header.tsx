import React from 'react'
import Link from 'next/link'

const Header = () => {
  return (
    <header>
        <nav>
    <div className="navbar justify-between bg-base-300">
        <Link href="/" className='btn btn-ghost text-lg'>
            JOMAZON

        </Link>
        <ul className='flex'>
        <li>
            <Link className="btn btn-ghost rouded-btn" href="/cart">Cart</Link>
        </li>
        </ul>
        <ul className='flex'>
        <li>
            <Link className="btn btn-ghost rouded-btn" href="/cart">Sign In</Link>
        </li>
        </ul>
    </div>
    </nav>
    </header>
  )
}

export default Header