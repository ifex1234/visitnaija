/* eslint-disable react/no-unescaped-entities */
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { NAV_LINKS } from "@/constants";
import { LucideMenu } from "lucide-react";

export function Drawer() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">
          <LucideMenu />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetClose asChild>
          <ul>
            {NAV_LINKS.map((links) => (
              <li className="text-green-400 font-semibold my-4" key={links.key}>
                {links.label}
              </li>
            ))}
          </ul>
        </SheetClose>
      </SheetContent>
    </Sheet>
  );
}
