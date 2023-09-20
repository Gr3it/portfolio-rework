import CTA from "./components/CTA";
import InterestCard from "./components/InterestCard";
import Navbar from "./components/Navbar";
import ProjectPreview from "./components/ProjectPreview";
import ScrollDown from "./components/ScrollDown";

export default function Home() {
  return (
    <>
      <Navbar />

      <div className="px-10 w-full flex flex-col items-center">
        {/* Home */}
        <section className="max-w-10xl w-full h-[100vh] min-h-[32rem] pt-[88px] relative flex items-center justify-between">
          <p className="z-[-1] absolute left-[60%] top-1/3 translate-x-[-50%] translate-y-[-50%] text-10xl font-bold opacity-5 select-none">
            PARTNER
          </p>
          <div>
            <p className="text-3xl opacity-60 font-light">
              Smart Contract Engineer & Web Developer
            </p>
            <h1 className="text-8xl font-bold leading-snug">
              Emanuele <br />
              Zini
            </h1>
          </div>
          <svg
            className="w-[35rem]"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 607.061 372.5"
          >
            <g id="SVG" transform="translate(-2012 -505.105)">
              <path
                id="Tracciato_27"
                data-name="Tracciato 27"
                d="M877.976,607.506H274.085a1.585,1.585,0,0,1,0-3.17H877.976a1.585,1.585,0,0,1,0,3.17Z"
                transform="translate(1739.5 190.055)"
                fill="#3f3d56"
              />
              <circle
                id="Ellisse_7"
                data-name="Ellisse 7"
                cx="42.5"
                cy="42.5"
                r="42.5"
                transform="translate(2285.061 505.105)"
                fill="#2f2e41"
              />
              <path
                id="Tracciato_28"
                data-name="Tracciato 28"
                d="M173,391.462V370.856l74.5-12.68,1.585,28.53Z"
                transform="translate(2113.208 431.46)"
                fill="#ffb8b8"
              />
              <path
                id="Tracciato_29"
                data-name="Tracciato 29"
                d="M23.6,0H61.072V23.6H0A23.6,23.6,0,0,1,23.6,0Z"
                transform="translate(2289.065 765.231) rotate(86.655)"
                fill="#2f2e41"
              />
              <path
                id="Tracciato_30"
                data-name="Tracciato 30"
                d="M222.081,396.727,209.4,410.992,146,369.781l17.435-20.605Z"
                transform="translate(2097.412 426.195)"
                fill="#ffb8b8"
              />
              <path
                id="Tracciato_31"
                data-name="Tracciato 31"
                d="M23.6,0H61.072V23.6H0A23.6,23.6,0,0,1,23.6,0Z"
                transform="matrix(0.635, -0.773, 0.773, 0.635, 2278.738, 862.622)"
                fill="#2f2e41"
              />
              <path
                id="Tracciato_32"
                data-name="Tracciato 32"
                d="M446.462,579.092l-7.925,41.21c-.393,1.853.4,3.273,1.585,4.755s2.861,1.554,4.755,1.585l82.421,1.585c1.892.031,3.527-.145,4.755-1.585a5.5,5.5,0,0,0,1.585-4.755l-6.34-41.21c-.535-3.03-3.264-6.34-6.34-6.34H452.8A6.262,6.262,0,0,0,446.462,579.092Z"
                transform="translate(1836.575 172.504)"
                fill="#2f2e41"
              />
              <path
                id="Tracciato_33"
                data-name="Tracciato 33"
                d="M489.877,598.023s-80.836-50.721-96.686-23.775c-7.925,13.473-4.359,26.747,1.585,36.455,5.516,8.839,14.381,16.1,23.775,20.605l64.986,31.7,23.775-25.36-15.85-14.265Z"
                transform="translate(1807.426 167.838)"
                fill="#2f2e41"
              />
              <path
                id="Tracciato_34"
                data-name="Tracciato 34"
                d="M486.69,584.268S591.3,554.152,570.7,611.213s-98.271,34.87-98.271,34.87L464.5,622.308l26.945-19.02Z"
                transform="translate(1851.823 173.668)"
                fill="#2f2e41"
              />
              <circle
                id="Ellisse_8"
                data-name="Ellisse 8"
                cx="39"
                cy="39"
                r="39"
                transform="translate(2289.061 519.105)"
                fill="#ffb8b8"
              />
              <path
                id="Tracciato_35"
                data-name="Tracciato 35"
                d="M500.15,643.086a219.424,219.424,0,0,1-49.135-6.34h0l-22.19-99.856a36.983,36.983,0,0,1,23.775-42.8,130.941,130.941,0,0,1,82.421-1.585h0C553.5,498.464,563.284,518,558.8,536.889L535.02,636.745h0C524.935,641.522,512.467,643.086,500.15,643.086Z"
                transform="translate(1830.438 121.19)"
                fill="#ccc"
              />
              <path
                id="Tracciato_36"
                data-name="Tracciato 36"
                d="M454.856,607.3a15.855,15.855,0,0,1,9.51-9.51c4.428-1.625,10.176-.767,14.265,1.585l42.8-38.04,3.17,30.115-41.21,30.115c-4.505,6.755-13.366,10.017-20.605,6.34S452.058,614.924,454.856,607.3Z"
                transform="translate(1845.617 164.899)"
                fill="#ffb8b8"
              />
              <path
                id="Tracciato_37"
                data-name="Tracciato 37"
                d="M485.278,656.341c-.7,0-.918.2-1.585,0a7.575,7.575,0,0,1-4.755-4.755L472.6,637.32c-.99-2.767.938-6.013,3.17-7.925l58.646-34.87L510.639,491.5h0c.238-.059,25.225-5.116,34.87,20.605,6.754,18.014,30.294,57.537,28.53,84.006-.69,10.9-8.259,20.332-19.02,22.19l-64.986,36.455A8.476,8.476,0,0,1,485.278,656.341Z"
                transform="translate(1856.405 123.786)"
                fill="#ccc"
              />
              <path
                id="Tracciato_38"
                data-name="Tracciato 38"
                d="M510.241,605.3a15.855,15.855,0,0,0-9.51-9.51c-4.428-1.625-8.591-.767-12.68,1.585l-42.8-38.04L440.5,589.452l41.21,30.115c4.5,6.755,13.366,8.432,20.605,4.755S513.039,612.924,510.241,605.3Z"
                transform="translate(1837.783 163.729)"
                fill="#ffb8b8"
              />
              <path
                id="Tracciato_39"
                data-name="Tracciato 39"
                d="M496.044,656.341a8.478,8.478,0,0,1-4.755-1.585L421.548,621.47c-10.761-1.858-18.33-11.291-19.02-22.19-1.763-26.469,28.116-69.162,34.87-87.176,9.645-25.721,33.047-20.665,33.285-20.605h0L443.738,597.7l61.816,31.7c2.232,1.912,4.16,5.158,3.17,7.925l-6.34,14.265a7.575,7.575,0,0,1-4.755,4.755C496.962,656.54,496.739,656.34,496.044,656.341Z"
                transform="translate(1815.524 123.785)"
                fill="#ccc"
              />
              <path
                id="Tracciato_40"
                data-name="Tracciato 40"
                d="M570.661,642.193H429.6a11.108,11.108,0,0,1-11.1-11.1V553.432a11.108,11.108,0,0,1,11.1-11.1H570.661a11.108,11.108,0,0,1,11.1,11.1V631.1A11.108,11.108,0,0,1,570.661,642.193Z"
                transform="translate(1824.912 153.784)"
                fill="#0d6ede"
              />
              <ellipse
                id="Ellisse_9"
                data-name="Ellisse 9"
                cx="9.5"
                cy="9"
                rx="9.5"
                ry="9"
                transform="translate(2316.061 738.105)"
                fill="#fff"
              />
              <path
                id="Tracciato_41"
                data-name="Tracciato 41"
                d="M447.787,469.061c-2.307-5.852.724-11.43,6.34-14.265a26.614,26.614,0,0,1,19.02-1.585c5.048,1.57,9.34,4.418,14.265,6.34a34.852,34.852,0,0,0,15.85,3.17c5.253-.593,10.531-3.1,12.68-7.925,2.228-5.006.261-11.578-3.17-15.85a33.207,33.207,0,0,0-14.265-9.51c-11.582-4.08-24.118-4.346-34.87,1.585s-18.073,19.623-15.85,31.7"
                transform="translate(1841.59 85.993)"
                fill="#2f2e41"
              />
              <path
                id="Tracciato_42"
                data-name="Tracciato 42"
                d="M306.672,624.708a197.724,197.724,0,0,1,15.85-61.816c2.409-5.381,5.031-10.706,7.925-15.85.3-.559.549-1.264,0-1.585s-2.831-.537-3.17,0c-10.523,18.736-16.679,39.1-20.605,60.231-1.092,5.9-2.62,13.037-3.17,19.02C303.362,626.217,306.533,626.207,306.672,624.708Z"
                transform="translate(1757.634 155.419)"
                fill="#e6e6e6"
              />
              <path
                id="Tracciato_50"
                data-name="Tracciato 50"
                d="M15.5,0A15.256,15.256,0,0,1,31,15,15.256,15.256,0,0,1,15.5,30,15.256,15.256,0,0,1,0,15,15.256,15.256,0,0,1,15.5,0Z"
                transform="translate(2078.061 677.105)"
                fill="#0d6ede"
              />
              <path
                id="Tracciato_43"
                data-name="Tracciato 43"
                d="M307.086,614.135c1.27-13.682,3.9-27.081,9.51-39.625,1.563-3.491,2.878-7.758,4.755-11.1.2-.363.356.208,0,0s.22-.349,0,0a130.729,130.729,0,0,0-14.265,39.625c-.709,3.828-1.228,7.213-1.585,11.1C305.411,615.114,307,615.108,307.086,614.135Z"
                transform="translate(1758.804 165.991)"
                fill="#e6e6e6"
              />
              <path
                id="Tracciato_51"
                data-name="Tracciato 51"
                d="M10,0A10,10,0,1,1,0,10,10,10,0,0,1,10,0Z"
                transform="translate(2075.061 713.105)"
                fill="#0d6ede"
              />
              <path
                id="Tracciato_44"
                data-name="Tracciato 44"
                d="M311.591,612.543a118.333,118.333,0,0,1-15.85-36.455c-.915-3.714-1.013-8.894-1.585-12.68-.069-.406-1.176-.055-1.585,0s-.041,1.175,0,1.585a127.606,127.606,0,0,0,12.68,39.625c1.8,3.454,4.234,6.23,6.34,9.51C312.121,614.956,312.118,613.366,311.591,612.543Z"
                transform="translate(1751.13 165.998)"
                fill="#e6e6e6"
              />
              <path
                id="Tracciato_52"
                data-name="Tracciato 52"
                d="M9.5,0C14.747,0,19,4.7,19,10.5S14.747,21,9.5,21,0,16.3,0,10.5,4.253,0,9.5,0Z"
                transform="translate(2034.061 712.105)"
                fill="#0d6ede"
              />
              <path
                id="Tracciato_45"
                data-name="Tracciato 45"
                d="M286.5,610.282v-19.02c0-3.937,2.4-7.921,6.34-7.925h44.38c3.937,0,7.921,3.988,7.925,7.925v19.02c0,3.937-3.988,6.336-7.925,6.34H292.84C288.9,616.617,286.5,614.219,286.5,610.282Z"
                transform="translate(1747.69 177.77)"
                fill="#e7e7e7"
              />
              <path
                id="Tracciato_46"
                data-name="Tracciato 46"
                d="M599.955,621.91c0,10.425-7.01,14.265-17.435,14.265s-19.02-3.84-19.02-14.265,4.34-23.214,19.02-19.02C597.2,596.6,599.955,611.485,599.955,621.91Z"
                transform="translate(1909.74 188.331)"
                fill="#ff6584"
              />
              <path
                id="Tracciato_47"
                data-name="Tracciato 47"
                d="M577.54,614.794c-1.519,0-2.975-.079-3.17-1.585a142.733,142.733,0,0,0-4.755-20.605h0c-.3-.835-.517-.865,0-1.585.493-.642.779-1.527,1.585-1.585s1.005-.564,1.585,0a7.162,7.162,0,0,1,1.585,3.17c-.284,5.311,4.007,12.792,6.34,17.435a3.794,3.794,0,0,1,0,3.17c-.478.872-2.18,1.484-3.17,1.585C577.434,614.806,577.647,614.795,577.54,614.794Z"
                transform="translate(1913.135 181.182)"
                fill="#3f3d56"
              />
              <path
                id="Tracciato_48"
                data-name="Tracciato 48"
                d="M589.35,603.7c6.552-5.363.276-16.372-7.925-14.265-1.1.264-.751.815-1.585,1.585-5.031,4.752-6.34,15.85-6.34,15.85S582.68,609.158,589.35,603.7Z"
                transform="translate(1915.59 181.182)"
                fill="#3f3d56"
              />
            </g>
          </svg>
          <ScrollDown />
        </section>

        {/* Projects */}
        <section
          className="max-w-10xl w-full relative flex flex-col items-center gap-12 py-20"
          id="projects"
        >
          <p className="z-[-1] absolute left-[50%] translate-x-[-50%] translate-y-[-30%] text-10xl font-bold opacity-5 select-none">
            EXPERIENCE
          </p>
          <h2 className="text-6xl font-semibold relative mb-20">
            My Projects
            <svg
              className="absolute w-52 z-[-1] left-1/2 translate-x-[-50%] top-[3.25rem]"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 143 25.22"
            >
              <path
                d="M5,26.11S117.74-17.13,145,17"
                transform="translate(-3.5 -2.39)"
                fill="none"
                stroke="#0d6ede"
                strokeLinecap="round"
                strokeWidth="3"
              />
            </svg>
          </h2>
          <ProjectPreview
            title="Space Pirates"
            tags="Solidity, Hardhat"
            date="March 2022 - ongoing"
            url="space-pirates"
            img="SpacePirates.png"
          />
          <ProjectPreview
            title="UNI-CAR"
            tags="Axure RP10"
            date="March 2023 - July 2023"
            url="plan-it"
            img="UniCarPreview.png"
          />
          <ProjectPreview
            title="Plan-it"
            tags="React, Next-js, MongoDB, Figma"
            date="September 2022 - January 2023"
            url="plan-it"
            img="PlanItPreview.png"
          />
          <ProjectPreview
            title="Meta Empire"
            tags="Solidity, Hardhat, NFT"
            date="March 2022 - May 2022"
            url="meta-empires"
            img="MetaEmpirePreview.png"
          />
          <ProjectPreview
            title="Color Screentest"
            tags="React&#x2011;Native, Framer"
            date="August 2021"
            url="color-screentest"
            img="RGBColorPreview.png"
          />
          <ProjectPreview
            title="Hotel Meano"
            tags="HTML, CSS, Javascript, MySQL, PHP"
            date="April - May 2021"
            url="hotel-meano"
            img="HotelMeanoPreview.png"
          />
        </section>

        {/* About */}
        <section
          className="max-w-10xl w-full relative flex flex-col items-center gap-12 py-20"
          id="about"
        >
          <p className="z-[-1] absolute left-[50%] translate-x-[-50%] translate-y-[-30%] text-10xl font-bold opacity-5 select-none">
            PASSIONATE
          </p>
          <h2 className="text-6xl font-semibold relative mb-20">
            About Me
            <svg
              className="absolute w-52 z-[-1] left-1/2 translate-x-[-50%] top-[3.25rem]"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 143 25.22"
            >
              <path
                d="M5,26.11S117.74-17.13,145,17"
                transform="translate(-3.5 -2.39)"
                fill="none"
                stroke="#0d6ede"
                strokeLinecap="round"
                strokeWidth="3"
              />
            </svg>
          </h2>
          <div className="flex justify-between self-stretch gap-16">
            <div className="max-w-md w-full">
              <h3 className="text-4.5xl font-semibold mb-12">Who I Am</h3>
              <p className="text-lg text-justify font-light opacity-60">
                I am a bachelor&apos;s student based in Trento, Italy. While
                following an IT study formation, I am also a passionate in
                Blockchain Development, Web Development and UI/UX design. I have
                long been interested in the field of computer science, for
                instance by participating in a robotics competition.
                <br />
                <br />
                <br />
                Furthermore, I am passionate about marketing and advertising,
                personal finance and investment, pc hardware, and
                cryptocurrency. In my free time, I enjoy reading books and
                sometimes playing video games with friends.
              </p>
            </div>
            <svg
              className="max-w-md w-full"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 530.686 626.848"
            >
              <g
                id="About_-_SVG"
                data-name="About - SVG"
                transform="translate(0.038 0)"
              >
                <path
                  id="Tracciato_64"
                  data-name="Tracciato 64"
                  d="M904.78,804A41.025,41.025,0,0,1,893.8,814.2c-.9.573-1.833,1.115-2.778,1.615H868.792c.266-.533.525-1.074.775-1.615a77.013,77.013,0,0,0-16.024-88.308c13.439,4.151,25.861,12.244,33.986,23.721a52.068,52.068,0,0,1,8.262,18.576,77.758,77.758,0,0,0-6.195-39.1c10.911,8.876,19.408,21.031,22.646,34.713S913.132,792.681,904.78,804Z"
                  transform="translate(-383.449 -189.643)"
                  fill="#f0f0f0"
                />
                <path
                  id="Path_2533"
                  data-name="Path 2533"
                  d="M878.56,837.664H670.4v-1.7h208.47Z"
                  transform="translate(-348.221 -210.816)"
                  fill="#3f3d56"
                />
                <path
                  id="Tracciato_65"
                  data-name="Tracciato 65"
                  d="M530.892,300.455c0,31.208-10.9,57.852-31.652,77.68-14.723,14.077-37.4,33.808-37.4,54.67v17.259H392.784V432.8c0-21.08-22.768-40.851-37.4-54.67C335.1,359,323.73,330.548,323.73,300.455v-.638a103.582,103.582,0,1,1,207.162.638Z"
                  transform="translate(-281.539 -87.825)"
                  fill="#0d6ede"
                />
                <path
                  id="Path_2546"
                  data-name="Path 2546"
                  d="M461.262,451.987a2.423,2.423,0,0,1-2.423-2.423V432.3c0-20.292,20.013-39.236,34.626-53.067,1.211-1.148,2.391-2.261,3.524-3.348,20.215-19.325,30.9-45.581,30.9-75.93,0-56.72-44.431-101.152-101.152-101.152h-.286A100.98,100.98,0,0,0,325.585,299.387v.565c0,29.721,11.258,57.394,30.889,75.925.994.939,2.027,1.906,3.088,2.9,14.8,13.858,35.074,32.837,35.074,53.527v17.262a2.423,2.423,0,1,1-4.846,0V432.3c0-18.588-19.384-36.737-33.54-49.993q-1.6-1.5-3.1-2.912c-20.6-19.442-32.408-48.4-32.408-79.444v-.582A105.836,105.836,0,0,1,426.444,193.955h.3A105.444,105.444,0,0,1,532.735,298.849q0,.553,0,1.107c0,31.7-11.2,59.172-32.4,79.433-1.138,1.088-2.323,2.21-3.542,3.364-13.972,13.227-33.114,31.342-33.114,49.549v17.263a2.423,2.423,0,0,1-2.423,2.423Z"
                  transform="translate(-280.964 -87.325)"
                  fill="#3f3d56"
                />
                <path
                  id="Path_2547"
                  data-name="Path 2547"
                  d="M468.555,550.012H422.519a4.038,4.038,0,1,1,0-8.076h46.036a4.038,4.038,0,1,1,0,8.076Z"
                  transform="translate(-299.765 -154.26)"
                  fill="#0d6ede"
                />
                <path
                  id="Tracciato_66"
                  data-name="Tracciato 66"
                  d="M453.157,583.76H443.25a18.936,18.936,0,0,1-9.768-2.706,2.256,2.256,0,0,1-1.024-2.6,2.331,2.331,0,0,1,2.263-1.73h26.966a2.331,2.331,0,0,1,2.263,1.73,2.256,2.256,0,0,1-1.025,2.6,18.934,18.934,0,0,1-9.768,2.706Z"
                  transform="translate(-302.435 -160.952)"
                  fill="#3f3d56"
                />
                <path
                  id="Tracciato_67"
                  data-name="Tracciato 67"
                  d="M469.4,566.518l-46.309-.005-.143-.308a3.817,3.817,0,0,1,.727-3.278,3.922,3.922,0,0,1,3.088-1.493h39.218a3.921,3.921,0,0,1,3.088,1.493,3.8,3.8,0,0,1,.736,3.237l-.073.312Z"
                  transform="translate(-300.604 -158.01)"
                  fill="#3f3d56"
                />
                <path
                  id="Path_2548"
                  data-name="Path 2548"
                  d="M310.16,198.209a4.022,4.022,0,0,1-2.654-1l-34.68-30.272a4.038,4.038,0,1,1,5.311-6.084l34.68,30.272a4.038,4.038,0,0,1-2.657,7.081Z"
                  transform="translate(-271.482 -80.767)"
                  fill="#e4e4e4"
                />
                <path
                  id="Path_2549"
                  data-name="Path 2549"
                  d="M576.5,198.208a4.038,4.038,0,0,1-2.657-7.081l34.679-30.274a4.038,4.038,0,1,1,5.311,6.084l-34.68,30.271a4.022,4.022,0,0,1-2.653,1Z"
                  transform="translate(-329.382 -80.767)"
                  fill="#e4e4e4"
                />
                <path
                  id="Path_2550"
                  data-name="Path 2550"
                  d="M477.321,532.266H408.267a4.038,4.038,0,1,1,0-8.076h69.054a4.038,4.038,0,1,1,0,8.076Z"
                  transform="translate(-297.023 -150.846)"
                  fill="#0d6ede"
                />
                <path
                  id="Tracciato_68"
                  data-name="Tracciato 68"
                  d="M444.508,402.45l-14.36,86.314h-8.2l14.586-87.638a4.04,4.04,0,1,1,7.971,1.325Z"
                  transform="translate(-300.432 -126.525)"
                  fill="#e6e6e6"
                />
                <path
                  id="Tracciato_69"
                  data-name="Tracciato 69"
                  d="M478.664,488.763h-8.2l-14.36-86.314a4.04,4.04,0,1,1,7.971-1.325Z"
                  transform="translate(-306.991 -126.525)"
                  fill="#e6e6e6"
                />
                <path
                  id="Path_2551"
                  data-name="Path 2551"
                  d="M419.485,399.038A4.038,4.038,0,0,1,423.523,395h44.415a4.038,4.038,0,0,1,0,8.077H423.523A4.038,4.038,0,0,1,419.485,399.038Z"
                  transform="translate(-299.958 -125.996)"
                  fill="#e6e6e6"
                />
                <path
                  id="Path_2553"
                  data-name="Path 2553"
                  d="M451.019,139.062a4.038,4.038,0,0,1-4.038-4.038V65.969a4.038,4.038,0,0,1,8.077,0v69.054a4.038,4.038,0,0,1-4.038,4.038Z"
                  transform="translate(-305.247 -61.931)"
                  fill="#e4e4e4"
                />
                <path
                  id="Path_2559"
                  data-name="Path 2559"
                  d="M857.221,814.984h-9.9l-4.71-38.192h14.612Z"
                  transform="translate(-381.346 -199.434)"
                  fill="#feb8b8"
                />
                <path
                  id="Path_2560"
                  data-name="Path 2560"
                  d="M856.224,832.908H824.3v-.4a12.427,12.427,0,0,1,12.425-12.427h19.5Z"
                  transform="translate(-377.823 -207.76)"
                  fill="#2f2e41"
                />
                <path
                  id="Path_2561"
                  data-name="Path 2561"
                  d="M765.286,813.99l-9.566-2.558,5.314-38.113,14.118,3.775Z"
                  transform="translate(-364.633 -198.766)"
                  fill="#feb8b8"
                />
                <path
                  id="Path_2562"
                  data-name="Path 2562"
                  d="M760.169,831.711l-30.843-8.248.1-.39a12.427,12.427,0,0,1,15.215-8.8h0l18.838,5.037Z"
                  transform="translate(-359.556 -206.563)"
                  fill="#2f2e41"
                />
                <path
                  id="Path_2563"
                  data-name="Path 2563"
                  d="M844.764,559.068l8.294,9.636L842.332,764.512H819.42L807.871,613.844,772.052,768.553l-23.819-5.842,21.658-196.5Z"
                  transform="translate(-363.193 -157.555)"
                  fill="#2f2e41"
                />
                <path
                  id="Path_2564"
                  data-name="Path 2564"
                  d="M779.667,399.817l22.813-11.446,35.082.617,30.19,15.448-17.177,85.786,7.42,44.728h0a182.959,182.959,0,0,1-87.5.721l-.229-.055s17.053-60.506,9.794-78.971Z"
                  transform="translate(-367.431 -124.721)"
                  fill="#e6e6e6"
                />
                <path
                  id="Path_2565"
                  data-name="Path 2565"
                  d="M851.313,339.8a25.84,25.84,0,1,0,0,.191Z"
                  transform="translate(-373.079 -110.427)"
                  fill="#feb8b8"
                />
                <path
                  id="Path_2567"
                  data-name="Path 2567"
                  d="M777.85,476.949a9.257,9.257,0,0,0,13.447,4.545l46.321,24.486,1.5-11.284-45.01-26.542a9.307,9.307,0,0,0-16.259,8.794Z"
                  transform="translate(-368.763 -139.309)"
                  fill="#feb8b8"
                />
                <path
                  id="Path_2568"
                  data-name="Path 2568"
                  d="M839.033,478.933a9.257,9.257,0,0,1-14.116,1.493l-50.559,13.758.44-14.326L825.091,466.8a9.307,9.307,0,0,1,13.941,12.139Z"
                  transform="translate(-368.218 -139.343)"
                  fill="#feb8b8"
                />
                <path
                  id="Path_2569"
                  data-name="Path 2569"
                  d="M868.5,408.883l9.857-.618s11.541,15.228,5.14,31.754c0,0,1.109,59.362-24.452,56.923s-33.639-2.438-33.639-2.438l7.673-21.4,17.165-5.3s-5.29-23.336,4.724-33.046Z"
                  transform="translate(-378.037 -128.548)"
                  fill="#e6e6e6"
                />
                <path
                  id="Path_2570"
                  data-name="Path 2570"
                  d="M782.455,406.684l-1.393-7.142s-20.547-.485-24.609,30.651c0,0-18.477,46.595-.367,52.595s38.031,0,38.031,0l-1.5-20.55-19.925-4.065s10.293-13.317,4.688-24.869Z"
                  transform="translate(-363.173 -126.87)"
                  fill="#e6e6e6"
                />
                <path
                  id="Path_2387"
                  data-name="Path 2387"
                  d="M834.129,350.753c-1.9-.746-4.005-.707-6.013-1.075a15.315,15.315,0,0,1-12.04-15.918,8.764,8.764,0,0,0,.047-2.853c-.5-2.075-2.8-3.188-4.922-3.437s-4.307.069-6.368-.482a9.5,9.5,0,0,1-6.365-6.948,15.739,15.739,0,0,1,1.023-9.662l.989,2.061a8.01,8.01,0,0,0,2.024-3.919,5.052,5.052,0,0,1,4.173,2.643c1.277.57,1.121-2.347,2.394-2.924a2.39,2.39,0,0,1,1.7.221c2.8.941,5.779-.471,8.559-1.483a32.643,32.643,0,0,1,15.056-1.72,18.165,18.165,0,0,1,9.417,3.569,21.487,21.487,0,0,1,4.972,6.682c3.244,6.064,5.688,12.754,5.622,19.634a28.508,28.508,0,0,1-4.979,15.765c-1.657,2.411-7.01,10.776-10.568,9.856C834.376,359.606,839.48,352.851,834.129,350.753Z"
                  transform="translate(-372.79 -108.688)"
                  fill="#2f2e41"
                />
              </g>
            </svg>
          </div>
          <div className="relative w-full mt-16">
            <p className="z-[-1] absolute left-[30%] translate-x-[-50%] translate-y-[-50%] text-10xl font-bold opacity-5 select-none">
              CREATIVE
            </p>
            <h3 className="text-4.5xl font-semibold mb-12">My Interests</h3>
            <div className="grid grid-cols-4 gap-16">
              <InterestCard
                title="Coding"
                content="I am passionate about learning new programming languages, how they work, their diversity and strengths. My interest expanded to gaining basic knowledge in Machine Learning and Data Science."
                img="Coding.png"
              />
              <InterestCard
                title="Design"
                content="In recent years I became more and more interested in the world of design. I learned how to use Photoshop and Illustrator while applying the skills learned in projects and the creation of this website. I additionally followed courses in logo and illustration creation and UI & UX Design."
                img="Design.png"
              />
              <InterestCard
                title="Crypto"
                content="In recent times I got more and more interested in cryptocurrency. I studied the characteristics of Defi and Cefi and, more specifically, the functioning and code behind smart contracts. With the expertise gained, I developed Web Applications that interact with Blockchains."
                img="Crypto.png"
              />
              <InterestCard
                title="Gaming"
                content="In my free time, I enjoy playing collaborative computer games. In particular, playing puzzles which require the coordination and mutual effort of six players to reach the goal. I have been often involved in the creation of strategies and management of the rest of my team."
                img="Gaming.png"
              />
            </div>
          </div>
        </section>
      </div>

      {/* CTA */}
      <section className="flex flex-col self-stretch">
        <svg
          className="mb-[-1px] w-full"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 2063.809 212.358"
        >
          <path
            d="M0,90.545l68.794-8.876c68.794-8.544,206.381-26.794,343.968-8.793,137.587,17.669,275.175,70.758,412.762,84.031s275.175-13.272,412.762-13.272,275.175,26.545,412.762,17.669c137.587-8.544,275.174-53.338,343.968-75.155L2063.809,64V276.358H0Z"
            transform="translate(0 -64)"
            fill="#0d6ede"
          />
        </svg>
        <div className="bg-blue flex flex-col items-center relative text-white pb-20">
          <p className="absolute left-[50%] translate-x-[-50%] translate-y-[-30%] text-10xl font-bold opacity-10 select-none whitespace-nowrap">
            GET IN TOUCH
          </p>
          <h2 className="z-10 text-4.5xl font-semibold mb-12">
            Interested to work with me?
          </h2>
          <div className="z-10 flex items-center gap-20">
            <div className="cursor-pointer font-semibold text-sm uppercase py-3 px-8 border-white border-2 text-white rounded-xl hover:shadow-inner-custom transition-transform duration-100 ease-in">
              Contact
            </div>
            <a
              className="flex gap-4 items-center cursor-pointer py-3 px-8 group hover:drop-shadow-[0_1px_25px_rgba(255,255,255,0.5)]"
              href="/Zini_Emanuele_English.pdf"
              download="Emanuele Zini CV"
            >
              <svg
                className="w-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 760.07 1000"
              >
                <path
                  d="M640,247.54H867.52A12.38,12.38,0,0,0,880,235.31V235h0a74,74,0,0,0-26.74-57.24l-190.86-159A80.26,80.26,0,0,0,611,.25h0a18.46,18.46,0,0,0-18.49,18.42v181.4a47.47,47.47,0,0,0,47.47,47.47Z"
                  transform="translate(-119.96)"
                  fill="#fff"
                ></path>
                <path
                  d="M527.43,200V0H200a80.25,80.25,0,0,0-80,80V920a80.25,80.25,0,0,0,80,80H800a80.24,80.24,0,0,0,80-80V312.5H640A112.68,112.68,0,0,1,527.43,200Z"
                  transform="translate(-119.96)"
                  fill="#fff"
                ></path>
              </svg>
              <div className="font-semibold text-lg group-hover:underline-offset-2 group-hover:underline ">
                Resume
              </div>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
