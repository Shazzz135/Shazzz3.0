import React from "react";

const Services: React.FC = () => {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen px-4" style={{ backgroundColor: 'transparent' }}>
      <h1
        className="text-4xl font-bold mb-4"
        style={{
          animation: "colorPulse 3s infinite",
          color: "#32004f",
          display: "inline-block"
        }}
      >
        Services
      </h1>
      <p className="text-lg text-gray-300 max-w-xl text-center">
        Creating a Start-up?{" "}
        <a
          href="#contact"
          className="text-[#dfa2e3] underline hover:text-[#5b048a] transition-colors"
          onClick={e => {
            e.preventDefault();
            const mainElement = document.querySelector('main');
            if (mainElement) {
              const pageDivs = mainElement.children;
              if (pageDivs[5]) {
                (pageDivs[5] as HTMLElement).scrollIntoView({
                  behavior: 'smooth',
                  block: 'start'
                });
              }
            }
          }}
        >
          Contact Me
        </a>{" "}
        if you are interested!
      </p>
      {/* Pricing Chart */}
      <div className="mt-8 w-full max-w-2xl">
        <table className="w-full text-left border border-[#5b048a] rounded-lg overflow-hidden">
          <thead className="bg-transparent">
            <tr>
              <th className="px-4 py-2 text-white border border-[#5b048a]">Package</th>
              <th className="px-4 py-2 text-white border border-[#5b048a]">Features</th>
              <th className="px-4 py-2 text-white border border-[#5b048a]">Price</th>
            </tr>
          </thead>
          <tbody className="bg-transparent">
            <tr>
              <td className="px-4 py-2 text-[#dfa2e3] font-semibold border border-[#5b048a]">Starter</td>
              <td className="px-4 py-2 text-gray-300 border border-[#5b048a]">
                • Single page<br />
                • Plain Style<br />
                • 2 Social links<br />
                • Contacts & Order Form
              </td>
              <td className="px-4 py-2 text-green-400 font-bold border border-[#5b048a]">$150</td>
            </tr>
            <tr>
              <td colSpan={3} className="border-t border-[#5b048a] my-2"></td>
            </tr>
            <tr>
              <td className="px-4 py-2 text-[#dfa2e3] font-semibold border border-[#5b048a]">Growth</td>
              <td className="px-4 py-2 text-gray-300 border border-[#5b048a]">
                • Up to 3 pages<br />
                • Responsive / Single UI Effect <br />
                • 3 Social links<br />
                • Contacts & Order Form
              </td>
              <td className="px-4 py-2 text-green-400 font-bold border border-[#5b048a]">$250</td>
            </tr>
            <tr>
              <td colSpan={3} className="border-t border-[#5b048a] my-2"></td>
            </tr>
            <tr>
              <td className="px-4 py-2 text-[#dfa2e3] font-semibold border border-[#5b048a]">Advanced</td>
              <td className="px-4 py-2 text-gray-300 border border-[#5b048a]">
                • 5-7 pages<br />
                • Responsive / Multiple UI Effects / Audio<br />
                • 5 Social links<br />
                • Contacts & Order Form
              </td>
              <td className="px-4 py-2 text-green-400 font-bold border border-[#5b048a]">$400</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Services;
