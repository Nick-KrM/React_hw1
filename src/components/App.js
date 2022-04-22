import React from 'react';
import Profile from './Profile/Profile';
import Section from './Section/Section';
import Statistics from './Statistics/Statistics';
import FriendList from './FriendList/FriendList';
import TransactionHistory from './TransactionHistory/TransactionHistory';
import user from '../dataJson/user.json';
import data from '../dataJson/data.json';
import friends from '../dataJson/friends.json';
import transactions from '../dataJson/transactions.json';


export default function App() {
  return (
    <>
      <Section title="React HomeWork-1"></Section>
      <Section>
        <Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
      </Section>
      <Section>
        <Statistics title="Upload stats" stats={data} />;
        <Statistics stats={data} />;
      </Section>
      <Section>
        <FriendList friends={friends} />
      </Section>
      <Section>
        <TransactionHistory items={transactions} />
      </Section>
    </>
  );
}
