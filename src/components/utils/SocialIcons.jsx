import "@fortawesome/fontawesome-free/css/all.min.css";

const SocialIcons = () => {
  const redes = [
    { icon: "fa-facebook-f", color: "#1877F2", link: "https://facebook.com" },
    { icon: "fa-instagram", color: "#E4405F", link: "https://instagram.com" },
    { icon: "fa-x-twitter", color: "white", link: "https://twitter.com" },
    { icon: "fa-linkedin-in", color: "#0077B5", link: "https://linkedin.com" },
    { icon: "fa-tiktok", color: "white", link: "https://tiktok.com" },
    { icon: "fa-snapchat", color: "#FFFC00", link: "https://snapchat.com" },
    { icon: "fa-discord", color: "#5865F2", link: "https://discord.com" },
    { icon: "fa-twitch", color: "#9146FF", link: "https://twitch.tv" },
    { icon: "fa-whatsapp", color: "#46ff93ff", link: "https://whatsapp.com" },
  ];

  return (
    <div className="social-icons d-flex justify-content-center align-items-center flex-wrap gap-3 py-3">
      {redes.map((r) => (
        <a
          key={r.icon}
          href={r.link}
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon d-flex justify-content-center align-items-center"
          style={{ color: r.color }}
        >
          <i className={`fa-brands ${r.icon}`}></i>
        </a>
      ))}
    </div>
  );
};

export default SocialIcons;