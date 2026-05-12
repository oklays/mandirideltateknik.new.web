import { getSiteSettings } from "@mdt/lib";
import { SettingsForm } from "@/components/settings-form";

export default async function SettingsPage() {
  const settings = await getSiteSettings();

  return <SettingsForm settings={settings} />;
}

