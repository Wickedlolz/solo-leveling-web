import { motion } from "framer-motion";
import { AlertTriangle, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface GateCardProps {
  gate: {
    name: string;
    level: string;
    location: string;
    danger: string;
    rewards: string;
    color: string;
  };
}

export default function GateCard({ gate }: GateCardProps) {
  return (
    <div className="relative group">
      <div className="absolute -inset-1 bg-gradient-to-r from-red-600/30 to-purple-600/30 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000"></div>
      <motion.div
        className="relative bg-zinc-900 border border-zinc-800 rounded-lg overflow-hidden"
        whileHover={{ y: -5 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        <div className={cn("h-2 w-full bg-gradient-to-r", gate.color)}></div>

        <div className="p-6">
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-xl font-bold text-white">{gate.name}</h3>
            <div
              className={cn(
                "text-white font-bold px-2 py-1 rounded text-sm",
                gate.level === "S" && "bg-red-600",
                gate.level === "A" && "bg-blue-600",
                gate.level === "B" && "bg-green-600"
              )}
            >
              {gate.level}-Rank
            </div>
          </div>

          <div className="space-y-3 mb-6">
            <div className="flex justify-between">
              <span className="text-gray-400">Location</span>
              <span className="text-gray-200">{gate.location}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Danger</span>
              <span
                className={cn(
                  gate.danger === "Extreme" && "text-red-500",
                  gate.danger === "High" && "text-orange-500",
                  gate.danger === "Medium" && "text-yellow-500",
                  "flex items-center gap-1"
                )}
              >
                {gate.danger === "Extreme" && (
                  <AlertTriangle className="h-3 w-3" />
                )}
                {gate.danger}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Rewards</span>
              <span className="text-gray-200">{gate.rewards}</span>
            </div>
          </div>

          <Button
            variant="outline"
            className="w-full border-zinc-700 text-white hover:bg-zinc-800 hover:text-white"
          >
            Enter Gate <ChevronRight className="h-4 w-4 ml-1" />
          </Button>
        </div>
      </motion.div>
    </div>
  );
}
