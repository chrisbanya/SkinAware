import { useState, useRef} from "react";
import { Upload, FileText, X } from "lucide-react";
import toast, { Toaster } from "react-hot-toast";

const apiKey = import.meta.env.VITE_AUTODERM_API_KEY;
const baseURL = import.meta.env.VITE_AUTODERM_URL;

export default function FileUpload() {
  const [isDragging, setIsDragging] = useState(false);
  const [file, setFile] = useState(null);
  const [error, setError] = useState("");
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const fileInputRef = useRef(null);

  const MIN_FILE_SIZE = 5 * 1024; // 300Kb in bytes

  const validateFile = (selectedFile) => {
    if (selectedFile.size < MIN_FILE_SIZE) {
      setError(
        `File size must be at least 300KB. Selected file is ${formatFileSize(selectedFile.size)}`
      );
      return false;
    }
    setError("");
    return true;
  };

  const handleDragEnter = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };
  // drop feature
  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);

    const droppedFile = e.dataTransfer.files[0];
    if (droppedFile && validateFile(droppedFile)) {
      setFile(droppedFile);
    }
  };

  const handleFileInput = (e) => {
    const selectedFiles = Array.from(e.target.files);
    setFile((prev) => [...prev, ...selectedFiles]);
  };

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  const removeFile = () => {
    setFile(null);
    setError("");
    fileInputRef.current.value = "";
  };

  const formatFileSize = (bytes) => {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const sizes = ["Bytes", "KB", "MB", "GB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
  };
  const handleSubmit = async (e) => {
    e.stopPropagation();
    if (!file) {
      toast.error("Please select a file");
      return;
    }
    setLoading(true);

    // Api Queries
    const formData = new FormData();
    formData.append("file", file);
    formData.append("language", "en");
    formData.append("simple_names", "True");
    formData.append("model", "autoderm_v2_1");
    formData.append("anon_filter", "false");

    try {
      const res = await fetch(`${baseURL}`, {
        method: "POST",
        headers: {
          "Api-Key": apiKey,
        },
        body: formData,
      });
      if (res.ok) {
        const data = await res.json();
        console.log("data", data);
        console.log("data", data.predictions);
        setData(data.predictions);
        removeFile();
      } else {
        throw new Error(`status_error: ${res.status}`);
      }
    } catch (error) {
      console.error("Error:", error);
    toast.custom((t) => (
      <div
        className={`bg-[#74094D] text-white px-6 py-1 shadow-md rounded ${
          t.visible ? "animate-enter" : "animate-leave"
        }`}
      >
        📛 {error.message}
        <p>Please try again later.</p>
      </div>
    ));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-8  border rounded-2xl shadow-md mx-auto  ">
      <Toaster />
      <div className="mx-auto">
        <div className="flex justify-center items-center gap-4 mb-4">
          <span>
            <Upload className="text-blue-600" />
          </span>
          <h2 className="font-bold" style={{ color: ["#9A9090"] }}>
            Upload Skin Concern Photo
          </h2>
        </div>
        <p
          className="text-center font-bold  mb-5"
          style={{ color: ["#9A9090"] }}
        >
          Upload a clear image for an accurate AI analysis
        </p>
      </div>
      {/* Upload Box */}
      <div
        className={`border-2 border-dashed mx-auto rounded-lg cursor-pointer transition-all duration-200 ${
          isDragging
            ? "border-blue-500 bg-blue-50"
            : "border-gray-300 bg-white hover:border-gray-400 hover:bg-gray-50"
        }`}
        // style={{ width: "760px" }}
        onDragEnter={handleDragEnter}
        onDragLeave={handleDragLeave}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
        onClick={handleClick}
      >
        <div className="h-full flex flex-col items-center justify-center p-8 text-center">
          <Upload
            size={64}
            className={`mb-4 ${isDragging ? "text-blue-500" : "text-gray-400"}`}
          />
          <h3
            className={`text-xl font-medium mb-2 ${isDragging ? "text-blue-700" : "text-gray-700"}`}
          >
            {/* {isDragging ? "Drop files here" : "Upload Files"} */}
            {isDragging && "Drop files here"}
          </h3>
          <p className="font-bold mb-4" style={{ color: ["#9A9090"] }}>
            Click to upload files or drag and drop files to upload
          </p>
          <p className="mb-4 font-bold" style={{ color: ["#9A9090"] }}>
            Min file size: 300Kb
          </p>
          {/* Error Message */}
          {error && (
            <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg">
              <p className="text-red-600 text-sm">{error}</p>
            </div>
          )}

          {/* File Display */}
          {file && (
            <div className="mb-4 p-3 bg-green-50 border border-green-200 rounded-lg max-w-md">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <FileText className="text-green-600" size={20} />
                  <div>
                    <p className="font-medium text-gray-700">{file.name}</p>
                    <p className="text-sm text-gray-500">
                      {formatFileSize(file.size)}
                    </p>
                  </div>
                </div>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    removeFile();
                  }}
                  className="p-1 text-gray-400 hover:text-red-500 transition-colors"
                >
                  <X size={16} />
                </button>
              </div>
            </div>
          )}
        </div>
        <input
          ref={fileInputRef}
          type="file"
          multiple
          className="hidden"
          onChange={handleFileInput}
        />
      </div>
      <div
        className="mx-auto mt-2 flex justify-center "
        // style={{ width: "570px" }}
      >
        <button
          disabled={isLoading || !file}
          onClick={handleSubmit}
          className="px-6 py-2  w-[80%] bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:bg-blue-400 disabled:cursor-not-allowed"
        >
          {isLoading ? "Uploading..." : "Upload Photo"}
        </button>
      </div>
      {data.map((item) => (
        <div
          key={item.classificationId}
          className="flex flex-col items-center justify-center mt-10 mb-4 "
        >
          <div>name: {item.name}</div>
          <div>read more: {item.readMoreUrl}</div>
          <div>confidence: {item.confidence}</div>
        </div>
      ))}
    </div>
  );
}
