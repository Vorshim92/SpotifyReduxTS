function SidebarL() {
  return (
    <>
      <div className="d-none col-lg-2 d-lg-block">
        <div className="sidebar bar_sticky">
          <nav className="sidebar__navigation">
            <div className="logo">
              <a href="">
                <img src="./assets/imgs/logo-spotify.png" alt="Logo" />
              </a>
            </div>
            <ul>
              <li>
                <a href="">
                  <span>
                    <svg data-encore-id="icon" role="img" aria-hidden="true" className="Svg-sc-ytk21e-0 bneLcE home-icon" viewBox="0 0 24 24">
                      <path d="M12.5 3.247a1 1 0 0 0-1 0L4 7.577V20h4.5v-6a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v6H20V7.577l-7.5-4.33zm-2-1.732a3 3 0 0 1 3 0l7.5 4.33a2 2 0 0 1 1 1.732V21a1 1 0 0 1-1 1h-6.5a1 1 0 0 1-1-1v-6h-3v6a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7.577a2 2 0 0 1 1-1.732l7.5-4.33z"></path>
                    </svg>
                  </span>
                  <span className="navbar__title">Home</span>
                </a>
              </li>
              <li id="searchBtn">
                <a href="">
                  <span>
                    <svg data-encore-id="icon" role="img" aria-hidden="true" className="Svg-sc-ytk21e-0 bneLcE search-icon" viewBox="0 0 24 24">
                      <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.533 1.27893C5.35215 1.27893 1.12598 5.41887 1.12598 10.5579C1.12598 15.697 5.35215 19.8369 10.533 19.8369C12.767 19.8369 14.8235 19.0671 16.4402 17.7794L20.7929 22.132C21.1834 22.5226 21.8166 22.5226 22.2071 22.132C22.5976 21.7415 22.5976 21.1083 22.2071 20.7178L17.8634 16.3741C19.1616 14.7849 19.94 12.7634 19.94 10.5579C19.94 5.41887 15.7138 1.27893 10.533 1.27893ZM3.12598 10.5579C3.12598 6.55226 6.42768 3.27893 10.533 3.27893C14.6383 3.27893 17.94 6.55226 17.94 10.5579C17.94 14.5636 14.6383 17.8369 10.533 17.8369C6.42768 17.8369 3.12598 14.5636 3.12598 10.5579Z"></path>
                      </svg>
                    </svg>
                  </span>
                  <span className="navbar__title">Cerca</span>
                </a>
              </li>
            </ul>
          </nav>

          {/* <!-- LIBRARY --> */}
          <div className="library">
            <div className="library__content">
              <button className="library__button">
                <a className="library__link" href="">
                  <svg data-encore-id="icon" role="img" aria-hidden="true" viewBox="0 0 24 24" className="Svg-sc-ytk21e-0 bneLcE">
                    <path d="M3 22a1 1 0 0 1-1-1V3a1 1 0 0 1 2 0v18a1 1 0 0 1-1 1zM15.5 2.134A1 1 0 0 0 14 3v18a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V6.464a1 1 0 0 0-.5-.866l-6-3.464zM9 2a1 1 0 0 0-1 1v18a1 1 0 1 0 2 0V3a1 1 0 0 0-1-1z"></path>
                  </svg>
                  <span>La tua libreria</span>
                </a>
              </button>
              <span className="fa fa-plus btn__plus"></span>
            </div>
            <div id="playlist-buttons-sidebar" className="d-flex align-items-center flex-wrap px-3">
              <button className="me-2">Playlist</button>
              <button className="me-2">Album</button>
              <button className="me-2">Artisti</button>
            </div>
            <div className="d-flex align-items-center justify-content-between p-3">
              <div id="search-icons">
                <a href="">
                  <svg width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#B3B3B3">
                    <path
                      d="M10.533 1.27893C5.35215 1.27893 1.12598 5.41887 1.12598 10.5579C1.12598 15.697 5.35215 19.8369 10.533 19.8369C12.767 19.8369 14.8235 19.0671 16.4402 17.7794L20.7929 22.132C21.1834 22.5226 21.8166 22.5226 22.2071 22.132C22.5976 21.7415 22.5976 21.1083 22.2071 20.7178L17.8634 16.3741C19.1616 14.7849 19.94 12.7634 19.94 10.5579C19.94 5.41887 15.7138 1.27893 10.533 1.27893ZM3.12598 10.5579C3.12598 6.55226 6.42768 3.27893 10.533 3.27893C14.6383 3.27893 17.94 6.55226 17.94 10.5579C17.94 14.5636 14.6383 17.8369 10.533 17.8369C6.42768 17.8369 3.12598 14.5636 3.12598 10.5579Z"
                      fill="#B3B3B3"
                    ></path>
                  </svg>
                </a>
              </div>

              <div className="d-flex align-items-center" id="rec-added">
                <span>Aggiunti di recente</span>
              </div>
            </div>
            {/* <!-- FOOTER SIDE_BAR PLAYLIST --> */}
            <section className="playlist-style">
              <div className="list-item d-flex align-items-center py-1 ps-1">
                <div id="playlist-img" style={{ width: `53px` }}>
                  <img src="https://misc.scdn.co/liked-songs/liked-songs-64.png" alt="" className="img-fluid rounded" />
                </div>
                <div id="playlist-info" className="ms-2">
                  <p className="mb-0 fw-bold">Liked Songs</p>
                  <p className="mb-0 fw-light">Playlist· 237</p>
                </div>
              </div>

              <div className="list-item d-flex align-items-center py-1 ps-1">
                <div id="playlist-img" style={{ width: `53px` }}>
                  <img src="./assets/imgs/main/image-1.jpg" alt="" className="img-fluid rounded" />
                </div>
                <div id="playlist-info" className="ms-2">
                  <p className="mb-0 fw-bold">Titolo</p>
                  <p className="mb-0 fw-light">Playlist/Artista · autore</p>
                </div>
              </div>
            </section>

            {/* <!-- FOOTER SIDE_BAR COOKIES AND POLICES --> */}
            <section className="section-cookies">
              <div className="container mt-5">
                <div className="row d-sm-block d-md-flex">
                  <div className="col-4 cookies">
                    <a href="https://www.spotify.com/it/legal/end-user-agreement/">Informazioni legali</a>
                  </div>

                  <div className="col-6 cookies">
                    <a href="https://www.spotify.com/it/safetyandprivacy/reporting-content">Sicurezza e Centro sulla privacy</a>
                  </div>

                  <div className="col-5 cookies">
                    <a href="https://www.spotify.com/it/legal/privacy-policy/">Informativa sulla privacy</a>
                  </div>

                  <div className="col-4 cookies">
                    <a href="">Impostazioni cookie</a>
                  </div>

                  <div className="col-3 cookies">
                    <a href="https://www.spotify.com/it/legal/privacy-policy/#s3">Info annunci</a>
                  </div>

                  <div className="col-3 cookies">
                    <a href="https://www.spotify.com/it/accessibility">Accessibilità</a>
                  </div>

                  <div className="col-12 cookies">
                    <a href="https://www.spotify.com/it/legal/cookies-policy/">Politica sui cookie</a>
                  </div>
                </div>
              </div>

              {/* <!--BUTTON LANGUAGE (Maybe we can put a Modal here!)--> */}
              <div className="col mt-3 modal_language">
                <div className="languages">
                  <button className="languages__button">
                    <span className="fa fa-globe"></span>
                    <span>Italiano</span>
                  </button>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}

export default SidebarL;
