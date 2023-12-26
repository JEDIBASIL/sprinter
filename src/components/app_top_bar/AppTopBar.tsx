"use client"
import { ActionIcon, Burger, Drawer, Flex, TextInput } from '@mantine/core'
import style from "./app_topbar.module.css"
import { RiAccountCircleLine, RiSearchLine, RiShoppingBag3Line } from "react-icons/ri"
import { useState } from 'react'
import Link from 'next/link'
function AppTopBar() {
  const [drawer, setDrawer] = useState(false)
  return (
    <div className={style.app_topbar}>
      <Drawer onClose={() => setDrawer(false)} opened={drawer} position='left'>
        <ul>
          <li>Home</li>
          <li></li>
        </ul>
      </Drawer>
      <div className={style["burger_icon"]}>
        <Burger onClick={() => setDrawer(true)} opened={drawer} />
      </div>
      <Link className={style.logo} href="/">Sprinter</Link>
      <TextInput radius={"xl"} w={500} size={"md"} icon={<RiSearchLine size={25} />} placeholder='Search' />
      <Flex className={style.icon_container} gap={20}>
        <Link href={"/cart"}>
          <ActionIcon>
            <RiShoppingBag3Line size={25} />
          </ActionIcon>
        </Link>

        <Link href={"/profile"}>
          <ActionIcon>
            <RiAccountCircleLine size={25} />
          </ActionIcon>
        </Link>

      </Flex>
    </div>
  )
}

export default AppTopBar
