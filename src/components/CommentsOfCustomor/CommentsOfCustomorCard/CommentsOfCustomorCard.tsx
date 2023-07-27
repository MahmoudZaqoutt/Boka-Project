import { Body } from "../../Typography";
import { AiTwotoneStar } from "react-icons/ai";
import PersonDetails from "../../Shared/PersonDetails/PersonDetails";
import { IPropsCommentCard } from "../../../interfaces/props/IPropsCommentCard";

const CommentsOfCustomorCard = (props: IPropsCommentCard) => {
  return (
    <div className="  bg-[#F9F9F9] flex flex-col gap-5 justify-center pl-4 pr-4">
      <Body
        content={props.comment}
        classnameContent="font-normal text-lg text-[#17505C]"
      />
      <div className="flex items-center justify-between">
        <div className="flex gap-1">
          <AiTwotoneStar className="text-orange-500 " />
          <AiTwotoneStar className="text-orange-500" />
          <AiTwotoneStar className="text-orange-500" />
          <AiTwotoneStar className="text-orange-500" />
          <AiTwotoneStar className="text-orange-500" />
        </div>
        <Body
          content="- Jack Daniels"
          classnameContent="italic text-lg	text-[#17505C]"
        />
      </div>
      <PersonDetails />
    </div>
  );
};

export default CommentsOfCustomorCard;
