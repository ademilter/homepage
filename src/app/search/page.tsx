"use client";

import { ILink } from "@/types";
import Container from "@/components/container";
import BookmarkCard from "@/components/bookmark-card";
import SubTitle from "@/components/subtitle";
import { fetchBookmark } from "./action";
import { useState } from "react";
import { QueryResult } from "@upstash/vector";

export default function Bookmark() {
  // const { count, data, year } = await fetchBookmark(new Date());
  const [query, setQuery] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<QueryResult[]>([]);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      setLoading(true);
      fetchBookmark(query).then((res) => {
        setData(res);
      });
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Container className="mt-12 sm:mt-14">
        <div>
          <SubTitle>Yer imleri için semantic-search</SubTitle>

          <form className="mt-4" onSubmit={onSubmit}>
            <input
              name="search"
              type="search"
              placeholder="Search..."
              required
              min={5}
              className="h-12 w-full rounded-lg border px-4"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              disabled={loading}
            />
          </form>

          <div className="mt-4">
            {data.map((item) => {
              return (
                <BookmarkCard
                  week={false}
                  key={item.id}
                  bookmark={item.metadata as ILink}
                />
              );
            })}
          </div>
        </div>
      </Container>
    </>
  );
}
