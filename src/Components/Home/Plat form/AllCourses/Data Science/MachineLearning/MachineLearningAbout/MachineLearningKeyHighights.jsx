import React, { useState } from "react";

function MachineLearningKeyHighights() {
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
              <li>
                Comprehensive modules covering supervised & unsupervised
                learning
              </li>
              <li>Hands-on projects using real-world datasets</li>
              <li>Training in model building, evaluation & deployment</li>
              <li>Includes deep learning and neural networks basics</li>
              <li>
                Certificate upon completion from reputed e-learning platform
              </li>
              <li>Access to pre-recorded and live mentoring sessions</li>
              <li>Learn Python, Scikit-learn, TensorFlow, and Keras</li>
              <li>Interview prep, resume support, and career guidance</li>
              <li>Industry-vetted curriculum with GenAI integration</li>
              <li>Cloud-based experimentation and model tracking</li>
            </ul>
          </div>
        );
      case 1:
        return (
          <div className="p-3 space-y-2">
            <p className="text-xl font-medium text-white pl-2">Key Concepts</p>
            <ul className="space-y-2 font-normal list-disc pl-6">
              <li>Linear and Logistic Regression</li>
              <li>Decision Trees and Random Forests</li>
              <li>Support Vector Machines</li>
              <li>Clustering: K-Means, Hierarchical</li>
              <li>Principal Component Analysis (PCA)</li>
              <li>Natural Language Processing (NLP)</li>
              <li>Neural Networks & Deep Learning</li>
              <li>Model validation and tuning techniques</li>
            </ul>
          </div>
        );
      case 2:
        return (
          <div className="p-3 space-y-2">
            <p className="text-xl font-medium text-white pl-2">Applications</p>
            <ul className="space-y-2 font-normal list-disc pl-6">
              <li>Machine Learning Engineer</li>
              <li>Data Scientist</li>
              <li>AI Researcher</li>
              <li>Business Intelligence Developer</li>
              <li>Computer Vision Specialist</li>
              <li>NLP Engineer</li>
              <li>Risk Analyst</li>
              <li>Recommendation Systems Developer</li>
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
              <li>Strong grasp of ML algorithms & mathematical intuition</li>
              <li>Hands-on with Python, NumPy, Pandas, Matplotlib</li>
              <li>Model building, optimization, and deployment</li>
              <li>Working with structured, unstructured & real-time data</li>
              <li>Ability to build and evaluate predictive models</li>
              <li>Deep learning fundamentals with TensorFlow/Keras</li>
              <li>Collaborative tools like Git, MLflow, and cloud platforms</li>
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
              <li>Beginners curious about AI & Machine Learning</li>
              <li>Software developers seeking to upskill in ML</li>
              <li>Data analysts and engineers transitioning to ML roles</li>
              <li>
                Students and graduates from computer science or STEM fields
              </li>
              <li>Working professionals aiming for AI-driven career paths</li>
              <li>Anyone passionate about building smart, automated systems</li>
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
            Machine Learning Course Highlights
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

export default MachineLearningKeyHighights;
