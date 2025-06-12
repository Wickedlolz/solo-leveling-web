import { useRef } from "react";
import { createFileRoute } from "@tanstack/react-router";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import { ArrowDown, ChevronRight, Shield, Sword, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import StatusWindow from "@/components/StatusWindow";
import GateCard from "@/components/GateCard";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);
  const y = useTransform(scrollYProgress, [0, 0.5], [0, -50]);

  const stats = {
    level: 100,
    strength: 240,
    intelligence: 210,
    agility: 223,
    perception: 190,
    mana: 9999,
  };

  const gates = [
    {
      name: "Red Gate",
      level: "S",
      location: "Seoul",
      danger: "Extreme",
      rewards: "SSS-Rank Items",
      color: "from-red-700 to-red-900",
    },
    {
      name: "Blue Gate",
      level: "A",
      location: "Tokyo",
      danger: "High",
      rewards: "SS-Rank Items",
      color: "from-blue-700 to-blue-900",
    },
    {
      name: "Green Gate",
      level: "B",
      location: "New York",
      danger: "Medium",
      rewards: "S-Rank Items",
      color: "from-green-700 to-green-900",
    },
  ];

  return (
    <section className="relative">
      {/* Hero Section with Video */}
      <div ref={targetRef} className="relative h-screen w-full overflow-hidden">
        <div className="absolute inset-0 bg-black/60 z-10"></div>

        <div className="absolute inset-0 w-full h-full">
          <div className="absolute w-full h-full overflow-hidden">
            <img
              src="https://images6.alphacoders.com/137/1372163.jpeg"
              alt="Solo Leveling: Arise"
            />
            <div className="absolute inset-0 bg-black/60 z-10"></div>
          </div>
        </div>

        <motion.div
          className="relative z-20 flex flex-col items-center justify-center h-full text-center px-4"
          style={{ opacity, scale, y }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-2 inline-block rounded-lg bg-red-600/80 px-3 py-1 text-sm font-medium text-white backdrop-blur-sm"
          >
            The Weakest Hunter
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 tracking-tight"
          >
            SOLO <span className="text-red-500">LEVELING</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="max-w-2xl text-lg md:text-xl text-gray-200 mb-8"
          >
            The journey of Sung Jin-Woo, the world's weakest hunter, as he
            embarks on a quest to become the strongest of them all.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button className="bg-gradient-to-r from-red-600 to-red-900 hover:from-red-700 hover:to-red-800 text-white px-8 py-6 text-lg cursor-pointer">
              Start Reading
            </Button>
            <Button
              variant="outline"
              className="border border-red-600 text-red-600 hover:bg-gradient-to-r hover:from-red-600 hover:to-red-900 hover:text-white px-8 py-6 text-lg transition-colors duration-200 cursor-pointer"
            >
              Watch Trailer
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 2 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce"
          >
            <ArrowDown className="h-8 w-8 text-white/70" />
          </motion.div>
        </motion.div>
      </div>

      {/* Shadow Monarch Section */}
      <section className="relative py-20 bg-zinc-950">
        <div className="container px-4 mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-gradient-to-r from-red-600/20 to-purple-600/20 rounded-lg blur-xl opacity-70"></div>
              <div className="relative bg-zinc-900 p-6 rounded-lg border border-red-500/20">
                <h2 className="text-3xl font-bold text-white mb-2">
                  Shadow Monarch
                </h2>
                <div className="h-1 w-20 bg-gradient-to-r from-red-500 to-purple-600 mb-6"></div>
                <p className="text-gray-300 mb-6">
                  The Shadow Monarch is the ruler of the dead, with the power to
                  command an army of shadows. As Sung Jin-Woo awakens this
                  ancient power, he begins to understand the true nature of the
                  System and his role in the coming war.
                </p>
                <div className="flex flex-wrap gap-4 mb-6">
                  <div className="flex items-center gap-2 bg-zinc-800 px-3 py-2 rounded-md">
                    <Sword className="h-5 w-5 text-red-500" />
                    <span className="text-gray-200">Shadow Extraction</span>
                  </div>
                  <div className="flex items-center gap-2 bg-zinc-800 px-3 py-2 rounded-md">
                    <Shield className="h-5 w-5 text-purple-500" />
                    <span className="text-gray-200">Domain Expansion</span>
                  </div>
                  <div className="flex items-center gap-2 bg-zinc-800 px-3 py-2 rounded-md">
                    <Zap className="h-5 w-5 text-blue-500" />
                    <span className="text-gray-200">Monarch's Authority</span>
                  </div>
                </div>
                <Button className="bg-gradient-to-r from-red-600 to-purple-700 hover:from-red-700 hover:to-purple-800 text-white">
                  Learn More <ChevronRight className="h-4 w-4 ml-1" />
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <StatusWindow stats={stats} />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Gates Section */}
      <section className="py-20 bg-gradient-to-b from-zinc-950 to-zinc-900">
        <div className="container px-4 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Dangerous Gates
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-red-500 to-purple-600 mx-auto mb-6"></div>
            <p className="max-w-2xl mx-auto text-gray-300">
              Gates are portals to monster-filled dungeons that appear randomly
              around the world. Hunters must clear these gates to protect
              humanity and collect valuable resources.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            <AnimatePresence>
              {gates.map((gate, index) => (
                <motion.div
                  key={gate.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <GateCard gate={gate} />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <Button className="bg-gradient-to-r from-zinc-800 to-zinc-900 hover:from-zinc-700 hover:to-zinc-800 border border-red-500/30 text-white px-8">
              View All Gates
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-[url('/solo-leveling-cta-bg.jpg')] bg-cover bg-center relative">
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="container px-4 mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Ready to Arise?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join Sung Jin-Woo on his journey from the world's weakest hunter
              to the Shadow Monarch.
            </p>
            <Button className="bg-gradient-to-r from-red-600 to-red-900 hover:from-red-700 hover:to-red-800 text-white px-10 py-6 text-lg">
              Arise
            </Button>
          </motion.div>
        </div>
      </section>
    </section>
  );
}
