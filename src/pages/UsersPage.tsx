import React from 'react';
import { motion } from 'framer-motion';
import { Users, UserPlus, Search, Filter, MoreVertical, Shield, Mail } from 'lucide-react';

const pageVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.35, ease: 'easeOut' } },
};

const mockUsers = [
  { id: 1, name: 'أحمد السيد', email: 'ahmed@example.com', role: 'مدير', status: 'نشط', avatar: 'أ' },
  { id: 2, name: 'سارة محمود', email: 'sara@example.com', role: 'محرر', status: 'نشط', avatar: 'س' },
  { id: 3, name: 'محمد خالد', email: 'mohamed@example.com', role: 'مستخدم', status: 'غير نشط', avatar: 'م' },
  { id: 4, name: 'نورهان علي', email: 'nourhan@example.com', role: 'مستخدم', status: 'نشط', avatar: 'ن' },
  { id: 5, name: 'عمر حسن', email: 'omar@example.com', role: 'محرر', status: 'معلق', avatar: 'ع' },
];

const statusColor: Record<string, string> = {
  'نشط': 'bg-emerald-100 text-emerald-700',
  'غير نشط': 'bg-slate-100 text-slate-600',
  'معلق': 'bg-amber-100 text-amber-700',
};

const UsersPage: React.FC = () => {
  return (
    <motion.div
      variants={pageVariants}
      initial="hidden"
      animate="visible"
      className="max-w-7xl mx-auto space-y-6"
    >
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-800 flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center">
              <Users className="w-5 h-5 text-blue-600" />
            </div>
            إدارة المستخدمين
          </h1>
          <p className="text-slate-500 text-sm mt-1">إجمالي {mockUsers.length} مستخدم مسجّل في النظام</p>
        </div>
        <button className="flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white px-4 py-2.5 rounded-xl text-sm font-medium transition-colors shadow-sm">
          <UserPlus className="w-4 h-4" />
          إضافة مستخدم جديد
        </button>
      </div>

      {/* Filters Bar */}
      <div className="flex flex-col sm:flex-row items-center gap-3">
        <div className="relative w-full sm:w-72">
          <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input
            type="text"
            placeholder="بحث عن مستخدم..."
            className="w-full bg-white border border-slate-200 rounded-xl pr-9 py-2.5 pl-4 text-sm text-slate-700 outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          />
        </div>
        <button className="flex items-center gap-2 border border-slate-200 bg-white text-slate-600 px-4 py-2.5 rounded-xl text-sm hover:bg-slate-50 transition-colors">
          <Filter className="w-4 h-4" />
          تصفية
        </button>
      </div>

      {/* Users Table */}
      <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-slate-50 border-b border-slate-100">
            <tr>
              <th className="text-right text-slate-500 font-medium px-6 py-4">المستخدم</th>
              <th className="text-right text-slate-500 font-medium px-6 py-4 hidden md:table-cell">البريد الإلكتروني</th>
              <th className="text-right text-slate-500 font-medium px-6 py-4 hidden lg:table-cell">الدور</th>
              <th className="text-right text-slate-500 font-medium px-6 py-4">الحالة</th>
              <th className="px-6 py-4"></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-50">
            {mockUsers.map((user) => (
              <tr key={user.id} className="hover:bg-slate-50/60 transition-colors">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-primary-100 text-primary-700 flex items-center justify-center font-bold text-sm shrink-0">
                      {user.avatar}
                    </div>
                    <span className="font-medium text-slate-800">{user.name}</span>
                  </div>
                </td>
                <td className="px-6 py-4 text-slate-500 hidden md:table-cell">
                  <div className="flex items-center gap-1.5">
                    <Mail className="w-3.5 h-3.5" />
                    {user.email}
                  </div>
                </td>
                <td className="px-6 py-4 hidden lg:table-cell">
                  <div className="flex items-center gap-1.5 text-slate-600">
                    <Shield className="w-3.5 h-3.5" />
                    {user.role}
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className={`px-2.5 py-1 rounded-lg text-xs font-medium ${statusColor[user.status]}`}>
                    {user.status}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <button className="p-1.5 rounded-lg hover:bg-slate-100 text-slate-400 transition-colors">
                    <MoreVertical className="w-4 h-4" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
};

export default UsersPage;
