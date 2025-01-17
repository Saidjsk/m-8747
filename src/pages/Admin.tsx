import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Plus, Edit, Trash } from "lucide-react";
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
    <div className="container mx-auto px-4 pt-20 pb-16">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">لوحة التحكم</h1>
        <Button className="bg-accent hover:bg-accent/90">
          <Plus className="h-4 w-4 ml-2" />
          إضافة منتج جديد
        </Button>
      </div>

      <div className="bg-white rounded-lg shadow">
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
              <TableRow key={product.id}>
                <TableCell>
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-16 h-16 object-cover rounded"
                  />
                </TableCell>
                <TableCell>{product.name}</TableCell>
                <TableCell>${product.price}</TableCell>
                <TableCell className="max-w-xs truncate">{product.description}</TableCell>
                <TableCell>
                  <div className="flex space-x-2">
                    <Button variant="outline" size="icon">
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button variant="destructive" size="icon">
                      <Trash className="h-4 w-4" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}