const Header = (props) => {
  return (
    <div className="Header">
      <p className="title">
        <i className="fa-solid fa-shuttle-space"></i>
        {props.title}
      </p>
    </div>
  );
};

export default Header;
