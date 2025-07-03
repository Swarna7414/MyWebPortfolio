import React, { useState } from "react";
import { AComprehensiveanalysis, AComprehensiveStudy, Anextensivestudey, Comparativevalidation, Diagnosis, DoubleUNet, Exploring, FANet, HyperKvasir, Kvasir, KvasirCapsule, LightLayers, MachineLearningbasedClassification, MetaLearning, MSRF, NanoNet, PolypGen, Progressively, RealTimePolypDetection, ResUNet, TextGuided, TheEndoText, Validatingpolyp,
TransUnet,GastroVision,CTLiverSegmentation,TransNetR } from "../Services/PublicationsLinks";

const DevelopPublication:React.FC=()=>{

    const [ativeTab,setactiveTab]=useState<"journals" | "conferences">("journals");

    const journalPublications = [
        {
            title: "Validating polyp and instrument segmentation methods in colonoscopy through Medico 2020 and MedAI 2021 Challenges",
            authors: "D. Jha et al.",
            venue: "Medical Image Analysis, 2024",
            onClick: Validatingpolyp
        },
        {
            title: "Machine Learning-based Classification, Detection, and Segmentation of Medical Images",
            authors: "D. Jha et al.",
            venue: "PhD Thesis, 2022",
            onClick: MachineLearningbasedClassification
        },
        {
            title: "A Comprehensive analysis of classification methods in gastrointestinal endoscopy imaging",
            authors: "D. Jha et al.",
            venue: "Medical Image Analysis, vol. 70, 2021",
            onClick: AComprehensiveanalysis
        },
        {
            title: "A Comprehensive Study on Colorectal Polyp segmentation with ResUNet++, Conditional Random Field and Test-Time Augmentation",
            authors: "D. Jha et al.",
            venue: "IEEE Journal of Biomedical and Health Informatics, 2021",
            onClick: AComprehensiveStudy
        },
        {
            title: "Real-Time Polyp Detection, Localization and Segmentation in Colonoscopy Using Deep Learning",
            authors: "D. Jha et al.",
            venue: "IEEE Journal of Biomedical and Health Informatics, 2021",
            onClick: RealTimePolypDetection
        },
        {
            title: "PolypGen: A multi-center polyp detection and segmentation dataset for generalisability assessment",
            authors: "D. Jha et al.",
            venue: "Nature Scientific Data, 2023",
            onClick: PolypGen
        },
        {
            title: "Hyper-Kvasir: A Comprehensive Multi-Class Image and Video Dataset for Gastrointestinal Endoscopy",
            authors: "H. Borgli*, V. Thambawita*, P. Smedsrud*, S. Hicks*, D. Jha*, S. Eskeland, et al.",
            venue: "Nature Scientific Data [Contributed equally], 2020",
            onClick: HyperKvasir
        },
        {
            title: "Kvasir-Capsule, a video capsule endoscopy dataset",
            authors: "P. Smedsrud*, H. Gjestang*, O. Nedrejord*, E. Nss*, V. Thambawita*, S. Hicks*, H. Borgli*, D. Jha*, et al.",
            venue: "Nature Scientific Data, [equally contributed], 2021",
            onClick: KvasirCapsule
        },
        {
            title: "FANet: A Feedback Attention Network for Improved Biomedical Image Segmentation",
            authors: "N. Tomar, D. Jha et al.",
            venue: "IEEE Transactions on Neural Networks and Learning Systems, 2022",
            onClick: FANet
        },
        {
            title: "MSRF-Net: A Multi-Scale Residual Fusion Network for Biomedical Image Segmentation",
            authors: "A. Srivastava, D. Jha et al.",
            venue: "IEEE Journal of Biomedical and Health Informatics, 2022",
            onClick: MSRF
        },
        {
            title: "Comparative validation of multi-instance instrument segmentation in endoscopy: results of the ROBUST-MIS 2019 Challenge",
            authors: "T. Ross, A. Reinke, D. Jha et al.",
            venue: "Medical Image Analysis, vol. 70, 2021",
            onClick: Comparativevalidation
        },
        {
            title: "Diagnosis of Alzheimer’s Disease Using Dual-Tree Complex Wavelet Transform, PCA, and Feed-Forward Neural Network",
            authors: "D. Jha et al.",
            venue: "Journal of Healthcare Engineering, vol. 2017, 13 pages, 2017",
            onClick: Diagnosis
        },
        {
            title: "An Extensive Study on Cross-Dataset Bias and Evaluation Metrics Interpretation for Machine Learning Applied to Gastrointestinal Tract Abnormality Classification",
            authors: "V. Thambawita, D. Jha et al.",
            venue: "ACM Transactions on Computing for Healthcare, vol. 1, no. 3, 2021",
            onClick: Anextensivestudey
        },
        {
            title: "Meta-learning with implicit gradients in a few-shot setting for medical image segmentation",
            authors: "R. Khadka, D. Jha et al.",
            venue: "Computers in Biology and Medicine, 2022",
            onClick: MetaLearning
        }

    ];

    const conferencespublications = [
        {
            title: "DoubleU-Net: A Deep Convolutional Neural Network for Medical Image Segmentation",
            authors: "D. Jha et al.",
            venue: "Proceedings of Computer Based Medical System (CBMS), 2020",
            onClick: DoubleUNet
        },
        {
            title: "TransNetR: Transformer-based Residual Network for Polyp Segmentation with Multi-Center Out-of-Distribution Testing",
            authors: "D. Jha et al.",
            venue: "Proceedings of the Medical Imaging with Deep Learning, 2023",
            onClick: TransNetR
        },
        {
            title: "CT Liver Segmentation via PVT-based Encoding and Refined Decoding",
            authors: "D. Jha et al.",
            venue: "Proceedings of IEEE International Symposium on Biomedical Imaging, 2024",
            onClick: CTLiverSegmentation
        },
        {
            title: "Kvasir-SEG: A segmented polyp dataset",
            authors: "D. Jha et al.",
            venue: "Proceedings of IEEE International Symposium on Multimedia (ISM), pp. 225–230, 2019",
            onClick: Kvasir
        },
        {
            title: "GastroVision: A Multi-class Endoscopy Image Dataset for Computer Aided Gastrointestinal Disease Detection",
            authors: "D. Jha et al.",
            venue: "Proceedings of ICML Workshop on Machine Learning for Multimodal Healthcare Data (ML4MHD), 2023",
            onClick: GastroVision
        },
        {
            title: "TransResU-Net: Transformer-based ResU-Net for Real-Time Colonoscopy Polyp Segmentation",
            authors: "N. K. Tomar, A. Shergill, B. Rieders, U. Bagci, & D. Jha",
            venue: "Proceedings of IEEE BHI, 2022",
            onClick: TransUnet
        },
        {
            title: "ResUNet++: An advanced architecture for medical image segmentation",
            authors: "D. Jha et al.",
            venue: "Proceedings of IEEE International Symposium on Multimedia (ISM), pp. 225–230, 2019",
            onClick: ResUNet
        },
        {
            title: "NanoNet: Real-Time Polyp Segmentation in Video Capsule Endoscopy and Colonoscopy",
            authors: "D. Jha et al.",
            venue: "Proceedings of IEEE Computer Based Medical System (CBMS), IEEE",
            onClick: NanoNet
        },
        {
            title: "LightLayers: Parameter Efficient Dense and Convolutional Layers for Image Classification",
            authors: "D. Jha et al.",
            venue: "Proceedings of The Joint International Conference PDCAT–PAAP, Springer, 2020",
            onClick: LightLayers
        },
        {
            title: "The EndoTect 2020 Challenge: Evaluation and Comparison of Classification, Segmentation and Inference Time for Endoscopy",
            authors: "S. A. Hicks, D. Jha, V. Thambawita, P. Halvorsen, M. Riegler",
            venue: "Proceedings of ICPR Workshop, 2020",
            onClick: TheEndoText
        },
        {
            title: "Progressively Normalized Self-Attention Network for Video Polyp Segmentation",
            authors: "G. P. Ji, Y. C. Chou, D. P. Fan, G. Chen, H. Fu, D. Jha, L. Shao",
            venue: "Proceedings of MICCAI, 2021",
            onClick: Progressively
        },
        {
            title: "Text-guided attention for improved polyp segmentation",
            authors: "N. K. Tomar, D. Jha, U. Bagci, Sharib Ali",
            venue: "Proceedings of MICCAI, 2022",
            onClick: TextGuided
        },
        {
            title: "Exploring Deep Learning Methods for Real-Time Surgical Instrument Segmentation in Laparoscopy",
            authors: "D. Jha et al.",
            venue: "Proceedings of IEEE BHI, 2021",
            onClick: Exploring
        }
    ];





    return(
        <section className="min-h-screen pt-[72px]">
            <div>

                <div className="flex justify-between items-center text-2xl bg-gray-200 pt-2 font-semibold cursor-pointer px-1">
                    <div onClick={()=>setactiveTab("journals")} 
                         className={`flex justify-center w-1/2 py-2 transition-all duration-300 rounded-2xl ${
                            ativeTab === "journals" ? "bg-gray-400 shadow-md" : "bg-transparent hover:bg-gray-300-400"
                         }`}>
                        <button>Journals</button>
                    </div>
                    <div onClick={()=>setactiveTab("conferences")}
                        className={`flex justify-center w-1/2 py-2 transition-all duration-300 rounded-2xl ${
                            ativeTab === "conferences" ? "bg-gray-400 shadow-md" : "bg-transparent hover:bg-gray-300"
                        }`}>
                        <button>Conferences</button>
                    </div>
                </div>

                <div className="px-3 py-2">
                <ul className="space-y-1 h-screen flex flex-col justify-between">
                    {(ativeTab === "journals" ? journalPublications : conferencespublications ).map((publication,index)=>(
                        <li
                            key={index}
                            className="relative pl-6 text-lg leading-relaxed rounded-lg cursor-pointer transition hover:bg-gray-100 py-1"
                            onClick={publication.onClick}>
                                <div className="group">
                                    <span className="absolute left-0 top-1 text-black text-xl group-hover:text-blue-500">•</span>
                                    <span>
                                        {publication.authors},{" "}
                                        <span className="font-semibold transition-all duration-300 group-hover:text-blue-900">
                                            " {publication.title} "
                                        </span>
                                        , {publication.venue}
                                    </span>
                                </div>
                        </li>
                    ))}
                    

                </ul>
                </div>
            </div>
        </section>
    )
}
export default DevelopPublication;