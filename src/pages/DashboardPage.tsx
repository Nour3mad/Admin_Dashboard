import { motion, type Variants } from 'framer-motion';
import { StatisticCards } from '../components/StatisticCards';
import { PerformanceChart } from '../components/PerformanceChart';
import { RecentActivity } from '../components/RecentActivity';
import { UsersTable } from '../components/UsersTable';

const pageVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.35, ease: 'easeOut' as const } },
};

const DashboardPage = () => {
  return (
    <motion.div
      variants={pageVariants}
      initial="hidden"
      animate="visible"
      className="max-w-7xl mx-auto space-y-6"
    >
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-slate-800 mb-2">
          مرحباً بك مرة أخرى، مدير النظام 👋
        </h1>
        <p className="text-slate-500 text-sm">
          إليك نظرة عامة على ما يحدث في النظام اليوم.
        </p>
      </div>

      <StatisticCards />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <PerformanceChart />
        <RecentActivity />
      </div>

      <UsersTable />
    </motion.div>
  );
};

export default DashboardPage;
