import "./header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">React & Node</span>
        <span className="headerTitleLg">Blog</span>
      </div>
      <img
        className="headerImg"
        src=" https://images.hdqwalls.com/wallpapers/girl-reading-book-in-the-nature-4k-oz.jpg"
        alt=""
      />
    </div>
  );
}