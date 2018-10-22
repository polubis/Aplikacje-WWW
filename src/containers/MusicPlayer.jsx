import React from 'react';
import List from  '../components/common/list/list';
import Track from '../components/common/track/track';
import MusicDetails from '../components/musicDetails/musicDetails';
import FirstImage from '../assets/1.jpg';
import SecondImage from '../assets/2.jpg';
import ThirdImage from '../assets/3.jpg';
import Sound from '../assets/sound.mp3';

const getMockData = () => {
    return [ 
        {id: 0, name: "Warszawa", img: FirstImage, artist: "Piotr Piotrowski", addDate: "19-12-2017 16:45", src:Sound},
        {id: 1, name: "Peron Olsztyn", img: SecondImage, artist: "Adrian Jarek", addDate: "19-12-2017 16:44", src: Sound},
        {id: 2, name: "W Olsztynie jak W Lublinie", img: ThirdImage, artist: "Tomasz Tomaszek", addDate: "26-12-2017 11:30", src: Sound},
        {id: 3, name: "Ten czas", img: FirstImage, artist: "Piotr Piotrowski", addDate: "19-12-2016 16:45", src: Sound},
    ];
}

class MusicPlayer extends React.PureComponent{
    state = {
        isLoadingData: true,
        data: [], currentPlayingSoundIndex: 0,
        isPlaying: true
    }

    componentDidMount(){
        this.getDataFromServer();
    }

    getDataFromServer = () => {
        setTimeout(() => {
            this.setState({isLoadingData: false, data: getMockData()});
        }, 1500);
    }

    changeDetails = item => {
        this.musicPlayer.pause();
        this.setState({currentPlayingSoundIndex: item.id, isPlaying: false}, () => {
            this.play();
        });
    }

    play = () => {
        this.setState({isPlaying: true}, () => {
            this.musicPlayer.play();
        });
    }

    stop = () => {
        this.musicPlayer.pause();
        this.setState({isPlaying: false});
    }

    render(){
        const { isLoadingData, data, currentPlayingSoundIndex, isPlaying } = this.state;
        return (
            <div className="music-player">
                {isLoadingData ? <p className="spinner">trwa wczytywanie danych...</p> : 
                <React.Fragment>
                    <MusicDetails play={this.play} stop={this.stop}
                    autoPlay isPlaying={isPlaying} 
                    reference={el => { this.musicPlayer = el; }}
                    currentPlayingItem={data[currentPlayingSoundIndex]} />

                    <List functionReference={this.changeDetails}
                    items={data} component={Track} componentProps={{currentPlayingSoundIndex}}  
                    />;

                </React.Fragment>
                }
            </div>
        );
    }
}

export default MusicPlayer;