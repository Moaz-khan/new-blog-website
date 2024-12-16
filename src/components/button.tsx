import { Button } from "@/components/ui/button";
import Link from "next/link";

export function ButtonOutline({ text, href }: { text: string; href: string }) {
  return (
    <Link href={href}>
      <Button
        variant="outline"
        className="bg-black text-white hover:bg-slate-950 hover:text-white hover:font-bold rounded">
        {text}
      </Button>
    </Link>
  );
}
