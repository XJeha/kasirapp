import { describe, expect, it } from "vitest";
import { formatCompactRupiah, formatNumber, formatRupiah } from "@/lib/format";

describe("formatRupiah", () => {
  it("formats with a space between Rp and the amount", () => {
    expect(formatRupiah(49000)).toBe("Rp 49.000");
    expect(formatRupiah(149000)).toBe("Rp 149.000");
    expect(formatRupiah(0)).toBe("Rp 0");
  });

  it("never produces a glued amount", () => {
    expect(formatRupiah(149000)).not.toBe("Rp149.000");
    expect(formatRupiah(149000)).toContain("Rp ");
  });

  it("rounds fractional values and handles invalid input safely", () => {
    expect(formatRupiah(950400.4)).toBe("Rp 950.400");
    expect(formatRupiah(Number.NaN)).toBe("Rp 0");
    expect(formatRupiah(Number.POSITIVE_INFINITY)).toBe("Rp 0");
  });
});

describe("formatCompactRupiah", () => {
  it("uses Indonesian compact units", () => {
    expect(formatCompactRupiah(12000000)).toBe("Rp 12 jt");
    expect(formatCompactRupiah(127000000)).toBe("Rp 127 jt");
    expect(formatCompactRupiah(950400)).toBe("Rp 950,4 rb");
    expect(formatCompactRupiah(500)).toBe("Rp 500");
  });
});

describe("formatNumber", () => {
  it("uses dot thousand separators", () => {
    expect(formatNumber(3842)).toBe("3.842");
    expect(formatNumber(0)).toBe("0");
  });
});
