import React from 'react';
import { motion } from 'framer-motion';
import { Calendar as CalendarIcon } from 'lucide-react';

const Calendar: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-6"
    >
      <div className="flex items-center space-x-4">
        <CalendarIcon className="w-8 h-8 text-emerald-400" />
        <h1 className="text-3xl font-bold text-white">Kalendar</h1>
      </div>

      <div className="bg-slate-800/50 backdrop-blur-xl rounded-xl p-6 border border-white/10">
        <p className="text-gray-400">Organizujte svoje vrijeme i pratite raspored korepeticija. Ovdje možete vidjeti sve zakazane termine, planirati nove časove i upravljati svojim obavezama.</p>
      </div>
    </motion.div>
  );
};

export default Calendar; 