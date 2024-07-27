import { Button } from "@/components/ui/button";
import {
  BrainCog,
  Eye,
  EyeIcon,
  GlobeIcon,
  MonitorSmartphoneIcon,
  ServerIcon,
  ZapIcon,
} from "lucide-react";
import Link from "next/link";

const features = [
  {
    name: "Store your PDFs Documents",
    description:
      "Keep all your important PDF files securely stored and easily accessible anytime, anywhere.",
    icon: GlobeIcon,
  },
  {
    name: "Blazing Fast Response",
    description:
      "Experience litening fast answers to your queries, with instant access to your documents.",
    icon: ZapIcon,
  },
  {
    name: "Chat Memorization",
    description:
      "Our intelligent chatbot memorize your previous conversations, providing you with a seamless and personalized experience.",
    icon: BrainCog,
  },
  {
    name: "Interactive PDF Viewer",
    description:
      "Engage with ypur PDFs like never before using our interactive PDF viewer.",
    icon: EyeIcon,
  },
  {
    name: "Cloud Backup",
    description:
      "Rest assured that your data is safe and secure, backed up in the cloud for easy access and recovery.",
    icon: ServerIcon,
  },
  {
    name: "Responsive Across Devices",
    description:
      "Access and chat with your PDFs documents from anywhere, anytime, on any device.",
    icon: MonitorSmartphoneIcon,
  },
];

export default function Home() {
  return (
    <main className="flex-1 overflow-scroll bg-gradient-to-bl from-white to-indigo-600 p-2 lg:p-5">
      <div className="rounded-md bg-white py-24 drop-shadow-xl sm:py-32">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-center px-6 lg:px-8">
          <div className="mx-auto max-w-2xl sm:text-center">
            <h2 className="text-base font-semibold leading-7 text-indigo-600">
              Your Interactive PDF Companion
            </h2>

            <p className="sm: mt-2 text-3xl text-6xl font-bold tracking-tight text-zinc-900">
              Transform your PDFs into Interactive Conversations.
            </p>

            <p className="mt-6 text-lg leading-8 text-zinc-600">
              Introducing{" "}
              <span className="font-bold text-indigo-600">ChatPDF</span>
              <br />
              <br />
              Upload your documents, and our chatbot will answer questions,
              summarize the content, and answer all your questions. Ideal for
              everyone, <span className="text-indigo-600">ChatPDF</span> turns
              static documents into{" "}
              <span className="font-bold">dynamic conversations, </span>
              enhancing productivity 10x.
            </p>
          </div>

          <Button asChild className="mt-10">
            <Link href="/dashboard">Get Started</Link>
          </Button>
        </div>
      </div>
    </main>
  );
}
