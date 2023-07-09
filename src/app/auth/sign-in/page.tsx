"use client"
import { Button, Flex, PasswordInput, Stack, TextInput } from '@mantine/core'
import React from 'react'

function SignIn() {
  return (
    <div>
      <div className="auth_container">
        <Flex mih={"100vh"} align={"center"} justify={"center"}>
        <Stack w={350}>
            <TextInput placeholder='Enter email' size={"md"} />
            <PasswordInput placeholder='Enter password' size={"md"} />
            <PasswordInput placeholder='Confirm password' size={"md"} />
            <Button color='black'>Sign in</Button>
        </Stack>
        </Flex>

      </div>
    </div>
  )
}

export default SignIn
