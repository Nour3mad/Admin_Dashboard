import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, Users, Package, ShoppingCart, BarChart2, Settings, LogOut } from 'lucide-react';
import { motion } from 'framer-motion';

interface SidebarProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  onLogout: () => void;
}

const menuItems = [
  { icon: Home,         label: 'الرئيسية',         to: '/' },
  { icon: Users,        label: 'المستخدمين',        to: '/users' },
  { icon: Package,      label: 'المنتجات',          to: '/products' },
  { icon: ShoppingCart, label: 'الطلبات',           to: '/orders' },
  { icon: BarChart2,    label: 'التقارير',          to: '/reports' },
  { icon: Settings,     label: 'الإعدادات',         to: '/settings' },
];

export const Sidebar: React.FC<SidebarProps> = ({ isOpen, setIsOpen, onLogout }) => {
  return (
    <motion.aside
      animate={{ width: isOpen ? 280 : 80 }}
      transition={{ duration: 0.3, type: 'tween' }}
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
      className="bg-slate-900 border-l border-slate-800 text-slate-300 h-screen sticky top-0 flex flex-col z-20 shrink-0 overflow-hidden"
    >
      {/* Logo / Brand */}
      <div className="flex items-center h-16 px-5 border-b border-slate-800">
        <div className="w-10 h-10 rounded-lg bg-primary-600 flex items-center justify-center shrink-0">
          <span className="text-white font-bold text-xl">ذ</span>
        </div>
        <motion.div
          animate={{ opacity: isOpen ? 1 : 0, x: isOpen ? 0 : -10 }}
          className="mr-3 whitespace-nowrap overflow-hidden"
        >
          <p className="font-bold text-base text-white leading-none">نظام الإدارة الذكي</p>
          <p className="text-xs text-slate-500 mt-0.5">لوحة التحكم</p>
        </motion.div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 py-6 overflow-y-auto">
        <ul className="space-y-1 px-3">
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  end={item.to === '/'}
                  className={({ isActive }) =>
                    `flex items-center px-3 py-3 rounded-xl transition-all duration-200 group ${
                      isActive
                        ? 'bg-primary-600/15 text-primary-400 border border-primary-600/20'
                        : 'hover:bg-slate-800 hover:text-white border border-transparent'
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      <Icon
                        className={`w-5 h-5 shrink-0 transition-colors ${
                          isActive ? 'text-primary-400' : 'text-slate-400 group-hover:text-primary-400'
                        }`}
                      />
                      <motion.span
                        animate={{ opacity: isOpen ? 1 : 0 }}
                        className="mr-3 font-medium whitespace-nowrap text-sm"
                      >
                        {item.label}
                      </motion.span>
                      {isActive && isOpen && (
                        <span className="mr-auto w-1.5 h-1.5 rounded-full bg-primary-400" />
                      )}
                    </>
                  )}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Logout */}
      <div className="p-3 border-t border-slate-800">
        <button
          onClick={onLogout}
          className="flex items-center w-full px-3 py-3 rounded-xl text-slate-400 hover:text-rose-400 hover:bg-rose-500/10 transition-all duration-200 group border border-transparent hover:border-rose-500/20"
        >
          <LogOut className="w-5 h-5 shrink-0" />
          <motion.span
            animate={{ opacity: isOpen ? 1 : 0 }}
            className="mr-3 font-medium whitespace-nowrap text-sm"
          >
            تسجيل الخروج
          </motion.span>
        </button>
      </div>
    </motion.aside>
  );
};
