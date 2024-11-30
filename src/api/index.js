export const getAnswers = async (question) => {
  try {
    const response = await fetch(
      `https://anu-api-js.vercel.app/talk_anu?question=${question}`,
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data.response || "No response received";
  } catch (error) {
    console.error("Error fetching answer:", error);
    return error.message || "Error Happened";
  }
};
