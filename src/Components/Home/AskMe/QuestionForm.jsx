import React, { useState } from "react";
import axios from "axios";

const QuestionForm = () => {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  const getAnswer = async () => {
    try {
      const response = await axios.post(
        "",
        {
          prompt: question,
          max_tokens: 100,
          temperature: 0.7,
          n: 1,
          stop: "\n",
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization:
              "",
          },
        }
      );

      setAnswer(response.data.choices[0].text.trim());
    } catch (error) {
      console.error("Error fetching answer:", error);
      setAnswer("Sorry, I couldn't retrieve an answer at the moment.");
    }
  };

  return (
    <>
      <div className="main grid mx-2 lg:mx-20 lg:grid-cols-2 grid-cols-1 min-h-screen  justify-center items-center">
        <div className="flex justify-center items-center">
          <img
            src="https://s3-alpha-sig.figma.com/img/cf9d/49c1/fe51e78823322240ac23bf5e2782a9ed?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=iPAhf9s3Qrk8fsJid~tCoSYavBQbytSzKUfhh3wo7C06Ms~24tIuPlCHLSxIYwvZ2CVBZtq~GxvuxOut8gXRX~68w1sujGmrt5zij-vKH7v7aGDkNwZ9dAu1JFlbxDzoiPHfMs98tPKufnhTogQtEAMQLOBM3kMTMiNZM-qk30e2sSIHEvyKjm2znxcWdkp-wx8PfSPlM1mqWPU4ABZRMtjXITEcgxoMSjx0jn4U~LC76cwBXScyrYfZY0I1x8F~G-WlBHJoqzvr1s8m2FdGuTXhpxCV3IIkr~dxAsONgYrirT4LBUq9ZQaf02Z5Vkhi5wU039vmJDFUpKoJr66m9g__"
            alt=""
            className="w-[600px] h-auto object-cover rounded-md"
          />
        </div>
        <div className="space-y-10 mx-auto p-4">
          <div>
            {" "}
            <label
              htmlFor="question"
              className="block text-xl mb-2 text-[#0098f1]"
            >
              Ask A Question
            </label>
            <textarea
              id="question"
              name="question"
              className="w-full h-80 p-2 mb-4 border border-[#0098f1] rounded-md"
              rows="4"
              cols="50"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
            ></textarea>
            <button
              type="button"
              className="bg-[#0098f1] float-end text-white py-2  px-4 rounded"
              onClick={getAnswer}
            >
              Get Answer
            </button>
          </div>

          <div className="mt-6">
            {answer && (
              <div className="bg-gray-100 p-4 rounded-md">{answer}</div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default QuestionForm;
