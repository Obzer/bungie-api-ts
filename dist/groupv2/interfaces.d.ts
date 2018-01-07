/**
 * Bungie.Net API
 * These endpoints constitute the functionality exposed by Bungie.net, both for more traditional website functionality and for connectivity to Bungie video games and their related functionality.
 *
 * OpenAPI spec version: 2.1.1
 * Contact: support@bungie.com
 *
 * NOTE: This class is auto generated by the bungie-api-ts code generator program.
 * https://github.com/DestinyItemManager/bugie-api-ts
 * Do not edit these files manually.
 */

import {
  BungieMembershipType,
  PlatformErrorCodes
} from '../common';
import {
  PagedQuery
} from '../platform';
import {
  UserInfoCard,
  UserMembership
} from '../user/interfaces';

export interface GroupResponse {
  detail?: GroupV2;
  founder?: GroupMember;
  alliedIds?: number[];
  parentGroup?: GroupV2;
  allianceStatus?: GroupAllianceStatus;
  groupJoinInviteCount?: number;
  /**
   * This property will be populated if the authenticated user is a member of the
   * group. Note that because of account linking, a user can sometimes be part of a
   * clan more than once. As such, this returns the highest member type available.
   */
  currentUserMemberMap?: { [key: undefined]: undefined };
  /**
   * This property will be populated if the authenticated user is an applicant or has
   * an outstanding invitation to join. Note that because of account linking, a user
   * can sometimes be part of a clan more than once.
   */
  currentUserPotentialMemberMap?: { [key: undefined]: undefined };
}

export interface GroupV2 {
  groupId?: number;
  name?: string;
  groupType?: GroupType;
  membershipIdCreated?: number;
  creationDate?: string;
  modificationDate?: string;
  about?: string;
  tags?: string[];
  memberCount?: number;
  isPublic?: boolean;
  isPublicTopicAdminOnly?: boolean;
  primaryAlliedGroupId?: number;
  motto?: string;
  allowChat?: boolean;
  isDefaultPostPublic?: boolean;
  chatSecurity?: ChatSecuritySetting;
  locale?: string;
  avatarImageIndex?: number;
  homepage?: GroupHomepage;
  membershipOption?: MembershipOption;
  defaultPublicity?: GroupPostPublicity;
  theme?: string;
  bannerPath?: string;
  avatarPath?: string;
  isAllianceOwner?: boolean;
  conversationId?: number;
  enableInvitationMessagingForAdmins?: boolean;
  banExpireDate?: string;
  features?: GroupFeatures;
  clanInfo?: GroupV2ClanInfoAndInvestment;
}

export const enum GroupType {
  General = 0,
  Clan = 1
}

export const enum ChatSecuritySetting {
  Group = 0,
  Admins = 1
}

export const enum GroupHomepage {
  Wall = 0,
  Forum = 1,
  AllianceForum = 2
}

export const enum MembershipOption {
  Reviewed = 0,
  Open = 1,
  Closed = 2
}

export const enum GroupPostPublicity {
  Public = 0,
  Alliance = 1,
  Private = 2
}

export interface GroupFeatures {
  maximumMembers?: number;
  /**
   * Maximum number of groups of this type a typical membership may join. For example,
   * a user may join about 50 General groups with their Bungie.net account. They may
   * join one clan per Destiny membership.
   */
  maximumMembershipsOfGroupType?: number;
  capabilities?: Capabilities;
  membershipTypes?: BungieMembershipType[];
  /**
   * Minimum Member Level allowed to invite new members to group
   * 
   * Always Allowed: Founder, Acting Founder
   * 
   * True means admins have this power, false means they don't
   * 
   * Default is false for clans, true for groups.
   */
  invitePermissionOverride?: boolean;
  /**
   * Minimum Member Level allowed to update group culture
   * 
   * Always Allowed: Founder, Acting Founder
   * 
   * True means admins have this power, false means they don't
   * 
   * Default is false for clans, true for groups.
   */
  updateCulturePermissionOverride?: boolean;
  /**
   * Minimum Member Level allowed to host guided games
   * 
   * Always Allowed: Founder, Acting Founder, Admin
   * 
   * Allowed Overrides: None, Member, Beginner
   * 
   * Default is Member for clans, None for groups, although this means nothing for
   * groups.
   */
  hostGuidedGamePermissionOverride?: HostGuidedGamesPermissionLevel;
  /**
   * Minimum Member Level allowed to update banner
   * 
   * Always Allowed: Founder, Acting Founder
   * 
   * True means admins have this power, false means they don't
   * 
   * Default is false for clans, true for groups.
   */
  updateBannerPermissionOverride?: boolean;
  /**
   * Level to join a member at when accepting an invite, application, or joining an
   * open clan
   * 
   * Default is Beginner.
   */
  joinLevel?: RuntimeGroupMemberType;
}

