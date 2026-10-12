"use client";

import { useState, useMemo } from "react";
import {
  ChevronDown,
  ChevronUp,
  MessageCircle,
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
    <div className="flex flex-col gap-8">
      {/* 2-Column Calculator: Inputs (Left) and Results (Right) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Input Form (7 cols) */}
        <div className="lg:col-span-7 flex flex-col gap-6 p-6 sm:p-8 bg-white rounded-xl border border-neutral-200/80 shadow-2xs">
          <div className="pb-4 border-b border-neutral-100">
            <h2 className="font-serif text-lg font-medium text-brand-950">
              Parameter Pembiayaan
            </h2>
            <p className="text-xs text-neutral-500 mt-1">
              Sesuaikan harga properti, porsi uang muka, dan masa tenor untuk menghitung estimasi angsuran.
            </p>
          </div>

          {/* 1. Harga Properti */}
          <div className="flex flex-col gap-2">
            <div className="flex justify-between items-center">
              <label htmlFor="property-price" className="text-[11px] font-semibold uppercase tracking-wider text-neutral-700">
                Harga Properti (Rp)
              </label>
              <span className="text-xs font-mono font-medium text-brand-950">
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
              className="w-full px-3.5 py-2.5 bg-white border border-neutral-200 rounded-lg text-sm font-medium text-brand-950 focus:outline-none focus:border-brand-900 focus:ring-1 focus:ring-brand-900 transition-colors"
            />
            {/* Presets */}
            <div className="flex flex-wrap gap-1.5 pt-1">
              {[1000000000, 2000000000, 3000000000, 5000000000].map((preset) => (
                <button
                  key={preset}
                  type="button"
                  onClick={() => setPropertyPrice(preset)}
                  className={`px-2.5 py-1 text-xs rounded-md transition-colors cursor-pointer ${
                    propertyPrice === preset
                      ? "bg-brand-950 text-white font-medium"
                      : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200"
                  }`}
                >
                  Rp {(preset / 1000000000).toFixed(0)} M
                </button>
              ))}
            </div>
          </div>

          {/* 2. Uang Muka / DP */}
          <div className="flex flex-col gap-2">
            <div className="flex justify-between items-center">
              <label htmlFor="dp-percent" className="text-[11px] font-semibold uppercase tracking-wider text-neutral-700">
                Uang Muka (DP: {dpPercentage}%)
              </label>
              <span className="text-xs font-mono font-medium text-accent-700">
                {formatRupiah(downPayment)}
              </span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="sm:col-span-2 flex items-center">
                <input
                  id="dp-percent"
                  type="range"
                  min={5}
                  max={50}
                  step={1}
                  value={dpPercentage}
                  onChange={(e) => setDpPercentage(Number(e.target.value))}
                  className="w-full accent-brand-950 cursor-pointer"
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
                  className="w-full px-3 py-2 text-xs font-medium bg-white border border-neutral-200 rounded-lg focus:outline-none focus:border-brand-900"
                />
              </div>
            </div>
            <div className="flex gap-1.5 pt-1">
              {[10, 15, 20, 30].map((pct) => (
                <button
                  key={pct}
                  type="button"
                  onClick={() => setDpPercentage(pct)}
                  className={`px-2.5 py-1 text-xs rounded-md transition-colors cursor-pointer ${
                    dpPercentage === pct
                      ? "bg-brand-950 text-white font-medium"
                      : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200"
                  }`}
                >
                  {pct}%
                </button>
              ))}
            </div>
          </div>

          {/* 3. Tenor Pinjaman */}
          <div className="flex flex-col gap-2">
            <div className="flex justify-between items-center">
              <label htmlFor="tenor-slider" className="text-[11px] font-semibold uppercase tracking-wider text-neutral-700">
                Jangka Waktu Pinjaman
              </label>
              <span className="text-xs font-mono font-medium text-brand-950">
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
              className="w-full accent-brand-950 cursor-pointer"
            />
            <div className="grid grid-cols-6 gap-1.5 pt-1">
              {[5, 10, 15, 20, 25, 30].map((t) => (
                <button
                  key={t}
                  type="button"
                  onClick={() => setTenorYears(t)}
                  className={`py-1.5 text-xs font-medium rounded-md border transition-all cursor-pointer text-center ${
                    tenorYears === t
                      ? "bg-brand-950 text-white border-brand-950"
                      : "bg-white text-neutral-600 border-neutral-200 hover:border-neutral-300"
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
              <label htmlFor="interest-rate" className="text-[11px] font-semibold uppercase tracking-wider text-neutral-700">
                Suku Bunga Tahunan (%)
              </label>
              <span className="text-xs font-mono font-medium text-brand-950">
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
                className="w-32 px-3.5 py-2 bg-white border border-neutral-200 rounded-lg text-xs sm:text-sm font-medium text-brand-950 focus:outline-none focus:border-brand-900"
              />
              <span className="text-xs text-neutral-400">
                Rata-rata suku bunga promo bank: 5.5% - 7.5% fixed.
              </span>
            </div>
          </div>
        </div>

        {/* Right Calculation Summary (5 cols) */}
        <div className="lg:col-span-5 flex flex-col gap-4">
          {/* Main Repayment Card */}
          <div className="p-6 sm:p-7 bg-brand-950 text-white rounded-xl border border-brand-900 flex flex-col gap-5">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-widest text-accent-400 mb-1">
                Estimasi Angsuran Bulanan
              </p>
              <div className="font-serif text-3xl sm:text-4xl font-normal tracking-tight text-white mt-1">
                {formatRupiah(monthlyPayment)}
                <span className="text-xs font-sans text-neutral-400 font-light"> / bulan</span>
              </div>
            </div>

            {/* Loan Composition Visual Bar */}
            <div className="flex flex-col gap-1.5">
              <div className="flex justify-between text-xs text-neutral-300 font-medium">
                <span>Pokok ({Math.round((principalLoan / totalPayment) * 100 || 0)}%)</span>
                <span>Bunga ({Math.round((totalInterest / totalPayment) * 100 || 0)}%)</span>
              </div>
              <div className="h-2 w-full bg-neutral-800 rounded-full overflow-hidden flex">
                <div
                  style={{ width: `${(principalLoan / totalPayment) * 100 || 50}%` }}
                  className="bg-accent-400 h-full"
                />
                <div
                  style={{ width: `${(totalInterest / totalPayment) * 100 || 50}%` }}
                  className="bg-brand-700 h-full"
                />
              </div>
            </div>

            {/* Breakdown List */}
            <div className="flex flex-col gap-2.5 pt-4 border-t border-brand-800/80 text-xs">
              <div className="flex justify-between items-center text-neutral-300">
                <span>Plafon Pokok Kredit</span>
                <span className="font-mono font-medium text-white">{formatRupiah(principalLoan)}</span>
              </div>
              <div className="flex justify-between items-center text-neutral-300">
                <span>Total Estimasi Bunga</span>
                <span className="font-mono font-medium text-white">{formatRupiah(totalInterest)}</span>
              </div>
              <div className="flex justify-between items-center text-neutral-300">
                <span>Total Pembayaran (Pokok + Bunga)</span>
                <span className="font-mono font-medium text-white">{formatRupiah(totalPayment)}</span>
              </div>
              <div className="flex justify-between items-center pt-2 border-t border-brand-800/80 text-accent-300">
                <span>Saran Penghasilan Minimum (DSR ~33%)</span>
                <span className="font-mono font-medium text-white">{formatRupiah(recommendedIncome)} / bln</span>
              </div>
            </div>

            {/* Direct Consultation CTA */}
            <a
              href={whatsappInquiryUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-3 px-4 bg-accent-500 hover:bg-accent-400 text-brand-950 text-xs font-semibold uppercase tracking-wider rounded-lg transition-colors text-center cursor-pointer mt-1"
            >
              <MessageCircle size={16} />
              <span>Konsultasi Bank Rekanan via WhatsApp</span>
            </a>
          </div>

          {/* Quick Guidance Box */}
          <div className="p-5 bg-white rounded-xl border border-neutral-200/80">
            <h3 className="font-medium text-xs text-brand-950 uppercase tracking-wider mb-1">
              Kemitraan Perbankan Resmi
            </h3>
            <p className="text-xs text-neutral-500 leading-relaxed font-light">
              Eagletree bermitra dengan bank KPR terkemuka (BCA, Mandiri, BNI, BTN, CIMB Niaga, OCBC) untuk memfasilitasi suku bunga kompetitif dan pendampingan berkas secara terpadu.
            </p>
          </div>
        </div>
      </div>

      {/* Amortization Schedule Collapsible Section */}
      <div className="p-6 sm:p-7 bg-white rounded-xl border border-neutral-200/80">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-neutral-100">
          <div>
            <h2 className="font-serif text-base font-medium text-brand-950">
              Tabel Jadwal Amortisasi Pinjaman
            </h2>
            <p className="text-xs text-neutral-500">
              Rincian proyeksi angsuran pokok dan porsi bunga sepanjang masa kredit.
            </p>
          </div>
          <button
            type="button"
            onClick={() => setShowAmortization(!showAmortization)}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-neutral-100 hover:bg-neutral-200 text-neutral-800 text-xs font-medium transition-colors cursor-pointer self-start sm:self-auto"
          >
            <span>{showAmortization ? "Sembunyikan Tabel" : "Tampilkan Rincian Tabel"}</span>
            {showAmortization ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
          </button>
        </div>

        {showAmortization && (
          <div className="mt-4 overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs">
              <thead>
                <tr className="border-b border-neutral-200 bg-neutral-50 text-neutral-600 font-medium">
                  <th className="py-2.5 px-3">Periode</th>
                  <th className="py-2.5 px-3">Porsi Pokok</th>
                  <th className="py-2.5 px-3">Porsi Bunga</th>
                  <th className="py-2.5 px-3">Total Angsuran</th>
                  <th className="py-2.5 px-3 text-right">Sisa Saldo Pinjaman</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-100">
                {yearlyAmortization.map((row) => (
                  <tr key={row.period} className="hover:bg-neutral-50/70 transition-colors">
                    <td className="py-2.5 px-3 font-medium text-brand-950">Tahun {row.period}</td>
                    <td className="py-2.5 px-3 font-mono text-neutral-700">{formatRupiah(row.principalPaid)}</td>
                    <td className="py-2.5 px-3 font-mono text-accent-700">{formatRupiah(row.interestPaid)}</td>
                    <td className="py-2.5 px-3 font-mono font-medium text-brand-950">{formatRupiah(row.totalPaid)}</td>
                    <td className="py-2.5 px-3 font-mono text-right text-neutral-700">
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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-6 bg-white rounded-xl border border-neutral-200/80 flex flex-col gap-2.5">
          <h3 className="font-medium text-xs text-brand-950 uppercase tracking-wider">
            Dokumen Persyaratan Pengajuan KPR
          </h3>
          <ul className="text-xs text-neutral-600 space-y-1.5 list-disc list-inside">
            <li>Fotokopi KTP Pemohon & Pasangan (jika menikah)</li>
            <li>Fotokopi Kartu Keluarga (KK) & Buku Nikah / Akta Cerai</li>
            <li>Fotokopi NPWP Pribadi & SPT Tahunan</li>
            <li>Slip Gaji Asli 3 bulan terakhir (Karyawan)</li>
            <li>Surat Keterangan Kerja aktif dari instansi terkait</li>
            <li>Rekening Koran / Buku Tabungan 3–6 bulan terakhir</li>
            <li>Laporan Keuangan & Legalitas Usaha (Wiraswasta / Profesional)</li>
          </ul>
        </div>

        <div className="p-6 bg-white rounded-xl border border-neutral-200/80 flex flex-col gap-2.5">
          <h3 className="font-medium text-xs text-brand-950 uppercase tracking-wider">
            Estimasi Komponen Biaya Transaksi KPR
          </h3>
          <ul className="text-xs text-neutral-600 space-y-1.5 list-disc list-inside">
            <li><strong>BPHTB:</strong> 5% x (Nilai Transaksi - NPOPTKP daerah).</li>
            <li><strong>Biaya Provisi Bank:</strong> Lazimnya 1% dari total plafon kredit.</li>
            <li><strong>Biaya Administrasi Bank:</strong> Mulai Rp 500.000 hingga Rp 2.000.000.</li>
            <li><strong>Jasa Notaris / PPAT:</strong> Akta Jual Beli (AJB) dan sertifikat APHT.</li>
            <li><strong>Asuransi Jiwa & Kebakaran:</strong> Premi wajib selama tenor pinjaman.</li>
            <li><strong>Biaya Penilaian (Appraisal):</strong> Verifikasi fisik agunan oleh penilai independen.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
