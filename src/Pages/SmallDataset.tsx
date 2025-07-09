import React from "react";
import { CIRRMRI600Link, CLEFmedLink, EndoCVLink, EndoTact2021, GastroVisionLink, KsvirSEGLink, KvasirCapsuleLink,
KvasircapsuleLink, KvasirInstrumentLink, KvasirsessileLink, MedicopolypoLink, PenSegDataLink, PolypGenStillFramesLink, 
PolypGenVideoSequenceLink } from "../Services/Dataset";
import CIRRMRI600 from "../assets/Dataset/CIRRMRI600.png"
import PenSegData from "../assets/Dataset/PanSegData​.png"
import PeriPancreatic from "../assets/Dataset/Peri-Pancreatic Edema Dataset​.png"
import Gastrovision from "../assets/Dataset/Gastrovision.png";
import PolyGenSequence from "../assets/Dataset/PolypGen Video Sequence Dataset.png";
import PolygenFrame from "../assets/Dataset/PolypGen Still Frames.png";
import ImageCELF from "../assets/Dataset/ImageCLEFmed-MEDVQA-GI-2023 .png";
import KsvirSEG from "../assets/Dataset/Kvasir-SEG.png";
import EndoCv2021 from "../assets/Dataset/Endocv 2021.png"
import KvasirInstrument from "../assets/Dataset/kvasirinstrument.png";
import Kvasirsessile from "../assets/Dataset/Kvasir-sessile.png"; 
import Endotact2020 from "../assets/Dataset/Endotect 2020 Challenge Dataset.png";
import Medicopolypo from "../assets/Dataset/Medico automatic polyp segmentation dataset.png";
import Kvasir from "../assets/Dataset/kvasir-capsule.png";
import KvasirCapsule from "../assets/Dataset/KvasirCapsule-SEG.png";


const datasets = [
    {
      title: "CIRRMRI600+",
      image: CIRRMRI600,
      link: CIRRMRI600Link,
      description: `CirrMRI600+ includes 628 annotated abdominal MRI scans (T1W and T2W), designed for liver cirrhosis research using multivendor, multisequence data.`,
    },
    {
      title: "PanSegData",
      image: PenSegData,
      link: PenSegDataLink,
      description: `PanSegNet uses 767 MRI and 1,350 CT scans for pancreas segmentation, achieving high Dice scores and strong reliability across modalities and medical centers.`,
    },
    {
      title: "Peri-Pancreatic Edema",
      image: PeriPancreatic,
      link: PenSegDataLink,
      description: `This dataset of 255 CT scans, annotated by radiologists, aids pancreatic research by distinguishing edema presence, supporting deep learning and clinical applications.`,
    },
    {
      title: "Gastrovision",
      image: Gastrovision,
      link: GastroVisionLink,
      description: `GastroVision offers 8,000 expert-annotated GI endoscopy images across 27 classes, aiding AI research in disease detection and classification from multiple medical centers.`,
    },
    {
      title: "PolypGen Video Sequence Dataset",
      image: PolyGenSequence,
      link: PolypGenVideoSequenceLink,
      description: `PolypGen includes data from 300+ patients with 3,762 expert-verified polyp annotations, offering the most comprehensive dataset for polyp detection and segmentation.`,
    },
    {
      title: "PolypGen Still Frames",
      image: PolygenFrame,
      link: PolypGenStillFramesLink,
      description: `PolypGen contains 8,037 annotated frames from six hospitals, supporting robust, generalizable deep learning for polyp detection via multicenter collaboration and EndoCV2021 benchmarking.`,
    },
    {
      title: "CLEFmed-MEDVQA-GI-2023",
      image: ImageCELF,
      link: CLEFmedLink,
      description: `Based on Hyper-Kvasir, this dataset includes GI tract images with Q&A ground truth, covering abnormalities, tools, and findings from gastroscopy and colonoscopy procedures.`,
    },
    {
      title: "Kvasir-SEG",
      image: KsvirSEG,
      link: KsvirSEGLink,
      description: `Kvasir-SEG offers 1,000 polyp images with ground truth masks and bounding boxes, aiding polyp detection research with varied resolutions and open-access availability.`,
    },
    {
      title: "Endocv 2021",
      image: EndoCv2021,
      link: EndoCVLink,
      description: `This dataset from 6 global centers includes five evaluation splits with detection boxes, segmentation masks, and negatives, supporting robust benchmarking across diverse clinical settings.`,
    },
    {
      title: "Kvasir-Instrument",
      image: KvasirInstrument,
      link: KvasirInstrumentLink,
      description: `Kvasir-Instrument provides 590 annotated tool images from GI endoscopy, supporting segmentation research with varied resolutions, train-test split, and bounding box data in JSON format.`,
    },
    {
      title: "Kvasir-sessile",
      image: Kvasirsessile,
      link: KvasirsessileLink,
      description: `Kvasir-SEG contains 1,000 open-access polyp images and masks with varied resolutions, stored separately in JPEG format, supporting research and education in medical imaging.`,
    },
    {
      title: "Endotect 2020 Challenge Dataset",
      image: Endotact2020,
      link: EndoTact2021,
      description: `This global dataset offers five evaluation types with detection boxes, pixel-wise segmentation, and negatives, enabling robust benchmarking across diverse centers and modalities.`,
    },
    {
      title: "Medico automatic polyp segmentation",
      image: Medicopolypo,
      link: MedicopolypoLink,
      description: `The Medico Challenge benchmarks polyp segmentation algorithms using 1,000 images, promoting robust, fast, and generalizable solutions for medical diagnostics with an open test set.`,
    },
    {
      title: "Kvasir-capsule",
      image: Kvasir,
      link: KvasircapsuleLink,
      description: `Kvasir-Capsule offers 4.7M VCE frames with 47,238 labeled anomalies across 14 classes, supporting AI-based diagnostics and reducing clinical workload in endoscopy.`,
    },
    {
      title: "KvasirCapsule-SEG",
      image: KvasirCapsule,
      link: KvasirCapsuleLink,
      description: `NanoNet is a lightweight, 36K-parameter model for real-time endoscopy segmentation, combining high accuracy with speed, ideal for low-end clinical hardware deployment.`,
    },
  ];

const DataSetMobile: React.FC = () => {
  return (
    <section className="p-4 lg:hidden pt-[79px]">
      <h1 className="text-2xl font-bold text-center mb-4">Our DataSets</h1>

      <div className="flex flex-col gap-4">
        {datasets.map((dataset, index) => (
            <div key={index} className="bg-white rounded-xl shadow p-3 flex flex-row gap-3 items-start hover:shadow-md transition" onClick={dataset.link}>
                <div className="h-full">
                    <img
                        src={dataset.image}
                        alt={dataset.title}
                        className="w-20 h-25 object-cover rounded-lg"
                    />
                </div>
                <div className="flex-1">
                    <h2 className="text-md font-semibold mb-1">{dataset.title}</h2>
                    <p className="text-sm text-gray-600">{dataset.description}</p>
                </div>
            </div>
        ))}
        </div>
    </section>
  );
};

export default DataSetMobile;