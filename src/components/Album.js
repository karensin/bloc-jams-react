import React, { Component } from 'react';

import albumData from './../data/albums';


class Album extends Component {
  constructor(props) {
    super(props);

    const album = albumData.find( alb => {
      return alb.slug === this.props.match.params.slug
    });

     this.state = {
       album: album
     };

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
          <div>{this.state.album.songs.map((song, index) => (
            <tr key={index}>
               <td>{index+ 1 + ')' + song.title}</td>
               <td>{song.duration}</td>
               <td>{song.audioSrc} songs</td>
           </tr>
          ))}</div>;
            </tbody>
         </table>
                     </section>
    );
  }
}


export default Album;
