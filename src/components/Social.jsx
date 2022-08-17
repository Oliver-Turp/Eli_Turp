const Social = ({ href, imgSrc, imgAlt, name }) => {
  return (
    <div className="nav__footer-item">
      <a href={href} target="_blank" rel="noreferrer">
        <img src={imgSrc} alt={ imgAlt || "Social" } />
      </a>
      <p>{ name }</p>
    </div>
  );
};

export default Social;
