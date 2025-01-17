import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Plus, Edit, Trash, DollarSign, Package, ShoppingCart, Users } from "lucide-react";
import { useStore, Product } from '../context/StoreContext';
import { useState } from "react";

export default function Admin() {
  const [products, setProducts] = useState<Product[]>([
    {
      id: '1',
      name: 'حذاء رياضي كلاسيكي',
      price: 89.99,
      image: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7',
      description: 'حذاء رياضي مريح وأنيق للارتداء اليومي'
    },
    {
      id: '2',
      name: 'حقيبة ظهر جلدية',
      price: 129.99,
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158',
      description: 'حقيبة ظهر جلدية متينة مع عدة جيوب'
    },
  ]);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 pt-20 pb-16">
        {/* الإحصائيات */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500 mb-1">إجمالي المبيعات</p>
                <h3 className="text-2xl font-bold">$12,426</h3>
                <p className="text-xs text-green-500 mt-1">+8% من الشهر الماضي</p>
              </div>
              <div className="bg-primary/10 p-3 rounded-full">
                <DollarSign className="h-6 w-6 text-primary" />
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500 mb-1">المنتجات</p>
                <h3 className="text-2xl font-bold">45</h3>
                <p className="text-xs text-green-500 mt-1">+12 منتج جديد</p>
              </div>
              <div className="bg-accent/10 p-3 rounded-full">
                <Package className="h-6 w-6 text-accent" />
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500 mb-1">الطلبات</p>
                <h3 className="text-2xl font-bold">156</h3>
                <p className="text-xs text-green-500 mt-1">24 طلب جديد</p>
              </div>
              <div className="bg-secondary/10 p-3 rounded-full">
                <ShoppingCart className="h-6 w-6 text-secondary" />
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500 mb-1">العملاء</p>
                <h3 className="text-2xl font-bold">2,245</h3>
                <p className="text-xs text-green-500 mt-1">+18% نمو</p>
              </div>
              <div className="bg-green-100 p-3 rounded-full">
                <Users className="h-6 w-6 text-green-600" />
              </div>
            </div>
          </div>
        </div>

        {/* عنوان القسم وزر الإضافة */}
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">إدارة المنتجات</h1>
            <p className="text-gray-500 mt-1">قم بإدارة منتجات متجرك من مكان واحد</p>
          </div>
          <Button className="bg-accent hover:bg-accent/90">
            <Plus className="h-4 w-4 ml-2" />
            إضافة منتج جديد
          </Button>
        </div>

        {/* جدول المنتجات */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200">
          <div className="p-4 border-b border-gray-200">
            <div className="relative">
              <input
                type="search"
                placeholder="البحث عن منتج..."
                className="w-full md:w-1/3 px-4 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
              />
            </div>
          </div>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>الصورة</TableHead>
                <TableHead>اسم المنتج</TableHead>
                <TableHead>السعر</TableHead>
                <TableHead>الوصف</TableHead>
                <TableHead>الإجراءات</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {products.map((product) => (
                <TableRow key={product.id} className="hover:bg-gray-50">
                  <TableCell>
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="w-16 h-16 object-cover rounded-lg border border-gray-200"
                    />
                  </TableCell>
                  <TableCell className="font-medium">{product.name}</TableCell>
                  <TableCell>${product.price.toFixed(2)}</TableCell>
                  <TableCell className="max-w-xs truncate">{product.description}</TableCell>
                  <TableCell>
                    <div className="flex space-x-2">
                      <Button variant="outline" size="icon" className="hover:bg-gray-100">
                        <Edit className="h-4 w-4 text-gray-600" />
                      </Button>
                      <Button variant="destructive" size="icon" className="hover:bg-red-600">
                        <Trash className="h-4 w-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <div className="p-4 border-t border-gray-200">
            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-500">عرض 1-2 من 2 منتج</p>
              <div className="flex space-x-2">
                <Button variant="outline" size="sm" disabled>السابق</Button>
                <Button variant="outline" size="sm" disabled>التالي</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}