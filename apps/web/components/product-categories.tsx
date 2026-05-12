import Link from "next/link";
import { Clock } from "lucide-react";
import { Shell } from "@mdt/ui";

const categories = [
  {
    id: "01",
    title: "Pompa Air Industri",
    brands: "CNP | EBARA | TORISHIMA | GRUNDFOS | CRI | KSB | TSURUMI | FLUGO | MCKARLEN | LEO | DRAKOS | LOWARA | SOUTHERN CROSS | HCP | PEDROLLO"
  },
  {
    id: "02",
    title: "Induction Motor",
    brands: "TECO | SIEMENS | CMP | ABB | ELEKTRIM | FRANKLIN | YUEMA | WEG | ATT"
  },
  {
    id: "03",
    title: "Electrical Panel",
    brands: "TRANSFER | BOOSTER | ATS | LVMDP | SDP | MDP | HYDRANT | CAPASITOR BANK | SOFT STATER | VSD | VFD | SKTR"
  },
  {
    id: "04",
    title: "Fire Hydrant System",
    brands: "ENGINE | DIESEL | ELECTRIC | JOCKEY | PILAR HYDRANT | HYDRANT BOX | PRV | SAFETY VALVE | FIRE ALARM | SPRINGKLER"
  }
];

export function ProductCategories() {
  return (
    <section>
      {/* Dark section */}
      <div className="bg-[#24272c] pt-8 md:pt-24 pb-16 relative">
        <div className="absolute top-0 left-0 w-full h-16 bg-red-700/20" style={{ backgroundImage: 'url("/background-1-1.png")', backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.3 }} />
        <Shell>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-8">
            {categories.map((cat) => (
              <Link href={`/products/${cat.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`} key={cat.id} className="flex flex-col items-center text-center group cursor-pointer">
                <div className="relative mb-6 flex h-20 w-20 md:-mt-16 lg:-mt-20 items-center justify-center rounded-full bg-[#1877f2] border-[8px] border-[#1f2328] text-2xl font-bold text-white shadow-lg z-10 group-hover:scale-110 transition-transform duration-300">
                  {cat.id}
                </div>
                <h3 className="mb-4 text-xl font-bold text-white group-hover:text-[#1877f2] transition-colors">{cat.title}</h3>
                <p className="text-sm leading-relaxed text-slate-400 font-medium">
                  {cat.brands}
                </p>
              </Link>
            ))}
          </div>
        </Shell>
      </div>
      
      {/* Blue Banner Section */}
      <div className="bg-[#1f2328] pb-16">
        <Shell>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="col-span-1 rounded-xl bg-[#1877f2] p-6 text-white flex items-center justify-center gap-3 shadow-lg">
              <Clock className="h-5 w-5" />
              <span className="font-semibold tracking-wide">Senin - Jumat 08:00 - 17:00</span>
            </div>
            <div className="col-span-1 md:col-span-2 rounded-xl bg-[#1877f2] p-6 text-white flex flex-col sm:flex-row items-center justify-between gap-4 shadow-lg">
              <span className="text-xl font-bold">Segera Hubungi Kami !</span>
              <Link href="/contact" className="underline font-semibold hover:text-white/80 transition-colors tracking-wide">
                Call Us For Appointment
              </Link>
            </div>
          </div>
        </Shell>
      </div>
    </section>
  );
}
