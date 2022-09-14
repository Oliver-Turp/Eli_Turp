import { Helmet, HelmetProvider } from "react-helmet-async";

import "../styles/youtube.css";

const YouTube = () => {
  const Loaded = console.log("Page Loaded");
  return (
    <div className="youtube__wrap" onLoad={Loaded}>
      <HelmetProvider>
        <Helmet>
          <title>Eli Turp | Channel Updates</title>
        </Helmet>
      </HelmetProvider>
      <h1>channel updates</h1>
      <div className="youtube__recentVid">
        <div className="youtube__recentVid-top_wrap">
          <div className="youtube__recentVid-top_content">
            <p>recent video</p>
            <div className="youtube__recentVid-top_content_iframe-wrap">
              <iframe
                src="https://www.youtube.com/embed/?listType=playlist&list=UUmPB-vlqGBXEx5drz-0TLWg"
                frameBorder="0"
                allowFullScreen
                title="mostRecentVideo"
              />
            </div>
          </div>
          <div className="youtube__recentVid-top_content">
            <p>recent activity</p>
            <iframe
              src="https://anchor.fm/jrsgaming886/embed/episodes/Discovering-the-SECRETS-behind-a-Nintendo-music-producer--Ft--Eli-Turp-e1mecom/a-a58emr"
              frameBorder="0"
              scrolling="no"
              id="longBoi"
            ></iframe>
          </div>
        </div>
        <a
          href="https://www.youtube.com/c/EliTurp/community"
          target="_blank"
          rel="noreferrer"
        >
          <button type="button">community posts</button>
        </a>
      </div>
      <div className="youtube__content-wrap">
        <div className="youtube__content-left">
          <p>albums</p>
          <div className="youtube__content_iframe-wrap">
            <iframe
              src="https://www.youtube.com/embed/videoseries?list=PLZyB_umzgL39QVu0lvBUxhFNDwNpG4BiB"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div className="youtube__content_iframe-wrap">
            <iframe
              src="https://www.youtube.com/embed/videoseries?list=OLAK5uy_ngHbUY0VGWUn3urFF8bjRvqYuV2GWmf_s"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div className="youtube__content_iframe-wrap">
            <iframe
              src="https://www.youtube.com/embed/videoseries?list=OLAK5uy_lgXGvjh67ZPT1l6kwbH9Qpm3TSzOoDBcM"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
        <div className="youtube__content-right">
          <p>playlists</p>
          <div className="youtube__content_iframe-wrap">
            <iframe
              src="https://www.youtube.com/embed/videoseries?list=PLZyB_umzgL388-obz68ny8nN-pe0VXFBy"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div className="youtube__content_iframe-wrap">
            <iframe
              src="https://www.youtube.com/embed/videoseries?list=PLZyB_umzgL39fsimUqICsuT2WtecQ58TX"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div className="youtube__content_iframe-wrap">
            <iframe
              src="https://www.youtube.com/embed/videoseries?list=PLZyB_umzgL3-r4bD4Yymo98onUgRIvgxF"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default YouTube;