export const enum Capabilities {
  None = 0,
  Leaderboards = 1,
  Callsign = 2,
  OptionalConversations = 4,
  ClanBanner = 8,
  D2InvestmentData = 16,
  Tags = 32,
  Alliances = 64
}

/** The same as GroupV2ClanInfo, but includes any investment data. */
export interface GroupV2ClanInfoAndInvestment {
  d2ClanProgressions?: { [key: number]: undefined };
  clanCallsign?: string;
  clanBannerData?: ClanBanner;
}

export interface ClanBanner {
  decalId?: number;
  decalColorId?: number;
  decalBackgroundColorId?: number;
  gonfalonId?: number;
  gonfalonColorId?: number;
  gonfalonDetailId?: number;
  gonfalonDetailColorId?: number;
}

export interface GroupMember {
  memberType?: RuntimeGroupMemberType;
  isOnline?: boolean;
  groupId?: number;
  destinyUserInfo?: UserInfoCard;
  bungieNetUserInfo?: UserInfoCard;
  joinDate?: string;
}

export const enum RuntimeGroupMemberType {
  None = 0,
  Beginner = 1,
  Member = 2,
  Admin = 3,
  ActingFounder = 4,
  Founder = 5
}

export const enum GroupAllianceStatus {
  Unallied = 0,
  Parent = 1,
  Child = 2
}

export const enum GroupDateRange {
  All = 0,
  PastDay = 1,
  PastWeek = 2,
  PastMonth = 3,
  PastYear = 4
}

export interface GroupQuery {
  name?: string;
  groupType?: GroupType;
  creationDate?: GroupDateRange;
  sortBy?: GroupSortBy;
  groupMemberCountFilter?: number;
  localeFilter?: string;
  tagText?: string;
  itemsPerPage?: number;
  currentPage?: number;
  requestContinuationToken?: string;
}

export interface GroupAction {
  /** Type of group, either Bungie.net hosted group, or a game services hosted clan. */
  groupType?: GroupType;
  name?: string;
  about?: string;
  motto?: string;
  theme?: string;
  avatarImageIndex?: number;
  tags?: string;
  isPublic?: boolean;
  membershipOption?: MembershipOption;
  isPublicTopicAdminOnly?: boolean;
  isDefaultPostPublic?: boolean;
  allowChat?: boolean;
  isDefaultPostAlliance?: boolean;
  chatSecurity?: ChatSecuritySetting;
  callsign?: string;
  locale?: string;
  homepage?: GroupHomepage;
  /**
   * When operation needs a platform specific account ID for the present user, use
   * this property. In particular, groupType of Clan requires this value to be set.
   */
  platformMembershipType?: BungieMembershipType;
}

export interface GroupEditAction {
  name?: string;
  about?: string;
  motto?: string;
  theme?: string;
  avatarImageIndex?: number;
  tags?: string;
  isPublic?: boolean;
  membershipOption?: number;
  isPublicTopicAdminOnly?: boolean;
  allowChat?: boolean;
  chatSecurity?: number;
  callsign?: string;
  locale?: string;
  homepage?: number;
  enableInvitationMessagingForAdmins?: boolean;
  defaultPublicity?: number;
}

