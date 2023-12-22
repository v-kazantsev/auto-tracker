import { Route, Routes, Link } from 'react-router-dom';
import { Home, NotFound, DeviceList } from 'pages';

function App() {
  return (
    <>
    <div style={{display: 'flex'}}>
      <Link to="/devices">Список устройств</Link>
    </div>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/devices" element={<DeviceList />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    </>
  );
}

export default App;
