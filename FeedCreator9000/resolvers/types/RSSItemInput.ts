import { Field, InputType, Int } from "type-graphql";

@InputType()
export class RSSItemInput {
  @Field(_type => Int)
  rssId: number;

  @Field({ nullable: true })
  description: string;

  @Field(type => String)
  pubDate: Date;

  @Field({ nullable: true })
  link: string;
}