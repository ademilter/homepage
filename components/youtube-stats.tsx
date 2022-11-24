"use client";

import MetricCard from "@/components/metric-card";
import { useEffect, useState } from "react";

export default function YoutubeStats() {
  const [data, setData] = useState(null);

  const fetchData = async () => {
    const res = await fetch("/api/youtube");
    const data = await res.json();
    if (res.ok) {
      setData(data);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="grid gap-6 sm:grid-cols-2 sm:gap-8">
      <MetricCard href={"youtube"} data={data?.subscriberCount ?? 0}>
        Youtube Subscribers
      </MetricCard>
      <MetricCard href={"youtube"} data={data?.viewCount ?? 0}>
        Youtube Views
      </MetricCard>
    </div>
  );
}
