import Card from "./Card";
import './Card.css';
function Userlist(props) {
    return (
        <Card>
        <ul>
            {props.users.map((user) => (
                <li>
                    {user.name} ({user.age} years old)
                </li>
            ))}
        </ul>
        </Card>
    )

}
export default Userlist;