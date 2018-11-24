import React, { Component } from 'react';

import albumData from './../data/albums';


class Album extends Component {
  constructor(props) {
    super(props);

    const album = albumData.find( alb => {
      return alb.slug === this.props.match.params.slug
    });

     this.state = {
       album: album,
       currentSong:album.songs[0],
       isPlaying:false,
       isHovered: false
     };
     this.audioElement = document.createElement('audio');
     this.audioElement.src = album.songs[0].audioSrc;

   }

   play() {
     this.audioElement.play();
     this.setState({ isPlaying: true });
   }
   pause() {
      this.audioElement.pause();
      this.setState({ isPlaying: false });
    }
    setSong(song) {
      this.audioElement.src = song.audioSrc;
      this.setState({ currentSong: song });
    }
    handleSongClick(song) {
       const isSameSong = this.state.currentSong === song;
       if (this.state.isPlaying && isSameSong) {
         this.pause();
            } else {
              if (!isSameSong) { this.setSong(song); }
                this.play();
   }
 }
    onMouseEnter (index) {
        this.setState({isHovered:index});
    }
    OnMouseLeave () {
        this.setState ({isHovered: false});
    }

  render() {
    return (
      <section className="album">
      <section id="album-info">
      <img id="album-cover-art" src={this.state.album.albumCover}
      alt={this.state.album.title}/>
                 <div className="album-details">
                 <h1 id="album-title">title : {this.state.album.title}</h1>
           <h2 className="artist">artist : {this.state.album.artist}</h2>
           <div id="release-info">release info:  {this.state.album.releaseInfo}</div>
                 </div>
                 </section>

         <table id="song-list">
           <colgroup>
             <col id="song-number-column" />
             <col id="song-title-column" />
             <col id="song-duration-column" />
           </colgroup>
         <tbody>
            {this.state.album.songs.map((song, index) =>
            <tr className="song" key={index}
                  onClick={() => this.handleSongClick(song,index)}
                  onMouseEnter={() => this.onMouseEnter(index)}
                  onMouseLeave={() => this.OnMouseLeave(index)} >
            <td>
           <button>
           {
             (this.state.currentSong.title=== song.title) ?
              <span className={this.state.isPlaying ? "ion-pause": "ion-play"}></span>
              :
              (this.state.isHovered === index) ?
              <span className="ion-play"> </span>
              :
              <span className="song-number">{index+1}</span>

            }
            </button>
          </td>
               <td className="song-title"> {song.title}</td>
               <td className="song-duration">{song.duration}</td>
            </tr>

          )}

          </tbody>
         </table>
        </section>
    );
  }
}


export default Album;
