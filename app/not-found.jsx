import Link from "next/link";

export default function NotFound() {
  return (
    <div className=" flex flex-col w-screen h-screen items-center justify-center gap-3 ">
      <h2 className=" lg:text-4xl text-2xl font-semibold ">Not Found</h2>
      <p className=" text-xl font-semibold ">
        Could not find requested resource
      </p>
      <Link href="/">
        <button className=" px-4 py-2 text-xl font-semibold bg-green-700 text-white rounded ">
          Return Home
        </button>
      </Link>
    </div>
  );
}
