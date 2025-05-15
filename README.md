# 🔢 Friendly Emoji Calculator 

A fun, beginner-friendly calculator that performs basic arithmetic with a friendly interface and emoji feedback.

## 🚀 Quick Start

### 1. Copy the Code Below

Create a new file called `calculator.py` and paste this code into it:

```python
# Friendly Emoji Calculator 🤖✨

print("🔢 Welcome to the Friendly Calculator! 🔢")
print("You can choose an operation: + (add), - (subtract), * (multiply), / (divide)")
print("-" * 50)

# Get input with error handling
try:
    num1 = float(input("👉 Enter the first number: "))
    num2 = float(input("👉 Enter the second number: "))
    operation = input("🔧 Choose an operation (+, -, *, /): ").strip()

    # Perform calculation
    if operation == "+":
        result = num1 + num2
        emoji = "➕"
    elif operation == "-":
        result = num1 - num2
        emoji = "➖"
    elif operation == "*":
        result = num1 * num2
        emoji = "✖️"
    elif operation == "/":
        if num2 == 0:
            print("🚫 Error: You can't divide by zero!")
            exit()
        result = num1 / num2
        emoji = "➗"
    else:
        print("❌ Oops! That's not a valid operation. Try +, -, *, or /.")
        exit()

    # Display result
    print(f"\n🎉 Result: {num1} {emoji} {num2} = {round(result, 2)}")

except ValueError:
    print("⚠️ Please enter valid numbers only!")

print("💡 Tip: You can run me again to calculate something new!")
