import Link from "next/link"
import { Button } from "@/components/ui/button"

export function HeroBlock() {
  return (
    <div className="bg-black rounded-3xl p-12 flex flex-col justify-center min-h-[calc(100vh-4rem)]">
      <div className="space-y-6">
        <h1 className="text-5xl font-bold text-white leading-tight">
          Collaborative workflow & rapid development
        </h1>
        <p className="text-xl text-white/80">Stay hands-on during hand-off.</p>
        <div className="flex flex-col gap-4 mt-8">
          <Button asChild variant="outline" className="w-full justify-center">
            <Link href="#">Start your project</Link>
          </Button>
          <Button asChild variant="secondary" className="w-full justify-center">
            <Link href="#">Try out online demo</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

