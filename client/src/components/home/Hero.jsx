import { motion } from 'framer-motion';
import { FiShield, FiClock, FiTrendingUp, FiArrowUpRight } from 'react-icons/fi';
import CountUp from 'react-countup';

const BiddingHero = () => {
  return (
    //   {/* Animated background elements */}
    //   {/* <div className="absolute inset-0 opacity-10">
    //     <div className="absolute w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl -top-48 -left-48 animate-pulse" />
    //     <div className="absolute w-96 h-96 bg-blue-500/20 rounded-full blur-3xl -bottom-48 -right-48 animate-pulse delay-1000" />
    //   </div> */}

    //   {/* Navigation */}
    //   {/* <nav className="container mx-auto px-6 py-8 flex items-center justify-between">
    //     <motion.div
    //       initial={{ opacity: 0, x: -20 }}
    //       animate={{ opacity: 1, x: 0 }}
    //       className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent"
    //     >
    //       BidSphere
    //     </motion.div>
        
    //     <div className="hidden md:flex items-center gap-8 text-gray-300">
    //       <a href="#features" className="hover:text-emerald-400 transition-colors">Features</a>
    //       <a href="#auctions" className="hover:text-emerald-400 transition-colors">Live Auctions</a>
    //       <a href="#sellers" className="hover:text-emerald-400 transition-colors">For Sellers</a>
    //       <button className="ml-4 px-6 py-2 bg-emerald-500/20 border border-emerald-400/30 rounded-full hover:bg-emerald-500/30 transition-colors">
    //         Get Started
    //       </button>
    //     </div>
    //   </nav> */}

    //   {/* Hero Content */}
      <>
      <div className="container mx-auto px-6 py-24">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-emerald-300 to-cyan-300 bg-clip-text text-transparent mb-8 leading-tight"
            >
            Next-Gen Digital Auction Platform
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-400 mb-12 max-w-3xl mx-auto"
            >
            Engage in real-time global auctions with blockchain-verified security and AI-powered bidding assistance. Experience the future of digital asset trading.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-20"
          >
            <button className="px-8 py-4 bg-emerald-500 hover:bg-emerald-600 rounded-xl font-semibold text-lg flex items-center gap-2 transition-transform hover:scale-105">
              <FiArrowUpRight />
              Join Free Auction
            </button>
            <button className="px-8 py-4 border border-gray-700 hover:border-emerald-500 rounded-xl font-semibold text-lg hover:text-emerald-400 transition-colors">
              Watch Demo
            </button>
          </motion.div>

          {/* Stats Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-24">
            {[
              { icon: FiShield, value: 12840, label: 'Secure Transactions' },
              { icon: FiClock, value: 324, label: 'Live Auctions' },
              { icon: FiTrendingUp, value: 92.7, label: 'Success Rate' },
            ].map((item, index) => (
                <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + index * 0.1 }}
                className="p-6 bg-gray-800/30 backdrop-blur-lg rounded-xl border border-gray-700/50"
                >
                <item.icon className="w-12 h-12 text-emerald-400 mb-4" />
                <div className="text-3xl font-bold mb-2">
                  <CountUp end={item.value} suffix={index === 2 ? '%' : '+'} duration={3} />
                </div>
                <div className="text-gray-400">{item.label}</div>
              </motion.div>
            ))}
          </div>

          {/* Trust Badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="flex flex-wrap items-center justify-center gap-8 opacity-70"
            >
            <span className="flex items-center gap-2">
              <FiShield className="text-emerald-400" /> SSL Secure
            </span>
            <span>•</span>
            <span>PCI DSS Compliant</span>
            <span>•</span>
            <span>24/7 Support</span>
          </motion.div>
        </div>
      </div>
      </>

    //   {/* Floating Auction Preview */}
    //   {/* <motion.div
    //     initial={{ y: 100, opacity: 0 }}
    //     animate={{ y: 0, opacity: 1 }}
    //     transition={{ delay: 0.8 }}
    //     className="absolute bottom-20 right-20 w-96 p-6 bg-gray-800/50 backdrop-blur-lg rounded-xl border border-gray-700/50 hidden lg:block"
    //   >
    //     <div className="flex justify-between mb-4">
    //       <div className="text-sm text-gray-400">Live Auction</div>
    //       <div className="flex items-center gap-2 text-emerald-400">
    //         <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
    //         12 Bidders Active
    //       </div>
    //     </div>
    //     <div className="text-xl font-bold mb-4">Vintage Rolex Collection</div>
    //     <div className="flex justify-between items-center">
    //       <div>
    //         <div className="text-sm text-gray-400">Current Bid</div>
    //         <div className="text-2xl font-bold">$42,850</div>
    //       </div>
    //       <div className="text-sm">
    //         <div className="text-gray-400">Ends in</div>
    //         <div className="font-mono">02:14:36</div>
    //       </div>
    //     </div>
    //   </motion.div> */}
    // {/*  </div> */}
  );
};

export default BiddingHero;