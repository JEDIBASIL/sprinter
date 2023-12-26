"use client"
import { AppTopBar } from '@/components'
import "./style.css"
import { Button, Flex, Tabs, TextInput } from '@mantine/core'
function Profile() {
    return (
        <>
            <AppTopBar />
            <div className="profile_container">
                <h1>Profile</h1>
                <div className="profile_content">
                    <Tabs defaultValue="profile">
                        <Tabs.List>
                            <Tabs.Tab value="profile">Orders</Tabs.Tab>
                            <Tabs.Tab value="security">Security</Tabs.Tab>
                        </Tabs.List>
                        <Tabs.Panel p={20} value='profile'>
                            hello
                        </Tabs.Panel>
                        <Tabs.Panel p={20} value='security'>
                            <div className="box">
                                <h3>Change password</h3>
                                <form action="">
                                    <Flex mt={20} maw={500} justify={"center"} align={"stretch"} gap={10} direction={"column"}>
                                        <TextInput placeholder='Enter old password' label={"Old password"} />
                                        <TextInput placeholder='Enter new password' label={"New password"} />
                                        <TextInput placeholder='Re-enter old password' label={"Confirm new password"} />
                                        <Button w={100}>Update</Button>
                                    </Flex>
                                </form>
                            </div>

                            <div className="box">
                                <h3>Delete account</h3>
                                <Button mt={10} color='red'>Delete account</Button>
                            </div>
                        </Tabs.Panel>
                    </Tabs>
                </div>
            </div>
        </>
    )
}

export default Profile