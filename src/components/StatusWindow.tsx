import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface StatusWindowProps {
  stats: {
    level: number;
    strength: number;
    intelligence: number;
    agility: number;
    perception: number;
    mana: number;
  };
}

export default function StatusWindow({ stats }: StatusWindowProps) {
  const calculateBarWidth = (value: number) => {
    const max = 250;
    const percentage = (value / max) * 100;
    return `${Math.min(percentage, 100)}%`;
  };

  return (
    <motion.div
      className="bg-zinc-900/90 border border-gray-800 rounded-lg p-6 backdrop-blur-sm shadow-lg shadow-red-900/10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-xl font-bold text-white">Status Window</h3>
          <p className="text-gray-400 text-sm">Sung Jin-Woo</p>
        </div>
        <div className="bg-gradient-to-r from-red-600 to-red-800 text-white px-3 py-1 rounded-md text-sm font-medium">
          Level {stats.level}
        </div>
      </div>

      <div className="space-y-4">
        {Object.entries(stats).map(([key, value], index) => {
          if (key === "level") return null;

          return (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 * index }}
              className="space-y-1"
            >
              <div className="flex justify-between items-center">
                <span className="text-gray-300 capitalize">{key}</span>
                <span
                  className={cn(
                    "text-sm font-medium",
                    key === "mana" && value === 9999
                      ? "text-blue-400"
                      : "text-gray-300"
                  )}
                >
                  {value === 9999 ? "∞" : value}
                </span>
              </div>
              <div className="h-2 bg-zinc-800 rounded-full overflow-hidden">
                <motion.div
                  className={cn(
                    "h-full rounded-full",
                    key === "strength" &&
                      "bg-gradient-to-r from-red-600 to-red-500",
                    key === "intelligence" &&
                      "bg-gradient-to-r from-blue-600 to-blue-500",
                    key === "agility" &&
                      "bg-gradient-to-r from-green-600 to-green-500",
                    key === "perception" &&
                      "bg-gradient-to-r from-purple-600 to-purple-500",
                    key === "mana" &&
                      "bg-gradient-to-r from-blue-400 to-indigo-600"
                  )}
                  initial={{ width: 0 }}
                  animate={{
                    width:
                      key === "mana" && value === 9999
                        ? "100%"
                        : calculateBarWidth(value),
                  }}
                  transition={{ duration: 1, delay: 0.2 * index }}
                />
              </div>
            </motion.div>
          );
        })}
      </div>

      <div className="mt-6 pt-4 border-t border-gray-800">
        <div className="flex justify-between items-center">
          <span className="text-gray-400 text-sm">Class</span>
          <span className="text-red-500 font-medium">Shadow Monarch</span>
        </div>
        <div className="flex justify-between items-center mt-2">
          <span className="text-gray-400 text-sm">Rank</span>
          <span className="bg-gradient-to-r from-red-600 to-purple-600 text-transparent bg-clip-text font-bold">
            S
          </span>
        </div>
      </div>
    </motion.div>
  );
}
