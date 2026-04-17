import { motion, type Variants } from 'framer-motion';
import { Users, TrendingUp, ShoppingBag, DollarSign } from 'lucide-react';

const stats = [
  {
    title: 'إجمالي المستخدمين',
    value: '8,459',
    change: '+12.5%',
    isPositive: true,
    icon: Users,
    color: 'bg-blue-500',
    lightColor: 'bg-blue-50 text-blue-600',
  },
  {
    title: 'المبيعات الجديدة',
    value: '1,240',
    change: '+8.2%',
    isPositive: true,
    icon: TrendingUp,
    color: 'bg-primary-500',
    lightColor: 'bg-primary-50 text-primary-600',
  },
  {
    title: 'الطلبات النشطة',
    value: '384',
    change: '-2.4%',
    isPositive: false,
    icon: ShoppingBag,
    color: 'bg-amber-500',
    lightColor: 'bg-amber-50 text-amber-600',
  },
  {
    title: 'الإيرادات',
    value: '$84,290',
    change: '+18.7%',
    isPositive: true,
    icon: DollarSign,
    color: 'bg-emerald-500',
    lightColor: 'bg-emerald-50 text-emerald-600',
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: 'spring' as const, stiffness: 300, damping: 24 },
  },
};

export const StatisticCards = () => {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-8"
    >
      {stats.map((stat, i) => {
        const Icon = stat.icon;
        return (
          <motion.div
            key={i}
            variants={itemVariants}
            className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group"
          >
            {/* Background accent line on hover */}
            <div className={`absolute top-0 right-0 w-full h-1 ${stat.color} transform origin-right scale-x-0 group-hover:scale-x-100 transition-transform duration-300`}></div>
            
            <div className="flex justify-between items-start mb-4">
              <div>
                <p className="text-sm font-medium text-slate-500 mb-1">{stat.title}</p>
                <h3 className="text-2xl font-bold text-slate-800">{stat.value}</h3>
              </div>
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${stat.lightColor}`}>
                <Icon className="w-6 h-6" />
              </div>
            </div>
            
            <div className="flex items-center text-sm">
              <span
                className={`font-medium px-2 py-0.5 rounded-md ${
                  stat.isPositive ? 'bg-emerald-50 text-emerald-600' : 'bg-rose-50 text-rose-600'
                }`}
              >
                {stat.change}
              </span>
              <span className="text-slate-400 mr-2">مقارنة بالشهر الماضي</span>
            </div>
          </motion.div>
        );
      })}
    </motion.div>
  );
};
