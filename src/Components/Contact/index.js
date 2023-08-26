import React from 'react'
import {Drop,Droptitle,Span,Form,Forminput,Inputtext,Inputemail,Inputsub,Textarea,Inputsubmit} from './style.js'
import Footer from './../Footer'
const Contact =() => {
  

  return (
    <React.Fragment>
    <Drop>
            <div class="container">
                <Droptitle><Span>Drop </Span>Me A line</Droptitle>
                <Form action="">
                    <Forminput>
                        <Inputtext type="text" placeholder="Your Name"/>
                        <Inputemail type="email" placeholder="Your Email"/>
                    </Forminput>
                    <Inputsub type="text" placeholder="Your Subject"/>
                    <Textarea cols="30" rows="10" placeholder="Your Message"></Textarea>
                    <Inputsubmit type="submit" value="Send Message"/>
                </Form>
            </div>
        </Drop>
        <Footer />
        </React.Fragment>

 
  )


}

export default Contact;