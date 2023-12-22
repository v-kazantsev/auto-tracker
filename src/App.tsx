import { Route, Routes } from 'react-router-dom';
import { Home, NotFound, DeviceList } from 'pages';
import { Layout } from 'components';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/devices" element={<DeviceList />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
