import './App.css';
import Navbar from './components/Navbar';
import BookContextProvider from './contexts/BookContext';

function App() {
  return (
    <div className="app">
      <BookContextProvider>
        <Navbar />
      </BookContextProvider>
    </div>
  );
}

export default App;
