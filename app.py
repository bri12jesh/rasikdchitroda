from flask import Flask, render_template, request, redirect, url_for,flash, get_flashed_messages,send_file,jsonify
from flask_mail import Mail, Message
app = Flask(__name__)
app.secret_key = 'Bri@12'  # Required for flashing

app.config['MAIL_SERVER'] = 'smtp.gmail.com'       
app.config['MAIL_PORT'] = 587        
app.config['MAIL_USE_TLS'] = True
app.config['MAIL_USE_SSL'] = False
app.config['MAIL_USERNAME'] = 'chitrodabrijesh71@gmail.com'
app.config['MAIL_PASSWORD'] = 'kawmrbzybwfsqbtq'  
app.config['MAIL_DEFAULT_SENDER'] = 'chitrodabrijesh71@gmail.com'

mail = Mail(app)


images_data = [
]

for i in range(1,88):
    path={"title": f"img{i}", "path": f"static/images/furniture_images/img{i}.JPG"}
    images_data.append(path)
    

@app.route('/')
def home():
    return render_template('index.html', active_page='index')

@app.route('/api/images')
def get_images():
    return jsonify(images_data)

@app.route('/product')
def product():
    return render_template('product.html', active_page='product')

@app.route('/about')
def about():
    return render_template('about.html', active_page='about')

@app.route('/contact', methods=['GET', 'POST'])
def contact():
    if request.method == 'POST':
        # Get form data
        first_name = request.form.get('fname')
        last_name = request.form.get('lname')
        email = request.form.get('email')
        mobile=request.form.get("mobile")
        message = request.form.get('message')

        subject = f'Website Notification'
        body = f"""
        Name: {first_name} {last_name}
        Email: {email}
        Message:
        {message}
        """

        # Send the email
        msg = Message(subject, recipients=['krishrchitroda1@gmail.com'])  # Your email again
        msg.body = body
        msg.html = f"""
    <h2>New Contact Form Submission</h2>
    <p><strong>Name:</strong> {first_name} {last_name}</p>
    <p><strong>Email:</strong> {email}</p>
    <p><strong>Phone:</strong>{mobile}</p>
    <p><strong>Message:</strong><br>{message}</p>
    """
        mail.send(msg)

        # You can now store, email, or process this data
    
        flash('Message sent successfully!')

        


    return render_template('contact.html', active_page='contact')

@app.route("/catalogue",methods=['POST'])
def catalogue():
    if request.method=="POST":
        mobile=request.form.get("phone")
        email=request.form.get("email")
        subject = f'Website Notification'
        body = f"""
        Mobile:{mobile}
        Email: {email}
        Downloaded Catalogoue!
        """

        # Send the email
        msg = Message(subject, recipients=['krishrchitroda1@gmail.com'])  # Your email again
        msg.body = body
        msg.html = f"""
        <h2>Downloaded Catalogoue</h2>
        <p><strong>Email:</strong> {email}</p>
        <p><strong>Phone:</strong>{mobile}</p>

        """
        mail.send(msg)



        return send_file(
        "static/files/catalogue.pdf",  # Your file path
        as_attachment=True,
        download_name="catalogue.pdf"
    )



if __name__ == '__main__':
    app.run(debug=True)
