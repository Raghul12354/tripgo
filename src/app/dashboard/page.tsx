import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

import Users from "@/components/dashboard/Users";
import Logout from "@/components/dashboard/Logout";
import UpdateTours from "@/components/dashboard/updateTours";

// ** add: how we work section and animations add:Faq in booking form page and policy information also

const DashboardPage = async () => {
  const session = await getServerSession();
  if (!session) {
    redirect("/login");
  }
  return (
    <div className="px-6 md:px-20 pb-20">
      <div className="flex justify-end my-10">
      {!!session && <Logout />}
      </div>
        <Users />
        <UpdateTours />
      </div>
  );
};

export default DashboardPage;
