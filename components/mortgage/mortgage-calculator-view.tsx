"use client";

import { useState, useMemo } from "react";
import {
  AlertCircle,
  ArrowRight,
  Calculator,
  ChevronDown,
  ChevronUp,
  FileText,
  HelpCircle,
  MessageCircle,
  Percent,
  PiggyBank,
  ShieldCheck,
  TrendingDown,
  Wallet,
} from "lucide-react";

type MortgageCalculatorViewProps = {
  initialPrice?: number;
};

export function MortgageCalculatorView({ initialPrice }: MortgageCalculatorViewProps) {
  const [propertyPrice, setPropertyPrice] = useState<number>(initialPrice || 2000000000);
  const [dpPercentage, setDpPercentage] = useState<number>(20);
  const [tenorYears, setTenorYears] = useState<number>(20);
  const [interestRate, setInterestRate] = useState<number>(6.5);
  const [showAmortization, setShowAmortization] = useState(false);
  const [amortizationView, setAmortizationView] = useState<"yearly" | "monthly">("yearly");

  // Format currency helper
  const formatRupiah = (val: number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      maximumFractionDigits: 0,
    }).format(val);
  };

  // Calculations
  const downPayment = useMemo(() => {
    return Math.round((propertyPrice * dpPercentage) / 100);
  }, [propertyPrice, dpPercentage]);

  const principalLoan = useMemo(() => {
    return Math.max(0, propertyPrice - downPayment);
  }, [propertyPrice, downPayment]);

  const { monthlyPayment, totalPayment, totalInterest, recommendedIncome } = useMemo(() => {
    if (principalLoan <= 0 || tenorYears <= 0) {
      return { monthlyPayment: 0, totalPayment: 0, totalInterest: 0, recommendedIncome: 0 };
    }

    const totalMonths = tenorYears * 12;
    const monthlyRate = interestRate / 100 / 12;

    if (monthlyRate === 0) {
      const p = principalLoan / totalMonths;
      return {
        monthlyPayment: Math.round(p),
        totalPayment: principalLoan,
        totalInterest: 0,
        recommendedIncome: Math.round(p * 3),
      };
    }

    const emi =
      (principalLoan * (monthlyRate * Math.pow(1 + monthlyRate, totalMonths))) /
      (Math.pow(1 + monthlyRate, totalMonths) - 1);

    const monthlyP = Math.round(emi);
    const totalP = monthlyP * totalMonths;
    const totalInt = totalP - principalLoan;
    const recInc = Math.round(monthlyP * 3); // 33% debt-to-income ratio

    return {
      monthlyPayment: monthlyP,
      totalPayment: totalP,
      totalInterest: totalInt,
      recommendedIncome: recInc,
    };
  }, [principalLoan, tenorYears, interestRate]);

  // Generate Amortization Table (Yearly)
  const yearlyAmortization = useMemo(() => {
    if (principalLoan <= 0 || tenorYears <= 0) return [];

    const schedule = [];
    let balance = principalLoan;
    const monthlyRate = interestRate / 100 / 12;

    for (let year = 1; year <= tenorYears; year++) {
      let yearlyPrincipal = 0;
      let yearlyInterest = 0;

      for (let m = 1; m <= 12; m++) {
        const interest = balance * monthlyRate;
        const principal = monthlyPayment - interest;
        yearlyInterest += interest;
        yearlyPrincipal += principal;
        balance = Math.max(0, balance - principal);
      }

      schedule.push({
        period: year,
        principalPaid: Math.round(yearlyPrincipal),
        interestPaid: Math.round(yearlyInterest),
        totalPaid: Math.round(yearlyPrincipal + yearlyInterest),
        remainingBalance: Math.round(balance),
      });
    }

    return schedule;
  }, [principalLoan, tenorYears, interestRate, monthlyPayment]);

  // Handle DP currency direct edit
  const handleDpAmountChange = (amount: number) => {
    if (propertyPrice <= 0) return;
    const pct = Math.min(90, Math.max(5, (amount / propertyPrice) * 100));
    setDpPercentage(Math.round(pct * 10) / 10);
  };

  const whatsappInquiryUrl = `https://wa.me/6281212345678?text=${encodeURIComponent(
    `Halo Eagletree, saya baru menghitung simulasi KPR untuk properti seharga ${formatRupiah(
      propertyPrice
    )} dengan DP ${dpPercentage}% dan tenor ${tenorYears} tahun. Boleh minta info bank rekanan dengan bunga terbaik?`
  )}`;

  return (
    <div className="flex flex-col gap-10">
      {/* 2-Column Calculator: Inputs (Left) and Results (Right) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Input Form (7 cols) */}
        <div className="lg:col-span-7 flex flex-col gap-6 p-6 sm:p-8 bg-white rounded-3xl border border-[#dde2de] shadow-xs">
          <div className="pb-4 border-b border-[#dde2de]">
            <h2 className="text-xl font-bold text-[#102d26] flex items-center gap-2">
              <Calculator size={20} className="text-[#36705d]" />
              <span>Parameter Pembiayaan</span>
            </h2>
            <p className="text-xs text-[#68766f] mt-1">
              Sesuaikan nilai harga properti, uang muka, dan tenor pinjaman untuk melihat estimasi cicilan.
            </p>
          </div>

          {/* 1. Harga Properti */}
          <div className="flex flex-col gap-2">
            <div className="flex justify-between items-center">
              <label htmlFor="property-price" className="text-xs font-semibold uppercase tracking-wider text-[#53625c]">
                Harga Properti (Rp)
              </label>
              <span className="text-xs font-bold text-[#102d26]">
                {formatRupiah(propertyPrice)}
              </span>
            </div>
            <input
              id="property-price"
              type="number"
              min={100000000}
              step={50000000}
              value={propertyPrice}
              onChange={(e) => setPropertyPrice(Math.max(0, Number(e.target.value)))}
              className="w-full px-4 py-3 bg-[#f7f8f5] border border-[#dde2de] rounded-xl text-base font-semibold text-[#102d26] focus:outline-none focus:border-[#36705d] focus:ring-2 focus:ring-[#36705d]/15"
            />
            {/* Presets */}
            <div className="flex flex-wrap gap-1.5 pt-1">
              {[1000000000, 2000000000, 3000000000, 5000000000].map((preset) => (
                <button
                  key={preset}
                  type="button"
                  onClick={() => setPropertyPrice(preset)}
                  className={`px-3 py-1 text-xs rounded-lg transition-colors cursor-pointer ${
                    propertyPrice === preset
                      ? "bg-[#102d26] text-white font-semibold"
                      : "bg-[#f0f5f1] text-[#36705d] hover:bg-[#e1ece7]"
                  }`}
                >
                  Rp {(preset / 1000000000).toFixed(0)} M
                </button>
              ))}
            </div>
          </div>

          {/* 2. Uang Muka / DP */}
          <div className="flex flex-col gap-2.5">
            <div className="flex justify-between items-center">
              <label htmlFor="dp-percent" className="text-xs font-semibold uppercase tracking-wider text-[#53625c]">
                Uang Muka (DP: {dpPercentage}%)
              </label>
              <span className="text-xs font-bold text-[#936b2d]">
                {formatRupiah(downPayment)}
              </span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="sm:col-span-2 flex items-center gap-3">
                <input
                  id="dp-percent"
                  type="range"
                  min={5}
                  max={50}
                  step={1}
                  value={dpPercentage}
                  onChange={(e) => setDpPercentage(Number(e.target.value))}
                  className="w-full accent-[#36705d] cursor-pointer"
                />
              </div>
              <div className="relative flex items-center">
                <input
                  type="number"
                  min={propertyPrice * 0.05}
                  max={propertyPrice * 0.9}
                  step={10000000}
                  value={downPayment}
                  onChange={(e) => handleDpAmountChange(Number(e.target.value))}
                  className="w-full px-3 py-2 text-xs font-semibold bg-[#f7f8f5] border border-[#dde2de] rounded-xl focus:outline-none focus:border-[#36705d]"
                />
              </div>
            </div>
            <div className="flex gap-2">
              {[10, 15, 20, 30].map((pct) => (
                <button
                  key={pct}
                  type="button"
                  onClick={() => setDpPercentage(pct)}
                  className={`px-3 py-1 text-xs rounded-lg transition-colors cursor-pointer ${
                    dpPercentage === pct
                      ? "bg-[#36705d] text-white font-semibold"
                      : "bg-[#f0f5f1] text-[#53625c] hover:bg-[#e1ece7]"
                  }`}
                >
                  {pct}%
                </button>
              ))}
            </div>
          </div>

          {/* 3. Tenor Pinjaman */}
          <div className="flex flex-col gap-2.5">
            <div className="flex justify-between items-center">
              <label htmlFor="tenor-slider" className="text-xs font-semibold uppercase tracking-wider text-[#53625c]">
                Jangka Waktu Pinjaman / Tenor
              </label>
              <span className="text-xs font-bold text-[#102d26]">
                {tenorYears} Tahun ({tenorYears * 12} Bulan)
              </span>
            </div>
            <input
              id="tenor-slider"
              type="range"
              min={1}
              max={30}
              step={1}
              value={tenorYears}
              onChange={(e) => setTenorYears(Number(e.target.value))}
              className="w-full accent-[#36705d] cursor-pointer"
            />
            <div className="grid grid-cols-6 gap-1.5">
              {[5, 10, 15, 20, 25, 30].map((t) => (
                <button
                  key={t}
                  type="button"
                  onClick={() => setTenorYears(t)}
                  className={`py-1.5 text-xs font-medium rounded-lg border transition-all cursor-pointer text-center ${
                    tenorYears === t
                      ? "bg-[#102d26] text-white border-[#102d26]"
                      : "bg-white text-[#53625c] border-[#dde2de] hover:border-[#36705d]"
                  }`}
                >
                  {t} Thn
                </button>
              ))}
            </div>
          </div>

          {/* 4. Suku Bunga Per Tahun */}
          <div className="flex flex-col gap-2">
            <div className="flex justify-between items-center">
              <label htmlFor="interest-rate" className="text-xs font-semibold uppercase tracking-wider text-[#53625c]">
                Suku Bunga Tahunan (%)
              </label>
              <span className="text-xs font-bold text-[#102d26]">
                {interestRate}% per tahun (Fixed)
              </span>
            </div>
            <div className="flex items-center gap-3">
              <input
                id="interest-rate"
                type="number"
                min={1}
                max={20}
                step={0.1}
                value={interestRate}
                onChange={(e) => setInterestRate(Math.max(0.1, Number(e.target.value)))}
                className="w-36 px-4 py-2.5 bg-[#f7f8f5] border border-[#dde2de] rounded-xl text-sm font-semibold text-[#102d26] focus:outline-none focus:border-[#36705d]"
              />
              <span className="text-xs text-[#68766f]">
                *Rata-rata suku bunga promo KPR bank berkisar 5.5% - 7.5% fixed 3–5 tahun pertama.
              </span>
            </div>
          </div>
        </div>

        {/* Right Calculation Summary (5 cols) */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          {/* Main Repayment Card */}
          <div className="p-6 sm:p-8 bg-[#102d26] text-white rounded-3xl shadow-md flex flex-col gap-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 translate-x-10 -translate-y-10 w-44 h-44 rounded-full bg-[#36705d]/30 blur-2xl pointer-events-none" />

            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-[#c99a55] mb-1">
                Estimasi Angsuran Bulanan
              </p>
              <div className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mt-1">
                {formatRupiah(monthlyPayment)}
                <span className="text-sm font-normal text-white/70"> / bulan</span>
              </div>
            </div>

            {/* Loan Composition Visual Bar */}
            <div className="flex flex-col gap-2">
              <div className="flex justify-between text-xs text-white/80 font-medium">
                <span>Pokok Pinjaman ({Math.round((principalLoan / totalPayment) * 100 || 0)}%)</span>
                <span>Total Bunga ({Math.round((totalInterest / totalPayment) * 100 || 0)}%)</span>
              </div>
              <div className="h-3 w-full bg-white/20 rounded-full overflow-hidden flex">
                <div
                  style={{ width: `${(principalLoan / totalPayment) * 100 || 50}%` }}
                  className="bg-[#c99a55] h-full"
                />
                <div
                  style={{ width: `${(totalInterest / totalPayment) * 100 || 50}%` }}
                  className="bg-[#36705d] h-full"
                />
              </div>
            </div>

            {/* Breakdown List */}
            <div className="flex flex-col gap-3 pt-4 border-t border-white/15 text-xs">
              <div className="flex justify-between items-center text-white/80">
                <span>Plafon Pinjaman Pokok</span>
                <span className="font-bold text-white">{formatRupiah(principalLoan)}</span>
              </div>
              <div className="flex justify-between items-center text-white/80">
                <span>Total Pembayaran Bunga</span>
                <span className="font-bold text-white">{formatRupiah(totalInterest)}</span>
              </div>
              <div className="flex justify-between items-center text-white/80">
                <span>Total Pembayaran (Pokok + Bunga)</span>
                <span className="font-bold text-white">{formatRupiah(totalPayment)}</span>
              </div>
              <div className="flex justify-between items-center pt-2 border-t border-white/10 text-[#c99a55]">
                <span>Saran Gaji Minimum (DSR ~33%)</span>
                <span className="font-bold text-base text-white">{formatRupiah(recommendedIncome)} / bln</span>
              </div>
            </div>

            {/* Direct Consultation CTA */}
            <a
              href={whatsappInquiryUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-3.5 px-4 bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs sm:text-sm font-semibold rounded-xl transition-all shadow-sm text-center cursor-pointer"
            >
              <MessageCircle size={18} />
              <span>Konsultasi KPR via WhatsApp</span>
            </a>
          </div>

          {/* Quick Guidance Box */}
          <div className="p-5 bg-white rounded-2xl border border-[#dde2de] shadow-xs flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-[#faf5eb] text-[#936b2d] flex items-center justify-center shrink-0">
              <ShieldCheck size={22} />
            </div>
            <div>
              <h3 className="text-xs font-bold text-[#102d26] mb-1">
                Kemitraan Bank Terpercaya
              </h3>
              <p className="text-xs text-[#53625c] leading-relaxed">
                Eagletree bekerjasama dengan bank-bank penyedia KPR terkemuka di Indonesia (BCA, Mandiri, BNI, BTN, CIMB Niaga, OCBC) untuk memberikan suku bunga terbaik dan approval lebih cepat.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Amortization Schedule Collapsible Section */}
      <div className="p-6 sm:p-8 bg-white rounded-3xl border border-[#dde2de] shadow-xs">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[#dde2de]">
          <div>
            <h2 className="text-lg font-bold text-[#102d26]">
              Tabel Jadwal Amortisasi Pinjaman
            </h2>
            <p className="text-xs text-[#68766f]">
              Rincian proyeksi angsuran pokok dan porsi bunga sepanjang masa kredit.
            </p>
          </div>
          <button
            type="button"
            onClick={() => setShowAmortization(!showAmortization)}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#f0f5f1] hover:bg-[#e1ece7] text-[#102d26] text-xs font-semibold transition-colors cursor-pointer self-start sm:self-auto"
          >
            <span>{showAmortization ? "Sembunyikan Rincian" : "Tampilkan Rincian Tabel"}</span>
            {showAmortization ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
          </button>
        </div>

        {showAmortization && (
          <div className="mt-6 overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs">
              <thead>
                <tr className="border-b border-[#dde2de] bg-[#f7f8f5] text-[#53625c] uppercase tracking-wider font-semibold">
                  <th className="py-3 px-4">Tahun Ke</th>
                  <th className="py-3 px-4">Porsi Pokok (Tahun)</th>
                  <th className="py-3 px-4">Porsi Bunga (Tahun)</th>
                  <th className="py-3 px-4">Total Angsuran</th>
                  <th className="py-3 px-4 text-right">Sisa Saldo Pinjaman</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#dde2de]">
                {yearlyAmortization.map((row) => (
                  <tr key={row.period} className="hover:bg-[#faf5eb]/50 transition-colors">
                    <td className="py-3 px-4 font-semibold text-[#102d26]">Tahun {row.period}</td>
                    <td className="py-3 px-4 text-[#36705d] font-medium">{formatRupiah(row.principalPaid)}</td>
                    <td className="py-3 px-4 text-[#936b2d]">{formatRupiah(row.interestPaid)}</td>
                    <td className="py-3 px-4 font-semibold text-[#102d26]">{formatRupiah(row.totalPaid)}</td>
                    <td className="py-3 px-4 text-right font-semibold text-[#1c2925]">
                      {formatRupiah(row.remainingBalance)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Educational Tips & Requirements */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-6 bg-white rounded-2xl border border-[#dde2de] shadow-xs flex flex-col gap-3">
          <h3 className="text-sm font-bold text-[#102d26] flex items-center gap-2">
            <FileText size={17} className="text-[#36705d]" />
            <span>Dokumen Persyaratan Pengajuan KPR</span>
          </h3>
          <ul className="text-xs text-[#53625c] space-y-2 list-disc list-inside">
            <li>Fotokopi KTP Pemohon & Pasangan (jika menikah)</li>
            <li>Fotokopi Kartu Keluarga (KK) & Surat Nikah / Akta Cerai</li>
            <li>Fotokopi NPWP Pribadi & SPT Tahunan</li>
            <li>Slip Gaji Asli 3 bulan terakhir (Karyawan)</li>
            <li>Surat Keterangan Kerja asli dari perusahaan (Karyawan)</li>
            <li>Rekening Koran / Buku Tabungan 3–6 bulan terakhir</li>
            <li>Laporan Keuangan & Legalitas Usaha (Wiraswasta / Profesional)</li>
          </ul>
        </div>

        <div className="p-6 bg-white rounded-2xl border border-[#dde2de] shadow-xs flex flex-col gap-3">
          <h3 className="text-sm font-bold text-[#102d26] flex items-center gap-2">
            <PiggyBank size={17} className="text-[#c99a55]" />
            <span>Estimasi Biaya Tambahan KPR</span>
          </h3>
          <ul className="text-xs text-[#53625c] space-y-2 list-disc list-inside">
            <li><strong>BPHTB (Bea Perolehan Hak Tanah dan Bangunan):</strong> 5% dari (Harga Transaksi - NPOPTKP).</li>
            <li><strong>Biaya Provisi Bank:</strong> Umumnya 1% dari total plafon kredit yang disetujui.</li>
            <li><strong>Biaya Administrasi Bank:</strong> Mulai Rp 500.000 hingga Rp 2.000.000.</li>
            <li><strong>Biaya Notaris / PPAT:</strong> Akta Jual Beli (AJB), Balik Nama, dan pembuatan Akta SKMHT/APHT.</li>
            <li><strong>Asuransi Jiwa & Kebakaran:</strong> Premi asuransi wajib untuk perlindungan kredit.</li>
            <li><strong>Biaya Penilaian (Appraisal):</strong> Untuk pengecekan fisik agunan properti.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
