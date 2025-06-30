import React from "react";
import {FaAward} from "react-icons/fa"
import { BsDot } from "react-icons/bs";
import { MdRateReview } from "react-icons/md";
import { TbPoint } from "react-icons/tb";


const AndN:React.FC=()=>{
    return(
        <section className="h-screen w-full p-5 pt-[90px] px-12">
            <div className="flex flex-col xl:flex-row gap-2 mt-2 justify-between">
                    
                    <div className="flex flex-col xl:w-6/13">
            
                      <div className="flex flex-row items-center justify-center mt-4 mb-2 pl-3.5 text-2xl font-semibold cursor-pointer group">
                        <FaAward className="mr-1 mt-1 group-hover:text-blue-500"/>
                        <h1>Awards, Honors & Achievements</h1>
                      </div>

                      <div className="w-full max-h-[75vh] bg-gray-200 overflow-y-auto text-black p-2 pr-4 gap-y-5 rounded-2xl shadow-md shadow-blue-300 hover:shadow-md hover:shadow-blue-500  backdrop:backdrop-blur-2xl">

                        <div>
                          <div className="group transition-transform duration-200 flex flex-row items-start BsDot text-lg mt-1 max-w-4xl mx-auto">
                            <BsDot className="text-3xl transition-colors duration-200 group-hover:text-blue-500 cursor-pointer" />
                              <p className="cursor-pointer text-justify leading-relaxed">
                                Honored to be named a 2024 Top Scholar by ScholarGPS, ranking top 0.5% worldwide.
                              </p>
                          </div>
                          
                          <div className="group transition-transform duration-200 flex flex-row items-start BsDot text-lg mt-1 max-w-4xl mx-auto">
                            <BsDot className="text-xl mt-1 transition-colors duration-200 group-hover:text-blue-500 cursor-pointer" />
                            <p className="cursor-pointer text-justify leading-relaxed">
                              Received the NSF I-Corps 2025 award to commercialize AI-powered medical imaging research and innovations.
                            </p>
                          </div>
                          
                          <div className="group transition-transform duration-200 flex flex-row items-start text-lg mt-1 max-w-4xl mx-auto">
                            <BsDot className="text-2xl transition-colors duration-200 group-hover:text-blue-500 cursor-pointer" />
                              <p className="cursor-pointer text-justify leading-relaxed">
                                Won Best Industry Paper Award at ICPR 2024 for spectral and spatial segmentation advancements.
                              </p>
                          </div>
                          
                          <div className="group transition-transform duration-200 flex flex-row items-start text-lg mt-1 max-w-4xl mx-auto">
                            <BsDot className="text-4xl transition-colors duration-200 group-hover:text-blue-500 cursor-pointer" />
                              <p className="cursor-pointer text-justify leading-relaxed">
                                Elevated to IEEE Senior Member for sustained impact in medical imaging and AI technologies.
                              </p>
                          </div>
                          
                          <div className="group transition-transform duration-200 flex flex-row items-start BsDot text-lg mt-1 max-w-4xl mx-auto">
                            <BsDot className="text-3xl transition-colors duration-200 group-hover:text-blue-500 cursor-pointer" />
                            <p className="cursor-pointer text-justify leading-relaxed">
                              Received Poster of Distinction Award at DDW 2024 for gastrointestinal disease-related AI imaging research.
                            </p>
                          </div>
                          
                          
                          <div className="group transition-transform duration-200 flex flex-row items-start BsDot text-lg mt-1 max-w-4xl mx-auto">
                            <BsDot className="text-3xl transition-colors duration-200 group-hover:text-blue-500 cursor-pointer" />
                            <p className="cursor-pointer text-justify leading-relaxed">
                              Won IEEE Chicago Section’s 2024 Junior R&D Award for excellence in medical AI research.
                            </p>
                          </div>
                          
                          <div className="group transition-transform duration-200 flex flex-row items-start BsDot text-lg mt-1 max-w-4xl mx-auto">
                            <BsDot className="text-4xl transition-colors duration-200 group-hover:text-blue-500 cursor-pointer" />
                            <p className="cursor-pointer text-justify leading-relaxed">
                              Serving as Associate Editor for Medical Physics and Frontiers in Radiation Oncology journals.
                            </p>
                          </div>
                          
                          
                          <div className="group transition-transform duration-200 flex flex-row items-start BsDot text-lg mt-1 max-w-4xl mx-auto">
                            <BsDot className="text-4xl transition-colors duration-200 group-hover:text-blue-500 cursor-pointer" />
                            <p className="cursor-pointer text-justify leading-relaxed">
                              Kvasir-SEG dataset featured in Stanford’s AI Index Report 2022 for global scientific significance.
                            </p>
                          </div>
                          
                          <div className="group transition-transform duration-200 flex flex-row items-start BsDot text-lg mt-1 max-w-4xl mx-auto">
                            <BsDot className="text-3xl transition-colors duration-200 group-hover:text-blue-500 cursor-pointer" />
                            <p className="cursor-pointer text-justify leading-relaxed">
                              Presented papers at MICCAI, WACV, ICASSP, and CVPR Workshop between 2024 and 2025.
                            </p>
                          </div>
                          
                          <div className="group transition-transform duration-200 flex flex-row items-start BsDot text-lg mt-1 max-w-4xl mx-auto">
                            <BsDot className="text-3xl transition-colors duration-200 group-hover:text-blue-500 cursor-pointer" />
                            <p className="cursor-pointer text-justify leading-relaxed">
                             Ranked #51 in Image Segmentation and #1,201 in Medical Imaging by ScholarGPS in 2024.
                             </p>
                          </div>


                        </div>
                      </div>
                    </div>
            
                    
                    <div className="flex flex-col xl:w-6/13 cursor-default">
            
                      <div className="flex flex-row items-center justify-center mt-4 mb-2 pl-3.5 text-2xl font-semibold cursor-pointer group">
                        <MdRateReview className="mr-1 mt-1 group-hover:text-blue-500"/>
                        <h1>Conference Service and Peer Review Roles</h1>
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