import Sidebar from '../components/Sidebar';

export default function Home() {
  return (
    <div style={{ display: 'flex' }}>
      <Sidebar />
      <div style={{ marginLeft: '20px', padding: '10px' }}>
        <h1>Bem-vindo ao My Music App</h1>
        <p>https://prosearch.tribeofnoise.com/artists/show/73248/43959</p>
      </div>
    </div>
  );
}

import Sidebar from '../components/Sidebar';

export default function Home() {
  return (
    <div style={{ display: 'flex' }}>
      <Sidebar />
      <div style={{ marginLeft: '20px', padding: '10px' }}>
        <h1>Bem-vindo ao My Music App</h1>
        <p>Escolha uma música na barra lateral para ouvir.</p>
      </div>
    </div>
  );
}
