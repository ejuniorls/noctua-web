import AppRoutes from './routes';
import ThemeProvider from './context/ThemeContext';

function App() {
  return (
    <>
      <ThemeProvider>
        <div className="App">
          <AppRoutes />
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;