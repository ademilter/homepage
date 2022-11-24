"use client";

import Segmented from "@/components/segmented";
import { useState } from "react";
import { IApp } from "@/types/index";
import AppCard from "@/components/app-card";

export default function Apps({ data }: { data: IApp[] }) {
  const [selectedTab, setSelectedTab] = useState("iOS");

  const os = [...new Set(data.flatMap((tool: IApp) => tool.os) as string[])];

  return (
    <>
      <Segmented
        className="mt-10"
        fullWidth
        data={os}
        onChange={setSelectedTab}
        selected={selectedTab}
      />

      <div className="mt-10 divide-y divide-zinc-100 dark:divide-zinc-800">
        {data
          .filter((app: IApp) => app.os.includes(selectedTab))
          .map((app) => (
            <AppCard key={app.id} app={app} />
          ))}
      </div>
    </>
  );
}
