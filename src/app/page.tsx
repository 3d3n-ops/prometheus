// app/page.tsx
"use client";

import { useState, useEffect } from "react";
import ReactPlayer from "react-player";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function Home() {
  const [prompt, setPrompt] = useState("");
  const [jobId, setJobId] = useState<string | null>(null);
  const [jobStatus, setJobStatus] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Poll for job status when we have a jobId
  useEffect(() => {
    if (!jobId) return;

    const intervalId = setInterval(async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/job/${jobId}`
        );
        setJobStatus(response.data);

        if (
          response.data.status === "completed" ||
          response.data.status === "failed"
        ) {
          clearInterval(intervalId);
          setIsLoading(false);

          if (response.data.status === "failed") {
            setError(response.data.error);
          }
        }
      } catch (error) {
        clearInterval(intervalId);
        setIsLoading(false);
        setError("Failed to fetch job status");
      }
    }, 2000);

    return () => clearInterval(intervalId);
  }, [jobId]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    setJobId(null);
    setJobStatus(null);

    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/generate`,
        {
          prompt,
        }
      );
      setJobId(response.data.job_id);
    } catch (error) {
      setIsLoading(false);
      setError("Failed to submit request");
    }
  };

  return (
    <main className="min-h-screen p-4 md:p-8 bg-black">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-center">Prometheus</h1>
        <p className="text-center mb-8">Visual Math Problem Solver</p>

        <form onSubmit={handleSubmit} className="mb-8">
          <div className="mb-4">
            <textarea
              className="w-full p-3 border rounded-md shadow-sm focus:ring focus:ring-blue-300"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="Describe a math problem to visualize (e.g., 'Show how to derive the area of a circle using calculus')"
              rows={4}
              required
            />
          </div>
          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 disabled:bg-blue-400"
          >
            {isLoading ? "Generating visualization..." : "Generate"}
          </button>
        </form>

        {error && (
          <div className="p-4 mb-6 bg-red-100 border border-red-400 text-red-700 rounded-md">
            {error}
          </div>
        )}

        {jobStatus?.status === "completed" && (
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h2 className="text-xl font-semibold mb-4">Visualization</h2>
              <div className="aspect-video bg-black rounded-md overflow-hidden">
                <ReactPlayer
                  url={`${process.env.NEXT_PUBLIC_BACKEND_URL}${jobStatus.video_url}`}
                  width="100%"
                  height="100%"
                  controls={true}
                  playing={true}
                />
              </div>
            </div>
            <div>
              <h2 className="text-xl font-semibold mb-4">Explanation</h2>
              <div className="prose p-4 bg-white rounded-md shadow-sm; text-black-900">
                <div
                  dangerouslySetInnerHTML={{
                    __html: jobStatus.explanation.replace(/\n/g, "<br>"),
                  }}
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
