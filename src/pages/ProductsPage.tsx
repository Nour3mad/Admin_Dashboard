import { motion, type Variants } from 'framer-motion';
import { Package, PlusCircle, Search, Tag, Star } from 'lucide-react';

const pageVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.35, ease: 'easeOut' as const } },
};

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: { opacity: 1, scale: 1, transition: { type: 'spring' as const, stiffness: 300, damping: 24 } },
};

const mockProducts = [
  { id: 1, name: 'نظام إدارة المخزون', category: 'برمجيات', price: '1,200 ر.س', stock: 'متاح', rating: 4.8, sales: 142 },
  { id: 2, name: 'حلول الأمن السيبراني', category: 'خدمات', price: '3,500 ر.س', stock: 'متاح', rating: 4.9, sales: 89 },
  { id: 3, name: 'منصة التحليلات الذكية', category: 'برمجيات', price: '2,800 ر.س', stock: 'محدود', rating: 4.6, sales: 204 },
  { id: 4, name: 'خدمة الدعم الفني', category: 'دعم', price: '500 ر.س', stock: 'متاح', rating: 4.7, sales: 67 },
  { id: 5, name: 'تكامل API للمؤسسات', category: 'خدمات', price: '4,000 ر.س', stock: 'غير متاح', rating: 4.5, sales: 31 },
  { id: 6, name: 'التقارير الآلية', category: 'برمجيات', price: '900 ر.س', stock: 'متاح', rating: 4.8, sales: 178 },
];

const stockColor: Record<string, string> = {
  'متاح': 'bg-emerald-100 text-emerald-700',
  'محدود': 'bg-amber-100 text-amber-700',
  'غير متاح': 'bg-rose-100 text-rose-700',
};

const ProductsPage = () => {
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
            <div className="w-10 h-10 rounded-xl bg-violet-100 flex items-center justify-center">
              <Package className="w-5 h-5 text-violet-600" />
            </div>
            المنتجات والخدمات
          </h1>
          <p className="text-slate-500 text-sm mt-1">{mockProducts.length} منتج وخدمة في الكتالوج</p>
        </div>
        <button className="flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white px-4 py-2.5 rounded-xl text-sm font-medium transition-colors shadow-sm">
          <PlusCircle className="w-4 h-4" />
          إضافة منتج جديد
        </button>
      </div>

      {/* Search */}
      <div className="relative w-full sm:w-72">
        <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
        <input
          type="text"
          placeholder="بحث عن منتج..."
          className="w-full bg-white border border-slate-200 rounded-xl pr-9 py-2.5 pl-4 text-sm text-slate-700 outline-none focus:ring-2 focus:ring-primary-500"
        />
      </div>

      {/* Products Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5"
      >
        {mockProducts.map((product) => (
          <motion.div
            key={product.id}
            variants={cardVariants}
            className="bg-white rounded-2xl border border-slate-100 shadow-sm p-5 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 group"
          >
            <div className="flex items-start justify-between mb-3">
              <div className="w-10 h-10 rounded-xl bg-primary-50 flex items-center justify-center">
                <Package className="w-5 h-5 text-primary-600" />
              </div>
              <span className={`text-xs font-medium px-2.5 py-1 rounded-lg ${stockColor[product.stock]}`}>
                {product.stock}
              </span>
            </div>

            <h3 className="font-bold text-slate-800 mb-1 group-hover:text-primary-600 transition-colors">
              {product.name}
            </h3>

            <div className="flex items-center gap-2 mb-3">
              <Tag className="w-3.5 h-3.5 text-slate-400" />
              <span className="text-xs text-slate-400">{product.category}</span>
            </div>

            <div className="flex items-center justify-between pt-3 border-t border-slate-50">
              <span className="font-bold text-slate-800 text-lg">{product.price}</span>
              <div className="flex items-center gap-1.5 text-sm text-slate-500">
                <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                <span>{product.rating}</span>
                <span className="text-slate-300">·</span>
                <span>{product.sales} مبيعة</span>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default ProductsPage;
