"use client";
import React from "react";
import Image from "next/image";
import bottom from "@/images/bg-pattern-bottom.svg";
import card from "@/images/bg-pattern-card.svg";
import top from "@/images/bg-pattern-top.svg";
import avtar from "@/images/image-victor.jpg";
import { type } from "os";

export function Profile() {
  return (
    <div className="w-80 h-[340px] bg-white rounded-lg overflow-hidden text-black  flex flex-col gap-12 ">
      <Image src={card} alt={""} />

      <div className=" w-[100px]  fixed  ">
        {" "}
        
        <Image
          src={top}
          alt={""}
          className="   rounded-full mt-16 ml-[100px]"
        />
      </div>
      <div className=" w-[100px]  fixed  ">
        {" "}
        
        <Image
          src={bottom}
          alt={""}
          className="   rounded-full mt-16 ml-[100px]"
        />
      </div>
      <div className=" w-32  fixed  ">
        {" "}
        
        <Image
          src={avtar}
          alt={""}
          className="   rounded-full mt-[65px] ml-[102px]"
        />
      </div>
      {/* <div className=" w-full  fixed  ">
        {" "}
        
        <Image
          src={avtar}
          alt={""}
          className=" p-2  rounded-full mt-20 ml-28"
        />
      </div> */}
      <div className="flex flex-col  w-full  justify-between  gap-5 p=">
        <div className="flex flex-col gap-1 ">
          <p className=" w-full text-center text-[hsl(229,23%,23%)] font-bold">
            Victor Crest <span className="text-[hsl(227,10%,46%)] font-normal ">26</span>
          </p>
          <p className="w-full text-center text-[hsl(227,10%,46%)] font-normal ">London</p>
        
        </div>
        <hr />
        <div className="flex">
          <Follower count={80} category={"Followers"} />
          <Follower count={80} category={"Likes"} />
          <Follower count={1.4} category={"Photos"} />
        </div>
      </div>
    </div>
  );
}

// Victor Crest 26 London 80K Followers 803K Likes 1.4K Photos

type FollowersType = {
  count: number;
  category: string;
};

export function Follower(props: FollowersType) {
  return (
    <div className="flex flex-col text-black justify-between w-full items-center">
      <p className=" text-[hsl(229,23%,23%)] font-bold">{props.count}K</p>
      <p className="text-[hsl(227,10%,46%)] font-normal text-sm">{props.category} </p>
    </div>
  );
}
