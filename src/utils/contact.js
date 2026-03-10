import { businessSchema } from "./seo";

const digitsOnly = (value = "") => value.replace(/\D/g, "");

export const primaryPhoneNumber = businessSchema.telephone || "+971543430661";
export const whatsappNumber = digitsOnly(primaryPhoneNumber);
export const whatsappUrl = `https://wa.me/${whatsappNumber}`;
