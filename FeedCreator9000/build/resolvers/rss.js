"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RSSResolver = void 0;
const type_graphql_1 = require("type-graphql");
const RSS_1 = require("../entities/RSS");
const typeorm_1 = require("typeorm");
const RSSItem_1 = require("../entities/RSSItem");
const RSSItemInput_1 = require("./types/RSSItemInput");
const RSSInput_1 = require("./types/RSSInput");
let RSSResolver = class RSSResolver {
    returnSingleCategory(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield typeorm_1.getRepository(RSS_1.RSS).findOne(id, { relations: ["rssItems"] });
        });
    }
    ;
    createNewFeed({ title, description, link, language, rssUrlLink }) {
        return __awaiter(this, void 0, void 0, function* () {
            let rss = new RSS_1.RSS();
            rss.title = title;
            rss.description = description;
            rss.link = link;
            rss.language = language;
            rss.rssUrlLink = rssUrlLink;
            return typeorm_1.getRepository(RSS_1.RSS).insert(rss).then(r => {
                rss.id = r.generatedMaps[0].id;
                return rss;
            });
        });
    }
    ;
    addNewStory({ rssId, description, link, pubDate }) {
        return __awaiter(this, void 0, void 0, function* () {
            let rssItem = new RSSItem_1.RSSItem();
            rssItem.guid = '';
            rssItem.link = link;
            rssItem.pubDate = pubDate;
            rssItem.description = description;
            rssItem.rssId = rssId;
            return typeorm_1.getRepository(RSSItem_1.RSSItem).insert(rssItem).then(rI => {
                rssItem.id = rI.generatedMaps[0].id;
                return rssItem;
            });
        });
    }
    ;
};
__decorate([
    type_graphql_1.Query(_returns => RSS_1.RSS, { nullable: false }),
    __param(0, type_graphql_1.Arg("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], RSSResolver.prototype, "returnSingleCategory", null);
__decorate([
    type_graphql_1.Mutation(() => RSS_1.RSS),
    __param(0, type_graphql_1.Arg("data")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [RSSInput_1.RSSInput]),
    __metadata("design:returntype", Promise)
], RSSResolver.prototype, "createNewFeed", null);
__decorate([
    type_graphql_1.Mutation(() => RSSItem_1.RSSItem),
    __param(0, type_graphql_1.Arg("newRssItem")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [RSSItemInput_1.RSSItemInput]),
    __metadata("design:returntype", Promise)
], RSSResolver.prototype, "addNewStory", null);
RSSResolver = __decorate([
    type_graphql_1.Resolver()
], RSSResolver);
exports.RSSResolver = RSSResolver;
