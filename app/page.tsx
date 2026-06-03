import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <h1 className="govuk-heading-xl govuk-!-text-align-centre">
        Office for National Statistics
      </h1>

      <p className="govuk-body-l govuk-!-text-align-centre">
        Explore ONS datasets
      </p>

      <div className="govuk-!-text-align-centre">
        <Link
          href="/datasets"
          role="button"
          draggable={false}
          className="govuk-button govuk-button--start"
        >
        Start now
        <svg
          className="govuk-button__start-icon"
          xmlns="http://www.w3.org/2000/svg"
          width="17.5"
          height="19"
          viewBox="0 0 33 40"
          aria-hidden="true"
          focusable="false"
        >
          <path fill="currentColor" d="M0 0h13l20 20-20 20H0l20-20z" />
        </svg>
      </Link>
      </div>
    </>
  );
}