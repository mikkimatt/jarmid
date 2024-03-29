import { OrgControl } from "./_components/org-control";
import { PictureSideMenu } from "./_components/pic-side-menu";

const OraganizationIdLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
        <OrgControl />
        <PictureSideMenu />
        {children}
    </>
  )
};

export default OraganizationIdLayout;
