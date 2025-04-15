import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { cardData } from "./lessons";

export default function Home() {
  return (
    <div className="grid grid-rows-[auto_1fr_auto] items-center justify-items-center min-h-screen font-[family-name:var(--font-geist-sans)]">
      {/* Search Bar */}
      <div className="row-start-1 w-full flex justify-end p-4">
        {/* <Input type="search" placeholder="Search lessons..." className="max-w-sm" /> */}
      </div>

      <main className="flex flex-col row-start-2 items-center sm:items-start">
        <Image
          className="dark:invert"
          src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <div className="text-center sm:text-left">
          <h1 className="text-2xl font-bold mb-4">Welcome to Git Course for Beginners!</h1>
          <p className="text-sm/6 font-[family-name:var(--font-geist-mono)]">This is a cool thing and more</p>
          <p className="text-sm/6 font-[family-name:var(--font-geist-mono)]">This is a cool thing and more</p>
          <p className="text-sm/6 font-[family-name:var(--font-geist-mono)]">This is a cool thing and more</p>
          <p className="text-sm/6 font-[family-name:var(--font-geist-mono)]">This is a cool thing and more</p>
        </div>
      </main>

      {/* Card Layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full row-start-3">
        {cardData.map((card, index) => (
          <Link href={card.link} key={index}>
            <Card>
              <CardHeader>
                <CardTitle>{card.title}</CardTitle>
                <CardDescription>{card.description}</CardDescription>
              </CardHeader>
              <CardFooter></CardFooter>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
