import { IoLocation } from "react-icons/io5";
import { RiSlideshow4Line } from "react-icons/ri";
import sandford from "../assets/Talks/sanford.png";
import IItRorke from "../assets/Talks/𝗜𝗜𝗧𝗥𝗼𝗼𝗿𝗸𝗲𝗲.png"
import MNIT1 from "../assets/Talks/MNIT1.png"
import MNIT2 from "../assets/Talks/MNIT2.png"
import BeyondHuman from "../assets/Talks/BeyondHuman.jpg";
import TransformingMedicalAi from "../assets/Talks/TransformingMedicalAi.png"
import Biospy from "../assets/Talks/Biopsy.jpg"
import future from "../assets/Talks/Future.jpg"
import First from "../assets/Talks/FirstTalk.png";

const Talks:React.FC=()=>{
    const talksData = [
        {
            title: "From Data to Diagnosis – Advancing Medical Imaging with Curated Dataset and AI Algorithms.",
            location: "Stanford MedAI, 2025",
            image: sandford,
            description:"In this talk, I shared how we tackle diagnostic challenges in medical imaging—like data scarcity and bias—through curated datasets and advanced segmentation models. We developed diverse datasets (CirrMRI600+, PolypGen, Kvasir-SEG) and architectures (ResUNet++, ColonSegNet, TransNetR) to enhance diagnostic precision. By aligning deep learning with clinical needs, our approach enables generalizable, AI-powered solutions that support radiologists and improve outcomes across radiology, GI endoscopy, and video capsule diagnostics.",
        },
        {
            title: "Explainable Transformers and Mamba Models for Medical Image Interpretation",
            location: "IIT Roorkee, 2025",
            image: IItRorke,
            description: 'I had the honor of presenting " Explainable Transformers and Mamba Models for Medical Image Interpretation" at the FDP on Explainable AI in Healthcare, organized by IIT Roorkee & UPES. I shared insights on transformer-based models, real-world radiology applications, and challenges in building trustworthy clinical AI. Grateful to the organizers and 41+ participants for the engaging discussions on ethical, transparent AI in medicine.',
        },
        {
            title: "Revealing the Unseen: Deep Learning for Clinically Silent Patterns in Radiology",
            location: "MNIT Jaipur, 2025",
            image: MNIT1,
            description:"I discussed how AI can uncover hidden anomalies in radiological images, particularly in liver tumors and complex abdominal cases. The session focused on deep learning’s ability to detect subtle, clinically silent patterns often missed by human observers, highlighting its transformative role in early diagnosis and decision-making. This work emphasizes AI’s growing potential in surfacing critical findings in medical imaging.",
        },
        {
            title: "Reducing Miss Rates in GI Endoscopy: A Data-Centric AI Approach",
            location: "MNIT Jaipur, 2025",
            image: MNIT2,
            description: "I presented how curated datasets and strong benchmarking play a crucial role in detecting overlooked gastrointestinal (GI) pathologies. Emphasizing deep learning, the talk focused on minimizing miss rates in GI endoscopy through data-centric AI strategies that enhance model reliability and clinical relevance. This approach highlights the power of well-designed datasets in driving meaningful improvements in diagnostic accuracy",
        },
        {
            title: "Beyond Human Vision: Transforming Radiology and GI Endoscopy with AI",
            location: "Brown Bag Series, University of South Dakota, 2024",
            image: BeyondHuman,
            description: "In this talk, I explored how AI is revolutionizing radiology and GI endoscopy by enhancing diagnostic accuracy and efficiency. I showcased advanced deep learning techniques for disease detection, segmentation, and classification, highlighting their ability to outperform human vision.I also addressed key ethical and practical challenges in clinical AI adoption, emphasizing the path toward more intelligent and trustworthy healthcare solutions.",
        },
        {
            title: "Transforming Medical AI: Advancing Deep Learning for Precision Diagnosis & Image Segmentation",
            location: "City University of New York, College of Staten Island, 2024",
            image: TransformingMedicalAi,
            description: "In this talk, I shared my research on AI-driven advances in medical imaging, focusing on radiology and GI endoscopy. I introduced models like TransNetR and SynergyNet for robust segmentation, along with PP-SAM and diffusion-based methods that go beyond traditional CNNs. I also discussed datasets like CirrMRI600+, PanSegData, and the Peri-Pancreatic Edema Dataset, and highlighted applications in polyp detection, tumor localization, and surgical tool tracking showing how AI can enhance clinical workflows.",
        },
        {
            title: "Biopsy Free early detection of liver diseases using AI",
            location: "Northwestern University, Department of Radiology, USA, 2023",
            image: Biospy,
            description: "In this talk, I presented AI-based alternatives to invasive liver biopsies, using deep learning to detect cirrhosis, fibrosis, and HCC from radiological scans. I introduced the CirrMRI600+ dataset and segmentation models like SynergyNet and PVTFormer for precise organ analysis. I also explored multi-modal models that fuse imaging and clinical data, along with transformer and diffusion-based techniques, aiming to improve liver disease diagnosis and make screening safer, faster, and more accessible in real-world settings.",
        },
        {
            title: "The Future is Here: Deep Learning Algorithms Can Reduce the Miss-Rate in Colonoscopy",
            location: "MIPG Seminar Series 42 – Fall, University of Pennsylvania, USA, 2022",
            image: future,
            description: "In this seminar, I discussed how deep learning enhances polyp detection and reduces miss rates in colonoscopy. I showcased CADe and CADx systems using CNNs, transformers, and hybrid models for real-time detection, classification, and segmentation.The talk also explored domain adaptation, multi-center datasets, and clinical integration. Emphasis was placed on interpretability, robustness to adversarial attacks, and regulatory challenges—highlighting the potential of AI to improve decision-making and outcomes in gastrointestinal endoscopy.",
        },
        {
            title: "Khwopa to Northwestern: My PhD Journey and Some Personal Reflections",
            location: "Khowpa Engineering College, Purbanchal University, Bhaktapur, Nepal, 2022",
            image: First,
            description: "In this talk, I reflect on my journey from Khwopa Engineering College in Nepal to Northwestern University, shaped by perseverance, curiosity, and a passion for AI in medical imaging. I share lessons from my PhD at Simula & UiT, and my research in radiology and precision medicine. From early education to global collaboration, I highlight how resilience, mentorship, and interdisciplinary work guided my growth—from small-town student to recognized researcher.",
        },
    ];


return (
    <section className="p-5 h-screen pt-[85px] overflow-y-auto">
      <h1 className="font-medium text-4xl text-center hover:text-blue-500 cursor-pointer duration-300">
        Professional Talks
      </h1>

      <div className="mt-5 max-h-[800px] w-full flex flex-col cursor-pointer">
        {talksData.map((talk, index) => (
          <div key={index}>
            <div className="flex flex-col-reverse md:flex-row items-center gap-4 px-2 hover:scale-101 duration-300 group">
              <div className="flex-1 flex flex-col">
                <div className="flex items-center font-medium group-hover:text-blue-700">
                  <RiSlideshow4Line className="hidden xl:block mr-1 mt-1 w-5 h-5" />
                  <h1 className="text-xl">{talk.title}</h1>
                </div>
                <div className="flex items-center text-md">
                  <IoLocation className="mr-2 text-red-600" />
                  <h1>{talk.location}</h1>
                </div>
                <p className="text-justify ml-1 flex-grow">{talk.description}</p>
              </div>
              <div className="flex items-center justify-center">
                <img
                  src={talk.image}
                  alt={talk.title}
                  className="w-full max-w-xs object-contain rounded-2xl cursor-pointer"
                />
              </div>
            </div>
            <hr className="w-[95%] border-t-1 border-blue-700 my-4 self-center" />
          </div>
        ))}
      </div>
    </section>
  );
};
export default Talks;