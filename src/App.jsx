// import AppleLogo from "./images/apple.png";

function App() {
  return (
    <div className="bg-red-100 min-h-screen">
      {/* min h-screen */}
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
      <main>
        {/* Introduce */}
        <div className="bg-green-100 max-w-screen-xl mx-auto h-96 flex justify-center items-center">
          여기에 나를 소개하는 내용을 적으면 됩니다.
        </div>
        <ul className="bg-indigo-100 max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center gap-8 py-8">
          <li className="bg-purple-300 w-60 h-72 rounded-xl">
            {/* object-fit: cover */}
            <div className="bg-yellow-100 w-full h-1/2 rounded-t-xl">
              프로젝트 이미지
            </div>
            <div className="text-xl font-bold mt-2 mx-2">프로젝트 제목</div>
            <div className="mt-2 mx-2">프로젝트 간략한 설명</div>
          </li>
          <li className="bg-purple-300 w-60 h-72 rounded-xl">
            {/* object-fit: cover */}
            <div className="bg-yellow-100 w-full h-1/2 rounded-t-xl">
              프로젝트 이미지
            </div>
            <div className="text-xl font-bold mt-2 mx-2">프로젝트 제목</div>
            <div className="mt-2 mx-2">프로젝트 간략한 설명</div>
          </li>
          <li className="bg-purple-300 w-60 h-72 rounded-xl">
            {/* object-fit: cover */}
            <div className="bg-yellow-100 w-full h-1/2 rounded-t-xl">
              프로젝트 이미지
            </div>
            <div className="text-xl font-bold mt-2 mx-2">프로젝트 제목</div>
            <div className="mt-2 mx-2">프로젝트 간략한 설명</div>
          </li>
          <li className="bg-purple-300 w-60 h-72 rounded-xl">
            {/* object-fit: cover */}
            <div className="bg-yellow-100 w-full h-1/2 rounded-t-xl">
              프로젝트 이미지
            </div>
            <div className="text-xl font-bold mt-2 mx-2">프로젝트 제목</div>
            <div className="mt-2 mx-2">프로젝트 간략한 설명</div>
          </li>
          <li className="bg-purple-300 w-60 h-72 rounded-xl">
            {/* object-fit: cover */}
            <div className="bg-yellow-100 w-full h-1/2 rounded-t-xl">
              프로젝트 이미지
            </div>
            <div className="text-xl font-bold mt-2 mx-2">프로젝트 제목</div>
            <div className="mt-2 mx-2">프로젝트 간략한 설명</div>
          </li>
          <li className="bg-purple-300 w-60 h-72 rounded-xl">
            {/* object-fit: cover */}
            <div className="bg-yellow-100 w-full h-1/2 rounded-t-xl">
              프로젝트 이미지
            </div>
            <div className="text-xl font-bold mt-2 mx-2">프로젝트 제목</div>
            <div className="mt-2 mx-2">프로젝트 간략한 설명</div>
          </li>
        </ul>
        <div className="bg-gray-100 max-w-screen-wl mx-auto h-96 flex justify-center items-center">
          Joy's fortpolio
        </div>
      </main>
      <footer className="max-w-screen-xl mx-auto flex justify-end py-1 md:py-2">
        2023, Designed by, Joy
      </footer>
    </div>
  );
}

export default App;
