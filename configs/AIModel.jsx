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
            {text: "Generate A Course Tutorial on following details with field as Course Name, Description, Along with Chapter Name, About, duration:  category: \"Programming\" ,Topic: Python, level: basic, Duration: 1 hours , NoOfChapters: 5, in JSON format"},
          ],
        },
        {
          role: "model",
          parts: [
            {text: "```json\n{\n  \"Course Name\": \"Python Fundamentals for Beginners\",\n  \"Description\": \"This course provides a gentle introduction to the Python programming language, covering the essential concepts needed to write simple programs and build a solid foundation for more advanced topics. Learn to code with Python through hands-on exercises and real-world examples.\",\n  \"category\": \"Programming\",\n  \"Topic\": \"Python\",\n  \"level\": \"basic\",\n  \"Duration\": \"1 hour\",\n  \"NoOfChapters\": 5,\n  \"Chapters\": [\n    {\n      \"Chapter Name\": \"Chapter 1: Introduction to Python\",\n      \"About\": \"This chapter introduces you to the Python programming language, its history, applications, and benefits. You'll learn how to install Python and the basics of the Python interpreter.\",\n      \"duration\": \"10 minutes\"\n    },\n    {\n      \"Chapter Name\": \"Chapter 2: Variables, Data Types, and Operators\",\n      \"About\": \"This chapter covers fundamental data types like integers, floats, strings, and booleans. You'll learn how to declare variables, assign values, and use operators to perform basic calculations and comparisons.\",\n      \"duration\": \"15 minutes\"\n    },\n    {\n      \"Chapter Name\": \"Chapter 3: Control Flow: Conditionals and Loops\",\n      \"About\": \"This chapter introduces control flow statements: `if`, `elif`, `else` for making decisions and `for` and `while` loops for repeating code blocks. Learn to write programs that respond to different conditions and perform repetitive tasks.\",\n      \"duration\": \"15 minutes\"\n    },\n    {\n      \"Chapter Name\": \"Chapter 4: Working with Strings\",\n      \"About\": \"This chapter delves into string manipulation. You'll learn how to create strings, access individual characters, concatenate strings, and use built-in string methods like `upper()`, `lower()`, `replace()`, and `split()`. Learn about string formatting using f-strings.\",\n      \"duration\": \"10 minutes\"\n    },\n    {\n      \"Chapter Name\": \"Chapter 5: Lists: Storing Collections of Data\",\n      \"About\": \"This chapter introduces lists, a versatile data structure for storing ordered collections of items.  You'll learn how to create lists, access elements, add and remove items, iterate through lists, and use list methods like `append()`, `insert()`, `remove()`, and `sort()`.\",\n      \"duration\": \"10 minutes\"\n    }\n  ]\n}\n```\n"},
          ],
        },
      ],
    });
  
    // const result = await chatSession.sendMessage("INSERT_INPUT_HERE");
    // console.log(result.response.text());
