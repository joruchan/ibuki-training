import React, { useState, useEffect } from "react";
import flatpickr from "flatpickr";
import { useForm } from "react-hook-form";
import Main from "../components/molecules/Main/Main";
import "./RegisterPage.scss";


const RegisterPage = () => {
    const onSubmit = data => console.log(data);
    const { register, handleSubmit, errors, watch } = useForm();

    const watchDate = watch("register_date[1]");
    const watchDate2 = watch("register_date[2]");
    const watchDate3 = watch("register_date[3]");

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
                            <input type="text" name="register_name" placeholder="John Doe" ref={register({ required: true })} aria-label="Name" />
                            {errors.register_name?.type === "required" && <span>This field is required</span>}
                            <input type="number" name="register_phone" placeholder="+32" ref={register} aria-label="Phone" />
                            <input
                                type="email"
                                name="register_email"
                                placeholder="john.doe@gmail.com"
                                ref={register({
                                    required: true,
                                    pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                })}
                                aria-label="E-mail"
                            />
                            {errors.register_email?.type === "pattern" && <span>Please enter a valid e-mail address</span>}
                            {errors.register_email?.type === "required" && <span>This field is required</span>}
                            
                        </div>
                        <div className="register-form__dates">
                            <h4>
                                Choose your availabilities <span>(min 2 choices)</span>
                            </h4>
                            <div className="dates-input">
                                <input
                                    type="text"
                                    name="register_date[0]"
                                    placeholder="Select the day, then a time, then click OK"
                                    ref={register({ required: true })}
                                    aria-label="Date"
                                />
                                {errors.register_date && <span>This field is required</span>}
                                <input
                                    type="text"
                                    name="register_date[1]"
                                    placeholder="Select the day, then a time, then click OK"
                                    ref={register({ required: true })}
                                    aria-label="Date"
                                />
                                {errors.register_date && <span>This field is required</span>}
                               
                                {watchDate && <input
                                    type="text"
                                    name={`register_date[2]`}
                                    placeholder="Select the day, then a time, then click OK"
                                    ref={register()}
                                    aria-label="Date"
                                />
                                }
                                {watchDate2 && <input
                                    type="text"
                                    name={`register_date[3]`}
                                    placeholder="Select the day, then a time, then click OK"
                                    ref={register()}
                                    aria-label="Date"
                                />
                                }
                                {watchDate3 && <input
                                    type="text"
                                    name={`register_date[4]`}
                                    placeholder="Select the day, then a time, then click OK"
                                    ref={register()}
                                    aria-label="Date"
                                />
                                }
                            </div>
                            <p>Can&apos;t find anything that suits your needs?</p>
                            <p>
                                <a href="/contact">Contact me</a> and I&apos;ll see what I can do.
                            </p>
                        </div>
                        <button type="submit">SEND</button>
                    </form>
                </div>
            </section>
        </Main>
    );
};
export default RegisterPage;
