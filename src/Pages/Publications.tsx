import React from "react";
import { IoMdArrowDroprightCircle } from "react-icons/io";
import { AComprehensiveanalysis, AComprehensiveStudy, Anextensivestudey, Comparativevalidation, Diagnosis, DoubleUNet, Exploring, FANet, HyperKvasir, Kvasir, KvasirCapsule, LightLayers, MachineLearningbasedClassification, MetaLearning, MSRF, NanoNet, PolypGen, Progressively, RealTimePolypDetection, ResUNet, TextGuided, TheEndoText, Validatingpolyp,
  TransUnet,GastroVision,CTLiverSegmentation,TransNetR } from "../Services/PublicationsLinks";
import { useNavigate } from "react-router-dom";

const DevelopPublicatons: React.FC = () => {

  const navigate=useNavigate();

  const HandleNavigate=()=>{
    navigate('/developpublications');
  }
  return (
    <section className="min-h-screen flex flex-col scrollbar-hide text-black p-3 pt-[70px]">
      <h1 className="text-4xl text-center hover:text-blue-500 duration-300 p-3 mb-3 font-semibold cursor-pointer" onClick={HandleNavigate}>
        Journal Articles & Conference Papers
      </h1>

      <div className="flex flex-col xl:flex-row gap-2 mt-2">
        
        <div className="flex flex-col xl:w-1/2">
          <h1 className="text-3xl ml-2 mb-2 font-medium cursor-pointer">Journals</h1>

          
          <div className="w-full max-h-[75vh] bg-gray-200 overflow-y-auto text-black p-2 gap-y-5 rounded-2xl shadow-md shadow-gray-700 hover:shadow-lg hover:shadow-blue-200 scrollbar-hide custom-cursor backdrop:backdrop-blur-2xl">
            <div>
              <div className="group transition-transform duration-200 flex flex-row items-start gap-3 text-lg mt-1 max-w-4xl mx-auto" onClick={Validatingpolyp}>
                <IoMdArrowDroprightCircle className="text-3xl transition-colors duration-200 group-hover:text-blue-900 cursor-pointer" />
                  <p className="cursor-pointer text-justify leading-relaxed">
                    D. Jha et al., “
                    <span className="font-semibold p cursor-pointer group-hover:text-blue-900 text-black">
                      Validating polyp and instrument segmentation methods in colonoscopy 
                      through Medico 2020 and MedAI 2021 Challenges
                      </span>,”Medical Image Analysis, 2024.
                  </p>
              </div>
              
              <div className="group transition-transform duration-200 flex flex-row items-start gap-3 text-lg mt-1 max-w-4xl mx-auto" onClick={MachineLearningbasedClassification}>
                <IoMdArrowDroprightCircle className="text-xl mt-1 transition-colors duration-200 group-hover:text-blue-900 cursor-pointer" />
                <p className="cursor-pointer text-justify leading-relaxed">
                  D. Jha et al., “
                  <span className="font-semibold p cursor-pointer group-hover:text-blue-900 text-black">
                    Machine Learning-based Classification, Detection, and Segmentation of Medical Images
                    </span>”PhD Thesis, 2022.
                </p>
              </div>
              
              <div className="group transition-transform duration-200 flex flex-row items-start gap-3 text-lg mt-1 max-w-4xl mx-auto" onClick={AComprehensiveanalysis}>
                <IoMdArrowDroprightCircle className="text-2xl mt-0.5 transition-colors duration-200 group-hover:text-blue-900 cursor-pointer" />
                  <p className="cursor-pointer text-justify leading-relaxed">
                    D. Jha et al., “
                    <span className="font-semibold p cursor-pointer group-hover:text-blue-900 text-black">
                      A Comprehensive analysis of classification methods in gastrointestinal endoscopy imaging
                    </span>,”Medical Image Analysis, vol. 70, 2021.
                  </p>
              </div>
              
              <div className="group transition-transform duration-200 flex flex-row items-start gap-3 text-lg mt-1 max-w-4xl mx-auto" onClick={AComprehensiveStudy}>
                <IoMdArrowDroprightCircle className="text-4xl transition-colors duration-200 group-hover:text-blue-900 cursor-pointer" />
                  <p className="cursor-pointer text-justify leading-relaxed">
                    D. Jha et al., “
                    <span className="font-semibold p cursor-pointer group-hover:text-blue-900 text-black">
                      A Comprehensive Study on Colorectal Polyp segmentation with ResUNet++, Conditional Random Field and Test-Time Augmentation
                    </span>,”IEEE Journal of Biomedical and Health Informatics, 2021.
                  </p>
              </div>
              
              <div className="group transition-transform duration-200 flex flex-row items-start gap-3 text-lg mt-1 max-w-4xl mx-auto" onClick={RealTimePolypDetection}>
                <IoMdArrowDroprightCircle className="text-3xl transition-colors duration-200 group-hover:text-blue-900 cursor-pointer" />
                <p className="cursor-pointer text-justify leading-relaxed">
                  D. Jha et al., “
                  <span className="font-semibold p cursor-pointer group-hover:text-blue-900 text-black">
                    Real-Time Polyp Detection, Localization and Segmentation in Colonoscopy Using Deep Learning
                  </span>,”IEEE Journal of Biomedical and Health Informatics, 2021.
                </p>
              </div>
              
              
              <div className="group transition-transform duration-200 flex flex-row items-start gap-3 text-lg mt-1 max-w-4xl mx-auto" onClick={PolypGen}>
                <IoMdArrowDroprightCircle className="text-3xl transition-colors duration-200 group-hover:text-blue-900 cursor-pointer" />
                <p className="cursor-pointer text-justify leading-relaxed">
                  D. Jha et al., “
                  <span className="font-semibold p cursor-pointer group-hover:text-blue-900 text-black">
                    PolypGen: A multi-center polyp detection and segmentation dataset for generalisability assessment
                    </span>,"Nature Scientific Data, 2023.
                </p>
              </div>
              
              <div className="group transition-transform duration-200 flex flex-row items-start gap-3 text-lg mt-1 max-w-4xl mx-auto" onClick={HyperKvasir}>
                <IoMdArrowDroprightCircle className="text-4xl transition-colors duration-200 group-hover:text-blue-900 cursor-pointer" />
                <p className="cursor-pointer text-justify leading-relaxed">
                  H. Borgli*, V. Thambawita*, P. Smedsrud*, S. Hicks*, D. Jha*, S. Eskeland, et al., “
                  <span className="font-semibold p cursor-pointer group-hover:text-blue-900 text-black">
                    Hyper-Kvasir: A Comprehensive Multi-Class Image and Video Dataset for Gastrointestinal Endoscopy
                  </span>,"Nature Scientific Data [Contributed equally], 2020.
                </p>
              </div>
              
              
              <div className="group transition-transform duration-200 flex flex-row items-start gap-3 text-lg mt-1 max-w-4xl mx-auto" onClick={KvasirCapsule}>
                <IoMdArrowDroprightCircle className="text-4xl transition-colors duration-200 group-hover:text-blue-900 cursor-pointer" />
                <p className="cursor-pointer text-justify leading-relaxed">
                  P. Smedsrud*, H. Gjestang*, O. Nedrejord*, E. Nss*, V. Thambawita*, S. Hicks*, HBorgli*, D. Jha*, et al.,"
                  <span className="font-semibold p cursor-pointer group-hover:text-blue-900 text-black">
                  Kvasir-Capsule, a video capsule endoscopy dataset
                  </span>,"Nature Scientific Data, [equally contributed], 2021.
                </p>
              </div>
              
              <div className="group transition-transform duration-200 flex flex-row items-start gap-3 text-lg mt-1 max-w-4xl mx-auto" onClick={FANet}>
                <IoMdArrowDroprightCircle className="text-3xl transition-colors duration-200 group-hover:text-blue-900 cursor-pointer" />
                <p className="cursor-pointer text-justify leading-relaxed">
                  N. Tomar, D. Jha et al., “
                  <span className="font-semibold p cursor-pointer group-hover:text-blue-900 text-black">
                    FANet: A Feedback Attention Network for Improved Biomedical Image Segmentation
                  </span>,” on Neural Networks and Learning Systems, 2022.
                </p>
              </div>
              
              <div className="group transition-transform duration-200 flex flex-row items-start gap-3 text-lg mt-1 max-w-4xl mx-auto" onClick={MSRF}>
                <IoMdArrowDroprightCircle className="text-3xl transition-colors duration-200 group-hover:text-blue-900 cursor-pointer" />
                <p className="cursor-pointer text-justify leading-relaxed">
                  A Srivastava, D. Jha et al,”
                  <span className="font-semibold p cursor-pointer group-hover:text-blue-900 text-black">
                    MSRF-Net: A Multi-Scale Residual Fusion Network for Biomedical Image Segmentation
                  </span>,”IEEE Journal of Biomedical and Health Informatics, 2022.
                 </p>
              </div>
              
              <div className="group transition-transform duration-200 flex flex-row items-start gap-3 text-lg mt-1 max-w-4xl mx-auto" onClick={Comparativevalidation}>
                <IoMdArrowDroprightCircle className="text-3xl transition-colors duration-200 group-hover:text-blue-900 cursor-pointer" />
                <p className="cursor-pointer text-justify leading-relaxed">
                  T. Ross, A. Reinke, D. Jha et al.“
                  <span className="font-semibold p cursor-pointer group-hover:text-blue-900 text-black">
                    Comparative validation of multi-instance instrument segmentation in endoscopy: results of the ROBUST-MIS 2019 Challenge
                  </span>”,Medical Image Analysis, vol. 70, 2021.
                </p>
              </div>
              
              <div className="group transition-transform duration-200 flex flex-row items-start gap-3 text-lg mt-1 max-w-4xl mx-auto" onClick={Diagnosis}>
                <IoMdArrowDroprightCircle className="text-3xl transition-colors duration-200 group-hover:text-blue-900 cursor-pointer" />
                <p className="cursor-pointer text-justify leading-relaxed">
                  D. Jha et al., “
                  <span className="font-semibold p cursor-pointer group-hover:text-blue-900 text-black">
                    Diagnosis of Alzheimer’s Disease Using Dual-Tree Complex Wavelet Transform, PCA, and Feed-Forward Neural Network,”
                  </span>,” Journal of Healthcare Engineering, vol. 2017, 13 pages, 2017.
                </p>
              </div>
              
              <div className="group transition-transform duration-200 flex flex-row items-start gap-3 text-lg mt-1 max-w-4xl mx-auto" onClick={Anextensivestudey}>
                <IoMdArrowDroprightCircle className="text-4xl transition-colors duration-200 group-hover:text-blue-900 cursor-pointer" />
                <p className="cursor-pointer text-justify leading-relaxed">
                  V. Thambawita, D. Jha et al, “
                  <span className="font-semibold p cursor-pointer group-hover:text-blue-900 text-black">
                    An Extensive Study on Cross-Dataset Bias and Evaluation Metrics Interpretation for Machine Learning Applied to Gastrointestinal Tract Abnormality Classification
                  </span>,”ACM Transaction on Computing for Healthcare, vol. 1, no. 3, 2021.
                </p>
              </div>
              
              <div className="group transition-transform duration-200 flex flex-row items-start gap-3 text-lg mt-1 max-w-4xl mx-auto" onClick={MetaLearning}>
                <IoMdArrowDroprightCircle className="mt-0.5 text-2xl transition-colors duration-200 group-hover:text-blue-900 cursor-pointer" />
                <p className="cursor-pointer text-justify leading-relaxed">
                  R. Khadka, D. Jha et al., “
                  <span className="font-semibold p cursor-pointer group-hover:text-blue-900 text-black">
                    Meta-learning with implicit gradients in a few-shot setting for medical image segmentation
                  </span>“, Computers in Biology and Medicine, 2022.
                </p>
              </div>

            </div>
          </div>
        </div>

        
        <div className="flex flex-col xl:w-1/2">
          <h1 className="text-3xl ml-2 mb-2 font-medium cursor-pointer">Conferences</h1>

          
          <div className="w-full max-h-[75vh] overflow-y-auto text-black p-2 space-y-2 rounded-2xl shadow-md shadow-gray-700 hover:shadow-lg hover:shadow-blue-200 scrollbar-hide custom-cursor bg-gray-200 backdrop:backdrop-blur-2xl">
            <div>
              <div className="group transition-transform duration-200 flex flex-row items-start gap-3 text-lg mt-1 max-w-4xl mx-auto" onClick={DoubleUNet}>
                <IoMdArrowDroprightCircle className="text-3xl transition-colors duration-200 group-hover:text-blue-900 cursor-pointer" />
                  <p className="cursor-pointer text-justify leading-relaxed">
                    D. Jha et al., “
                    <span className="font-semibold p cursor-pointer group-hover:text-blue-900 text-black">
                       DoubleU-Net: A Deep Convolutional Neural Network for Medical Image Segmentation
                      </span>,” Proceedings of Computer Based Medical System (CBMS), 2020. 
                  </p>
              </div>


              <div className="group transition-transform duration-200 flex flex-row items-start gap-3 text-lg mt-1 max-w-4xl mx-auto" onClick={TransNetR}>
                <IoMdArrowDroprightCircle className="text-3xl transition-colors duration-200 group-hover:text-blue-900 cursor-pointer" />
                  <p className="cursor-pointer text-justify leading-relaxed">
                    D. Jhaetal.,<span className="font-semibold p cursor-pointer group-hover:text-blue-900 text-black">TransNetR: Transformer-based Residual Network for Polyp Segmentation
                    with Multi-Center Out-of-Distribution Testing.</span> , Proceedings of the Medical Imaging
                    with Deep Learning, 2023.
                  </p>
              </div>

              <div className="group transition-transform duration-200 flex flex-row items-start gap-3 text-lg mt-1 max-w-4xl mx-auto" onClick={CTLiverSegmentation}>
                <IoMdArrowDroprightCircle className="text-3xl transition-colors duration-200 group-hover:text-blue-900 cursor-pointer" />
                  <p className="cursor-pointer text-justify leading-relaxed">
                     D. Jha et al.,<span className="font-semibold p cursor-pointer group-hover:text-blue-900 text-black">CT Liver Segmentation via PVT-based Encoding and Re ned Decoding </span>,
                     Proceedings of the IEEE International Symposium on Biomedical Imaging, 2024.
                  </p>
              </div>
              
              <div className="group transition-transform duration-200 flex flex-row items-start gap-3 text-lg mt-1 max-w-4xl mx-auto" onClick={Kvasir}>
                <IoMdArrowDroprightCircle className="text-2xl mt-1 transition-colors duration-200 group-hover:text-blue-900 cursor-pointer" />
                <p className="cursor-pointer text-justify leading-relaxed">
                  D. Jha et al., “
                  <span className="font-semibold p cursor-pointer group-hover:text-blue-900 text-black">
                    Kvasir-SEG: A segmented polyp dataset
                    </span>,”Proceedings of IEEE International Symposium on Multimedia (ISM 2019), pp. 225-230, 2019. 
                </p>
              </div>

              <div className="group transition-transform duration-200 flex flex-row items-start gap-3 text-lg mt-1 max-w-4xl mx-auto" onClick={GastroVision}>
                <IoMdArrowDroprightCircle className="text-3xl transition-colors duration-200 group-hover:text-blue-900 cursor-pointer" />
                  <p className="cursor-pointer text-justify leading-relaxed">
                      D. Jha, et al.,<span className="font-semibold p cursor-pointer group-hover:text-blue-900 text-black">GastroVision: A Multi-class Endoscopy Image Dataset for Computer
                      Aided Gastrointestinal Disease Detection.</span> , Proceedings of the ICML Workshop on
                      Machine Learning for Multimodal Healthcare Data (ML4MHD), 2023.
                  </p>
              </div>

              <div className="group transition-transform duration-200 flex flex-row items-start gap-3 text-lg mt-1 max-w-4xl mx-auto" onClick={TransUnet}>
                <IoMdArrowDroprightCircle className="text-3xl transition-colors duration-200 group-hover:text-blue-900 cursor-pointer" />
                  <p className="cursor-pointer text-justify leading-relaxed">
                      N. K. Tomar, A. Shergill, B. Rieders, U. Bagci, & D. Jha,<span className="font-semibold p cursor-pointer group-hover:text-blue-900 text-black">TransResU-Net: Trans
                      former based ResU-Net for Real-Time Colonoscopy Polyp Segmentation</span>, IEEE BHI,2022
                  </p>
              </div>
              
              <div className="group transition-transform duration-200 flex flex-row items-start gap-3 text-lg mt-1 max-w-4xl mx-auto" onClick={ResUNet}>
                <IoMdArrowDroprightCircle className="text-3xl mt-0.5 transition-colors duration-200 group-hover:text-blue-900 cursor-pointer" />
                  <p className="cursor-pointer text-justify leading-relaxed">
                    D. Jha et al., “
                    <span className="font-semibold p cursor-pointer group-hover:text-blue-900 text-black">
                      ResUNet++: An advanced architecture for medical image segmentation
                    </span>,”Proceedings of IEEE International Symposium on Multimedia (ISM 2019), pp. 225-230, 2019. 
                  </p>
              </div>
              
              <div className="group transition-transform duration-200 flex flex-row items-start gap-3 text-lg mt-1 max-w-4xl mx-auto" onClick={NanoNet}>
                <IoMdArrowDroprightCircle className="text-4xl transition-colors duration-200 group-hover:text-blue-900 cursor-pointer" />
                  <p className="cursor-pointer text-justify leading-relaxed">
                    D. Jha et al., “
                    <span className="font-semibold p cursor-pointer group-hover:text-blue-900 text-black">
                      NanoNet: Real-Time Polyp Segmentation in VideoCapsule Endoscopy and Colonoscopy
                    </span>,”Proceedings of IEEE Computer Based Medical System (CBMS), IEEE.
                  </p>
              </div>
              
              <div className="group transition-transform duration-200 flex flex-row items-start gap-3 text-lg mt-1 max-w-4xl mx-auto" onClick={LightLayers}>
                <IoMdArrowDroprightCircle className="text-4xl transition-colors duration-200 group-hover:text-blue-900 cursor-pointer" />
                <p className="cursor-pointer text-justify leading-relaxed">
                  D. Jha et al., “
                  <span className="font-semibold p cursor-pointer group-hover:text-blue-900 text-black">
                   LightLayers: Parameter Efficient Dense and Convolutional Layers for Image Classification
                  </span>,” Proceedings of The Joint International Conference PDCAT-PAAP2020, Springer, 2020.
                </p>
              </div>
              
              <div className="group transition-transform duration-200 flex flex-row items-start gap-3 text-lg mt-1 max-w-4xl mx-auto" onClick={TheEndoText}>
                <IoMdArrowDroprightCircle className="text-4xl transition-colors duration-200 group-hover:text-blue-900 cursor-pointer" />
                <p className="cursor-pointer text-justify leading-relaxed">
                  S. A. Hicks, D. Jha, V. Thambawita, P. Halvorsen and M. Riegler, “
                  <span className="font-semibold p cursor-pointer group-hover:text-blue-900 text-black">
                   The EndoTect 2020 Challenge: Evaluation and Comparison of Classification, Segmentation and InferenceTime for Endoscopy
                  </span>,” Proceedings of ICPR workshop, 2020.
                </p>
              </div>
              
              <div className="group transition-transform duration-200 flex flex-row items-start gap-3 text-lg mt-1 max-w-4xl mx-auto" onClick={Progressively}>
                <IoMdArrowDroprightCircle className="text-4xl transition-colors duration-200 group-hover:text-blue-900 cursor-pointer" />
                <p className="cursor-pointer text-justify leading-relaxed">
                  GP. Ji, YC. Chou, DP. Fan, G. Chen, H. Fu, D. Jha, and L. Shao,“
                  <span className="font-semibold p cursor-pointer group-hover:text-blue-900 text-black">
                     Progressively Normalized Self-Attention Network for Video Polyp Segmentation
                    </span>Proceedings of Medical Image Computing and Computer Assisted Intervention (MICCAI ), 2021.
                </p>
              </div>
              
              <div className="group transition-transform duration-200 flex flex-row items-start gap-3 text-lg mt-1 max-w-4xl mx-auto" onClick={TextGuided}>
                <IoMdArrowDroprightCircle className="text-4xl transition-colors duration-200 group-hover:text-blue-900 cursor-pointer" />
                <p className="cursor-pointer text-justify leading-relaxed">
                  N. K Tomar, D. Jha, U. Bagci, Sharib Ali,“
                  <span className="font-semibold p cursor-pointer group-hover:text-blue-900 text-black">
                     Text-guided attention for improved polyp segmentation
                  </span>,"Proceedings of Medical Image Computing and Computer Assisted Intervention (MICCAI ), 2022.
                </p>
              </div>
              
              
              <div className="group transition-transform duration-200 flex flex-row items-start gap-3 text-lg mt-1 max-w-4xl mx-auto" onClick={Exploring}>
                <IoMdArrowDroprightCircle className="text-3xl transition-colors duration-200 group-hover:text-blue-900 cursor-pointer" />
                <p className="cursor-pointer text-justify leading-relaxed">
                  D. Jha et al., “
                  <span className="font-semibold p cursor-pointer group-hover:text-blue-900 text-black">
                    Exploring Deep Learning Methods for Real-Time Surgical Instrument Segmentation in Laparoscopy
                  </span>,”IEEE BHI, 2021.
                </p>
              </div>
    
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DevelopPublicatons;
