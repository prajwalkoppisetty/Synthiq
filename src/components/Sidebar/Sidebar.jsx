import React, { useContext, useState } from "react";
import { assets } from "../../assets/assets";
import { Context } from "../../context/context";
import "./Sidebar.css"; // Import external CSS file

const Sidebar = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [extended, setExtended] = useState(false);
  const { onSent, prevPrompts, setRecentPrompt, newChat } = useContext(Context);

  const loadPrompt = async (prompt) => {
    setRecentPrompt(prompt);
    await onSent(prompt);
  };

  return (
    <div className="sidebar"> {/* Apply the sidebar class */}
      <div className="top">
        <div className="menu">
          <img onClick={() => setExtended((prev) => !prev)} src={assets.menu_icon} alt="" />
          <p></p>
        </div>
        <div onClick={newChat} className="new-chat">
          <img src={assets.plus_icon} alt="" />
          {extended ? <p>New chat</p> : null}
        </div>
        {extended && (
          <div className="recent">
            <p className="recent-title">Recent</p>
            {prevPrompts.map((item, index) => (
              <div
                key={index}
                onClick={() => loadPrompt(item)}
                className="recent-entry"
                style={{ backgroundColor: isHovered ? "#e2e6eb" : "transparent" }}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <img src={assets.message_icon} alt="" />
                <p>{item.slice(0, 18)}...</p>
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="bottom">
        <div className="bottom-item recent-entry">
          <img src={assets.question_icon} alt="" />
          {extended && <p>help</p>}
        </div>
        <div className="bottom-item recent-entry">
          <img src={assets.history_icon} alt="" />
          {extended && <p>activity</p>}
        </div>
        <div className="bottom-item recent-entry">
          <img src={assets.setting_icon} alt="" />
          {extended && <p>settings</p>}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
