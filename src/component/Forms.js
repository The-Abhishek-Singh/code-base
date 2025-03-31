import React from 'react';

const Form = (props) => {

  return (
    <>
      <div className="form-card1">
        <div className="form-card2">
          <form className="form">
            <h1 className="form-heading text-black text-3xl">{props.text}</h1>
            <div className="form-field">
              <input required placeholder="Name" className="input-field" type="text" />
            </div>
            <div className="form-field">
              <input required placeholder="Email" className="input-field" type="email" />
            </div>

            <div className='grid gap-2 grid-cols-[70px_1fr]' >
              <div className="form-field ">
                <input 
                  required 
                  placeholder="+91" 
                  className="input-field w-20" 
                  type="text"
                  maxLength="5"
                  />
                </div>
                <div className="form-field flex gap-2">
                <input 
                  required 
                  placeholder="Enter Mobile Number" 
                  className="input-field flex-1" 
                  type="tel"
                  maxLength="10"
                  pattern="[0-9]{10}"
                  />
              </div>
            </div>

            <button className="sendMessage-btn">Submit</button>
          </form>
        </div>
      </div>
      <style>{`
        .form {
          display: flex;
          flex-direction: column;
          align-self: center;
          font-family: inherit;
          height: auto;
          gap: 25px;
          padding-inline: 2em;
          padding-bottom: 0.2em;
          background-color: #fff;
          // background-color: #0a192f;
          border-radius: 40px;
          }
          
          .form-heading {
            text-align: center;
            margin: 1em;
            // font-size: 1em;
            background-color: transparent;
            align-self: center;
            }
            
            .form-field {
              display: flex;
              align-items: center;
              justify-content: center;
              gap: 0.2em;
              border-radius: 10px;
              padding: 0.4em;
              border: none;
              outline: none;
              color: white;
              background-color: #fff;
              box-shadow: inset 2px 3px 5px rgb(5, 5, 5);
              }
              
              .input-field {
                background: none;
                border: none;
                outline: none;
          width: 100%;
          color: #000;
          padding-inline: .15rem;
          }
          
          .sendMessage-btn {
            cursor: pointer;
            margin-bottom: 3em;
            padding: 0.8em;
            border-radius: 10px;
            border: none;
            outline: none;
            background-color: transparent;
            color: #CB3939;
            font-weight: bold;
            outline: 1px solid #CB3939;
            transition: all ease-in-out 0.3s;
            }
            
            .sendMessage-btn:hover {
              transition: all ease-in-out 0.3s;
              background-color: #CB3939;
              color: #fff;
              cursor: pointer;
              box-shadow: inset 2px 5px 10px rgb(5, 5, 5);
              }
              
              .form-card1 {
                background-image: linear-gradient(163deg, #CB3939 0%, #CB3939 100%);
                border-radius: 22px;
                transition: all 0.3s;
                }
                
                .form-card1:hover {
                  box-shadow: 0px 0px 30px 1px rgba(255, 255, 255, 0.3);
                  }
                  
                  .form-card2 {
                    border-radius: 0;
                    transition: all 0.2s;
                    }
                    
                    .form-card2:hover {
                      transform: scale(0.98);
                      border-radius: 20px;
                      }`}</style>
                      </>
  );
}


export default Form;
