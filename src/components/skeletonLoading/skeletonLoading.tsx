import { FC } from "react";
import ContentLoader from "react-content-loader";

type PropsType = {
    item: number
}

export const SkeletonLoading: FC<PropsType> = ({item}) => {
  return (
    <ContentLoader
      speed={0.4}
      width={290}
      height={`2${item}0`}
      viewBox={`0 0 290 2${item}0`}
      backgroundColor="#a4a4a4"
      foregroundColor="#636060">
      <rect x="-1" y="0" rx="20" ry="20" width="290" height={`2${item}0`} />
    </ContentLoader>
  );
};


