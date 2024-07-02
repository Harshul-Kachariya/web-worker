import { useState, useEffect } from "react";
import { Worker, Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";

const PdfViewer = () => {
  const [file, setFile] = useState<any>(null);
  const [fileUrl, setFileUrl] = useState<any>(null);
  const [pdfBlob, setPdfBlob] = useState<Blob | null>(null);
  const [pdfBlobUrl, setPdfBlobUrl] = useState<string>("");

  const defaultLayoutPluginInstance = defaultLayoutPlugin();

  useEffect(() => {
    const fetchData = async () => {
      if (file) {
        const url = URL.createObjectURL(file);
        setPdfBlobUrl(url);
      } else if (fileUrl) {
        const response = await fetch(fileUrl);
        const blob = await response.blob();
        const url = URL.createObjectURL(blob);
        setPdfBlob(blob);
        setPdfBlobUrl(url);
      } else {
        console.log("Error while loading pdf");
      }
    };

    fetchData();
  }, [file, fileUrl]);

  const handleChange = (e: any) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    } else {
      setFileUrl(e.target.value);
    }
  };

  return (
    <div className="relative p-5">
      <div className="flex gap-4">
        <input
          id="pdfFile"
          type="file"
          accept="application/pdf"
          onChange={handleChange}
          className="inline-flex justify-center items-center p-1 text-md font-bold shadow-2xl rounded-lg text-center w-64 h-10 text-gray-500 "
        />
        <input
          id="pdfFileUrl"
          type="text"
          placeholder="Enter file url"
          onChange={handleChange}
          className="inline-flex justify-center items-center p-1 text-lg font-bold shadow-2xl rounded-lg text-center w-full h-10 text-gray-500  "
        />
      </div>

      <div className="w-full h-[calc(100vh-90px)] mt-5">
        {pdfBlobUrl && (
          <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.js ">
            <Viewer
              fileUrl={pdfBlobUrl}
              plugins={[defaultLayoutPluginInstance]}
            />
          </Worker>
        )}
      </div>
    </div>
  );
};

export default PdfViewer;
