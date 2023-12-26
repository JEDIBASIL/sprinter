import { ActionIcon, Button, Text } from "@mantine/core"
import { RiAddFill, RiSubtractLine } from "react-icons/ri"
import Image from "next/image"
function CartCard() {
    return (
        <>
            <div className="cart_card">
                <div className="cart_card_details">
                    <div className="img">
                        <Image width={100} height={100} alt='' src={"https://s.alicdn.com/@sc04/kf/HTB1hfSFSFXXXXabXXXXq6xXFXXXv.jpg_960x960.jpg"} />
                    </div>
                    <div className="text">
                        <p>Stone island Blue winter jacket</p>
                    </div>
                </div>
                <div className="cart_card_prize">

                <Button color='red' variant='subtle' size={"xs"}>Remove</Button>
                    <div className="qty">
                        <ActionIcon size={"sm"} variant='outline'><RiAddFill /></ActionIcon>
                        <Text size={"xs"} p={10}>2</Text>
                        <ActionIcon size={"sm"} variant='outline'><RiSubtractLine /></ActionIcon>
                    </div>

                    <div className="prize">
                        <p>$120</p>
                        <p>-12%</p>
                    </div>
                </div>
            </div>

        </>
    )
}

export default CartCard