export interface GroupOptionsEditAction {
  /**
   * Minimum Member Level allowed to invite new members to group
   * 
   * Always Allowed: Founder, Acting Founder
   * 
   * True means admins have this power, false means they don't
   * 
   * Default is false for clans, true for groups.
   */
  InvitePermissionOverride?: boolean;
  /**
   * Minimum Member Level allowed to update group culture
   * 
   * Always Allowed: Founder, Acting Founder
   * 
   * True means admins have this power, false means they don't
   * 
   * Default is false for clans, true for groups.
   */
  UpdateCulturePermissionOverride?: boolean;
  /**
   * Minimum Member Level allowed to host guided games
   * 
   * Always Allowed: Founder, Acting Founder, Admin
   * 
   * Allowed Overrides: None, Member, Beginner
   * 
   * Default is Member for clans, None for groups, although this means nothing for
   * groups.
   */
  HostGuidedGamePermissionOverride?: number;
  /**
   * Minimum Member Level allowed to update banner
   * 
   * Always Allowed: Founder, Acting Founder
   * 
   * True means admins have this power, false means they don't
   * 
   * Default is false for clans, true for groups.
   */
  UpdateBannerPermissionOverride?: boolean;
  /**
   * Level to join a member at when accepting an invite, application, or joining an
   * open clan
   * 
   * Default is Beginner.
   */
  JoinLevel?: number;
}

export interface GroupOptionalConversationAddRequest {
  chatName?: string;
  chatSecurity?: ChatSecuritySetting;
}

export interface GroupOptionalConversationEditRequest {
  chatEnabled?: boolean;
  chatName?: string;
  chatSecurity?: number;
}

export interface GroupBanRequest {
  comment?: string;
  length?: IgnoreLength;
}

export interface GroupApplicationRequest {
  message?: string;
}

export interface GroupApplicationListRequest {
  memberships?: UserMembership[];
  message?: string;
}

export const enum GroupsForMemberFilter {
  All = 0,
  Founded = 1,
  NonFounded = 2
}

export const enum GroupPotentialMemberStatus {
  None = 0,
  Applicant = 1,
  Invitee = 2
}

export interface GroupTheme {
  name?: string;
  folder?: string;
  description?: string;
}

/**
 * A small infocard of group information, usually used for when a list of groups
 * are returned
 */
export interface GroupV2Card {
  groupId?: number;
  name?: string;
  groupType?: GroupType;
  creationDate?: string;
  about?: string;
  motto?: string;
  memberCount?: number;
  locale?: string;
  membershipOption?: MembershipOption;
  capabilities?: Capabilities;
  clanInfo?: GroupV2ClanInfo;
  avatarPath?: string;
  theme?: string;
}

/**
 * This contract contains clan-specific group information. It does not include any
 * investment data.
 */
export interface GroupV2ClanInfo {
  clanCallsign?: string;
  clanBannerData?: ClanBanner;
}

export const enum GroupSortBy {
  Name = 0,
  Date = 1,
  Popularity = 2,
  Id = 3
}

export interface GroupSearchResponse {
  results?: GroupV2Card[];
  totalResults?: number;
  hasMore?: boolean;
  query?: PagedQuery;
  replacementContinuationToken?: string;
  /**
   * If useTotalResults is true, then totalResults represents an accurate count.
   * 
   * If False, it does not, and may be estimated/only the size of the current page.
   * 
   * Either way, you should probably always only trust hasMore.
   * 
   * This is a long-held historical throwback to when we used to do paging with known
   * total results. Those queries toasted our database, and we were left to hastily
   * alter our endpoints and create backward- compatible shims, of which
   * useTotalResults is one.
   */
  useTotalResults?: boolean;
}

export interface GroupOptionalConversation {
  groupId?: number;
  conversationId?: number;
  chatEnabled?: boolean;
  chatName?: string;
  chatSecurity?: ChatSecuritySetting;
}

export interface GroupCreationResponse {
  groupId?: number;
}

export interface SearchResultOfGroupMember {
  results?: GroupMember[];
  totalResults?: number;
  hasMore?: boolean;
  query?: PagedQuery;
  replacementContinuationToken?: string;
  /**
   * If useTotalResults is true, then totalResults represents an accurate count.
   * 
   * If False, it does not, and may be estimated/only the size of the current page.
   * 
   * Either way, you should probably always only trust hasMore.
   * 
   * This is a long-held historical throwback to when we used to do paging with known
   * total results. Those queries toasted our database, and we were left to hastily
   * alter our endpoints and create backward- compatible shims, of which
   * useTotalResults is one.
   */
  useTotalResults?: boolean;
}

export interface GroupMemberLeaveResult {
  group?: GroupV2;
  groupDeleted?: boolean;
}

export const enum IgnoreLength {
  None = 0,
  Week = 1,
  TwoWeeks = 2,
  ThreeWeeks = 3,
  Month = 4,
  ThreeMonths = 5,
  SixMonths = 6,
  Year = 7,
  Forever = 8,
  ThreeMinutes = 9,
  Hour = 10,
  ThirtyDays = 11
}

