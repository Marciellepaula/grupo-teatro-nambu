import React from "react";

const GoogleLoginButton = () => {
  const handleGoogleLogin = () => {
    window.location.href = "http://localhost/auth/google/redirect"; 
  };

  return (
    <button
      onClick={handleGoogleLogin}
      className="bg-blue-100 p-3 shadow-sm border rounded-md text-blue-900 hover:bg-blue-200 transition"
    >
      Login with Google
    </button>
  );
};

export default GoogleLoginButton;