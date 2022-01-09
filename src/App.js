import user from "./components/social-profile/user.json";
import data from "./components/statistics/data.json";
import friends from "./components/friend-list/friends.json";
import transactions from "./components/transaction-history/transactions.json";
import Profile from "./components/social-profile/Profile";
import Statistics from "./components/statistics/Statistics";
import FriendList from "./components/friend-list/FriendList";
import TransactionHistory from "./components/transaction-history/TransactionHistory";
import { Container } from "./App.styled";

export default function App() {
  return (
    <Container>
      <Profile
        userName={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </Container>
  );
}
