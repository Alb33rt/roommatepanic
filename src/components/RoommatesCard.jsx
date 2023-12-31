import { Card } from "react-bootstrap";
import RoommatesList from "./RoommatesList";

const RoommatesCard = () => {
    return (
        <Card className="border-0 shadow">
        <Card.Body>
            <Card.Title>Your Roommates</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">See how all of you are performing!</Card.Subtitle>
            <RoommatesList />
        </Card.Body>
        </Card>
    )
}

export default RoommatesCard;