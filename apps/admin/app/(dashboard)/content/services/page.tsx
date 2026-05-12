import { getPublicServices } from "@bms/lib";
import { ServiceManager } from "@/components/service-manager";

export default async function ServicesAdminPage() {
  const services = await getPublicServices();

  return <ServiceManager services={services} />;
}

