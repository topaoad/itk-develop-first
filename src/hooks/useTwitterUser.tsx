import { useEffect, useState } from "react";
import useSWR from "swr";

// 各コンポーネントにtwitterデータを渡すための処理
// こちらはuseEffectバージョン
export const useTwitterUser = () => {
  const [users, setUsers] = useState({});
  const [tweets, setTweets] = useState([]);
  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch("/api/tweet");
      const data = await response.json();
      setUsers(data.user);
      setTweets(data.tweets);
    };
    fetchUsers();
  }, []);

  return { tweets, users };
};

// こちらはuseSWRバージョン
export const useTwitterData = () => {
  const fetcher = async (url: string) => {
    const res = await fetch(url);
    const swrData = await res.json();
    return swrData;
  };

  const { data, error } = useSWR("/api/tweet");

  return {
    data,
    error,
    isLoading: !data && !error,
  };
};
