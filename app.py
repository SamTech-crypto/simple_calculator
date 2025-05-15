from flask import Flask, request, render_template_string

app = Flask(__name__)

HTML = '''
<!DOCTYPE html>
<html>
<head><title>Friendly Emoji Calculator 🤖✨</title></head>
<body>
  <h2>🔢 Friendly Emoji Calculator</h2>
  <form method="post">
    <input name="num1" type="number" step="any" placeholder="First number" required>
    <select name="op">
      <option value="+">➕ Add</option>
      <option value="-">➖ Subtract</option>
      <option value="*">✖️ Multiply</option>
      <option value="/">➗ Divide</option>
    </select>
    <input name="num2" type="number" step="any" placeholder="Second number" required>
    <button type="submit">Calculate</button>
  </form>
  {% if result is not none %}
    <h3>🎉 Result: {{ num1 }} {{ emoji }} {{ num2 }} = {{ result }}</h3>
  {% endif %}
</body>
</html>
'''

@app.route('/', methods=['GET', 'POST'])
def calculator():
    result = None
    emoji = ''
    num1 = num2 = ''
    if request.method == 'POST':
        try:
            num1 = float(request.form['num1'])
            num2 = float(request.form['num2'])
            op = request.form['op']
            if op == '+':
                result = num1 + num2
                emoji = '➕'
            elif op == '-':
                result = num1 - num2
                emoji = '➖'
            elif op == '*':
                result = num1 * num2
                emoji = '✖️'
            elif op == '/':
                if num2 == 0:
                    result = "🚫 Cannot divide by zero"
                else:
                    result = round(num1 / num2, 2)
                    emoji = '➗'
        except Exception as e:
            result = f"⚠️ Error: {e}"
    return render_template_string(HTML, result=result, emoji=emoji, num1=num1, num2=num2)

if __name__ == '__main__':
    app.run(debug=True)
