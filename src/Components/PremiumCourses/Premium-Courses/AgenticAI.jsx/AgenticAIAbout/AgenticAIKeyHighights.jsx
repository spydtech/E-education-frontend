import React, { useState } from "react";

function AgenticAIKeyHighlights() {
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
              <li>Introduction to Agentic AI and Autonomous Agents</li>
              <li>Role of agents in AI ecosystems and digital workflows</li>
              <li>Frameworks and tools used to build agentic systems</li>
              <li>End-to-end agent design, reasoning, and decision making</li>
              <li>
                Hands-on with planning, memory, and multi-agent communication
              </li>
              <li>Ethical considerations in building autonomous systems</li>
              <li>Real-world project implementation using Agentic tools</li>
              <li>Certification on completion with lifetime content access</li>
            </ul>
          </div>
        );
      case 1:
        return (
          <div className="p-3 space-y-2">
            <p className="text-xl font-medium text-white pl-2">Key Concepts</p>
            <ul className="space-y-2 font-normal list-disc pl-6">
              <li>What are Agents and Agent Architectures</li>
              <li>Planning, Reasoning, and Decision-making</li>
              <li>Memory Systems: Short-term, Long-term, Episodic</li>
              <li>Autonomy vs Control in AI agents</li>
              <li>Integration of LLMs into agent workflows</li>
              <li>Multi-agent collaboration and communication</li>
              <li>Agent simulation, feedback loops, and refinement</li>
            </ul>
          </div>
        );
      case 2:
        return (
          <div className="p-3 space-y-2">
            <p className="text-xl font-medium text-white pl-2">Applications</p>
            <ul className="space-y-2 font-normal list-disc pl-6">
              <li>AI Assistants for Personal Productivity</li>
              <li>Automated Research and Data Gathering Agents</li>
              <li>Customer Support & Helpdesk Automation</li>
              <li>Finance, Trading & Market Monitoring Agents</li>
              <li>Autonomous Agents for Software Engineering</li>
              <li>AI-driven Process Automation in Enterprises</li>
              <li>Exploratory Learning Agents in Education</li>
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
              <li>Designing and Building Autonomous Agents</li>
              <li>Working with LangChain, AutoGen, CrewAI etc.</li>
              <li>Task planning, scheduling, and orchestration</li>
              <li>Memory design, data persistence and retrieval</li>
              <li>Inter-agent communication and coordination</li>
              <li>Agent deployment and real-time evaluation</li>
              <li>Debugging, refining, and performance optimization</li>
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
              <li>AI enthusiasts and professionals</li>
              <li>Developers interested in autonomous systems</li>
              <li>Data scientists expanding into agent-based AI</li>
              <li>Startup founders working on automation/AI tools</li>
              <li>Product managers and tech leads in AI domains</li>
              <li>Students & researchers exploring AI innovations</li>
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
            Agentic AI Course Highlights
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

export default AgenticAIKeyHighlights;
