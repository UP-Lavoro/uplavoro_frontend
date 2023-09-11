import BackLink from "@/components/admin/backLink";
import AdditionalInfosCompany from "@/components/admin/companies/components/additionalInfos";
import CompanyForm from "@/components/admin/companies/components/companyForm";
import PublishedOffers from "@/components/admin/companies/components/publishedOffers";
import QuickActionsCompany from "@/components/admin/companies/components/quickActions";
import DashboardLayout from "@/components/dashboardLayout";
import Image from "next/image";
import { useRouter } from "next/router";
import Young1 from "../../../../public/assets/images/young1.svg";
import React, { useEffect, useState } from "react";
import withAuth from "@/components/privateRoute";
import { useSelector } from "react-redux";

const CompanyPage = () => {
  const router = useRouter();
  const { companyId } = router.query;
  const { companies } = useSelector((state) => state?.admin);
  const [companyById, setCompanyById] = useState(null);

  useEffect(() => {
    if (companyId && companies) {
      let specificCompany = companies?.find((obj) => obj?.id == companyId);
      setCompanyById(specificCompany);
    }
  }, [companyId]);

  return (
    <DashboardLayout component={"companies"}>
      <div className="flex flex-col gap-y-2">
        <BackLink name={"companies"} link={"/admin/companies"} />
        <div className="flex items-center gap-x-6">
          <p className="text-[40px] font-bold trackin-[-1.2px]">IDC Srl</p>
          <Image
            src={Young1}
            style={{ borderRadius: "100%" }}
            alt="user image"
            width={50}
            height={50}
          />
        </div>

        <div className="flex flex-col divide-y divide-[#C3C1C1]">
          <div className="flex justify-between py-4 pb-10">
            <div className="w-[62%]">
              <CompanyForm companyData={companyById}/>
            </div>
            <div className="w-[34%] flex flex-col gap-y-6 pt-8">
              <QuickActionsCompany />
              <AdditionalInfosCompany />
            </div>
          </div>
          {companyId == 'new' ? '' :
          <div className="w-full flex py-10">
            <PublishedOffers />
          </div>
          }
        </div>
      </div>
    </DashboardLayout>
  );
};

export async function getServerSideProps(context) {
  // const session = await getSession(context);

  return {
    props: {
      notShowHeader: true,
    },
  };
}

export default withAuth(CompanyPage);
