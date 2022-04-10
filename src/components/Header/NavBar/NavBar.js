import Link from 'next/link'
import { Menu } from '@headlessui/react'

function MyLink(props) {
  let { href, children, ...rest } = props
  return (
    <Link href={href}>
      <a {...rest}>{children}</a>
    </Link>
  )
}

export default function NavBar() {


  return (
    <Menu>
      <Menu.Button>More</Menu.Button>
      <Menu.Items>
        <Menu.Item>
          <MyLink href="/profile">Profile</MyLink>
        </Menu.Item>
        <Menu.Item>
          <MyLink href="/profile">Profile</MyLink>
        </Menu.Item>
        <Menu.Item>
          <MyLink href="/profile">Profile</MyLink>
        </Menu.Item>
      </Menu.Items>
    </Menu>
  )
}