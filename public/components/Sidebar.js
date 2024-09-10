import React from 'react';

const Sidebar = () => {
  return (
    <div style={{ width: '250px', padding: '10px', backgroundColor: '#f0f0f0', height: '100vh' }}>
      <h3>Playlist</h3>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        <li>
          <audio controls>
            <source src="https://prosearch.tribeofnoise.com/artists/show/73248/43959" type="audio/mp3" />
            Your browser does not support the audio element.
          </audio>
        </li>
        <li>
          <audio controls>
            <source src="https://prosearch.tribeofnoise.com/artists/show/37781/43915" type="audio/mp3" />
            Your browser does not support the audio element.
          </audio>
        </li>
        <li>
          <audio controls>
            <source src="https://prosearch.tribeofnoise.com/artists/show/71800/39493" type="audio/mp3" />
            Your browser does not support the audio element.
          </audio>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
