import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { cardData } from "./lessons";

export default function Home() {
  return (
    <div className="grid grid-rows-[auto_1fr_auto] items-center justify-items-center min-h-screen font-[family-name:var(--font-geist-sans)] bg-gradient-to-b from-background to-muted/20 px-4 sm:px-6 md:px-8 lg:px-12 py-8 sm:py-12">
      {/* Search Bar */}
      <div className="row-start-1 w-full flex justify-end p-6">
        <Input
          type="search"
          placeholder="Search lessons..."
          className="max-w-sm bg-background/50 backdrop-blur-sm border-muted-foreground/20 focus:border-primary/50 transition-all duration-300"
        />
      </div>
      <main className="flex flex-col row-start-2 items-center sm:items-start gap-8 px-6">
        <div className="flex flex-col items-center sm:items-start gap-4">
          <Image
            className="dark:invert transition-transform duration-500 hover:scale-105"
            src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg"
            alt="Next.js logo"
            width={180}
            height={38}
            priority
          />
          <div className="text-center sm:text-left space-y-2">
            <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
              Welcome to Git Course for Beginners!
            </h1>
            <p className="text-muted-foreground text-lg font-[family-name:var(--font-geist-mono)]">
              Master Git with our interactive lessons
            </p>
          </div>
        </div>
      </main>

      {/* Card Layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full row-start-3 p-6">
        {cardData.map((card, index) => (
          <Link href={card.link} key={index} className="group">
            <Card className="h-full transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 hover:border-primary/50 hover:scale-[1.02]">
              <CardHeader>
                <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">
                  {card.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground/80">{card.description}</CardDescription>
              </CardHeader>
              <CardFooter className="text-sm text-muted-foreground/60">Click to start learning →</CardFooter>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
