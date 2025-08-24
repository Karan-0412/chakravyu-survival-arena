import { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import {
  Search,
  Users,
  User,
  Hash,
  ChevronRight,
  ChevronDown,
} from "lucide-react";
import chakravyuLogo from "../data/logos/chakravyu-logo.png";

// cut from here to there and import the file here
import { mockTeams } from "../data/teams.js";

// Floating particles component
const FloatingParticles = () => {
  const particles = Array.from({ length: 20 }, (_, i) => i);

  return (
    <div className="confirmed-teams fixed inset-0 pointer-events-none overflow-hidden">
      {particles.map((particle) => (
        <motion.div
          key={particle}
          className="absolute w-1 h-1 bg-purple-400/20 rounded-full"
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            opacity: 0,
          }}
          animate={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
};

export default function ConfirmedTeams() {
  const [searchTerm, setSearchTerm] = useState("");
  const [expandedTeam, setExpandedTeam] = useState<number | null>(null);
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  const filteredTeams = mockTeams.filter(
    (team) =>
      team.teamName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      team.leader.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      team.members.some((member) =>
        member.name.toLowerCase().includes(searchTerm.toLowerCase()),
      ),
  );

  const handleTeamClick = (teamId: number) => {
    setExpandedTeam(expandedTeam === teamId ? null : teamId);
  };

    const expandVariants: Variants = {
    collapsed: {
      height: 0,
      opacity: 0,
      scale: 0.95,
      transition: {
        duration: 0.4,
        ease: [0.04, 0.62, 0.23, 0.98],
      },
    },
    expanded: {
      height: "auto",
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.04, 0.62, 0.23, 0.98],
      },
    },
  };

  const headerVariants: Variants = {
    hidden: { opacity: 0, y: -50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 1,
      },
    },
  };

  const searchVariants: Variants = {
    focused: {
      scale: 1.02,
      boxShadow: "0 25px 50px -12px rgba(147, 51, 234, 0.25)",
      transition: { duration: 0.3 },
    },
    unfocused: {
      scale: 1,
      boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
      transition: { duration: 0.3 },
    },
  };

  const logoFloatVariants: Variants = {
    animate: {
      y: [-8, 8, -8],
      rotate: [-2, 2, -2],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const titleVariants: Variants = {
    animate: {
      backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "linear",
      },
    },
  };
  const underlineVariants: Variants = {
  animate: {
    scaleX: [0.8, 1, 0.8],
    opacity: [0.7, 1, 0.7],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-950 via-slate-900 to-black relative overflow-hidden">
      {/* Floating Particles */}
      <FloatingParticles />

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-violet-500/5 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.2, 0.4],
            x: [0, -40, 0],
            y: [0, 20, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="container mx-auto px-4 py-6 max-w-7xl relative z-10">
        {/* Enhanced Animated Header */}
        <motion.div
          variants={headerVariants}
          initial="hidden"
          animate="visible"
          className="text-center mb-8"
        >
          <div className="flex items-center justify-center gap-6 mb-4">
            {/* Image Placeholder Space */}
            <motion.div
              className="w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 bg-gradient-to-br from-purple-500/20 to-violet-600/20 rounded-2xl border-2 border-dashed border-purple-400/30 flex items-center justify-center shadow-2xl backdrop-blur-sm"
              variants={logoFloatVariants}
              animate="animate"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 25px 50px -12px rgba(147, 51, 234, 0.4)",
              }}
              transition={{ duration: 0.3 }}
            >
              <div className="text-center">
                <img
            src={chakravyuLogo}
            alt="logo"
            className="max-w-full max-h-full object-contain"
          />
              </div>
            </motion.div>

            <div className="text-left">
              <motion.h1
                className="text-section-title text-2xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-purple-200 via-violet-200 to-purple-300 bg-clip-text text-transparent bg-size-200"
                variants={titleVariants}
                animate="animate"
                style={{
                  backgroundSize: "200% 100%",
                }}
              >
                Confirmed Teams
              </motion.h1>
              <motion.div
                className="h-1 bg-gradient-to-r from-purple-500 to-violet-600 rounded-full mt-2"
                variants={underlineVariants}
                animate="animate"
              />
            </div>
          </div>

          <motion.p
            className="text-purple-300/80 text-sm md:text-lg max-w-2xl mx-auto px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            whileHover={{
              scale: 1.02,
              transition: { duration: 0.2 },
            }}
          >
            Browse and search through all confirmed teams and their members
          </motion.p>
        </motion.div>

        {/* Enhanced Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          className="relative max-w-full md:max-w-2xl mx-auto mb-8"
        >
          <motion.div
            className="relative"
            variants={searchVariants}
            animate={isSearchFocused ? "focused" : "unfocused"}
          >
            <motion.div
              className="absolute left-3 md:left-4 top-1/2 transform -translate-y-1/2"
              animate={{
                rotate: isSearchFocused ? 180 : 0,
                scale: isSearchFocused ? 1.1 : 1,
              }}
              transition={{ duration: 0.3 }}
            >
              <Search className="text-purple-400 w-4 h-4 md:w-5 md:h-5" />
            </motion.div>

            <input
              type="text"
              placeholder="Search teams, leaders, or members..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onFocus={() => setIsSearchFocused(true)}
              onBlur={() => setIsSearchFocused(false)}
              className="w-full pl-10 md:pl-12 pr-4 md:pr-6 py-3 md:py-4 bg-purple-900/40 backdrop-blur-sm border border-purple-700/30 rounded-xl md:rounded-2xl focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 transition-all duration-300 text-purple-100 placeholder-purple-300/60 text-sm md:text-lg shadow-xl"
            />

            {/* Search glow effect */}
            {isSearchFocused && (
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-violet-500/20 rounded-xl md:rounded-2xl blur-xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              />
            )}
          </motion.div>
        </motion.div>

        {/* Corrected Teams List with AnimatePresence */}
        <div className="space-y-3 md:space-y-4">
          <AnimatePresence mode="wait">
            {filteredTeams.length > 0 ? (
              filteredTeams.map((team) => {
                const isExpanded = expandedTeam === team.id;
                return (
                  <motion.div
                    key={team.id}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20, transition: { duration: 0.3 } }}
                    transition={{ duration: 0.5, type: "spring", stiffness: 100, damping: 20 }}
                  >
                    <div
                      className="group bg-purple-900/20 backdrop-blur-sm border border-purple-700/20 rounded-xl md:rounded-2xl hover:bg-purple-800/30 hover:border-purple-500/40 transition-all duration-300 relative overflow-hidden shadow-lg hover:shadow-xl cursor-pointer"
                      onClick={() => handleTeamClick(team.id)}
                    >
                      {/* Simple background gradient */}
                      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-violet-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                      {/* Main Team Header */}
                      <div className="relative z-10 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 p-4 md:p-6">
                        {/* Team Icon & Name */}
                        <div className="flex items-center gap-3 flex-shrink-0">
                          <div className="p-2 bg-gradient-to-br from-purple-500 to-violet-600 rounded-lg shadow-md transition-all duration-300">
                            <Users className="w-4 h-4 md:w-5 md:h-5 text-white" />
                          </div>

                          <div>
                            <h3 className="text-lg md:text-xl font-bold text-purple-100 group-hover:text-purple-200 transition-colors duration-300">
                              {team.teamName}
                            </h3>
                            <div className="sm:hidden">
                              <p className="text-xs text-purple-400/80 uppercase tracking-wide">
                                Team #{team.id}
                              </p>
                            </div>
                          </div>
                        </div>

                        {/* Separator */}
                        <div className="hidden sm:block w-px h-12 bg-purple-600/30 group-hover:bg-purple-500/50 transition-colors duration-300" />

                        {/* Leader Info */}
                        <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 flex-grow">
                          <div className="flex items-center gap-3">
                            <div className="p-1.5 bg-purple-800/30 rounded-lg group-hover:bg-purple-600/30 transition-colors duration-300">
                              <User className="w-3 h-3 md:w-4 md:h-4 text-purple-300 group-hover:text-purple-200" />
                            </div>
                            <div>
                              <p className="text-xs text-purple-400/80 uppercase tracking-wide">
                                Leader
                              </p>
                              <p className="text-sm md:text-base font-semibold text-purple-200">
                                {team.leader.name}
                              </p>
                            </div>
                          </div>

                          <div className="flex items-center gap-3">
                            <div className="p-1.5 bg-purple-800/30 rounded-lg group-hover:bg-purple-600/30 transition-colors duration-300">
                              <Hash className="w-3 h-3 md:w-4 md:h-4 text-purple-300 group-hover:text-purple-200" />
                            </div>
                            <div>
                              <p className="text-xs text-purple-400/80 uppercase tracking-wide">
                                UID
                              </p>
                              <p className="text-sm md:text-base font-mono font-semibold text-purple-200 bg-purple-800/20 px-2 py-1 rounded group-hover:bg-purple-600/20 transition-colors duration-300">
                                {team.leader.uid}
                              </p>
                            </div>
                          </div>
                        </div>

                        {/* Expand/Collapse Indicator */}
                        <div className="flex items-center justify-center w-8 h-8 rounded-full bg-purple-800/30 group-hover:bg-purple-600/30 transition-all duration-300">
                          {isExpanded ? (
                            <ChevronDown className="w-4 h-4 text-purple-300 group-hover:text-purple-200" />
                          ) : (
                            <ChevronRight className="w-4 h-4 text-purple-300 group-hover:text-purple-200" />
                          )}
                        </div>
                      </div>

                      {/* Expandable Members Section */}
                      <AnimatePresence>
                        {isExpanded && (
                          <motion.div
                            initial="collapsed"
                            animate="expanded"
                            exit="collapsed"
                            variants={expandVariants}
                            className="overflow-hidden"
                          >
                            <div className="px-4 md:px-6 pb-4 md:pb-6 border-t border-purple-700/20">
                              <div className="pt-4">
                                <h4 className="text-sm font-semibold text-purple-300 uppercase tracking-wide mb-4 flex items-center gap-2">
                                  <Users className="w-4 h-4" />
                                  Team Members ({team.members.length})
                                </h4>

                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                  {team.members.map((member) => (
                                    <div
                                      key={member.uid}
                                      className="bg-purple-800/20 rounded-lg p-4 border border-purple-700/20 hover:border-purple-500/40 hover:bg-purple-700/20 transition-colors duration-300 relative overflow-hidden"
                                    >
                                      <div className="flex items-start gap-3 relative z-10">
                                        <div className="p-1.5 bg-purple-700/30 rounded-lg">
                                          <User className="w-3 h-3 text-purple-300" />
                                        </div>
                                        <div className="flex-1 min-w-0">
                                          <p className="text-sm font-semibold text-purple-200 truncate">
                                            {member.name}
                                          </p>
                                          <div className="flex items-center gap-1">
                                            <Hash className="w-3 h-3 text-purple-400" />
                                            <p className="text-xs font-mono text-purple-300 bg-purple-700/20 px-2 py-1 rounded">
                                              {member.uid}
                                            </p>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </motion.div>
                );
              })
            ) : (
              <motion.div
                key="no-teams-found"
                initial={{ opacity: 0, scale: 0.8, y: 50 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, y: -50 }}
                transition={{ duration: 0.5, type: "spring" }}
                className="text-center py-12 md:py-16"
              >
                <div className="p-4 bg-purple-800/30 rounded-full w-16 h-16 md:w-20 md:h-20 mx-auto mb-6 flex items-center justify-center">
                  <Search className="w-6 h-6 md:w-8 md:h-8 text-purple-400" />
                </div>

                <h3 className="text-xl md:text-2xl font-semibold text-purple-300 mb-2">
                  No teams found
                </h3>

                <p className="text-purple-400/80">
                  Try adjusting your search terms
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Team Count */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-8 md:mt-12"
        >
          <p className="text-purple-400/80 text-sm md:text-lg">
            Showing{" "}
            <span className="font-semibold text-purple-200">
              {filteredTeams.length}
            </span>{" "}
            of{" "}
            <span className="font-semibold text-purple-200">
              {mockTeams.length}
            </span>{" "}
            confirmed teams
          </p>
        </motion.div>
      </div>
    </div>
  );
}