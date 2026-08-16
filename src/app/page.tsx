import { ToggleTheme } from "@/components/toggle-theme";

export default function Home() {
  return (
    <div className="flex min-h-svh h-400 items-center justify-center">
      Page <ToggleTheme />
    </div>
  );
}
