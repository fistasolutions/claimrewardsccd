"use client";
import { Check } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import Skeleton from "../components/Skeleton";
import BackButton from "./BackButton";
export default function ProofOfEligibility() {
  const ProgressStep = ({
    number,
    active,
  }: {
    number: number;
    active: boolean;
  }) => (
    <div className="flex items-center">
      <div
        className={`w-6 h-6 rounded-full flex items-center justify-center text-xs ${
          active
            ? number === 2
              ? "bg-[#ece2cd] text-black" // Step 2 color when active
              : number === 3
              ? "bg-[#b6ade6] text-black" // Step 3 color when active
              : "bg-[#a7f2ec] text-black" // Default active color for other steps
            : "bg-[#7a7a7a] text-black" // Inactive color
        }`}
      >
        {number}
      </div>
      {number < 3 && (
        <div
          className={`h-[2px] w-12 sm:w-24 md:w-32 ${
            active
              ? number === 2
                ? "bg-[#ece2cd]"
                : number === 3
                ? "bg-[#a7f2ec]" // Step 3 line color when active
                : "bg-[#a7f2ec]"
              : "bg-[#7a7a7a]"
          }`}
        ></div>
      )}
    </div>
  );
  
  const [verifyProgress, setVerifyProgress] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleVerify = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setVerifyProgress(true);
    }, 1000);
  };
  return (
    <div className="min-h-screen bg-[#14181D] text-gray-100  flex flex-col">
      {isLoading ? (
        ""
      ) : (
        <span>
          <BackButton />
        </span>
      )}
      {isLoading ? (
        <Skeleton />
      ) : (
        <main className="flex-grow pt-[64px] flex flex-col max-w-[339px] items-center  mx-auto ">
          <div className="flex justify-center w-full ">
            <ProgressStep number={1} active={true} />
            <ProgressStep number={2} active={true} />
            <ProgressStep number={3} active={true} />
          </div>

          <h1 className="text-[24px] font-medium font-[family-name:var(--font-satoshi-sans)]  mt-[32px]">
            Proof of eligibility
          </h1>
          <div className="h-[65vh] flex flex-col justify-between mt-[32px]  ">
            {verifyProgress ? (
              <>
                <div className="w-[339px] space-y-2">
                  <div className="">
                    <p className="text-[12px] font-medium font-[family-name:var(--font-satoshi-sans)] text-gray-400 ">
                      User name
                    </p>
                    <p className="border-b border-white text-[16px] font-medium font-[family-name:var(--font-satoshi-sans)]">
                      John Douglas
                    </p>
                  </div>

                  <div>
                    <p className="text-[12px] font-medium font-[family-name:var(--font-satoshi-sans)] text-gray-400 ">
                      Passport number
                    </p>
                    <p className="text-[16px] font-medium font-[family-name:var(--font-satoshi-sans)]   border-b border-white">
                      US991298
                    </p>
                  </div>

                  <div>
                    <p className="text-[12px] font-medium font-[family-name:var(--font-satoshi-sans)]   text-gray-400">
                      Age
                    </p>
                    <div className="flex items-center border-b border-white">
                      <Check size={20} className="text-green-500 mr-2" />
                      <p className="text-[16px] font-medium font-[family-name:var(--font-satoshi-sans)]   ">
                        Over 18 years old
                      </p>
                    </div>
                  </div>

                  <div>
                    <p className="text-[12px] font-medium font-[family-name:var(--font-satoshi-sans)]   text-gray-400">
                      Your country
                    </p>
                    <div className="flex items-center border-b border-white">
                      <Check size={20} className="text-green-500 mr-2" />
                      <p className="text-[16px] font-medium font-[family-name:var(--font-satoshi-sans)]  ">
                        Eligible nationality
                      </p>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <div className="w-full ">
                <p className="text-gray-300 text-[12px] font-normal font-[family-name:var(--font-satoshi-sans)] mb-[8px]">
                  To collect your reward, you must verify the below data
                  <br /> using your ConcordiumID.
                </p>

                <ul className="space-y-2 text-gray-300 ">
                  <li className="flex items-center  border-gray-400 py-[4px] border-b-[1px] text-[12px] font-normal font-[family-name:var(--font-satoshi-sans)]  ">
                    <span className="w-1 h-1 bg-gray-400 rounded-full  text-[12px] font-normal mr-[4px]"></span>
                    Your full name
                  </li>
                  <li className="flex items-center  border-gray-400 py-[4px] border-b-[1px] mb-2 text-[12px] font-normal font-[family-name:var(--font-satoshi-sans)]">
                    <span className="w-1 h-1 bg-gray-400 rounded-full text-[12px] mr-[4px] font-normal"></span>
                    Your ID number
                  </li>
                  <li className="flex items-center  border-gray-400 py-[4px] border-b-[1px] mb-2 text-[12px] font-normal font-[family-name:var(--font-satoshi-sans)]">
                    <span className="w-1 h-1 bg-gray-400 rounded-full text-[12px] mr-[4px] font-normal"></span>
                    That you are over 18 years old
                  </li>
                  <li className="flex items-center  border-gray-400 py-[4px]  border-b-[1px] mb-2 text-[12px] font-normal font-[family-name:var(--font-satoshi-sans)]">
                    <span className="w-1 h-1 bg-gray-400 rounded-full text-[12px] mr-[4px] font-normal"></span>
                    That your nationality is eligible *
                  </li>
                </ul>

                <p className="text-[12px] font-normal pt-[29px] text-gray-400 font-[family-name:var(--font-satoshi-sans)]">
                  * Not eligible nationalities are: USA, Iran, North Korea,
                  occupied regions of Ukraine.
                </p>
              </div>
            )}

            {verifyProgress ? (
              <Link href={"/eligibility"}>
                <button className="bg-white text-gray-900 font-semibold py-3 px-6 rounded-full hover:bg-gray-200 transition-colors w-full max-w-xs ">
                  Finish
                </button>
              </Link>
            ) : (
              <button
                onClick={() => {
                  setVerifyProgress(true);
                  handleVerify();
                }}
                className="bg-white text-gray-900 font-semibold py-3 px-6 rounded-full hover:bg-gray-200 transition-colors w-full max-w-xs "
              >
                Verify
              </button>
            )}
          </div>
        </main>
      )}
    </div>
  );
}
