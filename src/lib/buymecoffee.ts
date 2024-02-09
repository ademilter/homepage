import { ISupporter } from "@/types";
import { isAfter, startOfMonth } from "date-fns";

type Result = {
  current_page: number;
  data: ISupporter[];
};

export default class SupporterService {
  private readonly token: string = process.env.BUYMECOFFEE_ACCESS_TOKENS!;
  private url = "https://developers.buymeacoffee.com";

  public async getSupporters(): Promise<ISupporter[]> {
    const data = await this.fetchData();
    const startOfPreviousMonth = this.getStartOfPreviousMonth();

    const filterData = this.filterByLastMonth(data.data, startOfPreviousMonth);
    return this.normalizeData(filterData);
  }

  private async fetchData(): Promise<Result> {
    const url = new URL(`/api/v1/supporters`, this.url);

    const response = await fetch(url.toString(), {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${this.token}`,
      },
      next: { revalidate: 3600 },
    });
    return await response.json();
  }

  private getStartOfPreviousMonth(): Date {
    const startOfPreviousMonth = startOfMonth(new Date());
    startOfPreviousMonth.setMonth(startOfPreviousMonth.getMonth() - 1);
    return startOfPreviousMonth;
  }

  private filterByLastMonth(
    data: ISupporter[],
    startOfPreviousMonth: Date,
  ): ISupporter[] {
    return data.filter((supporter) => {
      const supporterDate = new Date(supporter.support_created_on);
      return isAfter(supporterDate, startOfPreviousMonth);
    });
  }

  private normalizeData(data: ISupporter[]) {
    return data.map((supporter) => {
      const {
        support_id,
        support_visibility,
        supporter_name,
        support_coffees,
        support_note,
        transaction_id,
        support_created_on,
      } = supporter;
      return {
        support_id,
        support_visibility,
        supporter_name,
        support_coffees,
        support_note,
        transaction_id,
        support_created_on,
      };
    });
  }
}
