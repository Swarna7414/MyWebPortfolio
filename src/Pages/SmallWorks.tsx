import React from "react";
import Pvtformet from "../assets/Myworks/Pvtformet.png";
import MdNet from "../assets/Myworks/mdnet.png";
import TransnetR from "../assets/Myworks/TransNetR.png";
import TransRUPNet from "../assets/Myworks/TransRUPNet.png";
import DoubleNet from "../assets/Myworks/DoubleUnet.png";
import ResNet from "../assets/Myworks/ResUNet++.png";
import ResNetCRF from "../assets/Myworks/ResUNet++ + CRF + TTA.png";
import ColonSegNet from "../assets/Myworks/ColonSegNet.png";
import NanoNet from "../assets/Myworks/NanoNet.png";
import DDANet from "../assets/Myworks/DDAnet.png"
import LighLayer from "../assets/Myworks/LightLayers.png";
import PNSNET from "../assets/Myworks/PNS-net.png"
import Unet from "../assets/Myworks/UNet.png";
import { ColonSegNetGithub, ColonSegNetpaper, DDANetGithub, DDANetpaper, DoubleUNetgithub, DoubleUNetpaper, LightLayersGithub, LightLayersPaper, MdNetGit, MdNetPaper, NanoNetGithub, NanoNetpaper, PNSNetgithub, PNSNetpaper, PVTFormer, PVTFormerPaper, ResUnetCraGithub, Resunetgithub, Resunetpaper, TransnetRGit, TransnetRpaper, TransRUPNetgit, TransRUPNetpaper, UnetGithub, UnetPaper } from "../Services/MyworksCalls";


const myWorksData = [

    {
      title:"PVTFormer",
      description:"PVTFormer, based on PVT v2, segments liver CTs precisely, achieving top scores on LiTS 2017 with advanced decoding techniques.",
      image:Pvtformet,
      github: PVTFormer,
      paper: PVTFormerPaper,
      subtitle:"CT Liver Segmentation Via PVT-based Encoding and Refined Decoding (ISBI 2024)",

    },
    
    {
      title: "MDNet",
      description: "MDNet uses MiT-B2 and multi-decoders with attention and refinement to segment organs, achieving high Dice scores and outperforming baselines.",
      image: MdNet,
      github: MdNetGit,
      paper: MdNetPaper,
      subtitle:"MDNet: Multi-Decoder Network for Abdominal CT Organs Segmentation, 2024",
    },
    {
      title: "TransNetR",
      description:"TransNetR uses ResNet50 for real-time colon polyp segmentation, achieving high accuracy and 54.60 FPS, with strong generalization on unseen datasets.",
      image: TransnetR,
      github: TransnetRGit,
      paper: TransnetRpaper,
      subtitle:"TransNetR: A Transformer Residual Model for Polyp Segmentation",
    },
    {
      title: "TransRUPNet",
      description:"TransRUPNet segments polyps in real time using a three-block architecture, achieving high accuracy and 47.07 FPS with strong real-world generalization.",
      image: TransRUPNet,
      github: TransRUPNetgit,
      paper: TransRUPNetpaper,
      subtitle: "TransRUPNet for Improved Out-of-Distribution Generalization",
    },
    {
      title: "DoubleUNet",
      description:"DoubleU-Net stacks two U-Nets with VGG-19 and ASPP, improving segmentation accuracy and excelling in detecting small or flat polyps.",
      image: DoubleNet,
      github: DoubleUNetgithub,
      paper: DoubleUNetpaper,
      subtitle: "DoubleU-Net: A Deep Convolutional NeuralNetwork for Segmentation",
    },
    {
      title: "ResUNet++",
      description:"ResUNet++ enhances polyp segmentation with improved accuracy over U-Net and ResUNet, achieving strong Dice scores on Kvasir-SEG and CVC-612 datasets.",
      image: ResNet,
      github: Resunetgithub,
      paper: Resunetpaper,
      subtitle: "ResUNet++: Advanced Architecture for Medical Image Segmentation",
    },
    {
      title: "ResUNet++ + CRF + TTA",
      description:"ResUNet + CRF + TTA boosts polyp segmentation accuracy, achieving high Dice scores and outperforming U-Net variants in clinical image analysis.",
      image: ResNetCRF,
      github: ResUnetCraGithub,
      paper: Resunetpaper,
      subtitle: "Colorectal Polyp Segmentation With ResUNet++, CRF, and TTA",
    },
    {
      title: "ColonSegNet",
      description:"This study benchmarks polyp segmentation models on Kvasir-SEG. ColonSegNet excels in accuracy and speed, highlighting benchmarking's role in clinical evaluation.",
      image: ColonSegNet,
      github: ColonSegNetGithub,
      paper: ColonSegNetpaper,
      subtitle: "ColonSegNet: Real-time polyp segmentation benchmarking study",
    },
    {
      title: "NanoNet",
      description:"NanoNet is a lightweight, fast, and accurate model for lesion segmentation, optimized for real-time use on low-resource clinical devices.",
      image: NanoNet,
      github: NanoNetGithub,
      paper: NanoNetpaper,
      subtitle: "NanoNet: Real-Time Polyp Segmentation in VCE",
    },
    {
      title: "DDANet",
      description:"DDANet uses dual decoders and attention for accurate, fast polyp segmentation, showing strong generalization and clinical relevance on Kvasir-SEG and beyond.",
      image: DDANet,
      github: DDANetGithub,
      paper: DDANetpaper,
      subtitle: "DDANet: Polyp Segmentation with Dual Decoder Attention",
    },
    {
      title: "LightLayers",
      description:"LightLayers reduces parameters via matrix factorization, matching standard performance with lower computation—enabling efficient deep learning on low-resource hardware across datasets.",
      image: LighLayer,
      github: LightLayersGithub,
      paper: LightLayersPaper,
      subtitle: "Parameter Efficient Dense and Conv Layers",
    },
    {
      title: "PNS-Net",
      description:"PNS-Net uses normalized self-attention for real-time video polyp segmentation, achieving ~140 FPS and state-of-the-art results without CNNs or recurrence.",
      image: PNSNET,
      github: PNSNetgithub,
      paper: PNSNetpaper,
      subtitle:"PNS-Net: Self-Attention for Video Polyp Segmentation",
    },
    {
      title: "UNet",
      description:"This study benchmarks instrument segmentation models in MIS. DDANet excels on ROBUST-MIS 2019, combining high accuracy with real-time performance.",
      image: Unet,
      github: UnetGithub,
      paper: UnetPaper,
      subtitle: "U-Net for Surgical Image Segmentation",
    },
  ];

const SmallWorks: React.FC = () => {
  return (
    <section className="p-4 lg:hidden pt-[79px]">
      <h1 className="text-2xl font-bold text-center mb-4">My Works</h1>

      <div className="flex flex-col gap-4">
        {myWorksData.map((work, index) => (
            <div key={index} className="bg-white rounded-xl shadow p-3 flex flex-row gap-3 items-start hover:shadow-md transition" onClick={work.github}>
                <div className="h-full">
                    <img
                        src={work.image}
                        alt={work.title}
                        className="w-20 h-25 object-cover rounded-lg"
                    />
                </div>
                <div className="flex-1">
                    <h2 className="text-md font-semibold mb-1">{work.title}</h2>
                    <p className="text-sm text-gray-600">{work.description}</p>
                </div>
            </div>
        ))}
        </div>
    </section>
  );
};

export default SmallWorks;