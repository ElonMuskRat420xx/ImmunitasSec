import React from 'react'

import Footer from '../components/Home/Footer/Footer'
import Header from '../components/Home/Header/Header'
import { Container } from './LayoutStyles'

export const Layout = ({ children }) => {
  return (
    <Container>
      <Header />
      <main>{children}</main>

    </Container>
  )
}
