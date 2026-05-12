import { formatDate, getContacts } from "@bms/lib";
import { Card } from "@bms/ui";

export default async function ContactsPage() {
  const contacts = await getContacts();

  return (
    <Card className="space-y-6 bg-white/90">
      <div>
        <p className="text-xs uppercase tracking-[0.28em] text-[var(--accent)]">Contacts</p>
        <h2 className="font-display text-3xl uppercase tracking-[0.08em]">
          Form submissions
        </h2>
      </div>
      <div className="space-y-3">
        {contacts.map((contact) => (
          <div className="rounded-2xl border border-black/10 bg-white px-4 py-4" key={contact.id}>
            <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
              <div className="space-y-1">
                <h3 className="font-display text-2xl uppercase tracking-[0.08em]">{contact.name}</h3>
                <p className="text-sm text-[var(--muted-foreground)]">
                  {contact.email} {contact.phone ? `• ${contact.phone}` : ""}
                </p>
                <p className="text-sm text-[var(--muted-foreground)]">
                  {contact.company ?? "Tanpa nama perusahaan"}
                </p>
              </div>
              <p className="text-sm text-[var(--muted-foreground)]">{formatDate(contact.created_at)}</p>
            </div>
            <p className="mt-4 text-sm leading-7 text-[var(--muted-foreground)]">{contact.message}</p>
          </div>
        ))}
      </div>
    </Card>
  );
}

