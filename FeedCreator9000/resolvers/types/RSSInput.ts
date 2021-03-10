import { Field, InputType, Int } from "type-graphql";

@InputType()
export class RSSInput {
    @Field({ nullable: true })
    title: string;

    @Field({ nullable: true })
    language: string;

    @Field(type => String)
    description: string;

    @Field({ nullable: true })
    link: string;

    @Field({ nullable: true })
    rssUrlLink: string;
}