const {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
  } = require("@google/generative-ai");
  
  const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
  const genAI = new GoogleGenerativeAI(apiKey);
  
  const model = genAI.getGenerativeModel({
    model: "gemini-2.0-flash",
  });
  
  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 40,
    maxOutputTokens: 8192,
    responseMimeType: "application/json",
  };
  

  export const GenerateCourseLayout_AI = model.startChat({
      generationConfig,
      history: [
        {
          role: "user",
          parts: [
            {text: "Generate A Course Tutorial on following details with field as CourseName, Description, Along with ChapterName, About, duration:  category: \"Programming\" ,Topic: Python, level: basic, Duration: 1 hours , NoOfChapters: 5, in JSON format"},
          ],
        },
        {
          role: "model",
          parts: [
            {text: "```json\n{\n  \"CourseName\": \"Python Programming: A Beginner's Guide\",\n  \"Description\": \"This course provides a foundational understanding of Python programming, suitable for individuals with no prior programming experience. You'll learn the basics of Python syntax, data structures, control flow, and object-oriented programming, enabling you to write simple programs and solve practical problems.\",\n  \"Category\": \"Programming\",\n  \"Topic\": \"Python\",\n  \"Level\": \"Basic\",\n  \"Duration\": \"1 hour\",\n  \"NoOfChapters\": 5,\n  \"Chapters\": [\n    {\n      \"ChapterName\": \"Chapter 1: Introduction to Python\",\n      \"About\": \"This chapter introduces you to Python, its history, advantages, and its diverse applications. We'll guide you through the installation process and set up your development environment.  We'll also cover the difference between Python 2 and 3, emphasizing the best practices for starting with Python 3.\",\n      \"Duration\": \"12 minutes\"\n    },\n    {\n      \"ChapterName\": \"Chapter 2: Data Types and Variables\",\n      \"About\": \"Learn about fundamental data types in Python, including integers, floats, strings, and booleans. You'll discover how to declare variables, assign values, and perform basic arithmetic operations.  We will also cover variable naming conventions and the importance of comments in your code.\",\n      \"Duration\": \"12 minutes\"\n    },\n    {\n      \"ChapterName\": \"Chapter 3: Control Flow (Conditional Statements)\",\n      \"About\": \"This chapter focuses on control flow statements like `if`, `elif`, and `else`. You'll learn how to make decisions in your code based on conditions and implement logic for different scenarios. We'll explore comparison operators and logical operators.\",\n      \"Duration\": \"12 minutes\"\n    },\n    {\n      \"ChapterName\": \"Chapter 4: Loops (For and While)\",\n      \"About\": \"Master the concept of loops using `for` and `while` statements.  You'll learn how to iterate over sequences of data, repeat code blocks, and create powerful algorithms. We'll also cover `break` and `continue` statements for controlling loop execution.\",\n      \"Duration\": \"12 minutes\"\n    },\n    {\n      \"ChapterName\": \"Chapter 5: Functions\",\n      \"About\": \"Discover the power of functions for code organization and reusability. You'll learn how to define functions, pass arguments, return values, and understand the concept of scope. We'll also explore built-in Python functions and introduce the basics of importing modules.\",\n      \"Duration\": \"12 minutes\"\n    }\n  ]\n}\n```"},
          ],
        },
      ],
    });
  
    // const result = await chatSession.sendMessage("INSERT_INPUT_HERE");
    // console.log(result.response.text());
