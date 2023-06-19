import Image from "next/image";

import bottom from "@/images/bg-pattern-bottom.svg";
import card from "@/images/bg-pattern-card.svg"
import top from "@/images/bg-pattern-top.svg"
import avtar from "@/images/image-victor.jpg"
import {Profile} from "./Profile";



export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-[hsl(185,75%,39%)] font-Rubik">
      <div className=""> 


      <Profile/>
      </div>
    </main>
  );
}
