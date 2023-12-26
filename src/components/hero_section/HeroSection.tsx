import React from 'react'
import Image from 'next/image'
import style from "./hero.module.css"
function HeroSection() {
    return (
        <>
            <div className={style.hero_section}>
                <div className={style.text}>
                    <h1>Stone Island purple Jacket</h1>
                    <div className={style.prize_container}>
                        <p>$200</p>
                        <p>-12%</p>
                    </div>
                    <button>Shop now</button>
                </div>
                <div className={style.img_container}>
                    <div className={style.img}>
                        <Image fill src="https://cdn3.yoox.biz/cloud/stonewp/uploads/2023/03/HP-Portrait-Desktop_900x760-6.jpg" alt="wer" />
                    </div>
                    <div className={style.img}>
                        <Image fill src="https://cdn3.yoox.biz/cloud/stonewp/uploads/2023/04/HP-Portrait-Desktop.jpg" alt="wer" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default HeroSection
