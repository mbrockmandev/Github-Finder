import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './components/layout/Footer';
import Navbar from './components/layout/Navbar';
import Alert from './components/layout/Alert';
import Home from './pages/Home';
import About from './pages/About';
import NotFound from './pages/NotFound';
import { GithubProvider } from './context/github/GithubContext';
import { AlertProvider } from './context/alert/AlertContext';
import User from './pages/User';

function App() {
  return (
    <GithubProvider>
      <AlertProvider>
        <Router>
          <div className='flex flex-col justify-between h-screen'>
            <Navbar />
            <main className='container mx-auto px-3 pb-12'>
              <Alert />
              <Routes>
                <Route
                  path='/'
                  element={<Home />}
                />
                <Route
                  path='/about'
                  element={<About />}
                />
                <Route
                  path='/notFound'
                  element={<NotFound />}
                />
                <Route
                  path='/*'
                  element={<NotFound />}
                />
                <Route
                  path='/user/:login'
                  element={<User />}
                />
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      </AlertProvider>
    </GithubProvider>
  );
}

export default App;
