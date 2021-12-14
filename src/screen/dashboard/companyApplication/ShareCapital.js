import React, { useState } from "react";
import Cards from "../../../components/cards/Cards";
import CustomInput from "../../../components/inputs/CustomInput";
import Modal from "../../../components/modals/Modal";
import "./CompanyStyles.css";
import { AiOutlineClose } from "react-icons/ai";

const ShareCapital = () => {
  const [state, setState] = useState({
    showModal: false,
  });

  const toggleModal = () => {
    if (!state.showModal) {
      setState((prevState) => ({ ...prevState, showModal: true }));
    } else {
      setState((prevState) => ({ ...prevState, showModal: false }));
    }
  };

  return (
    <>
      <section className="share-capital-container" style={{ height: "100vh" }}>
        <p>Share Capital</p>
        <form>
          <fieldset style={{ border: "none", margin: "30px 0" }}>
            <legend className="legend">Ordinary Shares</legend>
            <div>
              <div className="input-group">
                <CustomInput
                  type="text"
                  label="Total issued shares*"
                  margin="10px 0"
                  border="1px solid #F0F0F0"
                />
                <div>
                  <label className="label">Price per unit*</label>
                  <div className="prefix-container">
                    <span>KES</span>
                    <CustomInput type="text" border="none" />
                  </div>
                </div>

                <div>
                  <label className="label">Share capital value*</label>
                  <div className="prefix-container">
                    <span>KES</span>
                    <CustomInput type="text" border="none" />
                  </div>
                </div>
              </div>
            </div>
          </fieldset>
        </form>
        <div className="quick-link">
          <p>
            Please <span onClick={toggleModal}>click here</span> for more
            information about Kenya registration requirements
          </p>
        </div>
        {state.showModal && (
          <Modal>
            <Cards background="#fff" padding="20px 15px 50px 15px" borderRadius="5px" width='640px' margin='50px auto' height='801px'>
                
              <div>
                  <div style={{display:'flex', justifyContent:'space-between'}}>
                <h6 className="legend">Kenya registration requirements</h6>
                <AiOutlineClose style={{color:'rgb(255, 133, 0)', fontSize:'25px'}} onClick={toggleModal}/>
                  </div>

                <article className="article-text">
                  <strong>Share Capital:</strong>
                  <p>
                    We recommend that our users implement a share capital of
                    100,000 KShs. divided into 1,000 ordinary shares of 100
                    KShs. each.{" "}
                  </p>
                </article>

                <article className="article-text">
                  <strong>Local Address: </strong>
                  <p>
                    A local address is a requirement for all companies. If you
                    do not have one, we can provide you with a local address for
                    an annual fee of $600. This service will be discontinued if
                    the fee is not renewed at the end of each 1 year period.
                  </p>
                </article>

                <article className="article-text">
                  <strong>Directors and participants:</strong>
                  <p>
                    At least 1 director is required at incorporation. A local
                    participant with a KRA PIN (either a citizen or a
                    non-citizen with a residency permit), acting as a director,
                    a shareholder or the company secretary, is also required.
                    You are required to input the local participant’s KRA PIN in
                    the required field during the application. If your company
                    does not have such a local representative/participant, you
                    can elect to have Norebase act as company Secretary through
                    our partner(s). for an annual fee. This elected actor can be
                    replaced once a resident participant is available.
                  </p>
                </article>
                
                <span className='linkToMore'>For details on how to get a KRA PIN, please click here.</span>

                <article className="article-text">
                  <strong>Company Secretary:</strong>
                  <p>
                    A company secretary is only required if your company has a
                    minimum share capital of 5,000,000 (five million) Kenyan
                    shillings. If you do not have a company secretary, you can
                    elect to have Norebase act as company Secretary through our
                    partner(s) for an annual fee of $500.
                  </p>
                </article>

                <article className="article-text">
                  <strong>Notarization:</strong>
                  <p>
                    Where there is foreign shareholder involvement, notarized
                    copies of incorporation documents and passports of directors
                    (to be notarized by a notary public in the country of
                    origin) are required. If you are unable to notarize the
                    documents yourself, we can provide this service for a fee of
                    $100.
                  </p>
                </article>
              </div>
            </Cards>
          </Modal>
        )}
      </section>
    </>
  );

};

export default ShareCapital;
