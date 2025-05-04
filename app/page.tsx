export default function HomePage() {
  return (
    <div className="text-gray-800 font-sans">
      {/* 🎬 Hero Section */}
      <section
        className="text-white py-24 px-6 text-center"
        style={{ background: "var(--gradient-hero)" }}
      >
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
          ✨ Bring Your Subtitles to Life with AI
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto text-purple-200 mb-8">
          Edit, enhance, and sync subtitles in real-time. Add emotion,
          animation, and intelligence to every line.
        </p>
        <a
          href="/auth/register"
          className="px-8 py-3 rounded-full font-semibold text-lg transition"
          style={{
            backgroundColor: "var(--color-orange-500)",
            color: "white",
          }}
        >
          Get Started for Free
        </a>
      </section>

      {/* 🚀 Features */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2
            className="text-3xl font-bold mb-8"
            style={{ color: "var(--color-primary)" }}
          >
            What You Can Do
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            <div
              className="p-6 rounded-lg shadow hover:shadow-lg transition"
              style={{ backgroundColor: "var(--color-light-gray)" }}
            >
              <h3
                className="text-xl font-semibold mb-2"
                style={{ color: "var(--color-accent)" }}
              >
                🎥 AI Subtitle Editing
              </h3>
              <p className="text-gray-600">
                Edit subtitles live while previewing your video. Sync easily
                with drag and drop.
              </p>
            </div>
            <div
              className="p-6 rounded-lg shadow hover:shadow-lg transition"
              style={{ backgroundColor: "var(--color-light-gray)" }}
            >
              <h3
                className="text-xl font-semibold mb-2"
                style={{ color: "var(--color-accent)" }}
              >
                🧠 Emotion Recognition
              </h3>
              <p className="text-gray-600">
                Detect tones and tag emotional moments with powerful AI.
              </p>
            </div>
            <div
              className="p-6 rounded-lg shadow hover:shadow-lg transition"
              style={{ backgroundColor: "var(--color-light-gray)" }}
            >
              <h3
                className="text-xl font-semibold mb-2"
                style={{ color: "var(--color-accent)" }}
              >
                🌐 Collaborative Editing
              </h3>
              <p className="text-gray-600">
                Share and edit subtitle projects with your team securely.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 🔄 How It Works */}
      <section
        className="py-20 px-6"
        style={{ backgroundColor: "var(--color-light-gray)" }}
      >
        <div className="max-w-5xl mx-auto text-center">
          <h2
            className="text-3xl font-bold mb-12"
            style={{ color: "var(--color-primary)" }}
          >
            How It Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            <div>
              <span
                className="text-4xl font-bold"
                style={{ color: "var(--color-orange-500)" }}
              >
                1
              </span>
              <h3 className="text-xl font-semibold mt-2 mb-1">Upload Video</h3>
              <p className="text-gray-600">
                Start by uploading your video from any device or link.
              </p>
            </div>
            <div>
              <span
                className="text-4xl font-bold"
                style={{ color: "var(--color-orange-600)" }}
              >
                2
              </span>
              <h3 className="text-xl font-semibold mt-2 mb-1">
                Edit Subtitles
              </h3>
              <p className="text-gray-600">
                Type, adjust, or AI-generate subtitles in a clean UI.
              </p>
            </div>
            <div>
              <span
                className="text-4xl font-bold"
                style={{ color: "var(--color-orange-700)" }}
              >
                3
              </span>
              <h3 className="text-xl font-semibold mt-2 mb-1">
                Export & Share
              </h3>
              <p className="text-gray-600">
                Download as SRT, JSON, or share online with animations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 💬 CTA */}
      <section
        className="py-20 px-6 text-center text-white"
        style={{ background: "var(--gradient-hero)" }}
      >
        <h2 className="text-3xl font-bold mb-6">
          Ready to Start Editing Smarter?
        </h2>
        <p className="text-purple-200 max-w-xl mx-auto mb-8">
          Sign up now and start editing subtitles with emotion and AI in
          seconds.
        </p>
        <a
          href="/auth/register"
          className="px-8 py-3 rounded-full font-semibold text-lg transition"
          style={{ backgroundColor: "var(--color-orange-500)", color: "white" }}
        >
          Try It Free →
        </a>
      </section>
    </div>
  );
}
