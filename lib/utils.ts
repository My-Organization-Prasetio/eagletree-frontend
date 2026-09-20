export function formatCurrency(amount: number, currency: string = "IDR") {
  if (currency === "IDR") {
    // If it's a large number, we can format it nicely
    if (amount >= 1000000000) {
      return `Rp ${(amount / 1000000000).toLocaleString("id-ID", { maximumFractionDigits: 2 })} Miliar`;
    }
    if (amount >= 1000000) {
      return `Rp ${(amount / 1000000).toLocaleString("id-ID", { maximumFractionDigits: 2 })} Juta`;
    }
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  }

  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: currency,
  }).format(amount);
}
