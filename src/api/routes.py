"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User
from api.utils import generate_sitemap, APIException
from flask_jwt_extended import JWTManager, jwt_required, create_access_token, get_jwt_identity
from flask_bcrypt import Bcrypt

api = Blueprint('api', __name__)
app = Flask(__name__)
app.config["SECRET_KEY"] = "secret-key"
app.config["JWT_SECRET_KEY"] = "super-secret"


jwt = JWTManager(app)
bcrypt= Bcrypt(app)


@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }

    return jsonify(response_body), 200

@api.route('/sign-up', methods=['POST', 'GET'])
def sign_up():
    if request.method == 'POST':
        email = request.json.get("email")
        password = request.json.get("password")
        is_active = request.json.get("active")
        password_hash=bcrypt.generate_password_hash(password)
    
        user=User()
        user.email=email
        user.is_active=is_active
        user.password=password_hash
    
        db.session.add(user)
        db.session.commit()
            
        response_body = {
            "message": "Usuario creado con exito"
        }

        return jsonify(response_body), 200

    if request.method == 'GET':
    
        response_body = {
            "message": "soy sign-up"
        }
        
        return jsonify(response_body), 200


@api.route('/sign-in', methods=['GET'])
def sign_in():

    response_body = {
        "message": "soy sign-in"
    }

    return jsonify(response_body), 200

@api.route('/protected', methods=['GET'])
def protected_page():

    response_body = {
        "message": "top secret"
    }

    return jsonify(response_body), 200