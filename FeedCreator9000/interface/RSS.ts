import { RSSFeedInterface } from "./RSSFeed";
import { RSSItemInterface } from "./RSSItem";

export interface RSSInterface {
    id: number;

    title: string;

    link: string;

    description: string;

    language: string;

    rssItems?: RSSItemInterface[];

    rssFeed?: RSSFeedInterface;

    rssFeedId?: number;
}