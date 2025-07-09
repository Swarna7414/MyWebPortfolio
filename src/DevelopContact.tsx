import React from "react";
import "./Styles/style.css";
import CIRRMRI600 from "../src/assets/Dataset/CIRRMRI600.png"
import PenSegData from "../src/assets/Dataset/PanSegData​.png"
import PeriPancreatic from "../src/assets/Dataset/Peri-Pancreatic Edema Dataset​.png"
import Gastrovision from "../src/assets/Dataset/Gastrovision.png";
import PolyGenSequence from "../src/assets/Dataset/PolypGen Video Sequence Dataset.png";
import PolygenFrame from "../src/assets/Dataset/PolypGen Still Frames.png";
import ImageCELF from "../src/assets/Dataset/ImageCLEFmed-MEDVQA-GI-2023 .png";
import KsvirSEG from "../src/assets/Dataset/Kvasir-SEG.png";
import EndoCv2021 from "../src/assets/Dataset/Endocv 2021.png"
import KvasirInstrument from "../src/assets/Dataset/kvasirinstrument.png";
import Kvasirsessile from "../src/assets/Dataset/Kvasir-sessile.png"; 
import Endotact2020 from "../src/assets/Dataset/Endotect 2020 Challenge Dataset.png";
import Medicopolypo from "../src/assets/Dataset/Medico automatic polyp segmentation dataset.png";
import Kvasir from "../src/assets/Dataset/kvasir-capsule.png";
import KvasirCapsule from "../src/assets/Dataset/KvasirCapsule-SEG.png";
import { CIRRMRI600Link, CLEFmedLink, EndoCVLink, EndoTact2021, GastroVisionLink, KsvirSEGLink, KvasirCapsuleLink, KvasircapsuleLink, KvasirInstrumentLink, KvasirsessileLink, MedicopolypoLink, PenSegDataLink, PolypGenStillFramesLink, PolypGenVideoSequenceLink } from "./Services/Dataset";


