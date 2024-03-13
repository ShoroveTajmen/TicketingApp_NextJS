import PriorityDisplay from "./PriorityDisplay";
import ProgressDisplay from "./ProgressDisplay";
import DeleteBlock from "./deleteBlock";

const TicketCard = () => {
  return (
    <div>
      <DeleteBlock></DeleteBlock>
      <PriorityDisplay />
      <ProgressDisplay />
    </div>
  );
};

export default TicketCard;
