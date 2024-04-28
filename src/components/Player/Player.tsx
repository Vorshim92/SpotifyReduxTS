function Player() {
  return (
    <>
      <footer className="playerbar">
        <div className="container-fluid player-bar">
          <div className="row">
            {/* <!-- PLAYER BAR LEFT SECTION  --> */}
            <div id="left-player" className="col-4 d-flex column-gap-4 align-items-center">
              <div id="player-bar-img">
                <img src="./assets/imgs/main/image-6.jpg" alt="cover" />
              </div>
              <div id="text-p-bar" className="d-flex flex-column">
                <a href="#">Song</a>
                <a href="#">Artist</a>
              </div>
              <div>
                <img src="./assets/imgs/heart-svg.svg" alt="heart" />
              </div>
            </div>

            {/* <!-- PLAYER BAR MIDDLE SECTION  --> */}
            <div id="middle-player" className="col-4 d-flex flex-column gap-1">
              <div id="middle-top" className="d-flex column-gap-4 justify-content-center">
                <div>
                  <img src="./assets/imgs/shuffle-svg.svg" alt="shuffle" />
                </div>
                <div>
                  <img src="./assets/imgs/swipe-left-svg.svg" alt="left-swipe" />
                </div>
                <div className="ctrl center" id="playsong">
                  <div id="play-btn" className="d-flex">
                    <img src="./assets/imgs/play-svg.svg" alt="play" />
                  </div>
                  <div id="pause-btn" className="d-flex d-none">
                    <img src="./assets/imgs/pause-16.svg" alt="play" />
                  </div>
                </div>
                <div>
                  <img src="./assets/imgs/swipe-right.svg" alt="right-swipe" />
                </div>
                <div>
                  <img src="./assets/imgs/repeat-svg.svg" alt="repeat" />
                </div>
              </div>
              <div id="middle-bot" className="d-flex align-center">
                <small id="start" className="text-white">
                  0:00
                </small>
                <div id="progress">
                  <div className="lineChild"></div>
                </div>

                <small id="end" className="text-white">
                  0:00
                </small>
                {/* <!-- AUDIO TRACK PLAYER --> */}
                <audio src="" id="song"></audio>
              </div>
            </div>
            {/* <!-- PLAYER BAR RIGHT SECTION  --> */}
            <div id="right-player" className="col-4 d-flex column-gap-3 justify-content-end">
              <img src="./assets/imgs/vista-stai-ascoltando-svg.svg" alt="listen" />
              <img src="./assets/imgs/coda-svg.svg" alt="queue" />
              <img src="./assets/imgs/device-svg.svg" alt="device" />
              <div id="volume" className="d-flex align-items-center gap-2">
                <img src="./assets/imgs/volume-svg.svg" alt="volume" />
                <div id="progress-vol"></div>
              </div>
              <img src="./assets/imgs/extend-svg-23.svg" alt="extend" />
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Player;
