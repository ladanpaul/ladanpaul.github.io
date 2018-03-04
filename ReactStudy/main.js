const TWEETS = [
  {
    id: 1,
    author: "Jay_Bavishi‎",
    text: "Gonna watch this on the reg for the next four years",
    image: "https://pbs.twimg.com/media/DV837JRUQAEbL4H.jpg",
    avatar: "https://pbs.twimg.com/profile_images/834969425753169920/Hh_sQ64__bigger.jpg",
    likes: 235,
    retweets: 530
  },
  {
    id: 2,
    author: "eileen_ann‎",
    text: "New year means new opportunities to work with the @Dataminr team! ",
    image: "",
    avatar: "https://pbs.twimg.com/profile_images/958517453734195202/Dsw-sHb3_bigger.jpg",
    likes: 14500,
    retweets: 5270
  },
  {
    id: 3,
    author: "seanlauer",
    text: "YOU are the motherfucking shit. YOU are great. YOU are magnificent. you can do whatever you wanna do in this world. put your MIND to it. put yo GRIND ",
    image: "https://pbs.twimg.com/media/DWRfKlQUQAAhens.jpg",
    avatar: "https://pbs.twimg.com/profile_images/852908077254926337/eEvawNJA_bigger.jpg",
    likes: 0,
    retweets: 1500
  },
]

function shuffle(arr) {

  const result = [...arr];

  result.sort(() => 0.5 - Math.random());

  return result;
}

const Tweet = React.createClass({
  render() {
    const {
      author,
      text,
      image,
      avatar,
      likes,
      retweets
    } = this.props

    return (
      <div className="tweet">
        <img 
          className="tweet-avatar"
          src={avatar} 
          alt={author}
        />
        <div className="tweet-body">
          <a 
            className="tweet-author"
            href={`https://twitter.com/${author}`}
            target="_blank"
          >
            @{author}
          </a>

          <p className="tweet-text"> 
            {text} 
          </p>

          {
            image
            ? <img src={image} alt={text} />
            : null
          }        
          <br />
          likes: {likes || null} retweets: {retweets || null}
        </div>
      </div>
    );
  }
});

const Feed = React.createClass({
  getInitialState() {
    return {
      tweets: []
    };
  },
  handleShuffle() {
    this.setState({
      tweets: shuffle(this.state.tweets)
    });
  },

  handleAdd() {
    const { tweets } = this.state;
    // console.log(...tweets)
    // console.log(tweets.length)
    if(tweets.length < TWEETS.length) {
      this.setState({
        tweets: [
          ...tweets,
          TWEETS[tweets.length]
        ]
      });
    }
  },

  render() {
    return (
      <div>
        <button onClick={this.handleShuffle}>
          Shuffle
        </button>

        <button onClick={this.handleAdd}>
          Add
        </button>

        {
          this.state.tweets.map(tweet => 
            <Tweet
              key={tweet.id}
              author={tweet.author}
              text={tweet.text}
              image={tweet.image}
              avatar={tweet.avatar}
              likes={tweet.likes}
              retweets={tweet.retweets}
            />
          )
        }
      </div>
    )
  }
});

// const HellComponent = React.createClass({
//   getInitialState() {
//     return {
//       name: 'Noname'
//     };
//   },

//   handleChange(e) {

//     this.setState({
//       name: e.target.value
//     })
//   },

//   render() {
//     const {
//       name,
//     } = this.props

//     return (
//       <div>
//         <input
//           placeholder="Enter your name"
//           value={this.state.name}
//           onChange={this.handleChange}
//         />

//         <h1> Hello {this.state.name} </h1>
//         <br />
//       </div>
//     );
//   }
// });

ReactDOM.render(
  <div>
    {/* <HellComponent />, */}
    <Feed />,
  </div>,
  document.getElementById('root')
)