import { Resolver, Mutation, Arg, Query } from "type-graphql";
import { RSS } from "../entities/RSS";
import { getRepository } from "typeorm";
import { RSSItem } from "../entities/RSSItem";
import { RSSItemInput } from "./types/RSSItemInput";
import { RSSInput } from "./types/RSSInput";
import fs from "fs";

@Resolver()
export class RSSResolver {
    @Query(_returns => RSS, { nullable: false })
    async returnSingleCategory(@Arg("id") id: number) {
        return await getRepository(RSS).findOne(id, {relations: ["rssItems"]});
    };

    @Mutation(() => RSS)
    async createNewFeed(@Arg("data") { title, description, link, language, rssUrlLink }: RSSInput): Promise<RSS> {
        let rss = new RSS();
        rss.title = title;
        rss.description = description;
        rss.link = link;
        rss.language = language;
        rss.rssUrlLink = rssUrlLink;
        return getRepository(RSS).insert(rss).then(r => {
            rss.id = r.generatedMaps[0].id;
            return rss;
        });
    };

    @Mutation(() => RSSItem)
    async addNewStory(@Arg("newRssItem") { rssId, description, link, pubDate }: RSSItemInput): Promise<RSSItem> {
        let rssItem = new RSSItem();
        rssItem.guid = '';
        rssItem.link = link;
        rssItem.pubDate = pubDate;
        rssItem.description = description;
        rssItem.rssId = rssId;
        return getRepository(RSSItem).insert(rssItem).then(rI => {
            rssItem.id = rI.generatedMaps[0].id;
            return rssItem;
        });
    };
}