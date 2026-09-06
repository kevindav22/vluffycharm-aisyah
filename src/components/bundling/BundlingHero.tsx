import { FiHeart, FiStar, FiTruck, FiShield } from "react-icons/fi";
import { formatRupiah } from "@/lib/utils";
import SafeImage from "@/components/ui/SafeImage";
import type { Product } from "@/types/globalTypes";

const benefits = [
  { icon: FiHeart, text: "Pilihan charm Lumi terlengkap" },
  { icon: FiStar, text: "Harga hemat dibanding satuan" },
  { icon: FiTruck, text: "Siap kirim dalam 1-2 hari" },
  { icon: FiShield, text: "Kualitas terjamin" },
];

type Props = {
  product: Product;
  description: string;
};

const BundlingHero = ({ product, description }: Props) => {
  return (
    <div className="flex flex-col gap-8 lg:flex-row">
      <div className="flex-shrink-0">
        <div className="relative aspect-square w-full overflow-hidden rounded-2xl border border-rose-100 bg-rose-50 lg:w-96">
          <SafeImage
            src={product.image}
            alt={product.name}
            fill
            sizes="(max-width: 1024px) 100vw, 384px"
            className="object-cover"
          />
        </div>
      </div>

      <div className="flex flex-1 flex-col gap-4">
        <h1 className="text-2xl font-bold text-slate-900">{product.name}</h1>
        <p className="text-slate-600">{description}</p>
        <p className="text-2xl font-extrabold text-rose-500">
          {formatRupiah(product.price)}
        </p>

        <div className="grid grid-cols-2 gap-3 pt-2">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-center gap-2">
              <benefit.icon className="shrink-0 text-rose-500" />
              <span className="text-xs text-slate-600">{benefit.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BundlingHero;
