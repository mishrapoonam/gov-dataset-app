import Link from "next/link";

// just the fields we need for the table
type Dataset = {
  id: string;
  title: string;
  state?: string;
  next_release?: string;
};

type Props = {
  datasets: Dataset[];
};

export default function DatasetTable({ datasets }: Props) {
  return (
    <table className="govuk-table">
      <caption className="govuk-table__caption govuk-table__caption--l">
        Datasets
      </caption>

      <thead className="govuk-table__head">
        <tr className="govuk-table__row">
          <th scope="col" className="govuk-table__header">
            Dataset
          </th>
          <th scope="col" className="govuk-table__header">
            State
          </th>
          <th scope="col" className="govuk-table__header">
            Next release
          </th>
        </tr>
      </thead>

      <tbody className="govuk-table__body">
        {datasets.map((dataset) => (
          <tr className="govuk-table__row" key={dataset.id}>
            <td className="govuk-table__cell">
              <Link href={`/dataset/${dataset.id}`} className='govuk-link'>
                {dataset.title}
              </Link>
            </td>
            <td className="govuk-table__cell">{dataset.state || 'Not available'}</td>
            <td className="govuk-table__cell">
              {dataset.next_release || 'Not available'}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}