export const getAnswers = async (question) => {
  try {
    const response = await fetch(
      `https://anu-api-js.vercel.app/?question=${question}`,
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    console.log(data.response);
    return (
      data.response ||
      "No response received, Hello! I am ANU, your Assistance & Nurturing Unit.My main purpose is to assist you in any way I can, providing accurate information, guidance, and support across a wide range of topics.Whether you need help solving problems, finding answers to your questions, or just a little direction along your journey, I'm here to help."
    );
  } catch (error) {
    console.error("Error fetching answer:", error);
    return error.message || "Error Happened";
  }
};
