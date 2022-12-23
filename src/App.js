
import './App.css';
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container">
      <Weather defaultCity="Lisboa"/>

      <footer className='codeBy'>
          This project was coded by{" "}
          <a
            href="https://graceful-cobbler-3beef8.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Maryna Pastukh
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/marinella08/my-project"
            target="_blank"
            rel="noopener noreferrer"
          >
            open-sourced on GitHub
          </a>{" "}
          and{" "}
          <a
            href="https://inquisitive-fox-81eb8e.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            hosted on Netlify
          </a>
        </footer>
     
      </div>
    </div>
  );
}

export default App;
