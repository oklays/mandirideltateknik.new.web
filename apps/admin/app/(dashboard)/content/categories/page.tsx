import { getCategories } from "@bms/lib";
import { CategoryManager } from "@/components/category-manager";

export default async function CategoriesAdminPage() {
  const categories = await getCategories();

  return <CategoryManager categories={categories} />;
}

