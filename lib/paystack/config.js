// src/lib/paystack/config.js
// Single source of truth for NurseAssist payments.
// Safe to import from both client components and API routes (no secrets here).

export const PRODUCT = "nurseassist"; // sent in Paystack metadata to tell apps apart
export const REFERENCE_PREFIX = "NA-"; // NurseAssist references start with NA-
export const CURRENCY = "NGN";

export const PREMIUM_PRICE_NAIRA = 5000;
export const PREMIUM_PRICE_KOBO = PREMIUM_PRICE_NAIRA * 100;

// Where users land after a successful payment / from the pricing page
export const APP_HOME_PATH = "/questions";