import React from "react";
import "./Actors.css";


export default class Actors extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedMovies: [],
        };
    }

    // Function to handle click on an actor's image 
    handleActorClick = (movies) => {
        this.setState({ selectedMovies: movies });
    };

    // Button function to display actor image and name
    button = (actorImage, actorName, movies) => {
        return (
            <div>
                <div>
                    <img
                        src={actorImage}
                        alt={actorImage}
                        style={{ width: 100, height: 100 }}
                      
                    />
                    <p>{actorName}</p>
                </div>
                <button
                    className="actor-button"
                    style={this.props.style}
                    onClick={() => this.handleActorClick(movies)} // Yeh change karein
                >
                    Show Movies
                </button>

            </div>
        );
    };

    render() {
        const { selectedMovies } = this.state;

        return (
            <div className="container">

                <h1> Famous Actors</h1><br /><br />

                <div className="cards">
                    {this.button(
                        "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjRcvMCu7CODl0yBRB4E-iyuoIsr1XhB8uodAjHviw-HY0fFnz7L9e-466uuvWvfaxB-JPljq7z36Zk9iHrm0nqERMbQpUIdVVMXcn9RIpTKglhHP4axd9rte4AdpsdXyk_t3N3IEhdewzSg1lgn6N7bJ2DkDEvRmPsL9uM-3LUinMLDc_ftCOovftKag/s1200/rohit_saraf-one_one.jpg",
                        "Rohit Saraf",
                        ["1. The Sky Is Pink", "2. Mismatched", "3. Ludo", "4. Breaking Bad", "5. Dear Zindagi"]
                    )}
                    {this.button(
                        "https://image.tmdb.org/t/p/w500/nHdQlBvORSKmH1F1kbyTFs0HLjU.jpg",
                        "Kartik Aaryan",
                        ["1. Bhool Bhulaiyaa 2", "2. Luka Chuppi", "3. Sonu Ke Titu Ki Sweety", "4. Dhamaka", "5. Love Aaj Kal"]
                    )}
                    {this.button(
                        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8ri9DFq54ge6zLRhR4zh-T6jXVRuIXJXCuA&s",
                        "Varun Dhawan",
                        ["1. Student of the Year", "2. Humpty Sharma Ki Dulhania", "3. Badrinath Ki Dulhania", "4. Judwaa 2", "5. Street Dancer 3D"]
                    )}
                    {this.button(
                        "https://images.filmibeat.com/img/popcorn/profile_photos/ranbir-kapoor-20230906112104-290.jpg",
                        "Ranbeer Kapoor",
                        ["1. Barfi", "2. Rockstar", "3. Wake Up Sid", "4.Tamasha", "5. Yeh Jawaani Hai Deewani"]
                    )}
                    {this.button(
                        "https://images.hindustantimes.com/rf/image_size_640x362/HT/p2/2016/08/03/Pictures/cafe_f1906962-596b-11e6-8032-7fbe78900359.JPG",
                        "Sidharth Malhotra",
                        ["1. Student of the Year", "2. Hasee Toh Phasee", "3. Ek Villain", "4. Kapoor & Sons", "5. Baar Baar Dekho"]
                    )}
                    {this.button(
                        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCAnrvVnTCdsAbVfmJI4bpfPE0t5qm4ll9EgJQ3ssp5T21_0Y8-05Ldp6uffQQbxNSkwo&usqp=CAU",
                        "Rashmika",
                        ["1. Geetha Govindam", "2. Dear Comrade", "3. Bheeshma", "4. Pushpa: The Rise", "5. Sarileru"]
                    )}
                    {this.button(
                        "https://static.langimg.com/photo/imgsize-33656,msid-86671564/navbharat-times.jpg",
                        "Madhuri Dixit ",
                        ["1. Dil To Pagal Hai", "2. Hum Aapke Hain Koun..!", "3. Devdas", "4. Tezaab", "5. Beta"]
                    )}
                    {this.button(
                        "https://images.bhaskarassets.com/web2images/521/2022/04/24/untitled1_1650786193.jpg",
                        "Alia Bhatt",
                        ["1. Kalank", "2. Student of the Year", "3. Sangharsh", "4. Highway", "5. Raazi"]
                    )}
                    {this.button(
                        "https://i.pinimg.com/736x/6c/fb/e6/6cfbe674c24bf75890ee46317a45dabb.jpg",
                        "Kiara Advani",
                        ["1. Kabir Singh", "2. Good Newwz", "3. MS Dhoni: The Untold Story", "4. Shershaah", "5. Bhool Bhulaiyaa 2"]
                    )}
                    {this.button(
                        "https://yt3.googleusercontent.com/UDvhAYtC-CFDXj953H_AcWhShuWWqtEwPEKxikq3T3FPCRCqBUOmXvcRmMe7K0wxjGOGoFo_Ug=s900-c-k-c0x00ffffff-no-rj",
                        "Ananya Pandey",
                        ["1. Student of the Year 2", "2. Pati Patni Aur Woh", "3. Gehraiyaan", "4. Liger", "5. Khaali Peeli"]
                    )}

                   
                    {selectedMovies.length > 0 && (
                        <div className="movies">
                            <h2>Top 5 Movies:</h2>
                            <ul>
                                {selectedMovies.map((movie, index) => (
                                    <li key={index}>{movie}</li>
                                ))}
                            </ul>
                        </div>
                    )}

                </div>

            </div>

        )
    }
}



