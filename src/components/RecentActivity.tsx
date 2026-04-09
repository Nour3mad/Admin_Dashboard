import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, AlertCircle, Clock, UserPlus } from 'lucide-react';

const activities = [
  { id: 1, type: 'success', title: 'تمت إضافة منتج جديد', time: 'منذ 5 دقائق', icon: CheckCircle2, color: 'text-emerald-500', bg: 'bg-emerald-50' },
  { id: 2, type: 'warning', title: 'محاولة تسجيل دخول فاشلة', time: 'منذ 2 ساعتين', icon: AlertCircle, color: 'text-rose-500', bg: 'bg-rose-50' },
  { id: 3, type: 'info', title: 'تم تحديث النظام بنجاح', time: 'منذ 5 ساعات', icon: Clock, color: 'text-blue-500', bg: 'bg-blue-50' },
  { id: 4, type: 'default', title: 'تسجيل مستخدم جديد: أحمد محمد', time: 'منذ يوم واحد', icon: UserPlus, color: 'text-primary-500', bg: 'bg-primary-50' },
];

export const RecentActivity: React.FC = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 }}
      className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm col-span-1"
    >
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-bold text-slate-800">أحدث النشاطات</h3>
        <button className="text-sm font-medium text-primary-600 hover:text-primary-700 transition-colors">عرض الكل</button>
      </div>

      {/* 
        NOTE FOR ANTIGRAVITY BACKEND INTEGRATION:
        Replace this hardcoded array mapping with data fetched from your AntiGravity API.
        Example: `const { data: logs } = useQuery('/api/v1/system-logs')`
      */}
      <div className="relative border-r-2 border-slate-100 pr-4 ml-2 space-y-6">
        {activities.map((activity) => {
          const Icon = activity.icon;
          return (
            <div key={activity.id} className="relative flex items-start gap-4 transition-all hover:bg-slate-50 p-2 -mr-6 pr-6 rounded-lg">
              <div className={`absolute -right-[11px] top-2 w-5 h-5 rounded-full border-4 border-white ${activity.bg} flex items-center justify-center`}>
                <div className={`w-2 h-2 rounded-full ${activity.color.replace('text-', 'bg-')}`}></div>
              </div>
              
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${activity.bg}`}>
                <Icon className={`w-5 h-5 ${activity.color}`} />
              </div>
              
              <div className="flex-1">
                <p className="text-sm font-semibold text-slate-800">{activity.title}</p>
                <p className="text-xs text-slate-500 mt-1">{activity.time}</p>
              </div>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
};
