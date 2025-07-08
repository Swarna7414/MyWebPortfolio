import React from "react";
import {FaAward} from "react-icons/fa"
import { MdRateReview } from "react-icons/md";
import { TbPoint } from "react-icons/tb";


const AndN:React.FC=()=>{
  const Awards:string[]=[
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
  ]
    return(
        <section className="h-screen w-full p-5 pt-[90px] px-12">
            <div className="flex flex-col xl:flex-row gap-2 mt-2 justify-between">
                    
                    <div className="flex flex-col xl:w-6/13">
            
                      <div className="flex flex-row items-center justify-center mt-4 mb-2 pl-3.5 text-2xl font-semibold cursor-pointer group">
                        <FaAward className="mr-1 mt-1 group-hover:text-blue-500"/>
                        <h1 className="flex">Awards , Honors<span className="hidden lg:block">& Achievements</span></h1>
                      </div>

                      <div className="w-full max-h-[75vh] bg-gray-200 overflow-y-auto text-black p-2 pr-4 gap-y-5 rounded-2xl shadow-md shadow-blue-300 hover:shadow-md hover:shadow-blue-500  backdrop:backdrop-blur-2xl">

                        {Awards.map((award, index) => (
                          <div key={index}>
                            <ul className="max-w-4xl mx-auto cursor-default">
                              <li className="flex items-start gap-2 text-lg mt-1 group">
                                <span className="min-w-[1.25rem] group-hover:text-blue-500 transition-colors duration-200">{'\u276F'}</span>
                                <span className="text-justify">{award}</span>
                              </li>
                            </ul>
                          </div>
                        ))}

                      </div>
                    </div>
            
                    
                    <div className="flex flex-col xl:w-6/13 cursor-default">
            
                      <div className="flex flex-row items-center justify-center mt-4 mb-2 pl-3.5 text-2xl font-semibold cursor-pointer group">
                        <MdRateReview className="mr-1 mt-1 group-hover:text-blue-500"/>
                        <h1 className="flex">Conference Service{" "} <span className="hidden lg:block"> & Peer Reviews</span></h1>
                      </div>

                      <div className=" flex flex-col w-full max-h-[75vh] bg-gray-200 overflow-y-auto text-black p-2 pr-4 gap-y-5 rounded-2xl shadow-md shadow-blue-300 hover:shadow-md hover:shadow-blue-500  backdrop:backdrop-blur-2xl">

                        <div className="group">
                            <h1 className="font-bold group-hover:text-blue-500 group-hover:underline group-hover:underline-offset-1 transition duration-300">2023</h1>
                            <div className="ml-3 mt-0.5">
                                <p className="flex flex-row items-center"> <TbPoint/> CBMS, 2023 (PC Member)</p>
                                <p className="flex flex-row items-center"> <TbPoint/> ImageCLEF (Organizer)</p>
                                <p className="flex flex-row items-center"> <TbPoint/> MICCAI, 2023 (Reviewer)</p>
                            </div>
                        </div>


                        <div className="group">
                            <h1 className="font-bold group-hover:text-blue-500 group-hover:underline group-hover:underline-offset-1 transition duration-300">2022</h1>
                            <div className="ml-3 mt-0.5">
                                <p className="flex flex-row items-center"> <TbPoint/> MICCAI, 2022 (Reviewer)</p>
                            </div>
                        </div>


                        <div className="group">
                            <h1 className="font-bold group-hover:text-blue-500 group-hover:underline group-hover:underline-offset-1 transition duration-300">2021</h1>
                            <div className="ml-3 mt-0.5">
                                <p className="flex flex-row items-center"> <TbPoint/>MedAI: Transparency in Medical Image Segmentation (Challenge organizer)</p>
                                <p className="flex flex-row items-center"> <TbPoint/>3rd International Endoscopy Computer Vision Workshop (WorkShop organizer)</p>
                                <p className="flex flex-row items-center"> <TbPoint/>IEEE International Conference on Multimedia and Expo (ICME) 2021</p>
                            </div>
                        </div>


                        <div className="group">
                            <h1 className="font-bold group-hover:text-blue-500 group-hover:underline group-hover:underline-offset-1 transition duration-300">2020</h1>
                            <div className="ml-3 mt-0.5">
                                <p className="flex flex-row items-center"> <TbPoint/>IEEE 33rd International Symposium on Computer Based Medical Systems (CBMS)</p>
                                <p className="flex flex-row items-center"> <TbPoint/>28th ACM International Conference on Multimedia</p>
                                <p className="flex flex-row items-center"> <TbPoint/>26th International Conference on MultiMedia Modeling (MMM 2020)</p>
                                <p className="flex flex-row items-center"> <TbPoint/>MediaEval Benchmarking Initiative for Multimedia Evaluation (Challenge organizer)</p>
                                <p className="flex flex-row items-center"> <TbPoint/>25th International Conference on Pattern Recognition (Challenge organizer)</p>
                                <p className="flex flex-row items-center"> <TbPoint/>2020 IEEE International Conference on Multimedia & Expo</p>
                            </div>
                        </div>


                        <div className="group">
                            <h1 className="font-bold group-hover:text-blue-500 group-hover:underline group-hover:underline-offset-1 transition duration-300">2019</h1>
                            <div className="ml-3 mt-0.5">
                                <p className="flex flex-row items-center"> <TbPoint/>ACM International Conference on Multimedia 2019 (ACMMM 2019)</p>
                                <p className="flex flex-row items-center"> <TbPoint/>25th International Conference on MultiMedia Modeling (MMM 2019)</p>
                                <p className="flex flex-row items-center"> <TbPoint/>IEEE Special Track on Deep Learning Applications in Medical Care 2019</p>
                            </div>
                        </div>

                        <div className="group">
                            <h1 className="font-bold group-hover:text-blue-500 group-hover:underline group-hover:underline-offset-1 transition duration-300">2018</h1>
                            <div className="ml-3 mt-0.5">
                                <p className="flex flex-row items-center"> <TbPoint/>ACM Multimedia Systems Conference 2018</p>
                                <p className="flex flex-row items-center"> <TbPoint/>31st IEEE Symposium on Content Based Medical System (CBMS 2018)</p>
                                <p className="flex flex-row items-center"> <TbPoint/>MediaEval Benchmarking Initiative for Multimedia Evaluation (MediaEval2018)</p>
                                <p className="flex flex-row items-center"> <TbPoint/>27th ACM International Conference on Multimedia</p>
                                <p className="flex flex-row items-center"> <TbPoint/>13th International Symposium on Medical Information and Communication</p>
                            </div>
                        </div>

                      </div>
                    </div>
                  </div>
            
        </section>
    );
}
export default AndN;