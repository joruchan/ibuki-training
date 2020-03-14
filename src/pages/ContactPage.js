import React, { useState } from "react";
import Main from "../components/molecules/Main/Main";
import "./ContactPage.scss";
import { useForm } from "react-hook-form";
import { navigate } from "hookrouter";
import ReCAPTCHA from "react-google-recaptcha";

const ContactPage = () => {
    const { register, handleSubmit, errors, setError , triggerValidation, reset } = useForm({
        mode: "onChange",
    });

    const onSubmit = (data, e) => {
        if (captchaRes.length === 0){
            setError("captcha", "notMatch", "Please validate the CAPTCHA");
            setErrorMessage(errors.captcha?.message);
            return false;
        }
        console.log(data);
        fetch("http://localhost:5001/send_message", {
            method: "post",
            body: JSON.stringify(data),
            cors: true,
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            }
        }).then(() => console.log("fetch contact done"));
        e.target.reset();
        navigate("/redirecting");
        setTimeout(() => navigate("/", true), 2600);
        window.scrollTo(0, 0);
    };

    const [errorMessage, setErrorMessage] = useState("");
    const [captchaRes, setCaptchaRes] = useState("");
    const [noErrorName, setNoErrorName] = useState(false);
    const [noErrorEmail, setNoErrorEmail] = useState(false);
    const [noErrorMessage, setNoErrorMessage] = useState(false);

    return (
        <Main page="contact">
            <section>
                <div className="contact-text">
                    <h3 className="content-title">Contact</h3>
                    <p>Don&apos;t hesitate to get in touch should you have any question.</p>
                </div>

                <div className="contact-form">
                    <form className="contact-form__form" onSubmit={handleSubmit(onSubmit)}>
                        <div className="contact-form__info">
                            <h4>About you</h4>
                            <div className="info-inputs">
                                <div className="info-inputs__single">
                                    <input
                                        type="text"
                                        name="contact_name"
                                        placeholder="John Doe"
                                        ref={register({ required: true })}
                                        aria-label="Name"
                                        onChange={e => {
                                            triggerValidation("contact_name");

                                            if (!errors.contact_name) {
                                                setNoErrorName(true);
                                            } else {
                                                setNoErrorName(false);
                                            }
                                        }}
                                    />
                                    {errors.contact_name?.type === "required" && <span className="validation-error">This field is required</span>}
                                    {noErrorName && !errors.contact_name && document.querySelector("input[name=contact_name]").value !== "" && (
                                        <div className="validation-success">
                                            <img src="/images/icons/check.svg" alt="checkmark icon" />
                                        </div>
                                    )}
                                </div>
                                <div className="info-inputs__single">
                                    <input type="number" name="contact_phone" placeholder="+32" ref={register} aria-label="Phone" />
                                </div>
                                <div className="info-inputs__single">
                                    <input
                                        type="email"
                                        name="contact_email"
                                        placeholder="john.doe@gmail.com"
                                        ref={register({
                                            required: true,
                                            pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                                        })}
                                        aria-label="E-mail"
                                        onChange={e => {
                                            triggerValidation("contact_email");

                                            if (!errors.contact_email) {
                                                setNoErrorEmail(true);
                                            } else {
                                                setNoErrorEmail(false);
                                            }
                                        }}
                                    />
                                    {errors.contact_email?.type === "pattern" && (
                                        <span className="validation-error">Please enter a valid e-mail address</span>
                                    )}
                                    {errors.contact_email?.type === "required" && <span className="validation-error">This field is required</span>}
                                    {noErrorEmail && !errors.contact_email && document.querySelector("input[name=contact_email]").value !== "" && (
                                        <div className="validation-success">
                                            <img src="/images/icons/check.svg" alt="checkmark icon" />
                                        </div>
                                    )}
                                </div>
                                <h4>What would you like to know?</h4>
                                <div className="info-inputs__single">
                                    <textarea
                                        name="contact_message"
                                        placeholder="Votre message ici . . ."
                                        ref={register({
                                            required: true
                                        })}
                                        aria-label="Message"
                                        onChange={e => {
                                            triggerValidation("contact_message");

                                            if (!errors.contact_message) {
                                                setNoErrorMessage(true);
                                            } else {
                                                setNoErrorMessage(false);
                                            }
                                        }}
                                    />
                                    {errors.contact_message?.type === "required" && <span className="validation-error">This field is required</span>}
                                    {noErrorMessage &&
                                        !errors.contact_message &&
                                        document.querySelector("textarea[name=contact_message]").value !== "" && (
                                            <div className="validation-success">
                                                <img src="/images/icons/check.svg" alt="checkmark icon" />
                                            </div>
                                        )}
                                </div>
                            </div>
                            <label for="agree" className="terms-agreement"><input type="checkbox" ref={register({ required: true })} name="privacy" id="agree" /><span class="checkmark"></span> <p>I agree that any information filled out in the form above can be stored for personal organization purposes and will be deleted upon an appointment placed. You authorize us to contact you with regards to your future appointment(s) and we will not send any ads or newsletter.</p></label>
                            <ReCAPTCHA sitekey="6Lfoc-AUAAAAALecMs2M6dD05g7KSRDZeubL70we" onChange={setCaptchaRes} size="normal"/>
                            {errors.captcha && <p className="form-error-message">{errorMessage}</p>}
                        </div>

                        <button type="submit" id="submit">
                            SEND
                        </button>
                    </form>
                </div>
                <div className="divider" />
            </section>
        </Main>
    );
};

export default ContactPage;
