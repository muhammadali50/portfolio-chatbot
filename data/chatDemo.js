export const welcomeMessage =
  "Hi! I’m Muhammad Ali’s portfolio assistant. Ask me about his education, skills, certifications, technologies, or contact information.";

export const suggestedQuestions = [
  "What are Muhammad Ali's main skills?",
  "What is he currently studying?",
  "What AI technologies does he work with?",
  "Does he work with web development?",
  "What automation tool does he use?",
  "What certifications does he have?",
  "How can I contact him?",
];

export function getDemoResponse(question) {
  const normalizedQuestion = question.toLowerCase();

  if (normalizedQuestion.includes("main skills") || normalizedQuestion.includes("skill")) {
    return "Muhammad Ali works with frontend development, backend development, artificial intelligence, databases, and automation. His toolkit includes HTML, CSS, JavaScript, Next.js, Python, Django, MySQL, Machine Learning, Deep Learning, Computer Vision, NLP, and n8n.";
  }

  if (
    normalizedQuestion.includes("studying") ||
    normalizedQuestion.includes("education") ||
    normalizedQuestion.includes("university")
  ) {
    return "Muhammad Ali is pursuing a BS in Artificial Intelligence at Quaid-e-Awam University of Engineering, Science & Technology (QUEST). He is currently in his 3rd year and 6th semester, with an expected graduation year of 2027.";
  }

  if (
    normalizedQuestion.includes("ai technolog") ||
    normalizedQuestion.includes("machine learning") ||
    normalizedQuestion.includes("deep learning") ||
    normalizedQuestion.includes("computer vision") ||
    normalizedQuestion.includes("nlp")
  ) {
    return "His AI areas include Machine Learning, Deep Learning, Computer Vision, and Natural Language Processing. He is building practical experience through academic study and hands-on development work.";
  }

  if (
    normalizedQuestion.includes("web development") ||
    normalizedQuestion.includes("frontend") ||
    normalizedQuestion.includes("backend")
  ) {
    return "Yes. Muhammad Ali works with HTML, CSS, JavaScript, and Next.js for frontend and full-stack applications, plus Python and Django for backend development and MySQL for relational data.";
  }

  if (normalizedQuestion.includes("automation") || normalizedQuestion.includes("n8n")) {
    return "Muhammad Ali uses n8n to build automated workflows that connect applications, APIs, and services while reducing repetitive manual work.";
  }

  if (normalizedQuestion.includes("certificat") || normalizedQuestion.includes("credential")) {
    return "His listed credentials include professional learning through Google and Coursera, training through the National Freelance Training Program (NFTP), and participation in the AI Seekho Hackathon 2026.";
  }

  if (
    normalizedQuestion.includes("contact") ||
    normalizedQuestion.includes("email") ||
    normalizedQuestion.includes("linkedin") ||
    normalizedQuestion.includes("github")
  ) {
    return "You can contact Muhammad Ali at ha0350731@gmail.com, connect with him on LinkedIn at linkedin.com/in/muhammad-ali-1828b829a, or visit github.com/muhammadali50.";
  }

  return "I can help with questions about Muhammad Ali’s education, skills, certifications, AI and web technologies, automation experience, or contact information. Try one of the suggested questions to continue.";
}
