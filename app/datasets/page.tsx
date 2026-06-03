import DatasetTable from "@/components/DatasetTable";
import { getDatasets } from "@/lib/api";

export default async function DatasetsPage() {
  const datasets = await getDatasets();
  
  // console.log('Total datasets:', datasets.length);

  return (
    <>
      <h1 className="govuk-heading-l govuk-!-text-align-centre">Datasets</h1>
      <DatasetTable datasets={datasets} />
    </>
  );
}