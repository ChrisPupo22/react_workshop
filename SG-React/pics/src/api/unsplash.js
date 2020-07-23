import axios from 'axios'; 

// allows us to create a customized request copy
export default axios.create({
    baseURL:'https://api.unsplash.com/', 
    headers: {
        Authorization:
          "Client-ID 8YmiAcvgpovlQk_QCjIyWw9cfZAuNTHAclqizusY2vY",
      }
}); 