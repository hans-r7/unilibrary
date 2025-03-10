"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";
import { Session } from "next-auth";
import { cn, getInitials } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { HeaderSignOut } from "./HeaderSignOut";

const Header = ({ session }: { session: Session }) => {
  const pathname = usePathname();

  return (
    <header className="my-10 flex justify-between gap-5">
      <div className="flex gap-5">
        <Link href="/">
          <Image src="/icons/logo.svg" alt="logo" width={40} height={40} />
        </Link>
        <p className="font-bold text-xl text-light-100">Bookwize</p>
      </div>

      <ul className="flex flex-row gap-8">
        <li>
          <Link
            href="/my-profile"
            className={cn(
              "text-base cursor-pointer capitalize",
              pathname === "/profile" ? "text-light-200" : "text-light-100"
            )}
          >
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" alt="avatar" />
              <AvatarFallback className="bg-amber-100">
                {getInitials(session?.user?.name || "~~")}
              </AvatarFallback>
            </Avatar>
          </Link>
        </li>
        <li>
          <form action={HeaderSignOut} className="mb-10">
            <Button>Logout</Button>
          </form>
        </li>
      </ul>
    </header>
  );
};

export default Header;
