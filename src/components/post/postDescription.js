import React from "react";

const PostDescription = ({offer={}}) => {
  return (
    <div className="flex flex-col gap-y-5 divide-y divide-[#707070]">
      <p className="text-[30px] text-hero">Offer description</p>
      <p className="text-[20px] text-paragraph py-6 md:pr-14 lg:pr-28 xl:pr-48 2xl:pr-72">
        {offer?.description}
        {/* We are looking for candidates with diplomas and/or degrees in the
        economics/accounting sector, with a good knowledge of company
        administrative and accounting activities. Knowledge of more in-depth
        topics, such as the preparation and closing of financial statements,
        complete the ideal profile. Previous experience in the role required.
        Requires a good knowledge of the office package, in particular excel,
        and relative use of the pc
        <br />
        <br />
        Individual skills and aptitudes:
        <br />
        <br />
        The ideal candidate will have the following personal characteristics
        <br />- organizational and analytical skills - aptitude for team work
        <br />- flexibility, determination and resilience
        <br />
        <br />
        The tasks:
        <br />
        <br />
        The selected candidate, placed within the administrative/accounting
        office, will be responsible for:
        <br />
        <br />
        Invoice registration - passive cycle
        <br />
        Issue of sales invoices - active cycle
        <br />
        Preparation of Intrastat declaration
        <br />
        General ledger postings
        <br />
        Checking expense reports
        <br />
        Predisposition for F24 models */}
      </p>
    </div>
  );
};

export default PostDescription;
