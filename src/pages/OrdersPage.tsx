import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart, Search, ChevronDown, Clock, CheckCircle, XCircle, RefreshCw } from 'lucide-react';

const pageVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.35, ease: 'easeOut' } },
};

const mockOrders = [
  { id: '#ORD-7829', customer: 'شركة الأمل للتقنية', product: 'نظام إدارة المخزون', date: '٩ أبريل ٢٠٢٦', amount: '1,200 ر.س', status: 'مكتمل' },
  { id: '#ORD-7830', customer: 'مؤسسة النور', product: 'حلول الأمن السيبراني', date: '٨ أبريل ٢٠٢٦', amount: '3,500 ر.س', status: 'قيد المعالجة' },
  { id: '#ORD-7831', customer: 'مجموعة الرياض', product: 'منصة التحليلات الذكية', date: '٧ أبريل ٢٠٢٦', amount: '2,800 ر.س', status: 'مكتمل' },
  { id: '#ORD-7832', customer: 'تقنيات الخليج', product: 'تكامل API', date: '٦ أبريل ٢٠٢٦', amount: '4,000 ر.س', status: 'ملغي' },
  { id: '#ORD-7833', customer: 'شركة الابداع', product: 'خدمة الدعم الفني', date: '٥ أبريل ٢٠٢٦', amount: '500 ر.س', status: 'قيد المعالجة' },
  { id: '#ORD-7834', customer: 'مركز البيانات الوطني', product: 'التقارير الآلية', date: '٤ أبريل ٢٠٢٦', amount: '900 ر.س', status: 'مكتمل' },
];

const statusConfig: Record<string, { color: string; icon: React.ReactNode }> = {
  'مكتمل': { color: 'bg-emerald-100 text-emerald-700', icon: <CheckCircle className="w-3.5 h-3.5" /> },
  'قيد المعالجة': { color: 'bg-blue-100 text-blue-700', icon: <RefreshCw className="w-3.5 h-3.5" /> },
  'ملغي': { color: 'bg-rose-100 text-rose-700', icon: <XCircle className="w-3.5 h-3.5" /> },
};

const summaryCards = [
  { label: 'إجمالي الطلبات', value: '384', icon: ShoppingCart, color: 'text-primary-600 bg-primary-50' },
  { label: 'مكتملة', value: '261', icon: CheckCircle, color: 'text-emerald-600 bg-emerald-50' },
  { label: 'قيد المعالجة', value: '98', icon: Clock, color: 'text-blue-600 bg-blue-50' },
  { label: 'ملغية', value: '25', icon: XCircle, color: 'text-rose-600 bg-rose-50' },
];

const OrdersPage: React.FC = () => {
  const [filter, setFilter] = useState('الكل');
  const filters = ['الكل', 'مكتمل', 'قيد المعالجة', 'ملغي'];

  const filtered = filter === 'الكل' ? mockOrders : mockOrders.filter(o => o.status === filter);

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
            <div className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center">
              <ShoppingCart className="w-5 h-5 text-amber-600" />
            </div>
            إدارة الطلبات
          </h1>
          <p className="text-slate-500 text-sm mt-1">تتبع ومراجعة جميع طلبات النظام</p>
        </div>
        <button className="flex items-center gap-2 border border-slate-200 bg-white text-slate-600 px-4 py-2.5 rounded-xl text-sm hover:bg-slate-50 transition-colors">
          <ChevronDown className="w-4 h-4" />
          تصدير البيانات
        </button>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {summaryCards.map((card) => {
          const Icon = card.icon;
          return (
            <div key={card.label} className="bg-white rounded-2xl border border-slate-100 shadow-sm p-4 flex items-center gap-3">
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${card.color}`}>
                <Icon className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-slate-500">{card.label}</p>
                <p className="text-xl font-bold text-slate-800">{card.value}</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Filters & Search */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
        <div className="flex gap-2 flex-wrap">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                filter === f
                  ? 'bg-primary-600 text-white shadow-sm shadow-primary-200'
                  : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50'
              }`}
            >
              {f}
            </button>
          ))}
        </div>
        <div className="relative w-full sm:w-64">
          <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input
            type="text"
            placeholder="بحث عن طلب..."
            className="w-full bg-white border border-slate-200 rounded-xl pr-9 py-2.5 pl-4 text-sm outline-none focus:ring-2 focus:ring-primary-500"
          />
        </div>
      </div>

      {/* Orders Table */}
      <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-slate-50 border-b border-slate-100">
            <tr>
              <th className="text-right text-slate-500 font-medium px-6 py-4">رقم الطلب</th>
              <th className="text-right text-slate-500 font-medium px-6 py-4 hidden md:table-cell">العميل</th>
              <th className="text-right text-slate-500 font-medium px-6 py-4 hidden lg:table-cell">المنتج</th>
              <th className="text-right text-slate-500 font-medium px-6 py-4 hidden sm:table-cell">التاريخ</th>
              <th className="text-right text-slate-500 font-medium px-6 py-4">المبلغ</th>
              <th className="text-right text-slate-500 font-medium px-6 py-4">الحالة</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-50">
            {filtered.map((order) => {
              const cfg = statusConfig[order.status];
              return (
                <tr key={order.id} className="hover:bg-slate-50/60 transition-colors">
                  <td className="px-6 py-4 font-mono font-medium text-primary-600">{order.id}</td>
                  <td className="px-6 py-4 text-slate-700 hidden md:table-cell">{order.customer}</td>
                  <td className="px-6 py-4 text-slate-500 hidden lg:table-cell">{order.product}</td>
                  <td className="px-6 py-4 text-slate-500 hidden sm:table-cell">{order.date}</td>
                  <td className="px-6 py-4 font-bold text-slate-800">{order.amount}</td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-medium ${cfg.color}`}>
                      {cfg.icon}
                      {order.status}
                    </span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        {filtered.length === 0 && (
          <div className="py-16 text-center text-slate-400">لا توجد طلبات تطابق هذا الفلتر.</div>
        )}
      </div>
    </motion.div>
  );
};

export default OrdersPage;
