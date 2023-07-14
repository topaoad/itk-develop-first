export type twitterUser = {
  profile_image_url: string;
  name: string;
  username: string;
};

export type twitterTweets = {
  created_at: string;
  author_id: string;
  text: string;
  id: string;
  entities: any;
};

// エンティティプロパティは非対応
type twitterURL = {
  urls:twitterEntities[];
};

type twitterEntities = {
  expanded_url: string;
  url: string;
};
