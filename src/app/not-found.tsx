import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-4 p-4 text-center">
      {/* Replace "/path-to-your-image.png" with the actual path to your image */}
      <Image
        src="/assets/images/capy_not_found.png"
        alt="404 Not Found"
        width={300}
        height={300}
        className="rounded-lg"
      />
      <h1 className="text-4xl font-bold">404 not found oops</h1>
      <Link
        href="/"
        className="px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition-colors"
      >
        Go back home
      </Link>
    </div>
  );
} 