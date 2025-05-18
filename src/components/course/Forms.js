import React from 'react';

const Form = (props) => {
  // const [showToast, setShowToast] = useState(false);

  async function handleSubmit(e) {
        e.preventDefault();
        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify({
                access_key: "c821188b-ce06-4d31-b732-818ea907ac99", // Ma'am's access key 
                // access_key: "6cfa41c1-dc52-4fa2-aa2e-3e853d8a68a6", // My access key 
                name: e.target.name.value,
                email: e.target.email.value,
                countryCode: e.target.countryCode.value,
                number: e.target.number.value,
                message: e.target.message.value,
            }),
        });
        // const result = await response.json();
        // if (result.success) {
        //     console.log(result);
        // }
        //  setShowToast(true);

        // ✅ Wait 3 seconds, then refresh
        setTimeout(() => {
          // setShowToast(false);
          window.location.reload();
        }, 2500);
    }
  return (
    <>
      <div className="form-card1">
        <div className="form-card2">
          <form className="form gap-[10px] sm:gap-[25px]" onSubmit={handleSubmit}>
            <h1 className="form-heading text-black text-2xl sm:text-3xl sm:m-4 m-2">{props.text}</h1>
            <div className="form-field">
              <input required placeholder="Name" className="input-field" type="text" name="name" />
            </div>
            <div className="form-field">
              <input required placeholder="Email" className="input-field" type="email"  name="email" />
            </div>

            <div className='grid gap-2 grid-cols-[70px_1fr]' >
              <div className="form-field ">
                <input 
                  required
                  name='countryCode' 
                  placeholder="+91" 
                  className="input-field w-20" 
                  type="text"
                  maxLength="5"
                  />
                </div>
                <div className="form-field flex gap-2">
                <input 
                  required 
                  name='number'
                  placeholder="Enter Mobile Number" 
                  className="input-field flex-1" 
                  type="tel"
                  maxLength="10"
                  pattern="[0-9]{10}"
                  />
              </div>
            </div>

            {/* Textarea for user query */}
            <div className="form-field">
              <textarea 
                required 
                placeholder="Write your query here..." 
                className="input-field" 
                rows="2" 
                name="message"
              />
            </div>
            <button className="sendMessage-btn" type='submit'>Submit</button>
          </form>
        </div>

        {/* Toast Notification */}
        {/* {showToast && (
          <div className="fixed bottom-5 right-5 bg-green-100 border border-green-400 text-green-800 px-4 py-3 rounded shadow transition-all duration-500">
            <strong className="font-bold">Message Sent! </strong>
            <span className="block sm:inline">We’ve received your query.</span>
          </div>
        )} */}


      </div>
      <style>{`
        .form {
          display: flex;
          flex-direction: column;
          align-self: center;
          font-family: inherit;
          height: 100%;
          padding-inline: 2em;
          padding-bottom: 0.2em;
          background-color: #fff;
          // background-color: #0a192f;
          border-radius: 40px;
          }
          
          .form-heading {
            text-align: center;
            // font-size: 1em;
            background-color: transparent;
            align-self: center;
            }
            
            .form-field {
              display: flex;
              align-items: center;
              justify-content: center;
              gap: 0.2em;
              border: 1px solid #555;
              border-radius: 10px;
              padding: 0.4em;
              outline: none;
              color: white;
              background-color: #fff;
              // box-shadow: inset 2px 3px 5px rgb(5, 5, 5);
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
              // box-shadow: inset 2px 5px 10px rgb(5, 5, 5);
              }
              
              .form-card1 {
                background-image: linear-gradient(163deg, #CB3939 0%, #CB3939 100%);
                border-radius: 40px;
                transition: all 0.3s;
                }
                
                .form-card1:hover {
                  box-shadow: 0px 0px 30px 1px rgba(255, 255, 255, 0.3);
                  }
                  
                  .form-card2 {
                    border-radius: 22px;
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
