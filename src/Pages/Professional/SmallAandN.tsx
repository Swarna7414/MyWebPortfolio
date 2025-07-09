import React, { useState } from "react";
import { TbPoint } from "react-icons/tb";

const AndN: React.FC = () => {
  const [activeTab, setActiveTab] = useState("awards");

  const Awards: string[] = [
    "Recognized among world’s top 2% scientists by Stanford and Elsevier for biomedical AI research excellence.",
    "Honored as a 2024 Top Scholar by ScholarGPS, ranking in the top 0.5% globally.",
    "Ranked #51 in Image Segmentation and #1,201 in Medical Imaging by ScholarGPS in 2024.",
    "Our work “DiffBoost” was accepted in IEEE TMI, showcasing innovations in medical segmentation.",
    "Our Kvasir-SEG dataset was featured in Stanford's AI Index Report 2022 for global relevance.",
    "Received the Best Industry-Related Paper Award at ICPR 2024 from IAPR organization.",
    "Elevated to IEEE Senior Member for sustained excellence and contributions in biomedical artificial intelligence.",
    "Serving as Associate Editor for Medical Physics and Frontiers in Radiation Oncology journals.",
    "Guest Editor for two special issues focusing on AI in medical imaging and gastroenterology.",
    "Awarded IEEE Chicago’s Junior Distinguished R&D Award in both 2022 and 2024 for research impact.",
    "Received the NSF I-Corps 2025 award and Spring 2025 USD A&S Development Grant.",
    "Won Poster of Distinction at DDW 2024 for outstanding scientific presentation in medical research.",
    "Honored with the “Papers With Code” Contributor Award for promoting reproducible research practices.",
    "Three papers accepted at ICASSP 2025 and three more accepted at IEEE CVF WACV 2025.",
    "Five papers presented at MICCAI 2024 and two accepted at CVPR Workshop the same year.",
    "One MICCAI 2022 paper accepted, with Student Travel Award granted for co-authored contribution.",
    "Finalist for Best Student Paper at CBMS 2020 held at Mayo Clinic, Rochester, USA.",
    "Earned Best Paper and Poster Presentation Awards at ICEIC 2018, Hawaii, USA.",
    "Honored with IEEE TMI Distinguished Reviewer Award (Silver Level) for 2023 to 2024 review contributions."
  ];

  const reviews = [
    {
      year: "2023",
      items: [
        "CBMS, 2023 (PC Member)",
        "ImageCLEF (Organizer)",
        "MICCAI, 2023 (Reviewer)"
      ]
    },
    {
      year: "2022",
      items: ["MICCAI, 2022 (Reviewer)"]
    },
    {
      year: "2021",
      items: [
        "MedAI: Transparency in Medical Image Segmentation (Challenge organizer)",
        "3rd International Endoscopy Computer Vision Workshop (WorkShop organizer)",
        "IEEE International Conference on Multimedia and Expo (ICME) 2021"
      ]
    },
    {
      year: "2020",
      items: [
        "IEEE 33rd International Symposium on Computer Based Medical Systems (CBMS)",
        "28th ACM International Conference on Multimedia",
        "26th International Conference on MultiMedia Modeling (MMM 2020)",
        "MediaEval Benchmarking Initiative for Multimedia Evaluation (Challenge organizer)",
        "25th International Conference on Pattern Recognition (Challenge organizer)",
        "2020 IEEE International Conference on Multimedia & Expo"
      ]
    },
    {
      year: "2019",
      items: [
        "ACM International Conference on Multimedia 2019 (ACMMM 2019)",
        "25th International Conference on MultiMedia Modeling (MMM 2019)",
        "IEEE Special Track on Deep Learning Applications in Medical Care 2019"
      ]
    },
    {
      year: "2018",
      items: [
        "ACM Multimedia Systems Conference 2018",
        "31st IEEE Symposium on Content Based Medical System (CBMS 2018)",
        "MediaEval Benchmarking Initiative for Multimedia Evaluation (MediaEval2018)",
        "27th ACM International Conference on Multimedia",
        "13th International Symposium on Medical Information and Communication"
      ]
    }
  ];

  return (
    <section className="p-6 px-12 h-screen pt-[82px] sm:p-8 md:p-10 lg:p-12 block lg:hidden">
      <div className="flex justify-center">
        <div className="inline-flex w-full max-w-md border border-black rounded-full overflow-hidden mb-2">
          <button
            className={`w-1/2 py-2 text-center font-semibold text-sm md:text-base transition-all ${
              activeTab === "awards"
                ? "bg-gray-400 text-black rounded-l-full"
                : "bg-gray-100 text-gray-600"
            }`}
            onClick={() => setActiveTab("awards")}
          >
            Milestones
          </button>
          <button
            className={`w-1/2 py-2 text-center font-semibold text-sm md:text-base transition-all ${
              activeTab === "reviews"
                ? "bg-gray-400 text-black rounded-r-full"
                : "bg-gray-100 text-gray-600"
            }`}
            onClick={() => setActiveTab("reviews")}
          >
            Conference Service
          </button>
        </div>
      </div>

      {activeTab === "awards" && (
        <div className="bg-gray-300 rounded-xl p-4 space-y-2 shadow-md">
          {Awards.map((award, index) => (
            <div key={index} className="flex gap-2 text-sm">
              <span className="text-blue-600 font-bold">{"\u276F"}</span>
              <span className="text-justify text-gray-800">{award}</span>
            </div>
          ))}
        </div>
      )}

      {activeTab === "reviews" && (
        <div className="bg-gray-300 rounded-xl p-4 space-y-5 shadow-md">
          {reviews.map((block, index) => (
            <div key={index}>
              <h2 className="text-blue-500 font-semibold text-base mb-1">{block.year}</h2>
              <ul className="ml-3 space-y-1 text-sm text-gray-800">
                {block.items.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-1">
                    <TbPoint className="mt-1" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default AndN;
