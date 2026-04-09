import React, { useState, useRef, useEffect } from 'react';
import { Search, Bell, MessageSquare, Menu, User, LogOut, Settings, ChevronDown } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface HeaderProps {
  toggleSidebar: () => void;
  onLogout: () => void;
}

export const Header: React.FC<HeaderProps> = ({ toggleSidebar, onLogout }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  // Close dropdown when clicking outside
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  return (
    <header className="h-20 bg-white border-b border-slate-200 px-6 flex items-center justify-between sticky top-0 z-10">
      <div className="flex items-center gap-4">
        <button
          onClick={toggleSidebar}
          className="p-2 rounded-lg text-slate-500 hover:bg-slate-100 transition-colors lg:hidden"
        >
          <Menu className="w-6 h-6" />
        </button>

        <div className="relative group hidden md:block">
          <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
            <Search className="w-5 h-5 text-slate-400 group-focus-within:text-primary-500 transition-colors" />
          </div>
          <input
            type="text"
            className="bg-slate-100 border-none text-slate-900 text-sm rounded-xl focus:ring-2 focus:ring-primary-500 focus:bg-white block w-80 pr-10 p-2.5 transition-all outline-none"
            placeholder="ابحث في النظام..."
          />
        </div>
      </div>

      <div className="flex items-center gap-3 md:gap-5">
        {/* Messages */}
        <button className="relative p-2 text-slate-500 hover:bg-slate-100 rounded-lg transition-colors">
          <MessageSquare className="w-6 h-6" />
          <span className="absolute top-1 right-1 w-2.5 h-2.5 bg-rose-500 border-2 border-white rounded-full"></span>
        </button>

        {/* Notifications */}
        <button className="relative p-2 text-slate-500 hover:bg-slate-100 rounded-lg transition-colors">
          <Bell className="w-6 h-6" />
          <span className="absolute top-1 right-1 flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-primary-500 border-2 border-white"></span>
          </span>
        </button>

        <div className="h-8 w-px bg-slate-200 mx-1"></div>

        {/* User Profile Dropdown */}
        <div className="relative" ref={dropdownRef}>
          <button
            onClick={() => setDropdownOpen((prev) => !prev)}
            className="flex items-center gap-3 p-1 rounded-xl hover:bg-slate-50 transition-colors"
            aria-expanded={dropdownOpen}
            aria-haspopup="true"
          >
            <div className="w-10 h-10 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center shrink-0 border border-primary-200">
              <User className="w-5 h-5" />
            </div>
            <div className="hidden sm:block text-right">
              <p className="text-sm font-bold text-slate-800 leading-none">مدير النظام</p>
              <p className="text-xs text-slate-500 mt-1">admin@system.local</p>
            </div>
            <ChevronDown
              className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`}
            />
          </button>

          {/* Dropdown Menu */}
          {dropdownOpen && (
            <div className="absolute left-0 mt-2 w-52 bg-white rounded-2xl shadow-lg border border-slate-100 py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
              <button
                onClick={() => { navigate('/settings'); setDropdownOpen(false); }}
                className="flex items-center gap-3 w-full px-4 py-2.5 text-sm text-slate-700 hover:bg-slate-50 transition-colors"
              >
                <Settings className="w-4 h-4 text-slate-400" />
                الإعدادات
              </button>
              <div className="my-1 border-t border-slate-100" />
              <button
                onClick={() => { onLogout(); setDropdownOpen(false); }}
                className="flex items-center gap-3 w-full px-4 py-2.5 text-sm text-rose-600 hover:bg-rose-50 transition-colors"
              >
                <LogOut className="w-4 h-4" />
                تسجيل الخروج
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};
