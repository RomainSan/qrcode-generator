import { useState } from "react";
import QRCode from "qrcode";
import { AiOutlineQrcode } from "react-icons/ai";

const QrCode = () => {
  const [url, setUrl] = useState("");
  const [qrcode, setQrcode] = useState("");
  const GenerateQrcode = (e) => {
    setUrl(e.target.value);
    QRCode.toDataURL(
      url,
      { width: 500, margin: 2, color: { dark: "#424242", light: "#ffffff" } },
      (err, url) => {
        if (err) return console.error(err);
        setQrcode(url);
      }
    );
  };
  return (
    <div className="bg-gray-900 h-screen">
      <div className="w-full flex justify-center py-10 gap-2 bg-black/40">
        <input
          type="text"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          className="border p-2 rounded outline-none duration-200 focus:shadow-md"
          placeholder="https://exemple.com"
        />
        <button
          onClick={(e) => GenerateQrcode(e)}
          className="bg-red-500 py-2 px-4 text-white rounded uppercase hover:bg-red-600 duration-300 flex items-center gap-x-2"
        >
          generate
          <AiOutlineQrcode className="text-xl" />
        </button>
      </div>
      {qrcode && (
        <div className="flex flex-col items-center mt-10">
          <img src={qrcode} alt="qrcode" className="w-72 shadow-lg rounded" />
          <a
            href={qrcode}
            download="qrcode.png"
            className="bg-amber-500 py-2 px-4 rounded text-white uppercase mt-5 hover:bg-amber-600 duration-300"
          >
            download
          </a>
        </div>
      )}
    </div>
  );
};

export default QrCode;
