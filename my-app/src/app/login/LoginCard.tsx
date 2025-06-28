import React from "react";
import EmailInput from "../components/shared/EmailInput";
import PassworInput from "../components/shared/PassworInput";

function LoginCard() {
    return (
        <div className="card bg-base-100 w-96 shadow-sm">
            <div className="card-body">
                <h2 className="card-title">Welcome Back</h2>
                <p>Sign in to access your local community</p>
                <div>
                    <p>Email Address</p>
                    <EmailInput />
                </div>
                <div>
                    <p>Password</p>
                    <PassworInput />
                </div>
                <a>Forot password?</a>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
}

export default LoginCard;
