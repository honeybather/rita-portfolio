from flask import Flask, render_template, send_from_directory, request, redirect, url_for
 
app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/src/<path:filename>')
def src(filename):
    return send_from_directory('src', filename)

if __name__ == '__main__':
    app.run(debug=True, port=6060)