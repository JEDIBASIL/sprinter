"use client"
import { Button, TextInput } from '@mantine/core'
import style from "./subscribe.module.css"
function SubscribeCard() {
    return (
        <>
            <div className={style.subscribe_container}>
                <h1>Subscribe</h1>
                <p>you wanna get notified about hawf latest styles</p>
                <form action="">
                    <TextInput w={400} mr={10} size='lg'  placeholder="Email address" />
                    <Button color="black">Subscribe</Button>
                </form>
            </div>
        </>
    )
}

export default SubscribeCard
