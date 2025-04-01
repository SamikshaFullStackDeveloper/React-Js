import React from "react";
import "./Player.css";

class Player extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  // Button function to display player image and name
  button = (playerImage, playerName) => {
    return (
      <div className="player-card">
        <div>
          <img src={playerImage} alt={playerName} style={{ width: 100, height: 100 }} />
          <p>{playerName}</p>
        </div>
        {/* <button
          className="player-button"
          style={this.props.style}
          onClick={() => console.log(`${playerName} button clicked`)}
        >

        </button> */}
      </div>
    );
  };

  render() {
    return (
      <div className="container">

        <div>
          <h1>India vs Australia</h1>

          {/* { India Team } */}

          <div className="team">

            {/* <h2>India</h2> */}

            <div className="playersOne">
              {this.button(
                "https://upload.wikimedia.org/wikipedia/commons/1/1e/Prime_Minister_Of_Bharat_Shri_Narendra_Damodardas_Modi_with_Shri_Rohit_Gurunath_Sharma_%28Cropped%29.jpg",
                "Rohit Sharma"
              )}
              {this.button(
                "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Virat_Kohli_in_PMO_New_Delhi.jpg/198px-Virat_Kohli_in_PMO_New_Delhi.jpg",
                "Virat Kohli"
              )}
              {this.button(
                "https://www.mumbaiindians.com/static-assets/images/players/large/action-shots/63751.png?v=4.45&w=400",
                "Hardik Pandya"
              )}
              {this.button(
                "https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Yashasvi_Jaiswal_in_PMO_New_Delhi.jpg/220px-Yashasvi_Jaiswal_in_PMO_New_Delhi.jpg",
                "Yashasvi Jaiswal"
              )}
              {this.button(
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScGl9Jw5PJiIdgKtGk0g-UaEvDCkoAxWf9kA&s",
                "Shubman Gill"
              )}
              {this.button(
                "https://upload.wikimedia.org/wikipedia/commons/6/67/Rishabh_Pant_in_PMO_New_Delhi.jpg",
                "Rishbh Pant"
              )}
              {this.button(
                "https://c.ndtvimg.com/2023-09/v7vcgsgg_siraj-afp_625x300_20_September_23.jpg?im=FeatureCrop,algorithm=dnn,width=806,height=605",
                "Mohammad Siraj"
              )}
              {this.button(
                "https://staticg.sportskeeda.com/editor/2024/07/c97d8-17205021451077-1920.jpg",
                "Abhishek Sharma"
              )}
              {this.button(
                "https://preview.redd.it/how-do-you-guys-see-about-ishan-kishans-time-with-the-v0-dpen14iahd3d1.jpeg?width=640&crop=smart&auto=webp&s=1c69e372d21745b1f803f653968d17da58a92b79",
                "Ishan Kishan"
              )}
              {this.button(
                "https://upload.wikimedia.org/wikipedia/commons/0/02/Jasprit_Bumrah_in_PMO_New_Delhi.jpg",
                "Jasprit Bumrah"
              )}
              {this.button(
                "https://static-files.cricket-australia.pulselive.com/headshots/440/10913-camedia.png",
                "Mohammed Shami"
              )}
            </div>


            {/* { Australia Team } */}

            {/* <h2>Australia</h2> */}

            <div className="playersTwo">
              {this.button(
                "https://media.telanganatoday.com/wp-content/uploads/2022/09/Australias-Aaron-Finch-announces-retirement-from-ODI-cricket.jpg",
                "Aaron Finch"
              )}
              {this.button(
                "https://opt.toiimg.com/recuperator/img/toi/m-69415515/69415515.jpg",
                "Steve Smith"
              )}
              {this.button(
                "https://www.hindustantimes.com/static-content/1y/cricket-logos/players/travis-head.png",
                "Travis Head"
              )}
              {this.button(
                "https://sportsmatik.com/uploads/world-events/players/pat-cummins_1580467882.jpg",
                "Pat Cummins"
              )}

              {this.button(
                "https://admin.thecricketer.com/weblab/Sites/96c8b790-b593-bfda-0ba4-ecd3a9fdefc2/resources/images/site/maxwellheadshot-min.jpg",
                "Glenn Maxwell"
              )}
              {this.button(
                "https://m.media-amazon.com/images/M/MV5BNzQzOTk1MTktYTExNC00NGU0LTllYzAtYzVkZjJjM2EzNmY4XkEyXkFqcGc@._V1_.jpg",
                "Mitchell Marsh"
              )}
              {this.button(
                "https://static.indiatvnews.com/ins-web/images/stoinis-getty-1550328811.jpg",
                "Marcus Stoinis"
              )}
              {this.button(
                "https://api.bdcrictime.com/Profile/mitchell-starc-11_10_2023.jpg",
                "Mitchell Starc"
              )}
              {this.button(
                "https://crictoday.com/wp-content/uploads/2023/02/warner_player_of_the_tournamen_0_1200x768-1-1.jpg",
                "David Warner"
              )}
              {this.button(
                "https://upload.wikimedia.org/wikipedia/commons/7/77/2018.01.21.17.06.41-Hazelwood_%2839139885264%29.jpg",
                "Josh Hazlewood"
              )}
              {this.button(
                " https://images-cricketcom.imgix.net/players/58913_headshot_safari.png?auto=format,compress",
                "Adam Zampa"
              )}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Player;


