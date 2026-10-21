import { describe, expect, it } from "vitest";
import {
  isValidEmail,
  isValidWhatsApp,
  normalizeWhatsApp,
  validateOrderForm,
  type OrderFormValues,
} from "@/lib/validation";

const validValues: OrderFormValues = {
  fullName: "Rina Pratama",
  businessName: "Kopi Senja",
  whatsapp: "0812 3456 7890",
  email: "rina@example.com",
  businessType: "Kafe",
};

describe("validateOrderForm", () => {
  it("accepts a complete, valid form", () => {
    expect(validateOrderForm(validValues)).toEqual({});
  });

  it("requires every field", () => {
    const errors = validateOrderForm({
      fullName: "",
      businessName: "",
      whatsapp: "",
      email: "",
      businessType: "",
    });

    expect(errors.fullName).toBeDefined();
    expect(errors.businessName).toBeDefined();
    expect(errors.whatsapp).toBeDefined();
    expect(errors.email).toBeDefined();
    expect(errors.businessType).toBeDefined();
  });

  it("rejects invalid emails and phone numbers", () => {
    const errors = validateOrderForm({
      ...validValues,
      email: "bukan-email",
      whatsapp: "12345",
    });

    expect(errors.email).toBeDefined();
    expect(errors.whatsapp).toBeDefined();
  });

  it("rejects overly long names", () => {
    const errors = validateOrderForm({
      ...validValues,
      fullName: "A".repeat(81),
      businessName: "B".repeat(101),
    });

    expect(errors.fullName).toBeDefined();
    expect(errors.businessName).toBeDefined();
  });
});

describe("WhatsApp normalization", () => {
  it("strips spaces, dots, dashes, and parentheses", () => {
    expect(normalizeWhatsApp("+62 (812) 3456-7890")).toBe("+6281234567890");
  });

  it("accepts common Indonesian formats", () => {
    expect(isValidWhatsApp("081234567890")).toBe(true);
    expect(isValidWhatsApp("+62 812-3456-7890")).toBe(true);
    expect(isValidWhatsApp("6281234567890")).toBe(true);
    expect(isValidWhatsApp("0812")).toBe(false);
    expect(isValidWhatsApp("1234567890")).toBe(false);
  });
});

describe("email validation", () => {
  it("requires a dot in the domain", () => {
    expect(isValidEmail("rina@example.com")).toBe(true);
    expect(isValidEmail("rina@example")).toBe(false);
    expect(isValidEmail("rina example.com")).toBe(false);
  });
});
