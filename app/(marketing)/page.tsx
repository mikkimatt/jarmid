import { Button } from "@/components/ui/button";
import { Medal } from "lucide-react";
import Link from "next/link";
import localFont from "next/font/local";
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";

const headingFont = localFont({
  src: "../../public/fonts/font.woff2",
});

const textFont = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const MarketingPage = () => {
  return (
    <div className="flex items-center justify-center flex-col">
      <div
        className={cn(
          "flex items-center justify-center flex-col",
          headingFont.className
        )}
      >
        <h1 className="text-3xl md:text-6xl text-center text-neutral-800 mb-6">
          Jarmið fyrir alla nema yfirmenn
        </h1>
        <div className="text-3xl md:text-5xl bg-gradient-to-r from-red-800 to-red-400 text-white px-4 p-2 rounded-md pb-4 w-fit">
          Ekki gleyma þér!
        </div>
      </div>
      <div
        className={cn(
          "text-sm md:text-xl text-neutral-400 mt-4 max-w-xs md:max-w-2xl text-center mx-auto",
          textFont.className
        )}
      >
        Vinnustaða grín og gaman, þar sem allir eru velkomnir. Hér er hægt að setja in jarm dagsins og skoða hvað aðrir eru að segja. - Jarmið, ekki segja yfirmanninum 🤫
      </div>
      <Button className="hover:opacity-85 transition mt-6" size="lg" asChild>
        <Link href="/sign-up">Komdu í Jarmið</Link>
      </Button>
    </div>
  );
};

export default MarketingPage;
