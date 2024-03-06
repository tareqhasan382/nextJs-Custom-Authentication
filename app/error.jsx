
"use client"
import Link from "next/link";

export default function GlobalError({ error, reset }) {
  return (
    <div className=" flex flex-col w-screen h-screen items-center justify-center gap-3 ">
      <h2 className=" lg:text-4xl text-2xl font-semibold ">
        Something went wrong!
      </h2>
      <p>{error && error}</p>
      <Link href="/">
        <button className=" px-4 py-2 text-xl font-semibold bg-green-700 text-white rounded ">
          Return Home
        </button>
      </Link>
      <button
        onClick={() => reset()}
        className=" px-4 py-2 text-xl font-semibold bg-green-700 text-white rounded "
      >
        Try again
      </button>
    </div>
  );
}
