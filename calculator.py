import random
import time

# Friendly welcome
print("🔢 Welcome to the Friendly Calculator! 🔢")
print("You can choose an operation: + (add), - (subtract), * (multiply), / (divide)")
print("-" * 50)

# Motivational phrases
phrases = [
    "🎯 You're a math wizard!",
    "🧠 Big brain energy!",
    "✨ Math magic complete!",
    "💥 Boom! Nailed it!",
    "🚀 Quick and correct!"
]

# Calculator logic in a function
def calculate(num1, num2, operation):
    if operation == "+":
        return num1 + num2, "➕"
    elif operation == "-":
        return num1 - num2, "➖"
    elif operation == "*":
        return num1 * num2, "✖️"
    elif operation == "/":
        if num2 == 0:
            print("🚫 Error: You can't divide by zero!")
            return None, None
        return num1 / num2, "➗"
    else:
        print("❌ Oops! That's not a valid operation. Try +, -, *, or /.")
        return None, None

# Main loop
while True:
    try:
        operation = input("🔧 Choose an operation (+, -, *, /): ").strip()
        num1_input = input("👉 Enter the first number: ").strip()
        num2_input = input("👉 Enter the second number: ").strip()

        if not num1_input or not num2_input:
            raise ValueError("Inputs cannot be empty.")

        num1 = float(num1_input)
        num2 = float(num2_input)

        result, emoji = calculate(num1, num2, operation)

        if result is not None:
            print("\n🧮 Calculating...", end="")
            time.sleep(0.5)
            print(f"\r🎉 Result: {num1} {emoji} {num2} = {round(result, 2)}")
            print(random.choice(phrases))

    except ValueError:
        print("⚠️ Please enter valid numbers only!")

    # Ask to continue or not
    again = input("\n🔁 Do you want to calculate again? (y/n): ").strip().lower()
    if again != 'y':
        print("👋 Thanks for using the Friendly Calculator by Sam. Bye!")
        break
