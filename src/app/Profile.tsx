'use client'
import React from 'react'
import Image from "next/image";
import bottom from "@/images/bg-pattern-bottom.svg";
import card from "@/images/bg-pattern-card.svg"
import top from "@/images/bg-pattern-top.svg"
import avtar from "@/images/image-victor.jpg"
import { type } from 'os';



export  function Profile() {
  return (
<div className='w-80 h-80 bg-white rounded-lg overflow-hidden text-black '>
    <Image src={card} alt={''}/>
    {/* <Image src={bottom} alt={''}/> */}

    <p className=" w-full text-center">Victor Crest <span>26</span></p>
    <p className="w-full text-center">London</p>
    <hr />

    <div className="flex">
    <Follower count={80} category={'Followers'}/>
    <Follower count={80} category={'Likes'}/>
    <Follower count={1.4} category={'Photos'}/>
    </div>

</div>

    )
}

// Victor Crest 26 London 80K Followers 803K Likes 1.4K Photos


type FollowersType = {
    count: number
    category:string

}

export  function Follower(props:FollowersType) {
  return (
    <div className='flex flex-col text-black justify-between w-full items-center'>
        <p className="">{props.count}K</p>
        <p className="">{props.category} </p>
        </div>
  )
}