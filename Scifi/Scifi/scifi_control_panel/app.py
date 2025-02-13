from flask import Flask, render_template

app = Flask(__name__)

# Simulated data for the spaceship systems
spaceship_data = {
    "navigation": {
        "current_location": "Alpha Centauri",
        "destination": "Proxima Centauri b",
        "fuel_level": 87,
        "warp_drive_status": "Active"
    },
    "life_support": {
        "oxygen_level": 95,
        "temperature": 22,
        "gravity": "1.0g"
    },
    "communication": {
        "last_message": "Welcome aboard, Commander.",
        "incoming_messages": [
            "Message from Earth: Supplies en route.",
            "Alert: Meteor shower detected."
        ]
    }
}

@app.route('/')
def dashboard():
    return render_template('dashboard.html', data=spaceship_data)

@app.route('/navigation')
def navigation():
    return render_template('navigation.html', data=spaceship_data["navigation"])

@app.route('/life_support')
def life_support():
    return render_template('life_support.html', data=spaceship_data["life_support"])

@app.route('/communication')
def communication():
    return render_template('communication.html', data=spaceship_data["communication"])

if __name__ == '__main__':
    app.run(debug=True)