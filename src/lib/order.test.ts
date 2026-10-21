import { describe, expect, it } from "vitest";
import { generateOrderReference } from "@/lib/order";

const fixedBytes = () => Uint8Array.from([0, 1, 2, 3]);

describe("generateOrderReference", () => {
  it("uses the ORD-YYYYMMDD-XXXX format", () => {
    const reference = generateOrderReference(new Date(2026, 9, 21, 12, 0, 0), fixedBytes);
    expect(reference).toBe("ORD-20261021-ABCD");
    expect(reference).toMatch(/^ORD-\d{8}-[A-Z0-9]{4}$/);
  });

  it("pads month and day", () => {
    const reference = generateOrderReference(new Date(2026, 0, 5, 8, 0, 0), fixedBytes);
    expect(reference).toBe("ORD-20260105-ABCD");
  });

  it("uses a suffix without ambiguous characters", () => {
    const reference = generateOrderReference(new Date(2026, 9, 21), () =>
      Uint8Array.from([255, 254, 253, 252]),
    );
    const suffix = reference.split("-")[2];
    expect(suffix).toHaveLength(4);
    expect(suffix).not.toMatch(/[IO01]/);
  });
});
