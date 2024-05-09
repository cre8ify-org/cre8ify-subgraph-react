import { useState, useEffect } from "react";

import { ApolloClient, InMemoryCache } from "@apollo/client";

import "./App.css";
import { queryContentUrl, subscriptionUrl, GET_ALL_SUBSCRIPTION, GET_ALL_FREE_CONTENT, GET_ALL_EXCLUSIVE_CONTENT, GET_ALL_FREE_LIKE, GET_ALL_EXCLUSIVE_LIKE, GET_ALL_FREE_DISLIKE, GET_ALL_EXCLUSIVE_DISLIKE } from "./constants";

function App() {
  const [transfers, setTransfers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const contentClient = new ApolloClient({
    uri: queryContentUrl,
    cache: new InMemoryCache(),
  });

  const subscriptionClient = new ApolloClient({
    uri: subscriptionUrl,
    cache: new InMemoryCache(),
  });

  //FREE CONTENT
  useEffect(() => {
    const nowInSeconds = Math.floor(Date.now() / 1000);
    const creatorAddress = '0x802da5c76521317f2cc9d6ebad176e47a5f4205c';

    const currentYear = new Date().getFullYear();
    const januaryFirst = new Date(currentYear, 0, 1);

    const startTimeInMilliseconds = Math.floor(januaryFirst.getTime());
    const endTimeInMilliseconds = Date.now();

    const startTimestamp = Math.floor(startTimeInMilliseconds / 1000); 
    const endTimestamp = Math.floor(endTimeInMilliseconds / 1000);

    const variables = {
      startTimestamp,
      endTimestamp,
      nowInSeconds,
      creator: creatorAddress,
    }

    const fetchAll = async () => {
      setIsLoading(true);
      const { data } = await contentClient.query({
        query: GET_ALL_FREE_CONTENT, variables
      });
      
      try {
          const createdContentCount= data.FreeCreated.length
          const monthlyContentCount = new Array(12).fill(0);
          let currentMonthCount = 0;
          let previousMonthCount = 0;

          for (const content of data.FreeCreatedInterval) {
            const month = new Date(content.timestamp * 1000).getMonth();
            monthlyContentCount[month]++;

            if (month === new Date().getMonth()) { 
              currentMonthCount++;
            } else if (month === new Date().getMonth() - 1) { 
              previousMonthCount = monthlyContentCount[month - 1];
            }
          }

          const percentageIncrease = ((currentMonthCount - previousMonthCount) / previousMonthCount) * 100;

          const result = {createdContentCount, percentageIncrease, monthlyContentCount}

      } catch (error) {
        console.error("Could not fetch data", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchAll();
  }, []);

  //EXCLUSIVE CONTENT
  useEffect(() => {
    const nowInSeconds = Math.floor(Date.now() / 1000);
    const creatorAddress = '0x802da5c76521317f2cc9d6ebad176e47a5f4205c';
    const currentYear = new Date().getFullYear();
    const januaryFirst = new Date(currentYear, 0, 1);

    const startTimeInMilliseconds = Math.floor(januaryFirst.getTime());
    const endTimeInMilliseconds = Date.now();

    const startTimestamp = Math.floor(startTimeInMilliseconds / 1000); 
    const endTimestamp = Math.floor(endTimeInMilliseconds / 1000);

    const variables = {
      startTimestamp,
      endTimestamp,
      nowInSeconds,
      creator: creatorAddress,
    }

    const fetchAll = async () => {
      setIsLoading(true);
      const { data } = await contentClient.query({
        query: GET_ALL_EXCLUSIVE_CONTENT, variables
      });
      
      try {
          const createdContentCount= data.ExclusiveCreated.length
          const monthlyContentCount = new Array(12).fill(0);
          let currentMonthCount = 0;
          let previousMonthCount = 0;

          for (const content of data.ExclusiveCreatedInterval) {
            const month = new Date(content.timestamp * 1000).getMonth();
            monthlyContentCount[month]++;

            if (month === new Date().getMonth()) { 
              currentMonthCount++;
            } else if (month === new Date().getMonth() - 1) { 
              previousMonthCount = monthlyContentCount[month - 1];
            }
          }

          const percentageIncrease = ((currentMonthCount - previousMonthCount) / previousMonthCount) * 100;

          const result = {createdContentCount, percentageIncrease, monthlyContentCount}

      } catch (error) {
        console.error("Could not fetch data", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchAll();
  }, []);

  //FREE CONTENT LIKE
  useEffect(() => {
    const nowInSeconds = Math.floor(Date.now() / 1000);
    const creatorAddress = '0x802da5c76521317f2cc9d6ebad176e47a5f4205c';

    const currentYear = new Date().getFullYear();
    const januaryFirst = new Date(currentYear, 0, 1);

    const startTimeInMilliseconds = Math.floor(januaryFirst.getTime());
    const endTimeInMilliseconds = Date.now();

    const startTimestamp = Math.floor(startTimeInMilliseconds / 1000); 
    const endTimestamp = Math.floor(endTimeInMilliseconds / 1000);

    const variables = {
      startTimestamp,
      endTimestamp,
      nowInSeconds,
      creator: creatorAddress,
    }

    const fetchAll = async () => {
      setIsLoading(true);
      const { data } = await contentClient.query({
        query: GET_ALL_FREE_LIKE, variables
      });
      
      try {
          const createdContentLikedCount= data.FreeContentLiked.length
          const monthlyContentLikedCount = new Array(12).fill(0);
          let currentMonthCount = 0;
          let previousMonthCount = 0;

          for (const content of data.FreeContentLikedInteval) {
            const month = new Date(content.timestamp * 1000).getMonth();
            monthlyContentLikedCount[month]++;

            if (month === new Date().getMonth()) { 
              currentMonthCount++;
            } else if (month === new Date().getMonth() - 1) { 
              previousMonthCount = monthlyContentLikedCount[month - 1];
            }
          }

          const percentageIncrease = ((currentMonthCount - previousMonthCount) / previousMonthCount) * 100;

          const result = {createdContentLikedCount, percentageIncrease, monthlyContentLikedCount}

      } catch (error) {
        console.error("Could not fetch data", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchAll();
  }, []);

  //EXCLUSIVE CONTENT LIKE
  useEffect(() => {
    const nowInSeconds = Math.floor(Date.now() / 1000);
    const creatorAddress = '0x802da5c76521317f2cc9d6ebad176e47a5f4205c';

    const currentYear = new Date().getFullYear();
    const januaryFirst = new Date(currentYear, 0, 1);

    const startTimeInMilliseconds = Math.floor(januaryFirst.getTime());
    const endTimeInMilliseconds = Date.now();

    const startTimestamp = Math.floor(startTimeInMilliseconds / 1000); 
    const endTimestamp = Math.floor(endTimeInMilliseconds / 1000);

    const variables = {
      startTimestamp,
      endTimestamp,
      nowInSeconds,
      creator: creatorAddress,
    }

    const fetchAll = async () => {
      setIsLoading(true);
      const { data } = await contentClient.query({
        query: GET_ALL_EXCLUSIVE_LIKE, variables
      });
      
      try {
          const createdContentLikedCount= data.ExclusiveContentLiked.length
          const monthlyContentLikedCount = new Array(12).fill(0);
          let currentMonthCount = 0;
          let previousMonthCount = 0;

          for (const content of data.ExclusiveContentLikedInterval) {
            const month = new Date(content.timestamp * 1000).getMonth();
            monthlyContentLikedCount[month]++;

            if (month === new Date().getMonth()) { 
              currentMonthCount++;
            } else if (month === new Date().getMonth() - 1) { 
              previousMonthCount = monthlyContentLikedCount[month - 1];
            }
          }

          const percentageIncrease = ((currentMonthCount - previousMonthCount) / previousMonthCount) * 100;

          const result = {createdContentLikedCount, percentageIncrease, monthlyContentLikedCount}

      } catch (error) {
        console.error("Could not fetch data", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchAll();
  }, []);

  //FREE CONTENT DISLIKE
  useEffect(() => {
    const nowInSeconds = Math.floor(Date.now() / 1000);
    const creatorAddress = '0x802da5c76521317f2cc9d6ebad176e47a5f4205c';

    const currentYear = new Date().getFullYear();
    const januaryFirst = new Date(currentYear, 0, 1);

    const startTimeInMilliseconds = Math.floor(januaryFirst.getTime());
    const endTimeInMilliseconds = Date.now();

    const startTimestamp = Math.floor(startTimeInMilliseconds / 1000); 
    const endTimestamp = Math.floor(endTimeInMilliseconds / 1000);

    const variables = {
      startTimestamp,
      endTimestamp,
      nowInSeconds,
      creator: creatorAddress,
    }

    const fetchAll = async () => {
      setIsLoading(true);
      const { data } = await contentClient.query({
        query: GET_ALL_FREE_DISLIKE, variables
      });
      
      try {
          const createdContentDislikedCount= data.FreeContentDisliked.length
          const monthlyContentDislikedCount = new Array(12).fill(0);
          let currentMonthCount = 0;
          let previousMonthCount = 0;

          for (const content of data.FreeContentDislikedInterval) {
            const month = new Date(content.timestamp * 1000).getMonth();
            monthlyContentDislikedCount[month]++;

            if (month === new Date().getMonth()) { 
              currentMonthCount++;
            } else if (month === new Date().getMonth() - 1) { 
              previousMonthCount = monthlyContentDislikedCount[month - 1];
            }
          }

          const percentageIncrease = ((currentMonthCount - previousMonthCount) / previousMonthCount) * 100;

          const result = {createdContentDislikedCount, percentageIncrease, monthlyContentDislikedCount}

      } catch (error) {
        console.error("Could not fetch data", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchAll();
  }, []);

  //EXCLUSIVE CONTENT DISLIKE
  useEffect(() => {
    const nowInSeconds = Math.floor(Date.now() / 1000);
    const creatorAddress = '0x802da5c76521317f2cc9d6ebad176e47a5f4205c';

    const currentYear = new Date().getFullYear();
    const januaryFirst = new Date(currentYear, 0, 1);

    const startTimeInMilliseconds = Math.floor(januaryFirst.getTime());
    const endTimeInMilliseconds = Date.now();

    const startTimestamp = Math.floor(startTimeInMilliseconds / 1000); 
    const endTimestamp = Math.floor(endTimeInMilliseconds / 1000);

    const variables = {
      startTimestamp,
      endTimestamp,
      nowInSeconds,
      creator: creatorAddress,
    }

    const fetchAll = async () => {
      setIsLoading(true);
      const { data } = await contentClient.query({
        query: GET_ALL_EXCLUSIVE_DISLIKE, variables
      });
      
      try {
          const createdContentDislikedCount= data.ExclusiveContentDisliked.length
          const monthlyContentDislikedCount = new Array(12).fill(0);
          let currentMonthCount = 0;
          let previousMonthCount = 0;

          for (const content of data.ExclusiveContentDislikedInterval) {
            const month = new Date(content.timestamp * 1000).getMonth();
            monthlyContentDislikedCount[month]++;

            if (month === new Date().getMonth()) { 
              currentMonthCount++;
            } else if (month === new Date().getMonth() - 1) { 
              previousMonthCount = monthlyContentDislikedCount[month - 1];
            }
          }

          const percentageIncrease = ((currentMonthCount - previousMonthCount) / previousMonthCount) * 100;

          const result = {createdContentDislikedCount, percentageIncrease, monthlyContentDislikedCount}

      } catch (error) {
        console.error("Could not fetch data", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchAll();
  }, []);

   //SUBSCRIPTION
   useEffect(() => {
    const nowInSeconds = Math.floor(Date.now() / 1000);
    const creatorAddress = '0x802da5c76521317f2cc9d6ebad176e47a5f4205c';

    const currentYear = new Date().getFullYear();
    const januaryFirst = new Date(currentYear, 0, 1);

    const startTimeInMilliseconds = Math.floor(januaryFirst.getTime());
    const endTimeInMilliseconds = Date.now();

    const startTimestamp = Math.floor(startTimeInMilliseconds / 1000); 
    const endTimestamp = Math.floor(endTimeInMilliseconds / 1000);

    const variables = {
      startTimestamp,
      endTimestamp,
      nowInSeconds,
      creator: creatorAddress,
    }

    const fetchAll = async () => {
      setIsLoading(true);
      const { data } = await subscriptionClient.query({
        query: GET_ALL_SUBSCRIPTION, variables
      });
      
      try {
          const subscriptionCount= data.subscription.length
          const monthlySubscriptionCount = new Array(12).fill(0);
          let currentMonthCount = 0;
          let previousMonthCount = 0;

          for (const content of data.subscriptionInterval) {
            const month = new Date(content.timestamp * 1000).getMonth();
            monthlySubscriptionCount[month]++;

            if (month === new Date().getMonth()) { 
              currentMonthCount++;
            } else if (month === new Date().getMonth() - 1) { 
              previousMonthCount = monthlySubscriptionCount[month - 1];
            }
          }

          const percentageIncrease = ((currentMonthCount - previousMonthCount) / previousMonthCount) * 100;

          const result = {subscriptionCount, percentageIncrease, monthlySubscriptionCount}
          console.log("result", result);
      } catch (error) {
        console.error("Could not fetch data", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchAll();
  }, []);

  return (
    <>
      <div>
        <h1>Connect Subgraph To A React Frontend</h1>

        {isLoading ? (
          <p>Loading...</p>
        ) : (
          transfers != null &&
          transfers.length > 0 &&
          transfers.map((transfer) => (
            <div
              key={transfer.id}
              style={{
                marginBottom: "30px",
              }}>
              <div>From: {transfer.sender}</div>
              ======================================
              <div>To: {transfer.receiver}</div>
              ======================================
              <div>Amount: {transfer.amount}</div>
            </div>
          ))
        )}
      </div>
    </>
  );
}

export default App;