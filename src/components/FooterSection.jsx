import React from 'react';
import { motion} from 'framer-motion';
import { Instagram, Facebook, Twitter, Sparkles } from 'lucide-react';


// const Footer = () => {
//   return (
//     <footer className="bg-gradient-to-b from-black to-purple-950/20 border-t border-white/10 py-12 px-4">
//       <div className="max-w-7xl mx-auto text-center">
//         <div className="flex items-center justify-center space-x-3 mb-6">
//           <Sparkles className="w-8 h-8 text-purple-500" />
//           <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
//             ELITE MGMT
//           </span>
//         </div>
//         <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
//           Redefining excellence in model management and event production across the Middle East
//         </p>
//         <div className="flex justify-center space-x-6 mb-8">
//           {[Instagram, Facebook, Twitter].map((Icon, idx) => (
//             <button
//               key={idx}
//               className="p-2 bg-white/5 hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600 rounded-lg transition-all hover:scale-110"
//             >
//               <Icon className="w-5 h-5 text-gray-400 hover:text-white transition-colors" />
//             </button>
//           ))}
//         </div>
//         <p className="text-gray-500 text-sm">
//           © 2025 Elite Management. All rights reserved.
//         </p>
//       </div>
//     </footer>
//   );
// };
// export default Footer;

 const Footer = () => {
const footer = { hidden: { opacity: 0, y: 12 }, show: { opacity: 1, y: 0, transition: { duration: 0.6 } } };


return (
<motion.footer initial="hidden" whileInView="show" variants={footer} viewport={{ once: true, amount: 0.2 }} className="bg-gradient-to-b from-black to-purple-950/20 border-t border-white/10 py-12 px-4">
<div className="max-w-7xl mx-auto text-center relative">
<motion.div animate={{ y: [0, -6, 0] }} transition={{ repeat: Infinity, duration: 6 }} className="flex items-center justify-center space-x-3 mb-6">
<Sparkles className="w-8 h-8 text-purple-500" />
<span className="text-2xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">ELITE MGMT</span>
</motion.div>


<motion.p className="text-gray-400 mb-8 max-w-2xl mx-auto" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.15 }}>
Redefining excellence in model management and event production across the Middle East
</motion.p>


<div className="flex justify-center space-x-6 mb-8">
{[Instagram, Facebook, Twitter].map((Icon, idx) => (
<motion.button key={idx} whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.96 }} className="p-2 bg-white/5 hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600 rounded-lg transition-all hover:scale-110">
<Icon className="w-5 h-5 text-gray-400 hover:text-white transition-colors" />
</motion.button>
))}
</div>


<motion.p className="text-gray-500 text-sm">© 2025 Elite Management. All rights reserved.</motion.p>


{/* small shimmer line */}
<motion.div aria-hidden className="absolute left-0 right-0 bottom-1 h-0.5 mx-auto max-w-lg rounded-full opacity-30"
style={{ background: 'linear-gradient(90deg, transparent, rgba(167,139,250,0.25), transparent)' }}
animate={{ x: [0, 120, 0] }}
transition={{ repeat: Infinity, duration: 4 }}
/>
</div>
</motion.footer>
);
};

export default Footer;