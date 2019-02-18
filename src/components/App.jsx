import React from 'react';
import Header from './Header';
import Profile from './Profile';
import About from './About';
import NewTweet from './NewTweet';
import PostList from './PostList';
import FriendList from './FriendsList';
// import masterPosts from "./masterPosts";



const mainStyle = {
  display: 'grid',
  gridTemplateColumns: 'auto 2fr 1fr'
};


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      masterPostList: [

        {
          name: 'Gulzat K',
          content: 'Lorem ipsum dolor sit amet consectetur adipisicing.',
          id: 0,
          likes: 0
        },
        {
          name: 'James C',
          content: 'Lorem ipsum dolor sit amet consectetur adipisicing.',
          id: 1,
          likes: 0
        },
        {
          name: 'Manasa V',
          content: 'Lorem ipsum dolor sit amet consectetur adipisicing.',
          id: 2,
          likes: 0
        },
        {
          name: 'Leilani L',
          content: 'Lorem ipsum dolor sit amet consectetur adipisicing.',
          id: 3,
          likes: 0
        },
        {
          name: 'Stuart G',
          content: 'Lorem ipsum dolor sit amet consectetur adipisicing.',
          id: 4,
          likes: 0
        },
        {
          name: 'Glen S',
          content: 'Lorem ipsum dolor sit amet consectetur adipisicing.',
          id: 5,
          likes: 0
        }
      ]
     
    };
    this.handleLikesChange = this.handleLikesChange.bind(this);
  }


 
  handleLikesChange(index) {

    this.setState(prevState => ({
        likes: (prevState.masterPostList[index].likes += 1)
      }));
  };



  render() {

    return (
      <div>
        <Header /><hr />
        <div className="mainContent" style={mainStyle}>
          <div>
            <Profile />
                      
            <About />
            <NewTweet />
          </div>

          <PostList postList={this.state.masterPostList}
            changeLikes={this.handleLikesChange}
          />


          <FriendList />

        </div>
      </div>
    );
  }
}

export default App;