"use client";

import Segmented from "@/components/segmented";
import { useState } from "react";
import { IApp } from "@/types";
import AppCard from "@/components/app-card";
import { uniq } from "lodash";

export default function Apps({ data }: { data: IApp[] }) {
  const [selectedTab, setSelectedTab] = useState("iOS");

  const os = uniq(data.flatMap((tool: IApp) => tool.fields.os) as string[]);

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
          .filter((app: IApp) => app.fields.os.includes(selectedTab))
          .map((app) => (
            <AppCard key={app.id} app={app} />
          ))}
      </div>
    </>
  );
}
