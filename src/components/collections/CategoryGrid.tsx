import ProductCard from "./ProductCard";
import EmptyState from "@/components/ui/EmptyState";
import type { CategoryInfo } from "@/data/categoryData";
import type { Product } from "@/types/globalTypes";

type Props = {
  info: CategoryInfo;
  products: Product[];
};

const CategoryGrid = ({ info, products }: Props) => {
  if (products.length === 0) {
    return (
      <EmptyState title="Belum ada produk di kategori ini">
        Koleksi {info.label} sedang kami siapkan. Sementara itu, kamu bisa
        merangkai sendiri lewat Custom Charm atau lihat paket bundling.
      </EmptyState>
    );
  }

  return (
    <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4 lg:grid-cols-4">
      {products.map((product, index) => (
        <ProductCard
          key={product.id}
          product={product}
          aosDelay={(index % 4) * 80}
        />
      ))}
    </div>
  );
};

export default CategoryGrid;
