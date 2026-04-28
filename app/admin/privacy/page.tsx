import { getRawPrivacyContent, PRIVACY_DEFAULTS } from "@/app/lib/privacy-content";
import PrivacyForm from "./PrivacyForm";

export default async function PrivacyAdminPage() {
  const initial = await getRawPrivacyContent();

  return (
    <div className="space-y-8">
      <div>
        <h1 className="font-display text-2xl md:text-3xl font-bold">Privacy Policy</h1>
        <p className="mt-2 text-sm text-[var(--ink-soft)]">
          Edit the privacy policy shown to visitors when submitting the contact form. Each field has English and Japanese variants. Leave a field blank to use the bundled default.
        </p>
      </div>
      <PrivacyForm initial={initial} defaults={PRIVACY_DEFAULTS} />
    </div>
  );
}
