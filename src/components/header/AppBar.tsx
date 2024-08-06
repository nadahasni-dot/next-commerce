import { Button } from "../ui/button";
import { HiShoppingCart } from "react-icons/hi";
import SearchInput from "./SearchInput";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../ui/navigation-menu";
import Link from "next/link";

const AppBar = () => {
  return (
    <header className="bg-background border-b sticky top-0">
      <div className="container flex py-6 px-4 sm:px-6 xl:px-0 gap-6">
        <Link href="/">
          <h1 className="hidden sm:block font-semibold text-2xl text-green-600">
            TOKOPAEDI
          </h1>
        </Link>
        <div className="flex-1 flex flex-col gap-3">
          <SearchInput />
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem className="flex gap-4">
                <Link
                  href="/products/category/electronics"
                  legacyBehavior
                  passHref
                >
                  <NavigationMenuLink className="text-sm text-neutral-600 hover:text-neutral-900 transition">
                    Elektronik
                  </NavigationMenuLink>
                </Link>
                <Link
                  href="/products/category/jewelery"
                  legacyBehavior
                  passHref
                >
                  <NavigationMenuLink className="text-sm text-neutral-600 hover:text-neutral-900 transition">
                    Perhiasan
                  </NavigationMenuLink>
                </Link>
                <Link
                  href="/products/category/mens-clothing"
                  legacyBehavior
                  passHref
                >
                  <NavigationMenuLink className="text-sm text-neutral-600 hover:text-neutral-900 transition">
                    Pakaian Pria
                  </NavigationMenuLink>
                </Link>
                <Link
                  href="/products/category/womens-clothing"
                  legacyBehavior
                  passHref
                >
                  <NavigationMenuLink className="text-sm text-neutral-600 hover:text-neutral-900 transition">
                    Pakaian Wanita
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <Button size="icon" variant="ghost">
          <HiShoppingCart className="w-5 h-5 hover:text-green-600 text-neutral-600 transition" />
        </Button>
        <Button
          variant="outline"
          className="text-green-600 hover:text-green-700 border-green-600"
        >
          Masuk
        </Button>
      </div>
    </header>
  );
};

export default AppBar;
