import { SideBar } from './components/SideBar';
import { Content } from './components/Content';

import './styles/global.scss';

export interface GenreResponseProps {
  id: number;
  name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
  title: string;
}

export function App() { 

  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <SideBar />

      <Content />
    </div>
  )
}