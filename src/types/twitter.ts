export type twitterUser = {
  name: string;
  profile_image_url: string;
  username: string;
};

export type twitterTweets = {
  id: string;
  author_id: string;
  created_at: string;
  entities: any;
  text: string;
};

// エンティティプロパティは非対応
type twitterURL = {
  urls: twitterEntities[];
};

type twitterEntities = {
  expanded_url: string;
  url: string;
};
