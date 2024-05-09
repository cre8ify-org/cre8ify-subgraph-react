import { gql } from "@apollo/client";

export const queryContentUrl =
  "https://api.studio.thegraph.com/query/72160/cct/v.0.0.2";

export const subscriptionUrl=
  "https://api.studio.thegraph.com/query/72160/subscription/v0.0.1"

export const GET_ALL_FREE_CONTENT= gql`
query GetContentBeforeNowByCreator($nowInSeconds: BigInt!, $creator: Bytes!, $startTimestamp: BigInt!, $endTimestamp: BigInt!) {
    FreeCreated: freeContentCreateds(
        where: {
            timestamp_lt: $nowInSeconds
            creator: $creator
        }
    )
    {
		id
        CCP_id
        creator
        creatorUsername
        timestamp
    }

    FreeCreatedInterval: freeContentCreateds (
        where: {
          creator: $creator
          timestamp_gte: $startTimestamp
          timestamp_lte: $endTimestamp
        }
    ){
		id
        CCP_id
        creator
        creatorUsername
        timestamp
    }
  }
`
export const GET_ALL_EXCLUSIVE_CONTENT= gql`
query GetContentBeforeNowByCreator($nowInSeconds: BigInt!, $creator: Bytes!, $startTimestamp: BigInt!, $endTimestamp: BigInt!) {
    ExclusiveCreated: exclusiveContentCreateds (
        where: {
            timestamp_lt: $nowInSeconds
            creator: $creator
        }
    ){
		id
        CCP_id
        creator
        creatorUsername
        timestamp
    }

    ExclusiveCreatedInterval: exclusiveContentCreateds (
        where: {
          creator: $creator
          timestamp_gte: $startTimestamp
          timestamp_lte: $endTimestamp
        }
    ){
		id
        CCP_id
        creator
        creatorUsername
        timestamp
    }
  }
`

export const GET_ALL_FREE_LIKE= gql`
query GetLikesBetweenTimestamps($nowInSeconds: BigInt!, $creator: Bytes!, $startTimestamp: BigInt!, $endTimestamp: BigInt!)  {
    FreeContentLiked: freeContentLikeds (
        where: {
          creator: $creator
          timestamp_lt: $nowInSeconds
        }
    ){
		id
        freeContentID
        creator
        timestamp
    }

    FreeContentLikedInteval: freeContentLikeds (
        where: {
          creator: $creator
          timestamp_gte: $startTimestamp
          timestamp_lte: $endTimestamp
        }
    ){
		id
        freeContentID
        creator
        timestamp
    }
  }
`

export const GET_ALL_EXCLUSIVE_LIKE= gql`
query GetLikesBetweenTimestamps($nowInSeconds: BigInt!, $startTimestamp: BigInt!, $endTimestamp: BigInt!)  {
    ExclusiveContentLiked: exclusiveContentLikeds (
        where: {
          creator: $creator
          timestamp_lt: $nowInSeconds
        }
    ){
		id
        exclusiveContentID
        creator
        timestamp
    }

    ExclusiveContentLikedInterval: exclusiveContentLikeds (
        where: {
          creator: $creator
          timestamp_gte: $startTimestamp
          timestamp_lte: $endTimestamp
        }
    ){
		id
        exclusiveContentID
        creator
        timestamp
    }
  }
`

export const GET_ALL_FREE_DISLIKE= gql`
query GetDislikesBetweenTimestamps($nowInSeconds: BigInt!, $creator: Bytes!, $startTimestamp: BigInt!, $endTimestamp: BigInt!)  {
    FreeContentDisliked: freeContentDislikeds (
        where: {
          creator: $creator
          timestamp_lt: $nowInSeconds
        }
    ){
		id
        freeContentID
        creator
        timestamp
    }

    FreeContentDislikedInterval: freeContentDislikeds (
        where: {
          creator: $creator
          timestamp_gte: $startTimestamp
          timestamp_lte: $endTimestamp
        }
    ){
		id
        freeContentID
        creator
        timestamp
    }
  }
`

export const GET_ALL_EXCLUSIVE_DISLIKE= gql`
query GetDislikesBetweenTimestamps($nowInSeconds: BigInt!, $creator: Bytes!, $startTimestamp: BigInt!, $endTimestamp: BigInt!)  {
    ExclusiveContentDisliked: exclusiveContentDislikeds (
        where: {
          creator: $creator
          timestamp_lt: $nowInSeconds
        }
    ){
		id
        exclusiveContentID
        creator
        timestamp
    }

    ExclusiveContentDislikedInterval: exclusiveContentDislikeds (
        where: {
          creator: $creator
          timestamp_gte: $startTimestamp
          timestamp_lte: $endTimestamp
        }
    ){
		id
        exclusiveContentID
        creator
        timestamp
    }
  }
`

export const GET_ALL_SUBSCRIPTION= gql`
query GetSubscriptionBetweenTimestamps($nowInSeconds: BigInt!, $creator: Bytes!, $startTimestamp: BigInt!, $endTimestamp: BigInt!)  {
    subscription: subscribeds (
        where: {
          creator: $creator
          timeSubscribed_lt: $nowInSeconds
        }
    ){
		id
        creator
        subscriber
        timeSubscribed
    }

    subscriptionInterval: subscribeds (
        where: {
          creator: $creator
          timeSubscribed_gte: $startTimestamp
          timeSubscribed_lte: $endTimestamp
        }
    ){
		id
        creator
        subscriber
        timeSubscribed
    }
  }
`