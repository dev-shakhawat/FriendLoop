import React from "react";
import colorSchema from "../colors/colorSchema";

export const Terms = () => {
  const color = colorSchema();

  const termsArr = [
    {
      id: 1,
      title: "User Responsibilities",
      list: [
        "You must be 13 years or older to use Friendloop.",
        "All information, content, or media you post must be truthful, legal, and respectful of others.",
        "You may not impersonate someone else or misrepresent your identity.",
      ],
    },
    {
      id: 2,
      title: "Acceptable Use",
      subt: "You are strictly prohibited from posting",
      subt2: "Attempting to hack, scrape data, or compromise the platform’s security may result in permanent account suspension.",
      list: [
        "Hate speech",
        "Abusive or offensive language",
        "Nudity or explicit content.",
        "Violent or threatening posts",
        "Spam or misleading links",
      ],
    },
    {
      id: 3,
      title: "Content Ownership & Rights",
      list: [
        "You own the content you create and post on Friendloop.",
        "However, by posting, you grant us a non-exclusive license to use, display, and share your content to operate and improve the platform.",
        "We reserve the right to remove or edit any content that violates our community standards."
      ],
    },
    {
      id: 4,
      title: "Privacy & Data Protection",
      list: [
        "Your personal information is protected under our [Privacy Policy].",
        "We do not sell your data. Any sharing with third parties will be done only with your consent or as required by law.",
      ]
    },
    {
      id: 5,
      title: "Account Suspension or Termination",
      subt: "Violation of these terms, including harassment or harmful behavior toward others, can lead to",
      list: [
        "Warning",
        "Temporary suspension",
        "Permanent account ban without notice",
      ]
    },
    {
      id: 6,
      title: "Limitation of Liability",
      list: [
        "Friendloop is provided “as-is.” We are not liable for any direct or indirect damages resulting from use of the platform.",
        "While we strive to keep the platform running smoothly, we are not responsible for outages or data loss due to technical issues.",
      ]
    },
    {
      id: 7,
      title: "Changes to Terms",
      list: [
        "These Terms of Use may be updated from time to time.",
        "Continued use of Friendloop after changes means you accept the updated terms.",
        "The latest version will always be available on this page.",
      ]
    },
  ];
  return (
    <div className={`grid place-items-center py-10 ${color.bg}  `}>
      <div className="lg:w-3/4 w-11/12 ">
        <h2
          className={` font-ubuntu font-bold lg:text-3xl text-[22px] text-center ${color.brand} `}
        >
          Terms of Use
        </h2>
        <h4
          className={` font-ubuntu font-bold lg:text-lg text-[20px] mt-5 text-center ${color.brand} `}
        >
          Welcome to Friendloop
        </h4>

        <h6 className={`font-opensans font-semibold ${color.txt} text-sm   `}>
          Last Updated: [Insert Date]
        </h6>
        <p className={`font-opensans mt-1 ${color.txt} text-base  `}>
          Welcome again to Friendloop – your space to connect, share, and loop
          in with friends! By accessing or using Friendloop, you agree to abide
          by the following Terms of Use. Please read them carefully.
        </p>

        <div className=" mt-5 flex flex-col gap-5 ">
          {termsArr.map((term )=>(
            <div className="" key={term.id}>
              <h3 className={`font-ubuntu font-semibold ${color.txt}  `}>{term.id}. {term.title}</h3>
              {term.subt && <li className={`font-opensans ${color.txt}  `}>{term.subt}:</li>}
              <ul className="ml-12">
                {term.list.map((list , index)=>(<li key={index} className={`font-opensans ${color.txt}   list-disc  `}>{list}</li>))}
              </ul>
              {term.subt2 && <li className={`font-opensans ${color.txt}  `}>{term.subt2}</li>}
              
            </div>

          ))}
        </div>

        <div className="mt-5">
          <p className={`font-opensans ${color.txt}  `}>
            If you do not agree with any part of these Terms, please refrain from using Friendloop. <br/>
            Thank you for being a part of the Friendloop community!  <br/>
            – The Friendloop Team
          </p>

        </div>
      </div>
    </div>
  );
};
