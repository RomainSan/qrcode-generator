import QrCode from "./components/QrCode";
import { AiFillGithub } from "react-icons/ai";

function App() {
  return (
    <div className="App">
      <QrCode />
      <footer className="fixed w-full bottom-0 py-4 px-7 bg-black/40 flex justify-end text-white">
        <a
          href="https://github.com/RomainSan"
          rel="noreferrer"
          target="_blank"
          className="text-xl hover:text-slate-500 duration-200 "
        >
          {<AiFillGithub />}
        </a>
      </footer>
    </div>
  );
}

export default App;