export interface SearchResultOfGroupBan {
  results?: GroupBan[];
  totalResults?: number;
  hasMore?: boolean;
  query?: PagedQuery;
  replacementContinuationToken?: string;
  /**
   * If useTotalResults is true, then totalResults represents an accurate count.
   * 
   * If False, it does not, and may be estimated/only the size of the current page.
   * 
   * Either way, you should probably always only trust hasMore.
   * 
   * This is a long-held historical throwback to when we used to do paging with known
   * total results. Those queries toasted our database, and we were left to hastily
   * alter our endpoints and create backward- compatible shims, of which
   * useTotalResults is one.
   */
  useTotalResults?: boolean;
}

export interface GroupBan {
  groupId?: number;
  lastModifiedBy?: UserInfoCard;
  createdBy?: UserInfoCard;
  dateBanned?: string;
  dateExpires?: string;
  comment?: string;
  bungieNetUserInfo?: UserInfoCard;
  destinyUserInfo?: UserInfoCard;
}

export interface GroupApplicationResponse {
  resolution?: GroupApplicationResolveState;
}

export const enum GroupApplicationResolveState {
  Unresolved = 0,
  Accepted = 1,
  Denied = 2,
  Rescinded = 3
}

export interface SearchResultOfGroupMemberApplication {
  results?: GroupMemberApplication[];
  totalResults?: number;
  hasMore?: boolean;
  query?: PagedQuery;
  replacementContinuationToken?: string;
  /**
   * If useTotalResults is true, then totalResults represents an accurate count.
   * 
   * If False, it does not, and may be estimated/only the size of the current page.
   * 
   * Either way, you should probably always only trust hasMore.
   * 
   * This is a long-held historical throwback to when we used to do paging with known
   * total results. Those queries toasted our database, and we were left to hastily
   * alter our endpoints and create backward- compatible shims, of which
   * useTotalResults is one.
   */
  useTotalResults?: boolean;
}

export interface GroupMemberApplication {
  groupId?: number;
  creationDate?: string;
  resolveState?: GroupApplicationResolveState;
  resolveDate?: string;
  resolvedByMembershipId?: number;
  requestMessage?: string;
  resolveMessage?: string;
  destinyUserInfo?: UserInfoCard;
  bungieNetUserInfo?: UserInfoCard;
}

export interface EntityActionResult {
  entityId?: number;
  result?: PlatformErrorCodes;
}

export interface GroupMembershipSearchResponse {
  results?: GroupMembership[];
  totalResults?: number;
  hasMore?: boolean;
  query?: PagedQuery;
  replacementContinuationToken?: string;
  /**
   * If useTotalResults is true, then totalResults represents an accurate count.
   * 
   * If False, it does not, and may be estimated/only the size of the current page.
   * 
   * Either way, you should probably always only trust hasMore.
   * 
   * This is a long-held historical throwback to when we used to do paging with known
   * total results. Those queries toasted our database, and we were left to hastily
   * alter our endpoints and create backward- compatible shims, of which
   * useTotalResults is one.
   */
  useTotalResults?: boolean;
}

export interface GroupMembership {
  member?: GroupMember;
  group?: GroupV2;
}

export interface GroupPotentialMembershipSearchResponse {
  results?: GroupPotentialMembership[];
  totalResults?: number;
  hasMore?: boolean;
  query?: PagedQuery;
  replacementContinuationToken?: string;
  /**
   * If useTotalResults is true, then totalResults represents an accurate count.
   * 
   * If False, it does not, and may be estimated/only the size of the current page.
   * 
   * Either way, you should probably always only trust hasMore.
   * 
   * This is a long-held historical throwback to when we used to do paging with known
   * total results. Those queries toasted our database, and we were left to hastily
   * alter our endpoints and create backward- compatible shims, of which
   * useTotalResults is one.
   */
  useTotalResults?: boolean;
}

export interface GroupPotentialMembership {
  member?: GroupPotentialMember;
  group?: GroupV2;
}

export interface GroupPotentialMember {
  potentialStatus?: GroupPotentialMemberStatus;
  groupId?: number;
  destinyUserInfo?: UserInfoCard;
  bungieNetUserInfo?: UserInfoCard;
  joinDate?: string;
}