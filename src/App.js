import logo from './logo.svg';
import './App.css';
import img1 from './task-img-2.jpg'
import img2 from './task-img-3.webp'
import img3 from './task-4 2022-12-27 150102.png'
import { RouterProvider } from 'react-router-dom';
import { router } from './Routes/Routes/Routes';


function App() {
  return (
    <div className="App">
      {/* #1d2025 */}
      {/* #d8d7d9 */}
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
