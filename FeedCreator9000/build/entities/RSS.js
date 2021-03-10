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
Object.defineProperty(exports, "__esModule", { value: true });
exports.RSS = void 0;
const type_graphql_1 = require("type-graphql");
const typeorm_1 = require("typeorm");
const RSSItem_1 = require("./RSSItem");
let RSS = class RSS {
};
__decorate([
    type_graphql_1.Field(_type => type_graphql_1.ID),
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], RSS.prototype, "id", void 0);
__decorate([
    type_graphql_1.Field(),
    typeorm_1.Column(),
    __metadata("design:type", String)
], RSS.prototype, "title", void 0);
__decorate([
    type_graphql_1.Field(),
    typeorm_1.Column(),
    __metadata("design:type", String)
], RSS.prototype, "link", void 0);
__decorate([
    type_graphql_1.Field(),
    typeorm_1.Column(),
    __metadata("design:type", String)
], RSS.prototype, "description", void 0);
__decorate([
    type_graphql_1.Field(),
    typeorm_1.Column(),
    __metadata("design:type", String)
], RSS.prototype, "language", void 0);
__decorate([
    type_graphql_1.Field(_type => [RSSItem_1.RSSItem]),
    typeorm_1.OneToMany(() => RSSItem_1.RSSItem, rssItem => rssItem.rss),
    __metadata("design:type", Array)
], RSS.prototype, "rssItems", void 0);
__decorate([
    type_graphql_1.Field(),
    typeorm_1.Column(),
    __metadata("design:type", String)
], RSS.prototype, "rssUrlLink", void 0);
RSS = __decorate([
    type_graphql_1.ObjectType({ description: "RSS Data" }),
    typeorm_1.Entity()
], RSS);
exports.RSS = RSS;