const DevelopConstact: React.FC = () => {
  return (
    <section className="p-10 h-screen bg-white">
      <div className="flex flex-col h-full">
        <h1 className="self-center font-bold text-4xl hover:text-blue-300 cursor-pointer duration-300">
          Our DataSets
        </h1>

        {/* This is the scrollable area */}
        <div className="flex-1 overflow-auto mt-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">

            <div className="aspect-[2/2] rounded-lg shadow-md p-4 flex flex-col hover:cursor-pointer hover:scale-105 duration-300 group relative overflow-hidden" onClick={CIRRMRI600Link}>
              <div className="h-[80%] overflow-hidden rounded-lg mb-2 relative">
                <img src={CIRRMRI600} alt="CIRRMRI600" className="w-full h-full object-cover rounded-lg transition duration-300"/>
                <div className="absolute inset-0 flex flex-col items-center justify-center backdrop-blur-sm bg-black/20 text-white text-sm p-4 opacity-0 group-hover:opacity-100 transition duration-300 rounded-lg overflow-y-auto text-center">
                  <p className="max-w-[90%] mx-auto text-justify leading-relaxed">
                    This dataset comprises 628 abdominal MRI scans (310 T1-weighted (T1W) and
                    318 T2-weighted (T2W)) volumetric scans along with corresponding
                    segmentation masks annotated by physicians. CirrMRI600+ is a
                    single-center, multivendor, and multisequence dataset. To our knowledge,
                    CirrMRI600+ is the first dataset designed explicitly for liver cirrhosis
                    research and incorporates both T1W and T2W MRI images.
                  </p>
                  <button className="mt-2 bg-white text-black font-semibold rounded-2xl cursor-pointer hover:scale-105 duration-300 px-2.5 py-2" onClick={CIRRMRI600Link}>Get this DataSet</button>
                </div>
              </div>
              <div className="h-[20%] flex items-center justify-center text-center">
                <h2 className="text-lg font-bold group-hover:text-blue-200 duration-300 cursor-pointer" onClick={CIRRMRI600Link}>
                  CIRRMRI600+
                </h2>
              </div>
            </div>

            <div className="aspect-[2/2] rounded-lg shadow-md p-4 flex flex-col hover:cursor-pointer hover:scale-105 duration-300 group relative overflow-hidden" onClick={PenSegDataLink}>
              <div className="h-[80%] overflow-hidden rounded-lg mb-2 relative">
                <img src={PenSegData} alt="CIRRMRI600" className="w-full h-full object-cover rounded-lg transition duration-300"/>
                <div className="absolute inset-0 flex flex-col items-center justify-center backdrop-blur-sm bg-black/20 text-white text-sm p-4 opacity-0 group-hover:opacity-100 transition duration-300 rounded-lg overflow-y-auto text-center">
                  <p className="max-w-[90%] mx-auto text-justify leading-relaxed">
                    Pancreas MRI segmentation lacks datasets. We collected 767 MRI and 1,350 CT scans. Our PanSegNet model, 
                    combining nnUNet and Transformers, achieved Dice scores of 88.3% (CT), 85.0% (T1W), and 86.3% (T2W). 
                    Strong volume correlation and high intra-observer agreement ensure reliable segmentation across modalities and centers.
                  </p>
                  <button className="mt-2 bg-white text-black font-semibold rounded-2xl cursor-pointer hover:scale-105 duration-300 px-2.5 py-2" onClick={PenSegDataLink}>Get this DataSet</button>
                </div>
              </div>
              <div className="h-[20%] flex items-center justify-center text-center">
                <h2 className="text-lg font-bold group-hover:text-blue-200 duration-300 cursor-pointer" onClick={PenSegDataLink}>
                  PanSegData
                </h2>
              </div>
            </div>

            
            <div className="aspect-[2/2] rounded-lg shadow-md p-4 flex flex-col hover:cursor-pointer hover:scale-105 duration-300 group relative overflow-hidden" onClick={PenSegDataLink}>
              <div className="h-[80%] overflow-hidden rounded-lg mb-2 relative">
                <img src={PeriPancreatic} alt="CIRRMRI600" className="w-full h-full object-cover rounded-lg transition duration-300"/>
                <div className="absolute inset-0 flex flex-col items-center justify-center backdrop-blur-sm bg-black/20 text-white text-sm p-4 opacity-0 group-hover:opacity-100 transition duration-300 rounded-lg overflow-y-auto text-center">
                  <p className="max-w-[90%] mx-auto text-justify leading-relaxed">
                    We collected 255 CT scans of pancreatitis patients with IRB approval. The dataset includes 179 cases with peri-pancreatic edema and 76 without it, labeled as 1 and 0, respectively. Expert radiologists annotated pancreas masks, 
                    ensuring accuracy. This dataset supports deep learning advancements in pancreatic research, providing valuable insights for future studies and clinical applications.
                  </p>
                  <button className="mt-2 bg-white text-black font-semibold rounded-2xl cursor-pointer hover:scale-105 duration-300 px-2.5 py-2" onClick={PenSegDataLink}>Get this DataSet</button>
                </div>
              </div>
              <div className="h-[20%] flex items-center justify-center text-center">
                <h2 className="text-lg font-bold group-hover:text-blue-200 duration-300 cursor-pointer" onClick={PenSegDataLink}>
                  Peri-Pancreatic Edema
                </h2>
              </div>
            </div>

            <div className="aspect-[2/2] rounded-lg shadow-md p-4 flex flex-col hover:cursor-pointer hover:scale-105 duration-300 group relative overflow-hidden" onClick={GastroVisionLink}>
              <div className="h-[80%] overflow-hidden rounded-lg mb-2 relative">
                <img src={Gastrovision} alt="CIRRMRI600" className="w-full h-full object-cover rounded-lg transition duration-300"/>
                <div className="absolute inset-0 flex flex-col items-center justify-center backdrop-blur-sm bg-black/20 text-white text-sm p-4 opacity-0 group-hover:opacity-100 transition duration-300 rounded-lg overflow-y-auto text-center">
                  <p className="max-w-[90%] mx-auto text-justify leading-relaxed">
                    We present GastroVision, a multi-center open-access GI endoscopy dataset with 27 classes, including anatomical landmarks, abnormalities, and polyp removals. It contains 8,000 images from hospitals in Norway and Sweden, 
                    annotated by expert endoscopists. Extensive benchmarking validates its significance for advancing AI-based GI disease detection and classification.
                  </p>
                  <button className="mt-2 bg-white text-black font-semibold rounded-2xl cursor-pointer hover:scale-105 duration-300 px-2.5 py-2" onClick={GastroVisionLink}>Get this DataSet</button>
                </div>
              </div>
              <div className="h-[20%] flex items-center justify-center text-center">
                <h2 className="text-lg font-bold group-hover:text-blue-200 duration-300 cursor-pointer" onClick={GastroVisionLink}>
                  Gastrovision
                </h2>
              </div>
            </div>


            <div className="aspect-[2/2] rounded-lg shadow-md p-4 flex flex-col hover:cursor-pointer hover:scale-105 duration-300 group relative overflow-hidden" onClick={PolypGenVideoSequenceLink}>
              <div className="h-[80%] overflow-hidden rounded-lg mb-2 relative">
                <img src={PolyGenSequence} alt="CIRRMRI600" className="w-full h-full object-cover rounded-lg transition duration-300"/>
                <div className="absolute inset-0 flex flex-col items-center justify-center backdrop-blur-sm bg-black/20 text-white text-sm p-4 opacity-0 group-hover:opacity-100 transition duration-300 rounded-lg overflow-y-auto text-center">
                  <p className="max-w-[90%] mx-auto text-justify leading-relaxed">
                    We present GastroVision, a multi-center open-access GI endoscopy dataset with 27 classes, including anatomical landmarks, abnormalities, and polyp removals. It contains 8,000 images from hospitals in Norway and Sweden, 
                    annotated by expert endoscopists. Extensive benchmarking validates its significance for advancing AI-based GI disease detection and classification.
                  </p>
                  <button className="mt-2 bg-white text-black font-semibold rounded-2xl cursor-pointer hover:scale-105 duration-300 px-2.5 py-2" onClick={PolypGenVideoSequenceLink}>Get this DataSet</button>
                </div>
              </div>
              <div className="h-[20%] flex items-center justify-center text-center">
                <h2 className="text-lg font-bold group-hover:text-blue-200 duration-300 cursor-pointer" onClick={PolypGenVideoSequenceLink}>
                  PolypGen Video Sequence Dataset
                </h2>
              </div>
            </div>

            <div className="aspect-[2/2] rounded-lg shadow-md p-4 flex flex-col hover:cursor-pointer hover:scale-105 duration-300 group relative overflow-hidden" onClick={PolypGenStillFramesLink}>
              <div className="h-[80%] overflow-hidden rounded-lg mb-2 relative">
                <img src={PolygenFrame} alt="CIRRMRI600" className="w-full h-full object-cover rounded-lg transition duration-300"/>
                <div className="absolute inset-0 flex flex-col items-center justify-center backdrop-blur-sm bg-black/20 text-white text-sm p-4 opacity-0 group-hover:opacity-100 transition duration-300 rounded-lg overflow-y-auto text-center">
                  <p className="max-w-[90%] mx-auto text-justify leading-relaxed">
                    PolypGen is a polyp segmentation and detection dataset with 8,037 frames, including 3,762 positive and 4,275 negative samples from six hospitals. It covers diverse populations, endoscopic systems, and treatment procedures. 
                    Initially used in EndoCV2021, it promotes generalizable deep learning models through multicenter collaboration and benchmarking challenges.
                  </p>
                  <button className="mt-2 bg-white text-black font-semibold rounded-2xl cursor-pointer hover:scale-105 duration-300 px-2.5 py-2" onClick={PolypGenStillFramesLink}>Get this DataSet</button>
                </div>
              </div>
              <div className="h-[20%] flex items-center justify-center text-center">
                <h2 className="text-lg font-bold group-hover:text-blue-200 duration-300 cursor-pointer" onClick={PolypGenStillFramesLink}>
                  PolypGen Still Frames
                </h2>
              </div>
            </div>

            <div className="aspect-[2/2] rounded-lg shadow-md p-4 flex flex-col hover:cursor-pointer hover:scale-105 duration-300 group relative overflow-hidden" onClick={CLEFmedLink}>
              <div className="h-[80%] overflow-hidden rounded-lg mb-2 relative">
                <img src={ImageCELF} alt="CIRRMRI600" className="w-full h-full object-cover rounded-lg transition duration-300"/>
                <div className="absolute inset-0 flex flex-col items-center justify-center backdrop-blur-sm bg-black/20 text-white text-sm p-4 opacity-0 group-hover:opacity-100 transition duration-300 rounded-lg overflow-y-auto text-center">
                  <p className="max-w-[90%] mx-auto text-justify leading-relaxed">
                    The provided data is based on the Hyper Kvasir dataset datasets.simula.no/hyper-kvasir with the additional question-and-answer ground truth, which was developed with our medical partners. 
                    The data includes images spanning the entire gastrointestinal tract, from mouth to anus, and will include abnormalities, surgical instruments, and normal findings. This includes data from 
                    different procedures such as gastroscopy and colonoscopy.
                  </p>
                  <button className="mt-2 bg-white text-black font-semibold rounded-2xl cursor-pointer hover:scale-105 duration-300 px-2.5 py-2" onClick={CLEFmedLink}>Get this DataSet</button>
                </div>
              </div>
              <div className="h-[20%] flex items-center justify-center text-center">
                <h2 className="text-lg font-bold group-hover:text-blue-200 duration-300 cursor-pointer" onClick={CLEFmedLink}>
                  CLEFmed-MEDVQA-GI-2023
                </h2>
              </div>
            </div>

            <div className="aspect-[2/2] rounded-lg shadow-md p-4 flex flex-col hover:cursor-pointer hover:scale-105 duration-300 group relative overflow-hidden" onClick={KsvirSEGLink}>
              <div className="h-[80%] overflow-hidden rounded-lg mb-2 relative">
                <img src={KsvirSEG} alt="CIRRMRI600" className="w-full h-full object-cover rounded-lg transition duration-300"/>
                <div className="absolute inset-0 flex flex-col items-center justify-center backdrop-blur-sm bg-black/20 text-white text-sm p-4 opacity-0 group-hover:opacity-100 transition duration-300 rounded-lg overflow-y-auto text-center">
                  <p className="max-w-[90%] mx-auto text-justify leading-relaxed">
                    Kvasir-SEG (46.2 MB) contains 1,000 polyp images with ground truth masks from Kvasir Dataset v2. Resolutions range from 332×487 to 1920×1072 pixels. Images and masks are stored separately in JPEG format, 
                    with bounding box coordinates in a JSON file. This open-access dataset supports polyp detection research.
                  </p>
                  <button className="mt-2 bg-white text-black font-semibold rounded-2xl cursor-pointer hover:scale-105 duration-300 px-2.5 py-2" onClick={KsvirSEGLink}>Get this DataSet</button>
                </div>
              </div>
              <div className="h-[20%] flex items-center justify-center text-center">
                <h2 className="text-lg font-bold group-hover:text-blue-200 duration-300 cursor-pointer" onClick={KsvirSEGLink}>
                  Kvasir-SEG
                </h2>
              </div>
            </div>


            <div className="aspect-[2/2] rounded-lg shadow-md p-4 flex flex-col hover:cursor-pointer hover:scale-105 duration-300 group relative overflow-hidden" onClick={EndoCVLink}>
              <div className="h-[80%] overflow-hidden rounded-lg mb-2 relative">
                <img src={EndoCv2021} alt="CIRRMRI600" className="w-full h-full object-cover rounded-lg transition duration-300"/>
                <div className="absolute inset-0 flex flex-col items-center justify-center backdrop-blur-sm bg-black/20 text-white text-sm p-4 opacity-0 group-hover:opacity-100 transition duration-300 rounded-lg overflow-y-auto text-center">
                  <p className="max-w-[90%] mx-auto text-justify leading-relaxed">
                    We aim to create a comprehensive dataset from 6 global centers, offering 5 dataset types: i) multi-centre train-test split, ii) polyp size-based split, iii) data center-wise split, iv) modality split (test only), and v) one hidden center test. Participants will be evaluated on all types. The dataset includes detection bounding boxes, pixel-wise segmentation, and negative samples.
                  </p>
                  <button className="mt-2 bg-white text-black font-semibold rounded-2xl cursor-pointer hover:scale-105 duration-300 px-2.5 py-2" onClick={EndoCVLink}>Get this DataSet</button>
                </div>
              </div>
              <div className="h-[20%] flex items-center justify-center text-center">
                <h2 className="text-lg font-bold group-hover:text-blue-200 duration-300 cursor-pointer" onClick={EndoCVLink}>
                  Endocv 2021
                </h2>
              </div>
            </div>

            <div className="aspect-[2/2] rounded-lg shadow-md p-4 flex flex-col hover:cursor-pointer hover:scale-105 duration-300 group relative overflow-hidden" onClick={KvasirInstrumentLink}>
              <div className="h-[80%] overflow-hidden rounded-lg mb-2 relative">
                <img src={KvasirInstrument} alt="CIRRMRI600" className="w-full h-full object-cover rounded-lg transition duration-300"/>
                <div className="absolute inset-0 flex flex-col items-center justify-center backdrop-blur-sm bg-black/20 text-white text-sm p-4 opacity-0 group-hover:opacity-100 transition duration-300 rounded-lg overflow-y-auto text-center">
                  <p className="max-w-[90%] mx-auto text-justify leading-relaxed">
                    The Kvasir-Instrument dataset (170 MB) includes 590 endoscopic tool images with corresponding ground truth masks. Image resolutions range from 720×576 to 1280×1024 and are encoded in JPEG format.
                    It is the first GI tract organ tools dataset, offering a train-test split for method development. Bounding box coordinates are stored in a JSON file for automatic tool segmentation research.
                  </p>
                  <button className="mt-2 bg-white text-black font-semibold rounded-2xl cursor-pointer hover:scale-105 duration-300 px-2.5 py-2" onClick={KvasirInstrumentLink}>Get this DataSet</button>
                </div>
              </div>
              <div className="h-[20%] flex items-center justify-center text-center">
                <h2 className="text-lg font-bold group-hover:text-blue-200 duration-300 cursor-pointer" onClick={KvasirInstrumentLink}>
                  Kvasir-Instrument
                </h2>
              </div>
            </div>


            <div className="aspect-[2/2] rounded-lg shadow-md p-4 flex flex-col hover:cursor-pointer hover:scale-105 duration-300 group relative overflow-hidden" onClick={KvasirsessileLink}>
              <div className="h-[80%] overflow-hidden rounded-lg mb-2 relative">
                <img src={Kvasirsessile} alt="CIRRMRI600" className="w-full h-full object-cover rounded-lg transition duration-300"/>
                <div className="absolute inset-0 flex flex-col items-center justify-center backdrop-blur-sm bg-black/20 text-white text-sm p-4 opacity-0 group-hover:opacity-100 transition duration-300 rounded-lg overflow-y-auto text-center">
                  <p className="max-w-[90%] mx-auto text-justify leading-relaxed">
                    The Kvasir-SEG dataset (size 46.2 MB) contains 1000 polyp images and their corresponding ground truth from the Kvasir Dataset v2. 
                    The resolution of the images contained in Kvasir-SEG varies from 332×487 to 1920×1072 pixels. The images and its corresponding masks are stored in two separate 
                    folders with the same filename. The image files are encoded using JPEG compression, and online browsing is facilitated. The open-access dataset can be easily downloaded for research and educational purposes.
                  </p>
                  <button className="mt-2 bg-white text-black font-semibold rounded-2xl cursor-pointer hover:scale-105 duration-300 px-2.5 py-2" onClick={KvasirsessileLink}>Get this DataSet</button>
                </div>
              </div>
              <div className="h-[20%] flex items-center justify-center text-center">
                <h2 className="text-lg font-bold group-hover:text-blue-200 duration-300 cursor-pointer" onClick={KvasirsessileLink}>
                  Kvasir-sessile
                </h2>
              </div>
            </div>


            <div className="aspect-[2/2] rounded-lg shadow-md p-4 flex flex-col hover:cursor-pointer hover:scale-105 duration-300 group relative overflow-hidden" onClick={EndoTact2021}>
              <div className="h-[80%] overflow-hidden rounded-lg mb-2 relative">
                <img src={Endotact2020} alt="CIRRMRI600" className="w-full h-full object-cover rounded-lg transition duration-300"/>
                <div className="absolute inset-0 flex flex-col items-center justify-center backdrop-blur-sm bg-black/20 text-white text-sm p-4 opacity-0 group-hover:opacity-100 transition duration-300 rounded-lg overflow-y-auto text-center">
                  <p className="max-w-[90%] mx-auto text-justify leading-relaxed">
                    We aim to create a comprehensive dataset from 6 global centers, offering 5 dataset types: i) multi-centre train-test split, ii) polyp size-based split, iii) data center-wise split, iv) modality split (test only), and v) 
                    one hidden center test. Participants will be evaluated on all types. The dataset includes detection bounding boxes, pixel-wise segmentation, and negative samples.
                  </p>
                  <button className="mt-2 bg-white text-black font-semibold rounded-2xl cursor-pointer hover:scale-105 duration-300 px-2.5 py-2" onClick={EndoTact2021}>Get this DataSet</button>
                </div>
              </div>
              <div className="h-[20%] flex items-center justify-center text-center">
                <h2 className="text-lg font-bold group-hover:text-blue-200 duration-300 cursor-pointer" onClick={EndoTact2021}>
                  Endotect 2020 Challenge Dataset
                </h2>
              </div>
            </div>



            <div className="aspect-[2/2] rounded-lg shadow-md p-4 flex flex-col hover:cursor-pointer hover:scale-105 duration-300 group relative overflow-hidden" onClick={MedicopolypoLink}>
              <div className="h-[80%] overflow-hidden rounded-lg mb-2 relative">
                <img src={Medicopolypo} alt="CIRRMRI600" className="w-full h-full object-cover rounded-lg transition duration-300"/>
                <div className="absolute inset-0 flex flex-col items-center justify-center backdrop-blur-sm bg-black/20 text-white text-sm p-4 opacity-0 group-hover:opacity-100 transition duration-300 rounded-lg overflow-y-auto text-center">
                  <p className="max-w-[90%] mx-auto text-justify leading-relaxed">
                   The Medico Automatic Polyp Segmentation Challenge aims to benchmark semantic segmentation algorithms for accurate and efficient detection of all polyp types using a publicly available dataset. 
                   By providing 1,000 segmented images and a separate test set, the challenge emphasizes robustness, speed, and generalization, encouraging multimedia researchers to contribute impactful solutions to medical diagnostics.
                  </p>
                  <button className="mt-2 bg-white text-black font-semibold rounded-2xl cursor-pointer hover:scale-105 duration-300 px-2.5 py-2" onClick={MedicopolypoLink}>Get this DataSet</button>
                </div>
              </div>
              <div className="h-[20%] flex items-center justify-center text-center">
                <h2 className="text-lg font-bold group-hover:text-blue-200 duration-300 cursor-pointer" onClick={MedicopolypoLink}>
                  Medico automatic polyp segmentation dataset
                </h2>
              </div>
            </div>


            <div className="aspect-[2/2] rounded-lg shadow-md p-4 flex flex-col hover:cursor-pointer hover:scale-105 duration-300 group relative overflow-hidden" onClick={KvasircapsuleLink}>
              <div className="h-[80%] overflow-hidden rounded-lg mb-2 relative">
                <img src={Kvasir} alt="CIRRMRI600" className="w-full h-full object-cover rounded-lg transition duration-300"/>
                <div className="absolute inset-0 flex flex-col items-center justify-center backdrop-blur-sm bg-black/20 text-white text-sm p-4 opacity-0 group-hover:opacity-100 transition duration-300 rounded-lg overflow-y-auto text-center">
                  <p className="max-w-[90%] mx-auto text-justify leading-relaxed">
                   This paper introduces **Kvasir-Capsule**, a large-scale video capsule endoscopy dataset containing over 4.7 million frames, 
                   including 47,238 medically verified and annotated images from 14 anomaly classes. By addressing the lack of accessible, labeled medical data, 
                   this dataset aims to advance AI-driven diagnostic tools for VCE, helping improve anomaly detection and reduce manual workload in clinical practice.
                  </p>
                  <button className="mt-2 bg-white text-black font-semibold rounded-2xl cursor-pointer hover:scale-105 duration-300 px-2.5 py-2" onClick={KvasircapsuleLink}>Get this DataSet</button>
                </div>
              </div>
              <div className="h-[20%] flex items-center justify-center text-center">
                <h2 className="text-lg font-bold group-hover:text-blue-200 duration-300 cursor-pointer" onClick={KvasircapsuleLink}>
                  Kvasir-capsule
                </h2>
              </div>
            </div>



            <div className="aspect-[2/2] rounded-lg shadow-md p-4 flex flex-col hover:cursor-pointer hover:scale-105 duration-300 group relative overflow-hidden" onClick={KvasirCapsuleLink}>
              <div className="h-[80%] overflow-hidden rounded-lg mb-2 relative">
                <img src={KvasirCapsule} alt="CIRRMRI600" className="w-full h-full object-cover rounded-lg transition duration-300"/>
                <div className="absolute inset-0 flex flex-col items-center justify-center backdrop-blur-sm bg-black/20 text-white text-sm p-4 opacity-0 group-hover:opacity-100 transition duration-300 rounded-lg overflow-y-auto text-center">
                  <p className="max-w-[90%] mx-auto text-justify leading-relaxed">
                   This paper proposes **NanoNet**, a lightweight deep learning model designed for real-time segmentation in video capsule endoscopy and colonoscopy, achieving high accuracy with significantly fewer parameters. 
                   With only \~36,000 parameters, NanoNet balances speed, model complexity, and performance, making it well-suited for deployment on low-end endoscope hardware in clinical settings.
                  </p>
                  <button className="mt-2 bg-white text-black font-semibold rounded-2xl cursor-pointer hover:scale-105 duration-300 px-2.5 py-2" onClick={KvasirCapsuleLink}>Get this DataSet</button>
                </div>
              </div>
              <div className="h-[20%] flex items-center justify-center text-center">
                <h2 className="text-lg font-bold group-hover:text-blue-200 duration-300 cursor-pointer" onClick={KvasirCapsuleLink}>
                  KvasirCapsule-SEG
                </h2>
              </div>
            </div>






          </div>
        </div>
      </div>
    </section>
  );
};

export default DevelopConstact;
