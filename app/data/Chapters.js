export const ChaptersData=[
    {
      "Title": "Introduction to Decorators in Python",
      "Learning Level": "Remember",
      "Description": "### What are Decorators?\n\nDecorators are a powerful and expressive feature in Python that allows you to wrap functions or methods with additional functionality without modifying their core implementation. Think of them as a way to 'decorate' a function with extra behavior. They are based on the principle of closures and higher-order functions.\n\n*   **Key Characteristics:**\n    *   Functions that take other functions as arguments.\n    *   Return a new function (often a wrapper). \n    *   Used with the `@` syntax.\n\n### Why Use Decorators?\n\n*   **Code Reusability:** Avoid repetitive code by encapsulating common logic in decorators.\n*   **Improved Readability:** Keeps your core function logic clean and focused.\n*   **DRY (Don't Repeat Yourself):** Promotes modular and maintainable code.",
      "Code_Example": null,
      "Real-World Application": "Decorators are extensively used in web frameworks (Flask, Django) for routing, authentication, authorization, logging, and caching. They also find use in data science and machine learning for profiling function performance.",
      "Exercises & Challenges": [
        {
          "Question": "Define a decorator in your own words.",
          "Type": "short answer"
        },
        {
          "Question": "List three benefits of using decorators.",
          "Type": "short answer"
        }
      ],
      "Documentation Links": [
        {
          "Title": "Python Decorators - PEP 318",
          "URL": "https://peps.python.org/pep-0318/"
        },
        {
          "Title": "Python Decorators - Real Python",
          "URL": "https://realpython.com/primer-on-python-decorators/"
        }
      ]
    },
    {
      "Title": "Basic Decorator Syntax",
      "Learning Level": "Understand",
      "Description": "### Understanding the `@` Syntax\n\nThe `@` symbol is syntactic sugar that simplifies the application of decorators.  Instead of explicitly calling the decorator function, you can place `@decorator_name` before the function definition.\n\n`@my_decorator` is equivalent to `my_function = my_decorator(my_function)`.\n\n### Basic Decorator Structure\n\n1.  **The Decorator Function:**  A function that accepts another function as an argument.\n2.  **The Wrapper Function:** A function defined *inside* the decorator function. This function performs the added functionality and then calls the original function.\n3.  **Return the Wrapper:** The decorator function *returns* the wrapper function.",
      "Code_Example": "<precode>def my_decorator(func):\n    def wrapper():\n        print(\"Before the function call.\")\n        func()\n        print(\"After the function call.\")\n    return wrapper\n\n@my_decorator\ndef say_hello():\n    print(\"Hello!\")\n\nsay_hello()  # Output: Before the function call.\n               #         Hello!\n               #         After the function call.</precode>",
      "Real-World Application": "Used to apply common pre- and post-processing steps to functions, like logging function calls or checking user authentication before executing a specific function.",
      "Exercises & Challenges": [
        {
          "Question": "Explain what the `@` symbol does in the context of decorators.",
          "Type": "short answer"
        },
        {
          "Question": "Write a simple decorator that prints 'Function started' before the decorated function executes and 'Function finished' after it executes.",
          "Type": "coding"
        }
      ],
      "Documentation Links": [
        {
          "Title": "Python Decorators - Programiz",
          "URL": "https://www.programiz.com/python-programming/decorator"
        }
      ]
    },
    {
      "Title": "Understanding the Decorator Process",
      "Learning Level": "Understand",
      "Description": "### Dissecting the Decorator's Behavior\n\nThe process of applying a decorator can be broken down into these steps:\n\n1.  **Function Definition:** The original function is defined.\n2.  **Decorator Application:** The decorator function is called with the original function as its argument.\n3.  **Wrapper Creation:** The decorator function creates a wrapper function (usually with added functionality).\n4.  **Wrapper Return:** The decorator function returns the wrapper function.\n5.  **Function Replacement:** The original function's name is now bound to the wrapper function.\n\nWhen you subsequently call the original function name, you are actually calling the wrapper function, which then may (or may not) call the original function as part of its execution.",
      "Code_Example": "<precode>def greet_decorator(func):\n    def wrapper(name):\n        greeting = func(name)\n        return f\"***{greeting}!***\"\n    return wrapper\n\n@greet_decorator\ndef greet(name):\n    return f\"Hello, {name}\"\n\nprint(greet(\"Alice\")) # Output: ***Hello, Alice!***</precode>",
      "Real-World Application": "Understanding the process helps when debugging or modifying decorators.  It's crucial for understanding how the original function's context and arguments are handled.",
      "Exercises & Challenges": [
        {
          "Question": "Describe the steps involved in applying a decorator to a function.",
          "Type": "short answer"
        },
        {
          "Question": "Draw a diagram illustrating the flow of execution when a decorator is applied to a function.",
          "Type": "diagram"
        }
      ],
      "Documentation Links": [
        {
          "Title": "Python Decorators Demystified",
          "URL": "https://www.learnpython.org/en/Decorators"
        }
      ]
    },
    {
      "Title": "Decorators with Arguments",
      "Learning Level": "Understand",
      "Description": "### Passing Arguments to Decorators\n\nTo make decorators more flexible, you can pass arguments to them. This requires an extra level of nesting.\n\n1.  **Decorator Factory:** Create a function that accepts the decorator arguments. This function returns the actual decorator function (which accepts the function to be decorated).\n2.  **Decorator Function:** This function accepts the function to be decorated.\n3.  **Wrapper Function:** This function accepts the arguments of the decorated function.\n\nThis allows you to configure the behavior of the decorator at the time it's applied.",
      "Code_Example": "<precode>def repeat(num_times):\n    def decorator_repeat(func):\n        def wrapper(*args, **kwargs):\n            for _ in range(num_times):\n                result = func(*args, **kwargs)\n            return result\n        return wrapper\n    return decorator_repeat\n\n@repeat(num_times=3)\ndef greet(name):\n    print(f\"Hello, {name}\")\n\ngreet(\"Bob\")  # Output: Hello, Bob\n           #         Hello, Bob\n           #         Hello, Bob</precode>",
      "Real-World Application": "This is useful for configuring logging levels, cache expiration times, or the number of retries for a failing function.",
      "Exercises & Challenges": [
        {
          "Question": "Explain the purpose of a decorator factory.",
          "Type": "short answer"
        },
        {
          "Question": "Write a decorator that takes an argument for logging level (e.g., 'DEBUG', 'INFO', 'ERROR') and logs the function call with the specified level.",
          "Type": "coding"
        }
      ],
      "Documentation Links": [
        {
          "Title": "Decorators with Arguments - Python Wiki",
          "URL": "https://wiki.python.org/moin/PythonDecorators"
        }
      ]
    },
    {
      "Title": "Preserving Function Metadata: `functools.wraps`",
      "Learning Level": "Understand",
      "Description": "### The Importance of Metadata\n\nWhen you decorate a function, the original function's metadata (name, docstring, etc.) is lost.  The wrapper function's metadata replaces it. This can be problematic for debugging and introspection.\n\n### `functools.wraps`\n\n`functools.wraps` is a decorator that copies the original function's metadata to the wrapper function.  This preserves the function's identity and makes it easier to work with decorated functions.\n\n**Without `functools.wraps`:**\n\n*   `my_function.__name__` returns the wrapper function's name.\n*   `help(my_function)` displays the wrapper function's docstring.\n\n**With `functools.wraps`:**\n\n*   `my_function.__name__` returns the original function's name.\n*   `help(my_function)` displays the original function's docstring.",
      "Code_Example": "<precode>import functools\n\ndef my_decorator(func):\n    @functools.wraps(func)\n    def wrapper(*args, **kwargs):\n        print(\"Before the function call.\")\n        result = func(*args, **kwargs)\n        print(\"After the function call.\")\n        return result\n    return wrapper\n\n@my_decorator\ndef say_hello():\n    \"\"\"Says hello!\"\"\"\n    print(\"Hello!\")\n\nprint(say_hello.__name__)  # Output: say_hello\nhelp(say_hello)           # Displays the docstring of say_hello</precode>",
      "Real-World Application": "Preserving metadata is crucial when working with introspection tools, debuggers, and documentation generators.  It ensures that you're working with the intended function identity.",
      "Exercises & Challenges": [
        {
          "Question": "Explain why `functools.wraps` is important when using decorators.",
          "Type": "short answer"
        },
        {
          "Question": "Modify a decorator to use `functools.wraps` and demonstrate how it preserves function metadata.",
          "Type": "coding"
        }
      ],
      "Documentation Links": [
        {
          "Title": "functools.wraps - Python Documentation",
          "URL": "https://docs.python.org/3/library/functools.html#functools.wraps"
        }
      ]
    },
    {
      "Title": "Returning Values from Decorated Functions",
      "Learning Level": "Understand",
      "Description": "### Returning Values Correctly\n\nIt's important that the wrapper function returns the return value of the original function. Otherwise, the decorated function might not behave as expected.\n\n### The Correct Approach\n\nIn the wrapper function, capture the result of calling the original function and return that result.\n\n`result = func(*args, **kwargs)`\n`return result`",
      "Code_Example": "<precode>def double_result(func):\n    def wrapper(*args, **kwargs):\n        result = func(*args, **kwargs)\n        return result * 2\n    return wrapper\n\n@double_result\ndef add(x, y):\n    return x + y\n\nprint(add(2, 3)) # Output: 10  (2 + 3) * 2</precode>",
      "Real-World Application": "Ensuring correct return values is fundamental to the correct behavior of any application that uses decorators. Without it, applications will break unexpectedly.",
      "Exercises & Challenges": [
        {
          "Question": "Explain why a wrapper function must return the result of the decorated function.",
          "Type": "short answer"
        },
        {
          "Question": "Write a decorator that caches the return value of a function. Ensure that the cached value is returned correctly when the function is called with the same arguments.",
          "Type": "coding"
        }
      ],
      "Documentation Links": [
        {
          "Title": "Understanding Decorator Return Values",
          "URL": "https://www.geeksforgeeks.org/decorators-with-parameters-in-python/"
        }
      ]
    },
    {
      "Title": "Chaining Decorators",
      "Learning Level": "Understand",
      "Description": "### Applying Multiple Decorators\n\nYou can apply multiple decorators to a single function.  The decorators are applied from top to bottom. The decorator closest to the function definition is applied first, and the outermost decorator is applied last.\n\n```python\n@decorator1\n@decorator2\ndef my_function():\n    pass\n```\n\nThis is equivalent to:\n\n```python\nmy_function = decorator1(decorator2(my_function))\n```",
      "Code_Example": "<precode>def bold(func):\n    def wrapper(*args, **kwargs):\n        return \"<b>\" + func(*args, **kwargs) + \"</b>\"\n    return wrapper\n\ndef italic(func):\n    def wrapper(*args, **kwargs):\n        return \"<i>\" + func(*args, **kwargs) + \"</i>\"\n    return wrapper\n\n@bold\n@italic\ndef get_text():\n    return \"Hello\"\n\nprint(get_text()) # Output: <b><i>Hello</i></b></precode>",
      "Real-World Application": "Useful for applying a series of transformations or validations to a function. For example, you might have one decorator for authentication, another for logging, and another for input validation.",
      "Exercises & Challenges": [
        {
          "Question": "Explain the order in which decorators are applied when chaining multiple decorators.",
          "Type": "short answer"
        },
        {
          "Question": "Write three decorators: `uppercase`, `lowercase`, and `capitalize`. Chain them together and observe the output when applied to a function that returns a string.",
          "Type": "coding"
        }
      ],
      "Documentation Links": [
        {
          "Title": "Chaining Decorators - Stack Overflow",
          "URL": "https://stackoverflow.com/questions/1594412/how-to-chain-decorators"
        }
      ]
    },
    {
      "Title": "Class-Based Decorators",
      "Learning Level": "Understand",
      "Description": "### Decorators as Classes\n\nDecorators can also be implemented as classes. This is particularly useful when you need to maintain state within the decorator.\n\nThe key is to implement the `__call__` method, which makes the class instance callable like a function. This allows the decorator to be used with the `@` syntax.\n\nThe `__init__` method is used to receive any arguments passed to the decorator.",
      "Code_Example": "<precode>class CountCalls:\n    def __init__(self, func):\n        self.func = func\n        self.call_count = 0\n\n    def __call__(self, *args, **kwargs):\n        self.call_count += 1\n        print(f\"Function {self.func.__name__} called {self.call_count} times\")\n        return self.func(*args, **kwargs)\n\n@CountCalls\ndef say_hello():\n    print(\"Hello!\")\n\nsay_hello()\nsay_hello()\n</precode>",
      "Real-World Application": "Class-based decorators are suitable for implementing rate limiting, memoization (caching), and other scenarios where you need to track state across multiple function calls.",
      "Exercises & Challenges": [
        {
          "Question": "Explain how class-based decorators differ from function-based decorators.",
          "Type": "short answer"
        },
        {
          "Question": "Implement a class-based decorator that limits the number of times a function can be called.",
          "Type": "coding"
        }
      ],
      "Documentation Links": [
        {
          "Title": "Class-Based Decorators - Real Python",
          "URL": "https://realpython.com/primer-on-python-decorators/"
        }
      ]
    }
  ]
  