import { LayoutDashboard, Mail } from "lucide-react";
import FooterItem from "@/components/FooterItem";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-[100dvh] p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1 className="mx-auto text-4xl sm:text-6xl">PROTO MAP</h1>
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <div className="flex flex-col gap-4">
          <p className="max-w-lg text-justify">
            <span className="font-bold">Protomap</span> is your starting point
            for building better websites, faster. It helps you{" "}
            <span className="font-bold">
              plan and build the prototype, structure your folders and files,
            </span>{" "}
            and{" "}
            <span className="font-bold">name everything properly — before</span>{" "}
            you even start coding.
          </p>
          <p className="max-w-lg text-justify">
            No more wasting time wondering where to place files or how to
            organize your project. With Protomap, you can map out your entire
            project structure with clarity and confidence.
          </p>
          <p className="max-w-lg text-justify">
            {" "}
            Start organized. Build faster.
          </p>
        </div>
        <a
          className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto mx-auto"
          href="/dashboard"
        >
          <LayoutDashboard />
          Dashboard
        </a>
      </main>
      <footer className="row-start-3 flex gap-x-[24px] gap-y-2 flex-wrap items-center justify-center">
        <FooterItem
          href="https://www.linkedin.com/in/raihan-ramadhan-baab69227/"
          ariaLabel="Go to my Linkedin Profile"
          className="order-1"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="100"
            height="100"
            viewBox="0 0 30 30"
          >
            <path d="M24,4H6C4.895,4,4,4.895,4,6v18c0,1.105,0.895,2,2,2h18c1.105,0,2-0.895,2-2V6C26,4.895,25.105,4,24,4z M10.954,22h-2.95 v-9.492h2.95V22z M9.449,11.151c-0.951,0-1.72-0.771-1.72-1.72c0-0.949,0.77-1.719,1.72-1.719c0.948,0,1.719,0.771,1.719,1.719 C11.168,10.38,10.397,11.151,9.449,11.151z M22.004,22h-2.948v-4.616c0-1.101-0.02-2.517-1.533-2.517 c-1.535,0-1.771,1.199-1.771,2.437V22h-2.948v-9.492h2.83v1.297h0.04c0.394-0.746,1.356-1.533,2.791-1.533 c2.987,0,3.539,1.966,3.539,4.522V22z" />
          </svg>
          <span>Find Me on Linkedin</span>
        </FooterItem>
        <FooterItem
          href={"mailto:raihanramadhan.rn22@gmail.com"}
          ariaLabel="Send me a mail"
          className="order-2 max-[400px]:order-3"
        >
          <Mail className="fill-transparent p-0.5" />
          <span>Mail Me</span>
        </FooterItem>
        <FooterItem
          href="https://github.com/raihan-ramadhan/protomap"
          ariaLabel="Go to my Github Profile"
          className="order-3 max-[400px]:order-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="100"
            height="100"
            viewBox="0 0 24 24"
          >
            <path d="M10.9,2.1c-4.6,0.5-8.3,4.2-8.8,8.7c-0.5,4.7,2.2,8.9,6.3,10.5C8.7,21.4,9,21.2,9,20.8v-1.6c0,0-0.4,0.1-0.9,0.1 c-1.4,0-2-1.2-2.1-1.9c-0.1-0.4-0.3-0.7-0.6-1C5.1,16.3,5,16.3,5,16.2C5,16,5.3,16,5.4,16c0.6,0,1.1,0.7,1.3,1c0.5,0.8,1.1,1,1.4,1 c0.4,0,0.7-0.1,0.9-0.2c0.1-0.7,0.4-1.4,1-1.8c-2.3-0.5-4-1.8-4-4c0-1.1,0.5-2.2,1.2-3C7.1,8.8,7,8.3,7,7.6C7,7.2,7,6.6,7.3,6 c0,0,1.4,0,2.8,1.3C10.6,7.1,11.3,7,12,7s1.4,0.1,2,0.3C15.3,6,16.8,6,16.8,6C17,6.6,17,7.2,17,7.6c0,0.8-0.1,1.2-0.2,1.4 c0.7,0.8,1.2,1.8,1.2,3c0,2.2-1.7,3.5-4,4c0.6,0.5,1,1.4,1,2.3v2.6c0,0.3,0.3,0.6,0.7,0.5c3.7-1.5,6.3-5.1,6.3-9.3 C22,6.1,16.9,1.4,10.9,2.1z" />
          </svg>
          <span>Give star on Github</span>
        </FooterItem>
      </footer>
    </div>
  );
}
