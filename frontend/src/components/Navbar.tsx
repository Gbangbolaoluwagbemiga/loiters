"use client";

import { Wallet } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [isConnected, setIsConnected] = useState(false);

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-black/50 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600">
            <span className="text-xl font-bold text-white">L</span>
          </div>
          <span className="text-xl font-bold tracking-tight text-white">Loiters</span>
        </div>
        
        <div className="hidden md:flex items-center gap-8">
          <a href="#" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">Explore</a>
          <a href="#" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">Communities</a>
          <a href="#" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">Reputation</a>
        </div>

        <button 
          onClick={() => setIsConnected(!isConnected)}
          className="flex items-center gap-2 rounded-full bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition-all hover:bg-blue-500 hover:shadow-[0_0_20px_rgba(37,99,235,0.4)] active:scale-95"
        >
          <Wallet size={18} />
          {isConnected ? "Connected" : "Connect Wallet"}
        </button>
      </div>
    </nav>
  );
}
