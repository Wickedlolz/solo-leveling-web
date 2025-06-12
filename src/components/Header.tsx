import { useState, useEffect } from "react";
import { Link, useLocation } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Hunters", href: "/hunters" },
  { name: "Gates", href: "/gates" },
  { name: "Dungeons", href: "/dungeons" },
  { name: "Episides", href: "/episodes" },
  { name: "About", href: "/about" },
];

export default function SiteHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-300",
        isScrolled
          ? "bg-black/90 backdrop-blur-md shadow-lg shadow-red-900/20"
          : "bg-transparent"
      )}
    >
      <div className="container flex h-16 items-center justify-between px-4">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-2"
        >
          <Link to="/" className="flex items-center gap-2">
            <motion.div
              className="h-8 w-8 rounded-full bg-gradient-to-br from-red-600 to-red-900 flex items-center justify-center"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="font-bold text-white">SL</span>
            </motion.div>
            <motion.span
              className="font-bold text-xl tracking-tight text-white"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              SOLO LEVELING
            </motion.span>
          </Link>
        </motion.div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index, duration: 0.5 }}
            >
              <Link
                to={item.href}
                className={cn(
                  "relative font-medium text-sm transition-colors hover:text-white",
                  pathname === item.href
                    ? "text-white"
                    : "text-gray-400 hover:text-gray-300"
                )}
              >
                {item.name}
                {pathname === item.href && (
                  <motion.div
                    className="absolute -bottom-1 left-0 h-0.5 w-full bg-red-600"
                    layoutId="navbar-indicator"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
              </Link>
            </motion.div>
          ))}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <Button
              variant="default"
              className="bg-gradient-to-r from-red-600 to-red-900 hover:from-red-700 hover:to-red-800 text-white"
            >
              Arise
            </Button>
          </motion.div>
        </nav>

        {/* Mobile Navigation */}
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden text-white"
            >
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent
            side="right"
            className="bg-zinc-950 border-zinc-800 text-white"
          >
            <div className="flex flex-col gap-6 mt-10">
              <Link to="/" className="flex items-center gap-2">
                <div className="h-8 w-8 rounded-full bg-gradient-to-br from-red-600 to-red-900 flex items-center justify-center">
                  <span className="font-bold text-white">SL</span>
                </div>
                <span className="font-bold text-xl tracking-tight">
                  SOLO LEVELING
                </span>
              </Link>
              <nav className="flex flex-col gap-4">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={cn(
                      "px-2 py-1 rounded-md transition-colors",
                      pathname === item.href
                        ? "bg-red-900/20 text-red-500"
                        : "text-gray-400 hover:text-white hover:bg-zinc-900"
                    )}
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>
              <Button
                variant="default"
                className="bg-gradient-to-r from-red-600 to-red-900 hover:from-red-700 hover:to-red-800 text-white mt-4"
              >
                Arise
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
