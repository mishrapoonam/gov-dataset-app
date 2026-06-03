import Link from "next/link";
import { getDatasetById } from "@/lib/api";

export default async function DatasetDetailPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params;
  const dataset = await getDatasetById(id);
  // grab first contact if available
  const contact = dataset.contacts?.[0];

  return (
    <>
      <Link href="/datasets" className="govuk-back-link">
        Back
      </Link>

      <h1 className="govuk-heading-l">{dataset.title}</h1>

      <dl className="govuk-summary-list">
        <div className="govuk-summary-list__row">
          <dt className="govuk-summary-list__key">Description</dt>
          <dd className="govuk-summary-list__value">
            {dataset.description || 'Not available'}
          </dd>
        </div>

        {dataset.links?.latest_version?.href && (
          <div className="govuk-summary-list__row">
            <dt className="govuk-summary-list__key">Methodologies</dt>
            <dd className="govuk-summary-list__value">
              <a
                href={dataset.links.latest_version.href}
                className="govuk-link"
                target="_blank"
                rel="noreferrer"
              >
                View latest version
              </a>
            </dd>
          </div>
        )}

        {contact && (
          <div className="govuk-summary-list__row">
            <dt className="govuk-summary-list__key">Contacts</dt>
            <dd className="govuk-summary-list__value">
              <dl className="govuk-summary-list govuk-summary-list--no-border">
                <div className="govuk-summary-list__row">
                  <dt className="govuk-summary-list__key">Name</dt>
                  <dd className="govuk-summary-list__value">
                    {contact.name || "Not available"}
                  </dd>
                </div>

                <div className="govuk-summary-list__row">
                  <dt className="govuk-summary-list__key">Email</dt>
                  <dd className="govuk-summary-list__value">
                    {contact.email ? (
                      <a href={`mailto:${contact.email}`} className="govuk-link">
                        {contact.email}
                      </a>
                    ) : (
                      "Not available"
                    )}
                  </dd>
                </div>

                <div className="govuk-summary-list__row">
                  <dt className="govuk-summary-list__key">Telephone</dt>
                  <dd className="govuk-summary-list__value">
                    {contact.telephone || "Not available"}
                  </dd>
                </div>
              </dl>
            </dd>
          </div>
        )}

        <div className="govuk-summary-list__row">
          <dt className="govuk-summary-list__key">Release frequency</dt>
          <dd className="govuk-summary-list__value">
            {dataset.release_frequency || "Not available"}
          </dd>
        </div>

        <div className="govuk-summary-list__row">
          <dt className="govuk-summary-list__key">Next release</dt>
          <dd className="govuk-summary-list__value">
            {dataset.next_release || "Not available"}
          </dd>
        </div>

        <div className="govuk-summary-list__row">
          <dt className="govuk-summary-list__key">State</dt>
          <dd className="govuk-summary-list__value">
            {dataset.state || "Not available"}
          </dd>
        </div>
      </dl>
    </>
  );
}