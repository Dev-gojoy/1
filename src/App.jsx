import AppleLogo from "./images/apple.png";

function App() {
  return (
    <div className="bg-red-100 min h-screen">
      {/* 새로 폭을 맞출 때는 min-h-screen을 쓴다 min-h-screen = height: 100vh; */}
      <header className="bg-blue-100 h-12 md:h-20">
        {" "}
        {/* h-12에서 숫자는 96이 최대치다 */}
        <div className="max-w-screen-xl mx-auto h-full flex justify-between items-center">
          <div>Joy's fortpolio</div>
          {/* <div>
            <img className="w-12" src={AppleLogo} alt="Apple" />
          </div> */}
          <ul className="flex gap-2 md:gap-8 text-xs sm:text-sm md:text-base">
            <li className="bg-indigo-300 btn-style">Introduce</li>
            <li className="bg-purple-300 btn-style">Portfolio</li>
            <li className="bg-blue-300 btn-style">Contact Me</li>
          </ul>
        </div>
      </header>
    </div>
  );
}

export default App;
