import React, { useState, useEffect } from "react";
import flatpickr from "flatpickr";
import { useForm } from "react-hook-form";
import Main from "../components/molecules/Main/Main";
import "./RegisterPage.scss";

const RegisterPage = () => {
    const { register, handleSubmit, errors } = useForm({
        mode: "onChange"
    });
    const onSubmit = data => {
        console.log(data);
    };

    const [dateInputs, setDateInputs] = useState([
        <input
            type="text"
            name={`register_date[0]`}
            placeholder="Select the day, then a time, then click OK"
            ref={register({ required: true })}
            aria-label="Date"
        />,
        <input
            type="text"
            name={`register_date[1]`}
            placeholder="Select the day, then a time, then click OK"
            ref={register({ required: true })}
            aria-label="Date"
        />
    ]);

    const generateInput = nmb => {
        if (dateInputs.length < 8) {
            return (
                <input
                    type="text"
                    name={`register_date[${nmb}]`}
                    placeholder="Select the day, then a time, then click OK"
                    ref={register()}
                    aria-label="Date"
                />
            );
        } else {
            document.getElementById("add-date").setAttribute("disabled", "true");
            return <p>Maximum amount of dates reached</p>;
        }
    };

    return (
        <Main page="register">
            <section>
                <div className="register-text">
                    <h3 className="content-title">Register</h3>
                    <p>Let me know when you are available and I will contact you personally to schedule your next appointment.</p>
                </div>
                <div className="register-form">
                    <form className="register-form__form" onSubmit={handleSubmit(onSubmit)}>
                        <div className="register-form__info">
                            <h4>Personal information</h4>
                            <div className="info-inputs">
                                <div className="info-inputs__single">
                                    <input
                                        type="text"
                                        name="register_name"
                                        placeholder="John Doe"
                                        ref={register({ required: true })}
                                        aria-label="Name"
                                    />
                                    {errors.register_name?.type === "required" && <span className="validation-error">This field is required</span>}
                                </div>
                                <div className="info-inputs__single">
                                    <input type="number" name="register_phone" placeholder="+32" ref={register} aria-label="Phone" />
                                </div>
                                <div className="info-inputs__single">
                                    <input
                                        type="email"
                                        name="register_email"
                                        placeholder="john.doe@gmail.com"
                                        ref={register({
                                            required: true,
                                            pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                                        })}
                                        aria-label="E-mail"
                                    />
                                    {errors.register_email?.type === "pattern" && (
                                        <span className="validation-error">Please enter a valid e-mail address</span>
                                    )}
                                    {errors.register_email?.type === "required" && <span className="validation-error">This field is required</span>}
                                </div>
                            </div>
                        </div>
                        <div className="register-form__dates">
                            <h4>
                                Choose your availabilities <span>(min 2 choices)</span>
                            </h4>
                            <div className="dates-inputs">
                                {dateInputs.map(input => (
                                    <div className="dates-inputs__single">
                                        {input}
                                        {errors.register_date && <span className="validation-error">Please make at least 2 choices</span>}
                                    </div>
                                ))}
                                <button id="add-date" type="button" onClick={() => setDateInputs([...dateInputs, generateInput(dateInputs.length)])}>
                                    +
                                </button>
                            </div>
                            <p>Can&apos;t find anything that suits your needs?</p>
                            <p>
                                <a href="/contact">Contact me</a> and I&apos;ll see what I can do.
                            </p>
                            <button type="submit">SEND</button>
                        </div>
                    </form>
                </div>
                <div className="divider" />
            </section>
        </Main>
    );
};
export default RegisterPage;
