import { Button } from "@/components/ui/button";
import { OrgControl } from "./_components/org-control";
import Link from "next/link";
import { Heart } from "@/components/icons/heart";
import organizationIdPageProps from "./page";

const OraganizationIdLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="pb-12 w-1/5">
        <div className="space-y-4 py-4">
          <div className="px-3 py-2">
            <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
              Stjórnborð
            </h2>
            <div className="space-y-1">
              <Button
                asChild
                variant="ghost"
                className="w-full justify-start flex gap-2"
              >
                <Link href={`/organization/${organizationIdPageProps}/gallery`}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                    />
                  </svg>
                  Jörm
                </Link>
              </Button>
              <Button
                asChild
                variant="ghost"
                className="w-full justify-start flex gap-2"
              >
                <Link href={`/organization/${organizationIdPageProps}/favorites`}>
                  <Heart />
                  Uppáhalds
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      <OrgControl />
      {children}
    </>
  );
};

export default OraganizationIdLayout;
