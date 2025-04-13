import { prisma } from "@/prisma/client";
import IssueSummary from "./IssueSummary";
import IssueChart from "./IssueChart";
import { Flex, Grid } from "@radix-ui/themes";
import LatestIssues from "./LatestIssues";
import { Metadata } from "next";

export default async function Home() {
  // const open = await prisma.issue.count({ where: { status: "OPEN" } });
  // const inProgress = await prisma.issue.count({
  //   where: { status: "IN_PROGRESS" },
  // });
  // const closed = await prisma.issue.count({ where: { status: "CLOSED" } });
  // console.log("NEXTAUTH_URL:", process.env.NEXTAUTH_URL);
  // console.log("GOOGLE_CLIENT_ID:", process.env.GOOGLE_CLIENT_ID);
  let open = 0,
    inProgress = 0,
    closed = 0;

  try {
    open = await prisma.issue.count({ where: { status: "OPEN" } });
    inProgress = await prisma.issue.count({ where: { status: "IN_PROGRESS" } });
    closed = await prisma.issue.count({ where: { status: "CLOSED" } });
  } catch (err) {
    console.error("Prisma error:", err);
  }
  return (
    <Grid columns={{ initial: "1", md: "2" }} gap="5">
      <Flex direction="column" gap="5">
        <IssueSummary open={open} inProgress={inProgress} closed={closed} />
        <IssueChart open={open} inProgress={inProgress} closed={closed} />
      </Flex>
      <LatestIssues />
    </Grid>
  );
}

export const metadata: Metadata = {
  title: "Issue Tracker - Dashboard",
  description: "View a summary of project issues",
};

export const dynamic = "force-dynamic";
