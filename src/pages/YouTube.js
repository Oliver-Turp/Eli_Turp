import { Helmet } from "react-helmet";

import "../styles/youtube.css";

const YouTube = () => {
  return (
    <div className="youtube__wrap">
      <Helmet>
        <title>Eli Turp | Channel Updates</title>
      </Helmet>
      <h1>channel updates</h1>
      <div className="youtube__recentVid">
        <iframe
          src="https://www.youtube.com/embed/?listType=playlist&list=UUmPB-vlqGBXEx5drz-0TLWg"
          frameborder="0"
          allowfullscreen
          title="mostRecentVideo"
        />
        <p>recent video</p>
        <a
          href="https://www.youtube.com/c/EliTurp/community"
          target="_blank"
          rel="noreferrer"
        >
          <button type="button">community posts</button>
        </a>
      </div>
      <div className="youtube__content-wrap">
        <p>albums</p>
        <p>playlists</p>
        <div className="youtube__content-left">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/videoseries?list=PLZyB_umzgL39QVu0lvBUxhFNDwNpG4BiB"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/videoseries?list=OLAK5uy_ngHbUY0VGWUn3urFF8bjRvqYuV2GWmf_s"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/videoseries?list=OLAK5uy_lgXGvjh67ZPT1l6kwbH9Qpm3TSzOoDBcM"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
        <div className="youtube__content-right">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/videoseries?list=PLZyB_umzgL388-obz68ny8nN-pe0VXFBy"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/videoseries?list=PLZyB_umzgL39fsimUqICsuT2WtecQ58TX"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/videoseries?list=PLZyB_umzgL3-r4bD4Yymo98onUgRIvgxF"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default YouTube;
