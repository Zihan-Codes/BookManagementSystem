import React from "react";
import './footer.css';

function Footer() {

    return(
     <footer>
       <div class="developer-info">
        Developed by Mohamed Zihan
       </div>

       <div class="social-links">
        <a href="https://www.linkedin.com/in/mohamed-zihan/" target="_blank">LinkedIn</a>
        <a href="https://stackoverflow.com/users/15449045" target="_blank">StackOverflow</a>
        <a href="https://github.com/Zihan-Codes/" target="_blank">GitHub</a>
        <a href="https://medium.com/@mohamed-zihan" target="_blank">Medium</a>
       </div>

       <div class="resume-link">
        <a href="resume/Mohamed Zihan CV.pdf" target="_blank" class="fab">Please click this button to view my resume</a>
    </div>

       <div class="copyright">
        © Copyright to Zihan - 0776636973
       </div>
     </footer>

    );
}

export default Footer;