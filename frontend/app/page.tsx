import { ThemeToggle } from "@/components/layout/theme-toggle";
import { Button } from "@/components/ui/button";
import { FadeInUp } from "@/components/animations/reveal";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <FadeInUp>
        <h1 className="text-5xl font-bold">Welcome to My Next.js App!</h1>
        <p className="mt-4 text-lg text-gray-600">
          This is a simple starter template with Tailwind CSS and dark mode support.
        </p>
        <div className="mt-6 flex space-x-4">
          <Button variant="primary">Get Started</Button>
        </div>
      </FadeInUp>
      <ThemeToggle />
    </main>
  );
}
