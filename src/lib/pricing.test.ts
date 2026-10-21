import { describe, expect, it } from "vitest";
import {
  calculateOrderPricing,
  getDuration,
  getPlanFromParam,
  isDurationMonths,
  isPlanId,
} from "@/lib/pricing";

describe("plan helpers", () => {
  it("accepts only known plan ids", () => {
    expect(isPlanId("basic")).toBe(true);
    expect(isPlanId("pro")).toBe(true);
    expect(isPlanId("business")).toBe(true);
    expect(isPlanId("enterprise")).toBe(false);
    expect(isPlanId(null)).toBe(false);
  });

  it("reads a valid plan from a URL parameter without crashing", () => {
    expect(getPlanFromParam("pro")?.name).toBe("Pro");
    expect(getPlanFromParam("does-not-exist")).toBeNull();
    expect(getPlanFromParam(null)).toBeNull();
  });
});

describe("duration helpers", () => {
  it("knows supported durations", () => {
    expect(isDurationMonths(1)).toBe(true);
    expect(isDurationMonths(12)).toBe(true);
    expect(isDurationMonths(2)).toBe(false);
  });

  it("falls back to one month for unsupported input", () => {
    expect(getDuration(2).months).toBe(1);
  });
});

describe("calculateOrderPricing", () => {
  it("calculates a monthly plan without discount", () => {
    const pricing = calculateOrderPricing("basic", 1);
    expect(pricing.subtotal).toBe(49000);
    expect(pricing.discount).toBe(0);
    expect(pricing.total).toBe(49000);
  });

  it("applies the 12 month discount centrally", () => {
    const pricing = calculateOrderPricing("pro", 12);
    expect(pricing.subtotal).toBe(1188000);
    expect(pricing.discount).toBe(237600);
    expect(pricing.discountRate).toBe(0.2);
    expect(pricing.total).toBe(950400);
  });

  it("applies the 6 month discount", () => {
    const pricing = calculateOrderPricing("business", 6);
    expect(pricing.subtotal).toBe(1194000);
    expect(pricing.discount).toBe(119400);
    expect(pricing.total).toBe(1074600);
  });

  it("returns integer totals", () => {
    expect(Number.isInteger(calculateOrderPricing("pro", 3).total)).toBe(true);
    expect(Number.isInteger(calculateOrderPricing("business", 12).discount)).toBe(true);
  });

  it("fails safe for unsupported durations instead of throwing", () => {
    expect(calculateOrderPricing("pro", 2).total).toBe(99000);
  });
});
