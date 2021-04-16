from flask import Flask, render_template, redirect

app = Flask(__name__)

@app.route("/")

def home():
    return render_template("index.html")

@app.route("/hotel_map")
def ny():
    return render_template("map.html")

@app.route("/area_performance")
def chi():
    return render_template("area.html")

@app.route("/hotel_performance")
def la():
    return render_template("hotel.html")

@app.route("/resources")
def hou():
    return render_template("resources.html")

@app.route("/contact")
def dtx():
    return render_template("about.html")

if __name__ == "__main__":
    app.run(debug="true")