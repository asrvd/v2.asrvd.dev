/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */

import FM from "@/components/fm";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col gap-12 w-full h-full">
      <section className="w-full flex flex-col justify-start p-[0.4rem]">
        <h2>Hello ~</h2>
        <p>
          I&apos;m Ashish, a backend-leaning software engineer based in
          Kolkata. I work at <mark>Imagined</mark> (now part of WLDD), mostly
          on backend systems and servers in TypeScript and Node.js, though I
          enjoy working on pretty much anything web. You can find more about what
          I&apos;ve worked on <Link href="/work">here</Link>.
        </p>
        <p className="mb-0">
          Outside work I lift, play football on weekends, and tinker with
          Roblox games. I&apos;m also a big cat person. I almost always have
          music on while working, and <mark>EDEN</mark> is still my favourite
          artist.
        </p>
      </section>
      <FM />
      <section className="w-full flex flex-col justify-start p-[0.4rem]">
        <h2>Find me here ~</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full gap-y-6 gap-x-12">
          <div>
            <p className="mb-2 text-zinc-400 font-semibold">GitHub</p>
            <a href="https://github.com/asrvd">@asrvd</a>
          </div>
          <div>
            <p className="mb-2 text-zinc-400 font-semibold">
              X (formerly Twitter)
            </p>
            <a href="https://x.com/_asheeshh">@_asheeshh</a>
          </div>
          <div>
            <p className="mb-2 text-zinc-400 font-semibold">LinkedIn</p>
            <a href="https://www.linkedin.com/in/asrvd/">@asrvd</a>
          </div>
          <div>
            <p className="mb-2 text-zinc-400 font-semibold">Email</p>
            <a href="mailto:ashirvadbhushan@gmail.com">
              ashirvadbhushan@gmail.com
            </a>
          </div>
          <div>
            <p className="mb-2 text-zinc-400 font-semibold">Discord</p>
            <a href="https://discord.com/users/784363251940458516">@asheeshh</a>
          </div>
          <div>
            <p className="mb-2 text-zinc-400 font-semibold">CV</p>
            <a href="https://asrvd.dev/cv">asrvd.dev/cv</a>
          </div>
        </div>
      </section>
    </div>
  );
}
