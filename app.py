from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def index():
    return render_template("index.html")

@app.route('/nol')
def nol():
    return render_template("nol.html")

@app.route('/nol/usage')
def nol_usage():
    return render_template("nol_usage.html")

@app.route('/nol/prices')
def prices():
    return render_template("prices.html")

@app.route('/metro')
def metro():
    return render_template("metro.html")

@app.route('/metro/usage')
def metro_usage():
    return render_template("metro_usage.html")

@app.route('/metro/lines')
def lines():
    return render_template("lines.html")

@app.route('/FAQs')
def faq():
    return render_template("faq.html")