import React, { useContext } from 'react';
import './Main.css';
import { assets } from '../../assets/assets';
import { Context } from '../../context/context';

const Main = () => {
  const { onSent, recentPrompt, showResults, loading, resultData, setInput, input } = useContext(Context);

  return (
    <div className="main">
      <div className="nav">
        <p>SynthIQ</p>
        <img src={assets.user_icon} alt="User" />
      </div>
      <div className="main-container">
        {!showResults ? (
          <>
            <div className="greet">
              <p>
                <span>Hello, Dev.</span>
              </p>
              <p>How Can I Help You Today</p>
            </div>
            <div className="cards">
              <div className="card">
                <p>Suggest beautiful places to see on an upcoming road trip</p>
                <img src={assets.compass_icon} alt="Compass" />
              </div>
              <div className="card">
                <p>Briefly summarize this concept urban planning</p>
                <img src={assets.bulb_icon} alt="Bulb" />
              </div>
              <div className="card">
                <p>Brainstorm team bonding activities for our work retreat</p>
                <img src={assets.message_icon} alt="Message" />
              </div>
              <div className="card">
                <p>Improve the readability of the following code</p>
                <img src={assets.code_icon} alt="Code" />
              </div>
            </div>
          </>
        ) : (
          <div className="result">
            <div className="result-title">
              <img src={assets.user_icon} />
              <p>{recentPrompt}</p>
            </div>
            <div className="result-data">
               <img src={assets.gemini_icon}/>
               {loading
               ?<div className='loader'>
                 <hr />
                 <hr />
                 <hr />
               </div>
               :<p dangerouslySetInnerHTML={{__html: resultData}}></p>
              }
                
            </div>

          </div>
        )}

        <div className="main-bottom">
          <div className="search-box">
            <input onChange={(e) => setInput(e.target.value)} value={input} type="text" placeholder="Enter Your Prompt Here" />
            <div className="">
              <img src={assets.gallery_icon} alt="Gallery" />
              <img src={assets.mic_icon} alt="Mic" />
              {input?<img onClick={() => onSent()} src={assets.send_icon} alt="Send" />:null}
            </div>
          </div>
          <p className="bottom-info">
          SynthIQ may display inaccurate info, including about people, so double-check its responses. Your privacy and SynthIQ Apps
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
