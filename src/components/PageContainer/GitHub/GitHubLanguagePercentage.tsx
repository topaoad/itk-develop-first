// 各言語の割合を表示する
type GitHubLanguagePercentageProps = {
  gitHubLanguageTotal: number;
  gitHubLanguageCount: number;
};

export const GitHubLanguagePercentage = (
  props:GitHubLanguagePercentageProps
) => {
  const { gitHubLanguageTotal, gitHubLanguageCount } = props;

const  gitLanguagePercentage =Math.round( gitHubLanguageCount/gitHubLanguageTotal*100)

  return (<div>
    {`${gitLanguagePercentage }%`}
  </div>
  )
};
