import { useState, useEffect } from "react";

// 各コンポーネントにtwitterデータを渡すための処理
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

  console.log(users);
  console.log(tweets);
  return{ users, tweets };
};
