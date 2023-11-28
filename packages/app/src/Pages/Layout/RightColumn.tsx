import SearchBox from "@/Element/SearchBox";
import TrendingUsers from "@/Element/Trending/TrendingUsers";
import TrendingHashtags from "@/Element/Trending/TrendingHashtags";
import TrendingNotes from "@/Element/Trending/TrendingPosts";
import { FormattedMessage } from "react-intl";
import classNames from "classnames";

export default function RightColumn() {
  const hideRightColumnPaths = ["/login", "/new", "/messages", "/settings"];
  const show = !hideRightColumnPaths.some(path => location.pathname.startsWith(path));
  return (
    <div
      className={classNames("flex-col hidden lg:w-1/3 sticky top-0 h-screen py-3 px-4 border-l border-neutral-900", {
        "lg:flex": show,
      })}>
      <div>
        <SearchBox />
      </div>
      <div className="overflow-y-auto hide-scrollbar">
        <div className="bg-superdark rounded-lg py-3 px-4 mt-8">
          <div className="font-bold text-lg">
            <FormattedMessage defaultMessage="Trending hashtags" id="CbM2hK" />
          </div>
          <TrendingHashtags short={true} count={5} />
        </div>
        <div className="bg-superdark rounded-lg py-3 px-4 mt-8">
          <div className="font-bold text-lg">
            <FormattedMessage defaultMessage="Trending notes" id="6k7xfM" />
          </div>
          <TrendingNotes small={true} count={5} />
        </div>
        <div className="bg-superdark rounded-lg py-3 px-4 mt-8">
          <div className="font-bold text-lg">
            <FormattedMessage defaultMessage="Trending users" id="arZnG2" />
          </div>
          <TrendingUsers count={5} />
        </div>
      </div>
    </div>
  );
}
