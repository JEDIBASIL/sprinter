"use client"
import { AppTopBar, CartCard } from '@/components'
import React from 'react'
import Image from 'next/image'
import "./style.css"
import { ActionIcon, Button, Text } from '@mantine/core'
import { RiLineFill, RiAddFill, RiSubtractLine } from 'react-icons/ri'
function Cart() {
  return (
    <>
      <AppTopBar />
      <div className="cart_container">
        <h1>Cart</h1>
        <div className="cart_content">
          <div className="content">
            <CartCard />
            <CartCard />
            <CartCard />

          </div>
          <div className="summary">
            <h2>Summary</h2>
            <div className="content">
              <ul>
                <li>
                  <p>Subtotal</p>
                  <p>$600</p>
                </li>
                <li>
                  <p>Taxes</p>
                  <p>$0</p>
                </li>

                <li>
                  <p>Shipping</p>
                  <p>$0</p>
                </li>
                <li>
                  <p>Total</p>
                  <p>$600</p>
                </li>
              </ul>
              <Button fullWidth size='md' mt={10}>Continue to checkout</Button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Cart