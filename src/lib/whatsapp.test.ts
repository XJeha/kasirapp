import { describe, expect, it } from "vitest";
import { buildWhatsAppUrl, normalizeWhatsAppNumber } from "@/lib/whatsapp";

describe("normalizeWhatsAppNumber", () => {
  it("converts a local Indonesian number to international format", () => {
    expect(normalizeWhatsAppNumber("0895-3363-99300")).toBe("62895336399300");
  });

  it("accepts numbers that already include the country code", () => {
    expect(normalizeWhatsAppNumber("62895336399300")).toBe("62895336399300");
    expect(normalizeWhatsAppNumber("+62 895 3363 99300")).toBe("62895336399300");
  });

  it("adds the country code when the number starts with 8", () => {
    expect(normalizeWhatsAppNumber("895336399300")).toBe("62895336399300");
  });

  it("returns an empty string when there are no digits", () => {
    expect(normalizeWhatsAppNumber("")).toBe("");
    expect(normalizeWhatsAppNumber("tidak ada nomor")).toBe("");
  });
});

describe("buildWhatsAppUrl", () => {
  it("builds an encoded wa.me URL", () => {
    const url = buildWhatsAppUrl("0895-3363-99300", "Halo, saya ingin bertanya.");
    expect(url).toBe("https://wa.me/62895336399300?text=Halo%2C%20saya%20ingin%20bertanya.");
  });

  it("returns null when the number is empty", () => {
    expect(buildWhatsAppUrl("", "Halo")).toBeNull();
  });
});
