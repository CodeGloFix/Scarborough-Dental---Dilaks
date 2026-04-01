const PHONE_NUMBER = "(416) 439-6776"; // Replace with your actual WhatsApp number (no +, spaces, or dashes)
const PRE_FILLED_MESSAGE = "Hello, I would like to book a dental appointment.";

const WhatsAppButton = () => {
  const href = `https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(PRE_FILLED_MESSAGE)}`;

  return (
    <>
      <style>{`
        @keyframes wa-pulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.5); }
          50%       { box-shadow: 0 0 0 14px rgba(37, 211, 102, 0); }
        }
        .wa-pulse {
          animation: wa-pulse 2.2s ease-in-out infinite;
        }
      `}</style>

      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        className="
          wa-pulse
          fixed bottom-6 right-6 z-50
          flex items-center justify-center
          w-14 h-14 rounded-full
          bg-[#25D366]
          shadow-lg shadow-[#25D366]/40
          transition-transform duration-200 ease-in-out
          hover:scale-110 hover:shadow-xl hover:shadow-[#25D366]/50
          focus:outline-none focus-visible:ring-4 focus-visible:ring-[#25D366]/60
        "
      >
        {/* WhatsApp SVG icon — official brand path */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          fill="white"
          className="w-7 h-7"
          aria-hidden="true"
        >
          <path d="M16.003 2C8.28 2 2 8.28 2 16.003c0 2.478.65 4.877 1.885 6.985L2 30l7.21-1.858A13.94 13.94 0 0 0 16.003 30C23.72 30 30 23.72 30 16.003 30 8.28 23.72 2 16.003 2zm0 25.52a11.49 11.49 0 0 1-5.864-1.607l-.42-.25-4.28 1.103 1.135-4.162-.274-.432A11.472 11.472 0 0 1 4.48 16.003c0-6.355 5.168-11.523 11.523-11.523 6.354 0 11.517 5.168 11.517 11.523 0 6.354-5.163 11.517-11.517 11.517zm6.32-8.627c-.347-.174-2.05-1.011-2.369-1.127-.317-.116-.548-.174-.778.174-.23.347-.892 1.127-1.094 1.358-.2.23-.4.26-.748.087-.347-.174-1.464-.54-2.787-1.72-1.03-.92-1.725-2.055-1.927-2.402-.202-.347-.022-.534.152-.707.156-.155.347-.405.52-.607.174-.203.232-.347.347-.578.116-.23.058-.433-.03-.607-.086-.174-.778-1.878-1.067-2.572-.28-.675-.566-.583-.778-.594l-.663-.012c-.23 0-.606.087-.924.433-.317.347-1.212 1.185-1.212 2.889 0 1.704 1.241 3.352 1.414 3.582.174.23 2.443 3.73 5.918 5.232.826.356 1.47.569 1.972.728.829.263 1.583.226 2.179.137.664-.1 2.05-.837 2.34-1.645.289-.808.289-1.5.202-1.645-.086-.144-.317-.23-.664-.404z" />
        </svg>
      </a>
    </>
  );
};

export default WhatsAppButton;
