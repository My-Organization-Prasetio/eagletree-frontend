import { formatCurrency } from "@/lib/utils";
import { ArrowRight, BedDouble, Bath, Maximize } from "lucide-react";

type ProjectUnitTableProps = {
  unitTypes: string[];
  startingPrice: {
    amount: number;
    currency: string;
  };
};

export function ProjectUnitTable({ unitTypes, startingPrice }: ProjectUnitTableProps) {
  // Since we don't have detailed mock data for each unit, we will generate dummy rows based on the names
  const units = unitTypes.map((type, index) => {
    // Generate some mock specs based on type string for realism
    const isPremium = type.toLowerCase().includes("premium") || type.toLowerCase().includes("kavling") || type.toLowerCase().includes("luxury");
    const basePrice = startingPrice.amount;
    const price = basePrice + (index * 250000000) * (isPremium ? 2 : 1);
    
    return {
      id: index,
      name: type,
      lb: 45 + (index * 15),
      lt: type.toLowerCase().includes("apartment") || type.toLowerCase().includes("studio") || type.toLowerCase().includes("soho") || type.toLowerCase().includes("br") ? undefined : 60 + (index * 20),
      bed: Math.max(1, index + 1),
      bath: Math.max(1, index > 1 ? 2 : 1),
      price: price
    };
  });

  return (
    <div className="bg-white border border-neutral-200 rounded-xl overflow-hidden shadow-sm">
      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm text-neutral-600">
          <thead className="bg-neutral-50 border-b border-neutral-200 text-neutral-700 font-semibold uppercase tracking-wider text-xs">
            <tr>
              <th className="px-6 py-4">Tipe Unit</th>
              <th className="px-6 py-4 hidden sm:table-cell">Spesifikasi Luas</th>
              <th className="px-6 py-4 text-center">KT / KM</th>
              <th className="px-6 py-4">Harga Mulai</th>
              <th className="px-6 py-4 text-right">Aksi</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-neutral-100">
            {units.map((unit) => (
              <tr key={unit.id} className="hover:bg-neutral-50/50 transition-colors">
                <td className="px-6 py-4 font-medium text-brand-900 whitespace-nowrap">
                  {unit.name}
                </td>
                <td className="px-6 py-4 hidden sm:table-cell whitespace-nowrap">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-1.5" title="Luas Bangunan">
                      <Maximize size={14} className="text-neutral-400" />
                      <span>{unit.lb} m²</span>
                    </div>
                    {unit.lt && (
                      <>
                        <span className="text-neutral-300">|</span>
                        <div className="flex items-center gap-1.5" title="Luas Tanah">
                          <Maximize size={14} className="text-neutral-400" />
                          <span>{unit.lt} m²</span>
                        </div>
                      </>
                    )}
                  </div>
                </td>
                <td className="px-6 py-4 text-center whitespace-nowrap">
                  <div className="flex items-center justify-center gap-3">
                    <div className="flex items-center gap-1">
                      <BedDouble size={14} className="text-neutral-400" />
                      <span>{unit.bed}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Bath size={14} className="text-neutral-400" />
                      <span>{unit.bath}</span>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 font-semibold text-brand-800 whitespace-nowrap">
                  {formatCurrency(unit.price, startingPrice.currency)}
                </td>
                <td className="px-6 py-4 text-right whitespace-nowrap">
                  <button className="inline-flex items-center gap-1.5 text-accent-600 hover:text-accent-700 font-medium text-sm transition-colors group">
                    Brosur
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
