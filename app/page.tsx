import { IdeShell } from "@/components/ide/IdeShell";

export default function Home() {
  return (
    <main className="h-screen bg-black overflow-hidden selection:bg-emerald-700 selection:text-white">
      <IdeShell />
    </main>
  );
}
