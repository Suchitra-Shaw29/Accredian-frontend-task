import ContentWrapper from "../components/content-wrapper";
import Footer from "../components/footer";
import FrameComponent1 from "../components/frame-component1";
import FrameComponent from "../components/frame-component";
import FAQContainer from "../components/f-a-q-container";
import Background from "../components/background";

const ReferEarnPage = () => {
  return (
    <div className="w-full relative bg-homeaccrediancom-nero overflow-hidden flex flex-col items-end justify-start pt-0 px-0 pb-[0.1px] box-border leading-[normal] tracking-[normal] text-left text-base-9 text-homeaccrediancom-mine-shaft1 font-inter">
      <div className="self-stretch bg-homeaccrediancom-nero flex flex-col items-start justify-start max-w-full">
        <div className="self-stretch bg-homeaccrediancom-royal-blue-15 flex flex-row items-center justify-center py-4 px-5 box-border max-w-full">
          <div className="flex flex-row items-center justify-start gap-[11px] max-w-full mq900:flex-wrap">
            <div className="relative leading-[28px] font-medium inline-block max-w-full">
              Navigate your ideal career path with tailored expert advice
            </div>
            <div className="flex flex-col items-start justify-start py-0 px-2 text-center text-mid text-homeaccrediancom-royal-blue">
              <div className="flex flex-col items-center justify-start">
                <a className="[text-decoration:none] relative leading-[28px] capitalize font-medium text-[inherit] inline-block min-w-[123px]">
                  contact expert
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ContentWrapper />
      <Footer />
      <FrameComponent1 />
      <div className="w-0.5 h-[553px] absolute !m-[0] right-[731px] bottom-[1951px] box-border z-[2] border-r-[2px] border-solid border-gray-200" />
      <div className="w-0.5 h-[554px] absolute !m-[0] right-[529px] bottom-[1950px] box-border z-[2] border-r-[2px] border-solid border-gray-200" />
      <FrameComponent />
      <FAQContainer />
      <Background />
    </div>
  );
};

export default ReferEarnPage;
