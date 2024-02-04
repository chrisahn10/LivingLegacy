const Footer = () => {
  return (
    <div className="h-full">
      <div className="bottom-0 flex-1">
        <div className="text-center w-screen bg-beige py-3 text-black font-ConcertOne text-xl/8">
          Contact us on GitHub:
          <ul className="list-none">
            <li>
              <a href="https://github.com/harinyoun" style={{ color: "#7B583D", marginRight: "20px" }}>
                Harin
              </a>
              <a href="https://github.com/chrisahn10" style={{ color: "#7B583D", marginRight: "20px" }}>
                Chris
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
