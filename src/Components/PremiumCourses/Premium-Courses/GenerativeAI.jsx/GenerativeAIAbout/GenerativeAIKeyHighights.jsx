import React, { useState } from "react";

function GenerativeAIKeyHighlights() {
  const [selectedItem, setSelectedItem] = useState(0);

  const data = [
    { label: "Overview" },
    { label: "Key Concepts" },
    { label: "Applications" },
    { label: "Skills Developed" },
    { label: "Target Audience" },
  ];

  const handleClick = (index) => {
    setSelectedItem(index);
  };

  const renderContent = () => {
    switch (selectedItem) {
      case 0:
        return (
          <div className="p-3 space-y-2">
            <p className="text-xl font-medium text-white pl-2">Overview</p>
            <ul className="space-y-2 font-normal list-disc pl-6">
              <li>Explore the fundamentals of Generative AI</li>
              <li>
                Understand large language models like GPT, PaLM, and Claude
              </li>
              <li>Hands-on with text, image, and audio generation tools</li>
              <li>
                Work with platforms like OpenAI, Hugging Face, and Stability AI
              </li>
              <li>Build AI applications using real-world datasets</li>
              <li>Learn prompt engineering and fine-tuning basics</li>
              <li>Ethics, bias, and safety in generative systems</li>
              <li>End-to-end project experience with deployment</li>
              <li>Certification with access to lifetime learning resources</li>
            </ul>
          </div>
        );
      case 1:
        return (
          <div className="p-3 space-y-2">
            <p className="text-xl font-medium text-white pl-2">Key Concepts</p>
            <ul className="space-y-2 font-normal list-disc pl-6">
              <li>Generative Adversarial Networks (GANs)</li>
              <li>Transformer models and LLMs</li>
              <li>Prompt Engineering & Zero-shot Learning</li>
              <li>
                Diffusion models (used in tools like DALL·E and Midjourney)
              </li>
              <li>Fine-tuning vs. Few-shot learning</li>
              <li>Tokenization, embeddings, and attention mechanisms</li>
              <li>Ethical concerns: hallucinations, bias, and misuse</li>
            </ul>
          </div>
        );
      case 2:
        return (
          <div className="p-3 space-y-2">
            <p className="text-xl font-medium text-white pl-2">Applications</p>
            <ul className="space-y-2 font-normal list-disc pl-6">
              <li>Text generation for blogs, emails, and chatbots</li>
              <li>AI-powered art, logo, and image generation</li>
              <li>Music, speech synthesis, and video generation</li>
              <li>AI coding assistants and code generation</li>
              <li>Educational tools and personalized learning apps</li>
              <li>AI-driven storytelling and game design</li>
            </ul>
          </div>
        );
      case 3:
        return (
          <div className="p-3 space-y-2">
            <p className="text-xl font-medium text-white pl-2">
              Skills Developed
            </p>
            <ul className="space-y-2 font-normal list-disc pl-6">
              <li>Understanding and applying foundational AI concepts</li>
              <li>Using APIs like OpenAI, Cohere, and Hugging Face</li>
              <li>Designing prompts for various tasks</li>
              <li>Working with AI image and text generation models</li>
              <li>Integrating LLMs into real-world applications</li>
              <li>Deploying AI apps to the web</li>
              <li>Ethical decision-making in generative AI projects</li>
            </ul>
          </div>
        );
      case 4:
        return (
          <div className="p-3 space-y-2">
            <p className="text-xl font-medium text-white pl-2">
              Target Audience
            </p>
            <ul className="space-y-2 font-normal list-disc pl-6">
              <li>Students curious about AI and deep learning</li>
              <li>Developers looking to build intelligent apps</li>
              <li>Designers interested in AI-powered creativity tools</li>
              <li>Educators and content creators exploring AI automation</li>
              <li>Tech entrepreneurs building next-gen AI products</li>
              <li>Anyone fascinated by the future of human-AI collaboration</li>
            </ul>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="px-3 md:mb-4">
      <div className="md:flex justify-around">
        <div className="bg-[#0098F1] text-white pb-5 md:w-2/5">
          {renderContent()}
        </div>
        <div className="my-3">
          <p className="font-bold underline-offset-2 underline text-xl text-[#0098F1]">
            Generative AI Course Highlights
          </p>
          {data.map((item, index) => (
            <ul key={index}>
              <li
                onClick={() => handleClick(index)}
                className={`pt-4 hover:cursor-pointer text-xl my-2 md:h-16 md:w-[210px] border-2 rounded-md text-center ${
                  selectedItem === index
                    ? "bg-[#0098f1] text-white border-none"
                    : ""
                }`}
              >
                {item.label}
              </li>
            </ul>
          ))}
        </div>
      </div>
    </div>
  );
}

export default GenerativeAIKeyHighlights;
